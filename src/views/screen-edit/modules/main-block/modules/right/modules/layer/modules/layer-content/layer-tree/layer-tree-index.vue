<script setup lang="ts">
import LayerTreeData from './layer-tree-data.vue';
</script>

<template>
  <div class="h-full">
    <NSpace align="center" justify="space-between">
      <div class="text-13px font-bold">图层</div>
      <SvgIcon icon="ant-design:node-expand-outlined" class="cursor-pointer"></SvgIcon>
    </NSpace>
    <NScrollbar>
      <LayerTreeData class="mb-2.5"></LayerTreeData>
    </NScrollbar>
  </div>
</template>

<style scoped></style>
