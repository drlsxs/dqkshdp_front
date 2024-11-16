<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useDropZone } from '@vueuse/core';
import { getComponent } from '@/views/screen-edit/global';
import ComponentWrapper from '../../../../../components/componentWrapper.vue';
const editorRef = ref();
const comp: DScreen.CompObj = reactive({
  name: '页面',
  key: 'page',
  type: 'page',
  children: [],
  isContainer: true
});
const { isOverDropZone } = useDropZone(editorRef, onDrop);
function onDrop(file, event) {
  const val = event.dataTransfer?.getData('comp');
  const targetComp = getComponent(event, comp);
  const dropComp: DScreen.CompObj = JSON.parse(val);
  targetComp.children.push(dropComp);
}
</script>

<template>
  <div ref="editorRef" class="editor bg-gray:20">
    <ComponentWrapper :comp-list="comp.children"></ComponentWrapper>
  </div>
</template>

<style scoped></style>
