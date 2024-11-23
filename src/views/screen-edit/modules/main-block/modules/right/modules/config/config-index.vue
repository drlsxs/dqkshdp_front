<script setup lang="ts">
import { segmentTabStyle } from '@/views/screen-edit/global/config/style.js';
</script>

<template>
  <NTabs :style="segmentTabStyle" type="segment" class="h-full px2" :tabs-padding="8">
    <NTabPane class="h-[calc(100%-50px)]" name="layer" tab="属性"></NTabPane>
    <NTabPane class="h-[calc(100%-50px)]" name="config" tab="样式"></NTabPane>
  </NTabs>
</template>

<style scoped></style>
