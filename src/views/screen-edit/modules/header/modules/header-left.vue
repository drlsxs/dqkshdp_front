<script setup lang="ts">
import { ref } from 'vue';

const spaceName = ref('默认空间');
const fileName = ref('未命名屏幕');
</script>

<template>
  <NLayout>
    <NSpace align="center">
      <SvgIcon icon="ant-design:menu-outlined"></SvgIcon>
      <div>{{ spaceName }} / {{ fileName }}</div>
    </NSpace>
  </NLayout>
</template>

<style scoped></style>
