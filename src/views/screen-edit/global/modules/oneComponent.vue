<script setup lang="ts">
import { computed, ref } from 'vue';
import { useEventListener } from '@vueuse/core';
import { useScreenStore } from '@/store/modules/screen';
const $D = useScreenStore();

interface Props {
  // 组件对象
  compObj: DScreen.CompObj;
}

const oneComp = ref();

const props = defineProps<Props>();

interface Emits {
  (e: 'update:compObj', value: DScreen.CompObj): void;
}

const emit = defineEmits<Emits>();
const curComp = computed({
  get: () => props.compObj,
  set: value => emit('update:compObj', value)
});

// 内部拖拽
useEventListener(oneComp, 'dragstart', event => {
  event.stopPropagation();
  curComp.value._isInnerDrag = true;
  event.dataTransfer?.setData('comp', JSON.stringify(curComp.value));
  $D.updateCurComp(curComp.value);
});
</script>

<template>
  <component :is="$D.getCompVNode(curComp)" ref="oneComp"></component>
</template>

<style lang="scss" scoped>
.is-hover {
  outline: var(--d-comp-hover-style);
}

.is-click {
  outline: var(--d-comp-click-style);
}
</style>
