<script setup lang="ts">
import { editorStyle } from '@/views/screen-edit/global/config/style';
import Editor from './modules/editor.vue';
</script>

<template>
  <NLayout class="editor-container p4">
    <Editor :style="editorStyle" class="h-full bg-white p0.5"></Editor>
  </NLayout>
</template>

<style scoped></style>
