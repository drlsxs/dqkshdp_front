<script setup lang="ts">
defineOptions({ name: 'DText' });
interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <span class="text-comp">
    <slot>文字内容</slot>
  </span>
</template>

<style scoped></style>
