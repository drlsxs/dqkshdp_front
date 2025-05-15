import { defineStore } from 'pinia';
import type { Component, VNode } from 'vue';
import { h, ref } from 'vue';
import type { TreeOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { FileTrayFullOutline } from '@vicons/ionicons5';
import { SetupStoreId } from '@/enum';
import { compCommonStyle } from '@/views/screen-edit/global/config/style';
import buildInComp from '@/store/modules/screen/comps/buiidin';
import { getPropsData } from '@/views/screen-edit/global/config/comp-property';

export const useScreenStore = defineStore(SetupStoreId.Screen, () => {
  const screenDoor = ref<DScreen.CompObj[]>([
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
  const curPage = ref<DScreen.CompObj>(screenDoor.value[0]);
  const pageDoor = ref<TreeOption[]>([
    {
      key: 'index',
      label: '页面 1  ',
      prefix: () =>
        h(NIcon, null, {
          default: () => h(FileTrayFullOutline)
        })
    }
  ]);
  const overComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  const curComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  const mDropComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  const mFallComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  const modalUI = {} as Record<string, any>;
  const overCompIdx = 0;
  const mCompIndex = ref(0);

  /**
   * 找出当前页面对应的屏幕
   *
   * @param key
   */
  function getClickPageScreen(key: TreeOption['key']) {
    const findScreen = screenDoor.value.find(item => item.key === key) as DScreen.CompObj;
    curPage.value = findScreen;
    return curPage;
  }

  /** 更新鼠标移入的组件 */
  function updateHoverComp(comp: DScreen.CompObj) {
    curComp.value._isHover = false;
    comp._isHover = true;
    if (comp.type !== 'group') {
      curComp.value = comp;
    }
  }

  /** 更新拖拽移入的组件 */
  function updateDragOverComp(comp: DScreen.CompObj) {
    curComp.value._isHover = false;
    overComp.value._isDragOver = false;
    comp._isDragOver = true;
    if (comp.type !== 'group') {
      curComp.value = comp;
      overComp.value = comp;
    }
  }

  function selSlotKey(slotKey: string) {
    overComp.value._isDragOver = false;
    mDropComp.value.slotKey = slotKey;
    dropEditor(null, null, true);
  }

  function showDragOverSlotOption(event: any, fallComp: DScreen.CompObj, rootComp: DScreen.CompObj) {
    if (fallComp.type === 'group') return;
    // 给fallComp插入dragOverSlotOption
    if (!rootComp.children.find(item => item.key === 'DragOverSlotOption')) {
      rootComp.children?.push({
        id: 'slotOption',
        name: '插槽',
        key: 'DragOverSlotOption',
        type: 'buildIn',
        children: [],
        isContainer: false,
        style: {
          height: `${fallComp.domInfo?.height}px`,
          width: `${fallComp.domInfo?.width}px`,
          top: `${fallComp.domInfo?.top - 53}px`,
          left: `${fallComp.domInfo?.left - 384}px`
        },
        props: {
          comp: fallComp
        }
      });
    }
  }

  /** 更新点击的组件 */
  function getClickComp(comp: DScreen.CompObj) {
    // 将上一个取消点击
    if (curComp.value._isClick) curComp.value._isClick = false;
    curComp.value = comp;
    // 将现在设置为点击
    curComp.value._isClick = true;
    window.$emitter?.emit('curComp', comp);
  }

  function resetSlotKey(comp: DScreen.CompObj) {
    comp.slots &&
      comp.slots.forEach((item: any) => {
        item.type = '';
      });
  }

  function setSlotKey(slotKey: string, comp: DScreen.CompObj) {
    comp.slots &&
      comp.slots.forEach((item: any) => {
        if (item.key === slotKey) {
          item.type = slotKey;
          comp.slotKey = slotKey;
        }
      });
  }

  /**
   * 获取落下组件，如果是容器就是自身，不是找他的上级容器
   *
   * @param event
   * @param rootComp
   */
  function getFallContainerComp(event: any, rootComp: DScreen.CompObj) {
    let fallComp: DScreen.CompObj | null = getSelfComp(event, rootComp);
    let compIndex = 0;
    // // 如果落下的组件不是容器组件
    if (!fallComp.isContainer) {
      // 找到这个组件的上一级容器组件
      const { parentComp, index } = getParentComp(rootComp, fallComp);
      fallComp = parentComp;
      compIndex = index;
    } else {
      compIndex = fallComp.children?.length as number | 0;
    }
    // 已经存在的元素并且不是页面
    if (fallComp.id && fallComp.type !== 'group') {
      const el = document.querySelector(`[comp-id="${fallComp.id}"]`);
      const { width, height, top, left } = el.getBoundingClientRect();
      fallComp.domInfo = { el, width, height, top, left };
    }
    return { fallComp, compIndex };
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

  function getSelfComp(event: any, rootComp: DScreen.CompObj) {
    const compEl = event.target.closest('.comp-item');
    const compId = compEl ? compEl.getAttribute('comp-id') : null;
    // 如果comp
    if (!compEl && !compId) {
      return rootComp;
    }
    let targetComp: DScreen.CompObj = {} as DScreen.CompObj;

    function getComp(root: DScreen.CompObj, compIds: string | number) {
      if (root.children) {
        root.children.forEach(item => {
          if (item.id === compIds) {
            targetComp = item;
          } else {
            getComp(item, compIds);
          }
        });
      }
    }

    getComp(rootComp, compId);
    const el = document.querySelector(`[comp-id="${compId}"]`);
    const { width, height, top, left } = el.getBoundingClientRect();
    targetComp.domInfo = {
      el,
      width,
      height,
      top,
      left
    };
    return targetComp;
  }

  /**
   * 组件拖拽到编辑器落下事件
   *
   * @param _
   * @param event
   * @param selSlot
   */
  function dropEditor(_: any, event: DragEvent | TouchEvent | any, selSlot?: boolean) {
    let dropComp: DScreen.CompObj = {} as DScreen.CompObj;
    let fallComp: DScreen.CompObj = {} as DScreen.CompObj;
    let compIndex: number = 0;
    if (event instanceof DragEvent) {
      const val = event.dataTransfer?.getData('comp') as string;
      dropComp = JSON.parse(val);
      ({ fallComp, compIndex } = getFallContainerComp(event, curPage.value));
    } else {
      dropComp = mDropComp.value;
      fallComp = mFallComp.value;
      compIndex = mCompIndex.value;
    }
    // 判断落下的组件需要选择插槽，只有默认插槽自动选择默认插槽，其他插槽手动选择插槽后在触发落入编辑器事件
    if (fallComp.type === 'group') {
      dropComp.slotKey = 'default';
    } else if (!selSlot) {
      const slotLen = fallComp?.slots.length;
      if (slotLen > 1) {
        setDropComp(dropComp, fallComp, compIndex);
        return;
      }
      dropComp.slotKey = fallComp?.slots[0]?.key;
      // 取消掉拖入组件的显示
      overComp.value._isDragOver = false;
    }
    // 如果是内部拖拽
    if (dropComp._isInnerDrag) {
      // 落下的不是自身
      if (fallComp.id !== dropComp.id) {
        // 最后删除掉自身
        const { parentComp, index } = getParentComp(curPage.value, dropComp);
        parentComp.children?.splice(index, 1);
      }
    }
    if (!fallComp.children) {
      fallComp.children = [];
    }
    // 如果是自身，必是内部拖拽，不往自身继续添加子元素
    function setChildren(chilComp: DScreen.CompObj, parentComp: DScreen.CompObj) {
      // 外部拖拽赋值id,内部id不变
      chilComp.id = `${new Date().getTime()}`;
      const len = Object.keys(chilComp.style).length;
      // 还没有样式。克隆一份基础样式给组件
      const initStyle = JSON.parse(JSON.stringify(compCommonStyle));
      if (!len) {
        chilComp.style = initStyle;
      } else {
        chilComp.style = Object.assign(initStyle, chilComp.style);
      }
      // 还没有属性，设置属性配置
      if (!chilComp.config) {
        chilComp.config = [];
      }
      if (!chilComp.props) {
        chilComp.props = {};
      }
      chilComp.props = Object.assign(chilComp.props, getPropsData(chilComp.config));
      // 设置默认插槽
      if (!chilComp.slots) {
        if (chilComp.isContainer) {
          chilComp.slots = [{ name: '默认', key: 'default', type: '' }];
        } else {
          chilComp.slots = [];
        }
      }
      // 自身被插入位置
      if (!chilComp.slotKey) {
        chilComp.slotKey = 'default';
      }
      // 如果是容器，没有子元素，给子元素赋空
      if (chilComp.isContainer && !chilComp.children) {
        chilComp.children = [];
      }
      // 如果需要动态修改
      if (chilComp.dynamic) {
        const childLen = parentComp.children?.length as number | 0;
        const xh = childLen + 1;
        for (const propsKey in chilComp.props) {
          chilComp.props[propsKey] = chilComp.props[propsKey] + xh;
        }
        chilComp.config.forEach((item: Record<string, any>) => {
          item.value += xh;
        });
      }
      if (chilComp.children && chilComp.children.length > 0) {
        chilComp.children.forEach((item: DScreen.CompObj) => {
          setChildren(item, chilComp);
        });
      }
    }

    if (!dropComp.id && !dropComp._isInnerDrag) {
      setChildren(dropComp, fallComp);
    }

    // 获取插槽
    fallComp.children.splice(compIndex, 0, dropComp);
    window.$emitter?.emit('dropComp', dropComp);
    updateHoverComp(fallComp);
    resetComp(curComp.value);
  }

  /** 更新选中组件的数据 */
  function updateCurComp(comp: Record<string, any>) {
    Object.assign(curComp.value, comp);
  }

  function setCurComp(comp: DScreen.CompObj) {
    curComp.value = comp;
  }

  function setDropComp(comp: DScreen.CompObj, fallComp: DScreen.CompObj, compIndex: number) {
    mDropComp.value = comp;
    mFallComp.value = fallComp;
    mCompIndex.value = compIndex;
  }

  function resetComp(comp: DScreen.CompObj) {
    comp._isClick = false;
    comp._isHover = false;
  }

  function resolveNaiveUI() {
    import('naive-ui').then(modal => {
      modalUI.naive = modal;
    });
  }

  function getCompVNode(comp: DScreen.CompObj) {
    let back: Component | VNode | null;
    const props = {
      class: [
        'comp-item',
        comp.class,
        {
          'is-container': comp.isContainer,
          'has-children': comp.children && comp.children.length,
          'is-drag-over': comp._isDragOver,
          'is-hover': comp._isHover,
          'is-click': comp._isClick
        }
      ],
      comp,
      draggable: true,
      'comp-id': comp.id,
      style: comp.style,
      ...comp.props
    };
    const children: Record<string, () => VNode[] | string[]> = {};
    // 如果子节点是单纯文字
    const { content } = comp.props;
    if (content) {
      children.default = () => [content];
    }
    // 如果子节点是组件
    if (comp.children && comp.children.length > 0) {
      // 对子组件的slotKey进行分组
      const group: Record<string, VNode[]> = {};
      comp.children.forEach((item: DScreen.CompObj) => {
        if (!group[item.slotKey]) {
          group[item.slotKey] = [];
        }
        group[item.slotKey].push(getCompVNode(item));
      });
      for (const groupKey in group) {
        children[groupKey] = () => group[groupKey];
      }
    }
    if (comp.type === 'buildIn') {
      back = h(buildInComp[comp.key], props, children);
    } else if (comp.type === 'native') {
      back = h(comp.key, props, children);
    } else if (comp.type === 'external') {
      back = h(modalUI.naive[comp.key], props, children);
    } else {
      console.warn('Invalid component type:', comp.type);
      back = null; // or assign a default component
    }
    if (!back) {
      throw new Error(`Component not found for the given key: ${comp.key}`);
    }
    return back;
  }

  return {
    screenDoor,
    curPage,
    curComp,
    overComp,
    pageDoor,
    mDropComp,
    getClickPageScreen,
    updateHoverComp,
    updateDragOverComp,
    selSlotKey,
    showDragOverSlotOption,
    getClickComp,
    getFallContainerComp,
    getSelfComp,
    getParentComp,
    dropEditor,
    updateCurComp,
    resetComp,
    setCurComp,
    getCompVNode,
    setDropComp,
    resolveNaiveUI,
    modalUI
  };
});
