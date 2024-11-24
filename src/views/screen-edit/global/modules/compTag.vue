<script setup lang="ts">
interface Props {
  // 组件对象
  compObj: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <span
    v-if="compObj._isHover || compObj._isClick"
    class="absolute h-21px bg-blue px1 text-white lh-21px -left-2px -top-22px"
    :class="compObj._isClick ? 'bg-lightblue' : 'bg-blue'"
    size="small"
    type="info"
  >
    {{ compObj.name }}
  </span>
</template>

<style scoped></style>
