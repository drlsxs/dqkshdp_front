<script setup lang="ts">
import $D from '@/views/screen-edit/global';
import HoverTag from '@/views/screen-edit/global/modules/Tag/HoverTag.vue';
import SlotTag from '@/views/screen-edit/global/modules/Tag/SlotTag.vue';
import LockedTag from '@/views/screen-edit/global/modules/Tag/LockedTag.vue';
import PageItem from './modules/PageItem.vue';
</script>

<template>
  <NLayout class="editor-container p4">
    <div class="select-block">
      <SlotTag :comp="$D.overComp"></SlotTag>
      <LockedTag></LockedTag>
      <HoverTag></HoverTag>
    </div>
    <PageItem :key="$D.curPage.id" :edit="true" :page-item="$D.curPage" class="bg-white p0.5"></PageItem>
  </NLayout>
</template>

<style scoped></style>
