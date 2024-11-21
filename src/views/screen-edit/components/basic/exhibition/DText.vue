<script setup lang="ts">
defineOptions({ name: 'DText' });
interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <div class="text-comp">文字内容</div>
</template>

<style scoped></style>
