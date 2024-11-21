<script setup lang="ts">
import OneComponent from './oneComponent.vue';

interface Props {
  // 组件对象
  compList: DScreen.CompObj[];
}

defineProps<Props>();
</script>

<template>
  <OneComponent v-for="compObj in compList" :key="compObj.id" :comp-obj="compObj">
    <template #childComp>
      <ComponentWrapper :comp-list="compObj.children"></ComponentWrapper>
    </template>
  </OneComponent>
</template>

<style lang="scss" scoped>
.is-hover {
  outline: var(--d-comp-hover-style);
}
.is-drag-over {
  background: var(--d-comp--drag-over);
}
</style>
