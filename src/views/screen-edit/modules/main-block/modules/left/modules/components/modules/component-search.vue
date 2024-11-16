<script setup lang="ts">
import { reactive } from 'vue';
import { inputStyle } from '@/views/screen-edit/global/config/style';

function getInpout(v) {
  console.log(v,111)
}

interface FormModel {
  layerName: string;
}

const model: FormModel = reactive({
  layerName: ''
});
</script>

<template>
  <NInput v-model:value="model.layerName" clearable :style="inputStyle" placeholder="搜索组件名称" />
</template>

<style scoped></style>
