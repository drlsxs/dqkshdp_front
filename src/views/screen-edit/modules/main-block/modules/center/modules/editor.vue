<script setup lang="ts">
import { useDropZone, useEventListener } from '@vueuse/core';
import { ref } from 'vue';
import $D from '@/views/screen-edit/global';
import ComponentWrapper from '@/views/screen-edit/global/modules/componentWrapper.vue';
import CompTag from '@/views/screen-edit/global/modules/compTag.vue';
import SlotTag from '@/views/screen-edit/global/modules/SlotTag.vue';

const editorRef = ref();
// 组件拖入编辑器逻辑
useDropZone(editorRef, $D.dropEditor);
// // 组件在编辑器内拖拽移动到其他组件上逻辑
useEventListener(editorRef, 'dragover', event => {
  const targetComp = $D.getSelfComp(event, $D.curPage);
  if ($D.overComp.id === targetComp.id) return;
  $D.updateDragOverComp(targetComp);
});
// 鼠标在编辑器内移动逻辑
useEventListener(editorRef, 'mouseover', event => {
  const targetComp = $D.getSelfComp(event, $D.curPage);
  $D.updateHoverComp(targetComp);
  console.log(targetComp, 'hover');
});

$D.resolveNaiveUI();
</script>

<template>
  <div ref="editorRef" class="editor isEdit">
    <SlotTag :comp="$D.overComp"></SlotTag>
    <CompTag :comp="$D.curComp"></CompTag>
    <ComponentWrapper :model-value="$D.curPage.children || []"></ComponentWrapper>
  </div>
</template>

<style scoped>
.isEdit {
  min-height: calc(100vh - 85px);
  padding-bottom: 200px;
}
</style>
