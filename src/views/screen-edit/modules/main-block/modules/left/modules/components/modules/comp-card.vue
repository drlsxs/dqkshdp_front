<script setup lang="ts">
import { ref } from 'vue';
import { useEventListener } from '@vueuse/core';
import $D from '@/views/screen-edit/global';
interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}
const cardRef = ref();

const props = defineProps<Props>();

// 外部拖拽
useEventListener(cardRef, 'dragstart', () => {
  $D.setCurDragComp(props.comp, false);
});
</script>

<template>
  <div ref="cardRef" draggable="true" class="h-50px cursor-move rounded bg-gray-500/5 p-3 text-center">
    {{ comp.name }}
  </div>
</template>
