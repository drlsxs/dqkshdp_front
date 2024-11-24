<script lang="ts" setup>
import ContextMenu from '@imengyu/vue3-context-menu';
import type { TreeOption } from 'naive-ui';
import { useScreenStore } from '@/store/modules/screen';

const $D = useScreenStore();

const nodeProps = ({ option: nodeData }: { option: DScreen.CompObj | TreeOption }) => {
  return {
    onClick() {
      nodeData._isClick = true;
      $D.resetComp($D.curComp);
      $D.setCurComp(nodeData as DScreen.CompObj);
    }
  };
};

const data = $D.curPage.children;
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
    label-field="name"
    :node-props="nodeProps"
    key-field="id"
    block-line
    :selected-keys="[$D.curComp.id]"
    expand-on-click
    :data="data"
    @contextmenu="onContextMenu"
  />
</template>
