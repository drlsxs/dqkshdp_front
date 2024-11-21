<script setup lang="ts">
import { useScreenStore } from '@/store/modules/screen';
import { editorStyle } from '@/views/screen-edit/global/config/style';
import Editor from './modules/editor.vue';

const useScreen = useScreenStore();
</script>

<template>
  <NLayout class="editor-container px-6 py-4">
    <Editor :style="editorStyle" class="h-full bg-white p0.5" :comp="useScreen.curScreen"></Editor>
  </NLayout>
</template>

<style scoped></style>
