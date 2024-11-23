<script setup lang="ts">
defineOptions({ name: 'DText' });
interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <div class="svg-comp">
    <SvgIcon class="pointer-events-none" icon="ph:user-circle"></SvgIcon>
  </div>
</template>

<style scoped></style>
