<script setup lang="ts">
defineOptions({ name: 'DLayout' });
interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <div class="flex-container-comp relative flex items-center justify-start">
    <slot name="child"></slot>
    <div
      v-if="!comp.children?.length"
      class="h-full flex items-center justify-center px1 text-center"
      :class="{ 'min-h-40px w-full outline-1 outline-#bdb9b9 outline-dashed': !comp.children?.length }"
    >
      <div>拖动组件到此区域</div>
    </div>
  </div>
</template>

<style scoped>
.d {
  justify-content: space-around;
}
</style>
