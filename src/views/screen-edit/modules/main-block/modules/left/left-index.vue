<script setup lang="ts">
import Components from './modules/components/components-index.vue';
import Module from './modules/module/module-index.vue';
</script>

<template>
  <NTabs type="line" class="h-full" :tabs-padding="8">
    <NTabPane name="components" tab="组件">
      <Components></Components>
    </NTabPane>
    <NTabPane name="modules" tab="模块">
      <Module></Module>
    </NTabPane>
  </NTabs>
</template>

<style scoped></style>
