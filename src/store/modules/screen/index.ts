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
      isContainer: true
    },
    {
      id: '',
      name: '页面 2',
      key: 'index2',
      type: 'group',
      children: [],
      isContainer: true
    }
  ]);
  let curScreen: DScreen.CompObj | undefined = screenDoor[0];
  const pageDoor: TreeOption[] = reactive([
    {
      key: 'index',
      label: '页面 1  ',
      prefix: () =>
        h(NIcon, null, {
          default: () => h(FileTrayFullOutline)
        })
    },
    {
      key: 'index2',
      label: '页面 2',
      prefix: () =>
        h(NIcon, null, {
          default: () => h(FileTrayFullOutline)
        })
    }
  ]);
  let hoverComp: DScreen.CompObj = reactive({
    id: '',
    name: '',
    key: 'comp',
    type: 'comp',
    children: [],
    isContainer: true,
    _isHover: false,
    _isDragOver: false
  });

  /**
   * 找出当前页面对应的屏幕
   *
   * @param key
   */
  function getClickPageScreen(key: TreeOption['key']) {
    const findScreen = screenDoor.find(item => item.key === key);
    curScreen = findScreen;
    return curScreen;
  }

  /** 更新鼠标移入的组件 */
  function updateHoverComp(comp: DScreen.CompObj) {
    hoverComp._isHover = false;
    comp._isHover = true;
    hoverComp = comp;
  }

  /** 更新拖拽移入的组件 */
  function updateDragOverComp(comp: DScreen.CompObj) {
    if (!comp.isContainer) return;
    hoverComp._isDragOver = false;
    comp._isDragOver = true;
    hoverComp = comp;
  }

  return {
    screenDoor,
    curScreen,
    pageDoor,
    getClickPageScreen,
    updateHoverComp,
    updateDragOverComp
  };
});
