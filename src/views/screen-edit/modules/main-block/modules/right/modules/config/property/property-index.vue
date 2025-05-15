<script setup lang="ts">
import CommonHead from '@/views/screen-edit/modules/main-block/modules/right/modules/config/property/common-head.vue';
import PropertyContent from './property-content.vue';

interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <CommonHead :comp="comp"></CommonHead>
  <PropertyContent :comp="comp"></PropertyContent>
</template>

<style scoped></style>
