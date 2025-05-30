<script setup lang="ts">
import $D from '@/views/screen-edit/global';
import PageItem from '@/views/screen-edit/modules/main-block/modules/center/modules/PageItem.vue';
</script>

<template>
  <PageItem :key="$D.curPage.id" :edit="false" :page-item="$D.curPage" class="bg-white p0.5"></PageItem>
</template>

<style scoped></style>
