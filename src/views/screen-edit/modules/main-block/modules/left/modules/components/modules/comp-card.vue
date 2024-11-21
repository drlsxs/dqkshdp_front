<script setup lang="ts">
import { ref } from 'vue';
import { useEventListener } from '@vueuse/core';

interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}

const cardRef = ref();

const props = defineProps<Props>();

useEventListener(cardRef, 'dragstart', event => {
  event.dataTransfer?.setData('comp', JSON.stringify(props.comp));
});
</script>

<template>
  <NCard ref="cardRef" draggable="true" hoverable class="cursor-pointer">
    <img draggable="false" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" alt="组件显示图片" />
    <div class="comp-name pt1">
      {{ comp.name }}
    </div>
  </NCard>
</template>
