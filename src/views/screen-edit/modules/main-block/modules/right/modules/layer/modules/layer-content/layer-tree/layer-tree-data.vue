<script lang="ts" setup>
import type { TreeOption } from 'naive-ui';
import { NIcon, useMessage } from 'naive-ui';
import { h } from 'vue';
import ContextMenu from '@imengyu/vue3-context-menu';
import { CaretForward } from '@vicons/ionicons5';
import { useScreenStore } from '@/store/modules/screen';

const screenStore = useScreenStore();
const message = useMessage();
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    onClick() {
      if (!option.children && !option.disabled) {
        // message.info(`[Click] ${option.label}`);
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

function renderSwitchIcon({ option }: { option: TreeOption }) {
  if (option.children?.length) {
    return h(NIcon, null, { default: () => h(CaretForward) });
  }
}
</script>

<template>
  <NTree
    label-field="name"
    key-field="id"
    block-line
    expand-on-click
    :data="data"
    :node-props="nodeProps"
    :render-switcher-icon="renderSwitchIcon"
    @contextmenu="onContextMenu"
  />
</template>
