<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import $D from '@/views/screen-edit/global';
import { initEditorEvent } from '@/views/screen-edit/global/useScreen';
import ComponentWrapper from '@/views/screen-edit/global/modules/componentWrapper.vue';
import { addUnit } from '@/views/screen-edit/global/config/style';

interface Props {
  // 组件对象
  pageItem: DScreen.CompObj;
  edit: boolean;
}
const props = defineProps<Props>();
const pageRef = ref();
onMounted(() => {
  $D.isEdit = props.edit;
  if (props.edit) {
    initEditorEvent(pageRef.value);
  }
});

const show = ref(false);
$D.resolveNaiveUI(() => {
  show.value = true;
});

$D.initPage();

onBeforeUnmount(() => {
  $D.destroyPage();
});
</script>

<template>
  <div
    :id="pageItem.id"
    ref="pageRef"
    class="dPage comp-item"
    :class="{ 'is-editor': edit }"
    :data-label="pageItem.name"
    :style="addUnit(pageItem.styleData)"
  >
    <ComponentWrapper v-if="show" :model-value="pageItem.children || []"></ComponentWrapper>
  </div>
</template>

<style lang="scss"></style>
