<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { segmentTabStyle } from '@/views/screen-edit/global/config/style.js';
import MonacoEditor from '@/components/monaco/monaco-editor.vue';
import PropertyIndex from '@/views/screen-edit/modules/main-block/modules/right/modules/config/property/property-index.vue';
import { useScreenStore } from '@/store/modules/screen';

const $D = useScreenStore();
const compStyleStr = ref('');
const options = {
  colorDecorators: true,
  lineHeight: 24,
  tabSize: 2
};

function getCompStyleStr() {
  compStyleStr.value = JSON.stringify($D.curComp.style, null, 2);
}

watchEffect(() => getCompStyleStr());

function confirmStyle() {
  $D.updateCurComp({ style: JSON.parse(compStyleStr.value) });
}
</script>

<template>
  <NTabs :style="segmentTabStyle" type="segment" class="h-full px2" :tabs-padding="8">
    <NTabPane class="h-[calc(100%-50px)]" name="layer" tab="属性">
      <PropertyIndex :comp="$D.curComp"></PropertyIndex>
    </NTabPane>
    <NTabPane class="h-[calc(100%-50px)]" name="config" tab="样式">
      <MonacoEditor
        v-model:value="compStyleStr"
        theme="vs"
        :options="options"
        language="json"
        height="50%"
      ></MonacoEditor>
      <NButton size="large" @click="confirmStyle">确定</NButton>
    </NTabPane>
  </NTabs>
</template>

<style scoped></style>
