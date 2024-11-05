<script setup lang="ts">
import Layer from './modules/layer/layer-index.vue';
import Components from './modules/components/components-index.vue';
import Module from './modules/module/module-index.vue';
</script>

<template>
  <NTabs type="line" class="h-full" :tabs-padding="8">
    <NTabPane class="h-[calc(100%-50px)]" name="layer" tab="图层">
      <Layer></Layer>
    </NTabPane>
    <NTabPane name="components" tab="组件">
      <Components></Components>
    </NTabPane>
    <NTabPane name="modules" tab="模块">
      <Module></Module>
    </NTabPane>
  </NTabs>
</template>

<style scoped></style>
