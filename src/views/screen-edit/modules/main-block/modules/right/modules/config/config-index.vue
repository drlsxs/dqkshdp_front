<script setup lang="ts">
import { reactive, ref } from 'vue';
import { segmentTabStyle } from '@/views/screen-edit/global/config/style.js';
import MonacoEditor from '@/components/monaco/monaco-editor.vue';

const compStyleStr = ref('');
let comp: DScreen.CompObj = reactive({}) as DScreen.CompObj;
const options = {
  colorDecorators: true,
  lineHeight: 24,
  tabSize: 2
};

window.$emitter?.on('curComp', (curComp: DScreen.CompObj) => {
  compStyleStr.value = JSON.stringify(curComp.style, null, 2);
  comp = curComp;
});

function confirmStyle() {
  comp.style = JSON.parse(compStyleStr.value);
}
</script>

<template>
  <NTabs :style="segmentTabStyle" type="segment" class="h-full px2" :tabs-padding="8">
    <NTabPane class="h-[calc(100%-50px)]" name="layer" tab="属性"></NTabPane>
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
