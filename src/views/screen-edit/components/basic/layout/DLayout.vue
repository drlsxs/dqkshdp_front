<script setup lang="ts">
defineOptions({ name: 'DLayout' });
interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <div class="flex-container-comp">
    <div
      :class="{ 'min-h-40px outline-1 outline-#bdb9b9 outline-dashed': !comp.children?.length }"
      class="relative flex items-center justify-start"
    >
      <slot name="child"></slot>
      <div v-if="!comp.children?.length" :class="{ 'w-full': !comp.children?.length }" class="px1 text-center">
        拖动组件到此区域
      </div>
    </div>
  </div>
</template>

<style scoped></style>
