import { defineStore } from 'pinia';
import { h, reactive } from 'vue';
import type { TreeOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { FileTrayFullOutline } from '@vicons/ionicons5';
import { SetupStoreId } from '@/enum';

export const useScreenStore = defineStore(SetupStoreId.Screen, () => {
  const screenDoor: DScreen.CompObj[] = reactive([
    {
      name: '页面 1',
      key: 'index',
      type: 'group',
      children: [],
      isContainer: true
    }
  ]);
  let curScreen: DScreen.CompObj | undefined = screenDoor[0];
  const pageDoor: TreeOption[] = reactive([
    {
      key: 'index',
      label: '页面 1',
      prefix: () =>
        h(NIcon, null, {
          default: () => h(FileTrayFullOutline)
        })
    }
  ]);

  /**
   * 找出当前页面对应的屏幕
   *
   * @param key
   */
  function getClickPageScreen(key: TreeOption['key']) {
    curScreen = screenDoor.find(item => item.key === key);
    return curScreen;
  }
  return {
    screenDoor,
    curScreen,
    pageDoor,
    getClickPageScreen
  };
});
