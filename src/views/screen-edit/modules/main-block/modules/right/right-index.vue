<script setup lang="ts">
import { ref } from 'vue';
import Layer from './modules/layer/layer-index.vue';
import Config from './modules/config/config-index.vue';

const activeName = ref('layer');
window.$emitter?.on('dropComp', () => {
  activeName.value = 'layer';
});
window.$emitter?.on('curComp', () => {
  activeName.value = 'config';
});

function updateActiveName(value: string) {
  activeName.value = value;
}
</script>

<template>
  <NTabs :value="activeName" type="line" class="h-full" :tabs-padding="8" @update-value="updateActiveName">
    <NTabPane class="h-[calc(100%-50px)]" name="layer" tab="图层">
      <Layer></Layer>
    </NTabPane>
    <NTabPane class="h-[calc(100%-50px)]" name="config" tab="配置">
      <Config></Config>
    </NTabPane>
  </NTabs>
</template>

<style scoped></style>
