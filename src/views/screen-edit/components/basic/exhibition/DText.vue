<script setup lang="ts">
defineOptions({ name: 'DText' });
interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <div class="text-comp">
    <slot>文字内容</slot>
  </div>
</template>

<style scoped></style>
