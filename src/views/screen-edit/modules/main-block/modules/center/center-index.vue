<script setup lang="ts">
import { useScreenStore } from '@/store/modules/screen';
import Editor from './modules/editor.vue';

const useScreen = useScreenStore();
</script>

<template>
  <NLayout>
    <Editor class="h-full" :comp="useScreen.curScreen"></Editor>
  </NLayout>
</template>

<style scoped></style>
