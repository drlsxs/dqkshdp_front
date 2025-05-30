<script setup lang="ts">
import { segmentTabStyle } from '@/views/screen-edit/global/config/style.js';
import PropertyIndex from '@/views/screen-edit/modules/main-block/modules/right/modules/config/property/property-index.vue';
import { useScreenStore } from '@/store/modules/screen';
import StyleIndex from '@/views/screen-edit/modules/main-block/modules/right/modules/config/style/style-index.vue';

const $D = useScreenStore();

function getComp() {
  return $D.lockComp.id ? $D.lockComp : $D.curComp;
}
</script>

<template>
  <NTabs :style="segmentTabStyle" type="segment" class="h-full px2" :tabs-padding="8">
    <NTabPane class="h-[calc(100%-50px)]" name="layer" tab="属性">
      <PropertyIndex :comp="getComp()"></PropertyIndex>
    </NTabPane>
    <NTabPane class="h-[calc(100%-50px)]" name="config" tab="样式">
      <StyleIndex :comp="getComp()"></StyleIndex>
    </NTabPane>
  </NTabs>
</template>

<style scoped></style>
