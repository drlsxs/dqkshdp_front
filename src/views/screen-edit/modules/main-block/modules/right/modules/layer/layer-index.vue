<script setup lang="ts">
import LayerSearch from './modules/layer-search.vue';
import LayerContent from './modules/layer-content/layer-content-index.vue';
</script>

<template>
  <NLayout class="h-full">
    <NLayoutHeader class="px2">
      <LayerSearch></LayerSearch>
    </NLayoutHeader>
    <NLayoutContent class="h-[calc(100%-40px)]">
      <LayerContent></LayerContent>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped></style>
