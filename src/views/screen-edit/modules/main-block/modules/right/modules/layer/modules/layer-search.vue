<script setup lang="ts">
import { reactive } from 'vue';
import { inputStyle } from '@/views/screen-edit/global/config/style';

interface FormModel {
  layerName: string;
}

const model: FormModel = reactive({
  layerName: ''
});
</script>

<template>
  <NInput v-model:value="model.layerName" clearable :style="inputStyle" placeholder="搜索图层名称" />
</template>

<style scoped></style>
