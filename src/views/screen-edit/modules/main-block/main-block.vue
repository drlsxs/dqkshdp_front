<script setup lang="ts">
import LeftIndex from '@/views/screen-edit/modules/main-block/modules/left/left-index.vue';
import CenterIndex from '@/views/screen-edit/modules/main-block/modules/center/center-index.vue';
import RightIndex from '@/views/screen-edit/modules/main-block/modules/right/right-index.vue';

defineOptions({ name: 'ScreenEditor' });
</script>

<template>
  <NLayoutContent>
    <NSpace class="h-full" :wrap-item="false" :wrap="false" :size="[0, 0]">
      <LeftIndex class="w-10%"></LeftIndex>
      <CenterIndex class="w-80%"></CenterIndex>
      <RightIndex class="w-10%"></RightIndex>
    </NSpace>
  </NLayoutContent>
</template>

<style scoped></style>
