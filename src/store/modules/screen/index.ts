import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { SetupStoreId } from '@/enum';

export const useScreenStore = defineStore(SetupStoreId.Screen, () => {
  const screenDoor: DScreen.CompObj = reactive({
    name: '根目录',
    key: 'root',
    type: 'group',
    children: [
      {
        name: '页面 1',
        key: 'page',
        type: 'group',
        children: [],
        isContainer: true
      }
    ],
    isContainer: true
  });
  return {
    screenDoor
  };
});
