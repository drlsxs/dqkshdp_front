<script setup lang="ts">
import type { Component } from 'vue';
import { ref } from 'vue';
import { useEventListener } from '@vueuse/core';
import DLayout from '@/views/screen-edit/components/basic/layout/DLayout.vue';
import DText from '@/views/screen-edit/components/basic/exhibition/DText.vue';
import DSvg from '@/views/screen-edit/components/basic/exhibition/DSvg.vue';

interface Props {
  // 组件对象
  compObj: DScreen.CompObj;
}

const oneComp = ref();
const compMap: Record<string, Component> = {
  DLayout,
  DText,
  DSvg
};

const props = defineProps<Props>();
useEventListener(oneComp, 'dragstart', event => {
  props.compObj._isInnerDrag = true;
  event.dataTransfer?.setData('comp', JSON.stringify(props.compObj));
});
</script>

<template>
  <component
    :is="compMap[compObj.key]"
    ref="oneComp"
    class="component-wrapper"
    draggable="true"
    :comp="compObj"
    :class="{ 'is-drag-over': compObj._isDragOver, 'is-hover': compObj._isHover }"
  >
    <template v-if="compObj.isContainer && compObj.children && compObj.children.length" #child>
      <slot name="childComp"></slot>
    </template>
  </component>
</template>

<style lang="scss" scoped>
.is-hover {
  outline: var(--d-comp-hover-style);
}
.is-drag-over {
  background: var(--d-comp--drag-over);
}
</style>
