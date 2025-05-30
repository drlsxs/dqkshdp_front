<script setup lang="ts">
import { computed, ref } from 'vue';
import { useEventListener } from '@vueuse/core';
import $D from '@/views/screen-edit/global';

interface Props {
  // 组件对象
  comp: DScreen.CompObj;
}

const oneComp = ref();

defineProps<Props>();

// 内部拖拽
useEventListener(oneComp, 'dragstart', event => {
  event.stopPropagation();
  // fixme 这里拖到如果是在拖容器内的子组件，当前组件是容器，不是拖拽的子组件
  // curComp.value._isInnerDrag = true;
  // $D.updateCurComp(curComp.value);
  const dragComp: DScreen.CompObj = $D.getSelfComp(event, $D.curPage);
  $D.setCurDragComp(dragComp, true);
});
</script>

<template>
  <component :is="$D.getCompVNode(comp)" ref="oneComp"></component>
</template>

<style lang="scss" scoped>
.is-hover {
  outline: var(--d-comp-hover-style);
}

.is-click {
  outline: var(--d-comp-click-style);
}
</style>
