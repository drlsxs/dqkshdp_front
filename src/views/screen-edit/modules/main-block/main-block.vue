<script setup lang="ts">
import LeftIndex from '@/views/screen-edit/modules/main-block/modules/left/left-index.vue';
import Editor from '@/views/screen-edit/modules/main-block/modules/center/Editor.vue';
import RightIndex from '@/views/screen-edit/modules/main-block/modules/right/right-index.vue';

defineOptions({ name: 'ScreenEditor' });
</script>

<template>
  <NLayoutContent>
    <NSpace class="h-full" :wrap-item="false" :wrap="false" :size="[0, 0]">
      <LeftIndex class="w-15%"></LeftIndex>
      <Editor class="w-70% bg-gray:20"></Editor>
      <RightIndex class="w-15%"></RightIndex>
    </NSpace>
  </NLayoutContent>
</template>

<style scoped></style>
