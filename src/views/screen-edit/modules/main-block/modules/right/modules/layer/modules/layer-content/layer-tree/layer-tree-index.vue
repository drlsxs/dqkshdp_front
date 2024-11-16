<script setup lang="ts">
import LayerTreeData from './layer-tree-data.vue';
</script>

<template>
  <NLayout>
    <NSpace align="center" justify="space-between">
      <NEl class="text-13px font-bold">图层</NEl>
      <SvgIcon icon="ant-design:node-expand-outlined" class="cursor-pointer"></SvgIcon>
    </NSpace>
    <NLayoutContent>
      <LayerTreeData></LayerTreeData>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped></style>
