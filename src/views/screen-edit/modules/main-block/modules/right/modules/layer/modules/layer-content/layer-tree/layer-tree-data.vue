<script lang="ts" setup>
import type { TreeOption } from 'naive-ui';
import { useMessage } from 'naive-ui';
import ContextMenu from '@imengyu/vue3-context-menu';
import { useScreenStore } from '@/store/modules/screen';

const screenStore = useScreenStore();
const message = useMessage();
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    onClick() {
      if (!option.children && !option.disabled) {
        message.info(`[Click] ${option.label}`);
      }
    }
  };
};

const data = screenStore.curScreen.children;
const onContextMenu = (e: MouseEvent) => {
  // prevent the browser's default menu
  e.preventDefault();
  // show your menu
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    items: [
      {
        label: 'A menu item',
        onClick: () => {}
      },
      {
        label: 'A submenu',
        children: [{ label: 'Item1' }, { label: 'Item2' }, { label: 'Item3' }]
      }
    ]
  });
};
</script>

<template>
  <NTree label-field="name" key-field="id" block-line expand-on-click :data="data" @contextmenu="onContextMenu" />
</template>
