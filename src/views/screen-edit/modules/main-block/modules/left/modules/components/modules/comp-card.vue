<script setup lang="ts">
import { ref } from 'vue';
import { useEventListener } from '@vueuse/core';
interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}
const cardRef = ref();

const props = defineProps<Props>();

// 外部拖拽
useEventListener(cardRef, 'dragstart', event => {
  event.dataTransfer?.setData('comp', JSON.stringify(props.comp));
});
</script>

<template>
  <div ref="cardRef" draggable="true" class="h-50px cursor-move rounded bg-gray-500/5 p-3 text-center">
    {{ comp.name }}
  </div>
</template>
