<script setup lang="ts">
defineOptions({ name: 'DLayout' });
interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <div class="flex-container-comp relative flex">
    <slot></slot>
  </div>
</template>

<style scoped></style>
