<script setup lang="ts">
import LayerPage from './layer-page/layer-page-index.vue';
import LayerTree from './layer-tree/layer-tree-index.vue';
</script>

<template>
  <NLayout class="h-full">
    <NSplit direction="vertical" :min="0.2" :max="0.5" :default-size="0.35">
      <template #1>
        <NCollapse arrow-placement="right" :default-expanded-names="['page']">
          <NCollapseItem class="px2" title="页面" name="page">
            <LayerPage class="pl2"></LayerPage>
          </NCollapseItem>
        </NCollapse>
      </template>
      <template #2>
        <LayerTree class="px2"></LayerTree>
      </template>
    </NSplit>
  </NLayout>
</template>

<style scoped></style>
