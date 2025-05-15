<script setup lang="ts">
interface Props {
  // 组件对象
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <span
    v-if="(comp._isHover || comp._isClick) && !comp._isDragOver"
    :com-id="comp.id"
    class="fixed z-99 h-21px bg-blue px1 text-white lh-21px -left-2px -top-22px"
    :class="[comp._isClick ? 'bg-lightblue' : 'bg-blue']"
    :style="{ left: comp.domInfo.left - 2 + 'px', top: comp.domInfo.top + comp.domInfo.height - 0.1 + 'px' }"
    size="small"
    type="info"
  >
    {{ comp.name }}
  </span>
</template>

<style scoped></style>
