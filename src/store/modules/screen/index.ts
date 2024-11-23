import { defineStore } from 'pinia';
import { h, reactive } from 'vue';
import type { TreeOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { FileTrayFullOutline } from '@vicons/ionicons5';
import { SetupStoreId } from '@/enum';

export const useScreenStore = defineStore(SetupStoreId.Screen, () => {
  const screenDoor: DScreen.CompObj[] = reactive([
    {
      id: '',
      name: '页面 1',
      key: 'index',
      type: 'group',
      children: [],
      isContainer: true,
      style: {}
    }
  ]);
  let curPage: DScreen.CompObj = screenDoor[0] as DScreen.CompObj;
  const pageDoor: TreeOption[] = reactive([
    {
      key: 'index',
      label: '页面 1  ',
      prefix: () =>
        h(NIcon, null, {
          default: () => h(FileTrayFullOutline)
        })
    }
  ]);
  let targetComp: DScreen.CompObj = {} as DScreen.CompObj;
  let clickComp: DScreen.CompObj = {} as DScreen.CompObj;

  /**
   * 找出当前页面对应的屏幕
   *
   * @param key
   */
  function getClickPageScreen(key: TreeOption['key']) {
    const findScreen = screenDoor.find(item => item.key === key) as DScreen.CompObj;
    curPage = findScreen;
    return curPage;
  }

  /** 更新鼠标移入的组件 */
  function updateHoverComp(comp: DScreen.CompObj) {
    targetComp._isHover = false;
    comp._isHover = true;
    targetComp = comp;
  }

  /** 更新拖拽移入的组件 */
  function updateDragOverComp(comp: DScreen.CompObj) {
    if (!comp.isContainer) return;
    targetComp._isDragOver = false;
    comp._isDragOver = true;
    targetComp = comp;
  }

  /** 更新点击的组件 */
  function updateClickComp(comp: DScreen.CompObj) {
    clickComp._isClick = false;
    clickComp._isHover = false;
    comp._isHover = false;
    comp._isClick = true;
    clickComp = comp;
  }

  /**
   * 获取自身组件
   *
   * @param event
   * @param rootComp
   */
  function getSelfComp(event: any, rootComp: DScreen.CompObj) {
    let selfComp: DScreen.CompObj = event.target.__vueParentComponent.props.comp;
    if (!selfComp) {
      selfComp = rootComp;
    }
    return selfComp;
  }

  /**
   * 获取落下组件，如果是容器就是自身，不是找他的上级容器
   *
   * @param event
   * @param rootComp
   */
  function getContainerComp(event: any, rootComp: DScreen.CompObj) {
    let comp: DScreen.CompObj = getSelfComp(event, rootComp);
    let compIndex = 0;
    // 如果落下的组件不是容器组件
    if (!comp.isContainer) {
      // 找到这个组件的上一级容器组件
      const { parentComp, index } = getParentComp(rootComp, comp);
      comp = parentComp;
      compIndex = index;
    } else {
      compIndex = comp.children?.length as number | 0;
    }
    return {
      comp,
      compIndex
    };
  }

  /**
   * 获取组件的上一级组件
   *
   * @param rootComp
   * @param comp
   */
  function getParentComp(rootComp: DScreen.CompObj, comp: DScreen.CompObj) {
    let parentComp: DScreen.CompObj = {} as DScreen.CompObj;
    let index = 0;
    function getComp(root: DScreen.CompObj, target: DScreen.CompObj) {
      if (root.children) {
        root.children.forEach((item, idx) => {
          if (item.id === target.id) {
            parentComp = root;
            index = idx;
          } else {
            getComp(item, comp);
          }
        });
      }
    }
    getComp(rootComp, comp);
    return { parentComp, index };
  }

  /**
   * 组件拖拽到编辑器落下事件
   *
   * @param _
   * @param event
   */
  function dropEditor(_: any, event: DragEvent) {
    const { comp, compIndex } = getContainerComp(event, curPage);
    const val = event.dataTransfer?.getData('comp') as string;
    const dropComp: DScreen.CompObj = JSON.parse(val);
    // 如果是内部拖拽
    if (dropComp._isInnerDrag) {
      // 落下的不是自身
      if (comp.id !== dropComp.id) {
        // 最后删除掉自身
        const { parentComp, index } = getParentComp(curPage, dropComp);
        parentComp.children?.splice(index, 1);
      }
    } else {
      // 外部拖拽赋值id,内部id不变
      dropComp.id = `${new Date().getTime()}`;
    }
    if (!comp.children) comp.children = [];
    // 如果是自身，必是内部拖拽，不往自身继续添加子元素
    if (comp.id !== dropComp.id) {
      comp.children.splice(compIndex, 0, dropComp);
    }
    updateDragOverComp(curPage);
    updateHoverComp(comp);
  }

  return {
    screenDoor,
    curPage,
    pageDoor,
    getClickPageScreen,
    updateHoverComp,
    updateDragOverComp,
    updateClickComp,
    getSelfComp,
    getContainerComp,
    getParentComp,
    dropEditor
  };
});
