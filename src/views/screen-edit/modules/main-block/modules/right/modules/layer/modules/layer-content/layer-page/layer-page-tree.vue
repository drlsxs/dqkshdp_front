<script lang="ts" setup>
import { h } from 'vue';
import type { TreeOption } from 'naive-ui';
import { NIcon, useMessage } from 'naive-ui';
import { Folder, FolderOpenOutline } from '@vicons/ionicons5';
import ContextMenu from '@imengyu/vue3-context-menu';
import { useScreenStore } from '@/store/modules/screen';

const $D = useScreenStore();

const message = useMessage();
const updatePrefixWithExpaned = (
  _keys: Array<string | number>,
  _option: Array<TreeOption | null>,
  meta: {
    node: TreeOption | null;
    action: 'expand' | 'collapse' | 'filter';
  }
) => {
  if (!meta.node) return;
  // eslint-disable-next-line default-case
  switch (meta.action) {
    case 'expand':
      meta.node.prefix = () =>
        h(NIcon, null, {
          default: () => h(FolderOpenOutline)
        });
      break;
    case 'collapse':
      meta.node.prefix = () =>
        h(NIcon, null, {
          default: () => h(Folder)
        });
      break;
  }
};
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    onClick() {
      if (!option.children && !option.disabled) {
        message.info(`[Click] ${option.label}`);
        $D.getClickPageScreen(option.key);
      }
    }
  };
};

const data = $D.pageDoor;
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
  <NTree
    block-line
    block-node
    expand-on-click
    :scrollbar-props="{ xScrollable: true }"
    :data="data"
    :node-props="nodeProps"
    :on-update:expanded-keys="updatePrefixWithExpaned"
    @contextmenu="onContextMenu"
  />
</template>
