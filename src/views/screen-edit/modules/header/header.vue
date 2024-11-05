<script setup lang="ts">
import HeaderLeft from '@/views/screen-edit/modules/header/modules/header-left.vue';
import HeaderMiddle from '@/views/screen-edit/modules/header/modules/header-middle.vue';
import HeaderRight from '@/views/screen-edit/modules/header/modules/header-right.vue';

defineOptions({ name: 'ScreenHeader' });
</script>

<template>
  <NLayoutHeader class="px-1 py-3.5 shadow">
    <NSpace align="center" justify="space-between">
      <HeaderLeft></HeaderLeft>
      <HeaderMiddle></HeaderMiddle>
      <HeaderRight></HeaderRight>
    </NSpace>
  </NLayoutHeader>
</template>

<style scoped></style>
