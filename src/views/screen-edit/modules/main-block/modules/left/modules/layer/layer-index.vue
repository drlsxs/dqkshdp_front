<script setup lang="ts">
import LayerSearch from './modules/layer-search.vue';
import LayerContent from './modules/layer-content/layer-content-index.vue';
</script>

<template>
  <NLayout class="h-full">
    <NLayoutHeader>
      <LayerSearch></LayerSearch>
    </NLayoutHeader>
    <NLayoutContent class="h-[calc(100%-40px)]">
      <LayerContent class="pt2"></LayerContent>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped></style>
