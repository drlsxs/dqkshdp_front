<script setup lang="ts">
import { ref } from 'vue';
import { useDropZone, useEventListener } from '@vueuse/core';
import { useScreenStore } from '@/store/modules/screen';
import ComponentWrapper from '@/views/screen-edit/global/modules/componentWrapper.vue';

const $D = useScreenStore();

const editorRef = ref();
// 组件拖入编辑器逻辑
useDropZone(editorRef, $D.dropEditor);

// 组件在编辑器内拖拽移动到其他组件上逻辑
useEventListener(editorRef, 'dragover', event => {
  const { fallComp } = $D.getContainerComp(event, $D.curPage);
  $D.updateDragOverComp(fallComp);
});
// 鼠标在编辑器内移动逻辑
useEventListener(editorRef, 'mouseover', event => {
  const targetComp = $D.getSelfComp(event, $D.curPage);
  $D.updateHoverComp(targetComp);
});
</script>

<template>
  <div ref="editorRef" class="editor">
    <ComponentWrapper :comp-list="$D.curPage.children"></ComponentWrapper>
  </div>
</template>

<style scoped></style>
