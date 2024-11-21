<script setup lang="ts">
import { ref } from 'vue';
import { useDropZone, useEventListener } from '@vueuse/core';
import { getContainerComp, getParentComp, getSelfComp } from '@/views/screen-edit/global';
import { useScreenStore } from '@/store/modules/screen';
import ComponentWrapper from '../../../../../global/modules/componentWrapper.vue';

const screenStore = useScreenStore();

const editorRef = ref();
interface Props {
  // 组件对象
  comp: DScreen.CompObj;
}
const props = defineProps<Props>();
useDropZone(editorRef, onDrop);
function onDrop(file, event: DragEvent) {
  const { targetComp, compIndex } = getContainerComp(event, props.comp);
  const val = event.dataTransfer?.getData('comp') as string;
  const dropComp: DScreen.CompObj = JSON.parse(val);
  // 如果是内部拖拽
  if (dropComp._isInnerDrag) {
    // 落下的不是自身
    if (targetComp.id !== dropComp.id) {
      // 最后删除掉自身
      const { parentComp, index } = getParentComp(props.comp, dropComp);
      parentComp.children?.splice(index, 1);
    }
  } else {
    // 外部拖拽赋值id,内部id不变
    dropComp.id = `${new Date().getTime()}`;
  }
  if (!targetComp.children) targetComp.children = [];
  // 如果是自身，必是内部拖拽，不往自身继续添加子元素
  if (targetComp.id !== dropComp.id) {
    targetComp.children.splice(compIndex, 0, dropComp);
  }
  screenStore.updateDragOverComp(props.comp);
  screenStore.updateHoverComp(targetComp);
}
useEventListener(editorRef, 'dragover', event => {
  const { targetComp } = getContainerComp(event, props.comp);
  screenStore.updateDragOverComp(targetComp);
});
useEventListener(document, 'mouseover', event => {
  const targetComp = getSelfComp(event, props.comp);
  screenStore.updateHoverComp(targetComp);
});
</script>

<template>
  <div ref="editorRef" class="editor">
    <ComponentWrapper :comp-list="comp.children"></ComponentWrapper>
  </div>
</template>

<style scoped></style>
