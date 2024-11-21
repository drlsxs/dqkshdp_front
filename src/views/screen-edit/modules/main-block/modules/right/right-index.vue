<script setup lang="ts">
import Layer from './modules/layer/layer-index.vue';
import Config from './modules/config/config-index.vue';
</script>

<template>
  <NTabs type="line" class="h-full" :tabs-padding="8">
    <NTabPane class="h-[calc(100%-50px)]" name="layer" tab="图层">
      <Layer></Layer>
    </NTabPane>
    <NTabPane class="h-[calc(100%-50px)]" name="config" tab="配置">
      <Config></Config>
    </NTabPane>
  </NTabs>
</template>

<style scoped></style>
