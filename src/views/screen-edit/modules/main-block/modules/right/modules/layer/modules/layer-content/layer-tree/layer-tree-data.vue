<script lang="ts" setup>
import ContextMenu from '@imengyu/vue3-context-menu';
import { h } from 'vue';
import type { TreeOption } from 'naive-ui';
import { ChevronForward } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { useScreenStore } from '@/store/modules/screen';
const $D = useScreenStore();
// todo ysl 自动打开选中组件的图层节点位置
const nodeProps = ({ option: nodeData }: { option: DScreen.CompObj | TreeOption }) => {
  return {
    onClick() {
      nodeData._isClick = true;
      $D.resetComp($D.curComp);
      $D.setCurComp(nodeData as DScreen.CompObj);
      $D.updateLockComp();
    }
  };
};
const renderSwitcherIcon = ({ option }: { option: DScreen.CompObj }) =>
  option.children && option.children?.length ? h(NIcon, null, { default: () => h(ChevronForward) }) : '';

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
    :selected-keys="[$D.curCompId]"
    expand-on-click
    :data="data"
    :render-switcher-icon="renderSwitcherIcon"
    @contextmenu="onContextMenu"
  />
</template>
