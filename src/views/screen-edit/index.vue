<script setup lang="ts">
import ScreenHeader from '@/views/screen-edit/modules/header/header.vue';
import ScreenEditor from '@/views/screen-edit/modules/main-block/main-block.vue';
</script>

<template>
  <NLayout class="size-full bg-container" content-class="flex flex-col">
    <ScreenHeader class="mb-1"></ScreenHeader>
    <ScreenEditor></ScreenEditor>
  </NLayout>
</template>

<style scoped></style>
