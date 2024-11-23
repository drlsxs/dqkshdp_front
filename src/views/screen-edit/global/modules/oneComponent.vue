<script setup lang="ts">
import type { Component } from 'vue';
import { ref } from 'vue';
import { useEventListener } from '@vueuse/core';
import DLayout from '@/views/screen-edit/components/basic/layout/DLayout.vue';
import DText from '@/views/screen-edit/components/basic/exhibition/DText.vue';
import DSvg from '@/views/screen-edit/components/basic/exhibition/DSvg.vue';

import { useScreenStore } from '@/store/modules/screen';
import CompTag from './compTag.vue';

const $D = useScreenStore();

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

function SelClickComp() {
  $D.updateClickComp(props.compObj);
}
useEventListener(oneComp, 'dragstart', event => {
  props.compObj._isInnerDrag = true;
  event.dataTransfer?.setData('comp', JSON.stringify(props.compObj));
});
</script>

<template>
  <div class="component-wrapper relative">
    <CompTag :comp-obj="compObj"></CompTag>
    <component
      :is="compMap[compObj.key]"
      ref="oneComp"
      :style="compObj.style"
      draggable="true"
      :comp="compObj"
      :class="{ 'is-drag-over': compObj._isDragOver, 'is-hover': compObj._isHover, 'is-click': compObj._isClick }"
      @click="SelClickComp"
    >
      <template v-if="compObj.isContainer && compObj.children && compObj.children.length" #child>
        <slot name="childComp"></slot>
      </template>
    </component>
  </div>
</template>

<style lang="scss" scoped>
.is-hover {
  outline: var(--d-comp-hover-style);
}
.is-drag-over {
  background: var(--d-comp--drag-over);
}

.is-click {
  outline: var(--d-comp-click-style);
}
</style>
