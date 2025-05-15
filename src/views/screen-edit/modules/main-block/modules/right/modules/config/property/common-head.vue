<script setup lang="ts">
interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <NFlex align="center" justify="space-between" class="py-2">
    <NFlex ref="cardRef" class="h-50px rounded bg-gray-500/5 p-3 text-center">
      {{ comp.name }}
    </NFlex>
    <NFlex vertical>
      <NFlex>{{ comp.key }}</NFlex>
      <NFlex>{{ comp.id }}</NFlex>
    </NFlex>
  </NFlex>
</template>

<style scoped></style>
