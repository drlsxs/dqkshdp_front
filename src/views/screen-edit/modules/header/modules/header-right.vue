<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routerPush = router.push;
function showPage() {
  routerPush({
    path: '/preview'
  });
}
</script>

<template>
  <NLayout>
    <NSpace>
      <NButton text>分享</NButton>
      <NButton text @click="showPage">演示</NButton>
    </NSpace>
  </NLayout>
</template>

<style scoped></style>
