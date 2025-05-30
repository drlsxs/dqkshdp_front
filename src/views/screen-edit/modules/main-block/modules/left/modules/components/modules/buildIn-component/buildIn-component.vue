<script setup lang="ts">
import { ref } from 'vue';
import CompCard from '../comp-card.vue';

const compList = ref<DScreen.CompObj[]>([
  {
    name: '弹性容器',
    type: 'buildIn',
    key: 'DLayout',
    isContainer: true,
    id: '',
    styleData: {},
    slots: [
      {
        name: '默认',
        type: '',
        key: 'default'
      }
    ]
  },
  {
    name: '文字',
    type: 'buildIn',
    key: 'DText',
    isContainer: false,
    id: '',
    styleData: {},
    config: [
      {
        name: '数据',
        type: 'group',
        key: 'data',
        group: [
          {
            name: '文本内容',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '文本内容'
          }
        ]
      }
    ]
  },
  {
    name: '矢量图',
    type: 'buildIn',
    key: 'DSvg',
    isContainer: false,
    id: '',
    styleData: {}
  }
]);
const compRef = ref();
</script>

<template>
  <div>
    <NGrid ref="compRef" class="bg-gray-500/5 p-4" :cols="3" x-gap="5" y-gap="5">
      <NGi v-for="comp in compList" :key="comp.id">
        <CompCard :comp="comp"></CompCard>
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped></style>
