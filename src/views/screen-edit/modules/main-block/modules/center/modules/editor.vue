<script setup lang="ts">
import { ref } from 'vue';
import { useDropZone } from '@vueuse/core';
import { getComponent } from '@/views/screen-edit/global';
import ComponentWrapper from '../../../../../components/componentWrapper.vue';

const editorRef = ref();
interface Props {
  // 组件对象
  comp: DScreen.CompObj;
}
const props = defineProps<Props>();
const { isOverDropZone } = useDropZone(editorRef, onDrop);
function onDrop(file, event: DragEvent) {
  const val = event.dataTransfer?.getData('comp') as string;
  const targetComp = getComponent(event, props.comp);
  const dropComp: DScreen.CompObj = JSON.parse(val);
  dropComp.id = `${new Date().getTime()}`;
  if (!targetComp.children) targetComp.children = [];
  targetComp.children.push(dropComp);
}
</script>

<template>
  <div ref="editorRef" class="editor bg-gray:20">
    <ComponentWrapper :comp-list="comp.children"></ComponentWrapper>
  </div>
</template>

<style scoped></style>
