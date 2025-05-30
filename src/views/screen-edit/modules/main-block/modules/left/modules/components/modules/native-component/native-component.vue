<script setup lang="ts">
import { ref } from 'vue';
import CompCard from '../comp-card.vue';

const compList = ref<DScreen.CompObj[]>([
  {
    name: '图层',
    type: 'native',
    key: 'DIV',
    isContainer: true,
    id: '',
    styleData: {}
  },
  {
    name: '超链接',
    type: 'native',
    key: 'A',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是超链接'
          }
        ]
      }
    ]
  },
  {
    name: '标题1',
    type: 'native',
    key: 'H1',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是标题1'
          }
        ]
      }
    ]
  },
  {
    name: '标题2',
    type: 'native',
    key: 'H2',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是标题2'
          }
        ]
      }
    ]
  },
  {
    name: '标题3',
    type: 'native',
    key: 'H3',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是标题3'
          }
        ]
      }
    ]
  },
  {
    name: '标题4',
    type: 'native',
    key: 'H4',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是标题4'
          }
        ]
      }
    ]
  },
  {
    name: '标题5',
    type: 'native',
    key: 'H5',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是标题5'
          }
        ]
      }
    ]
  },
  {
    name: '标题6',
    type: 'native',
    key: 'H6',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是标题6'
          }
        ]
      }
    ]
  },
  {
    name: '正文',
    type: 'native',
    key: 'P',
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
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '我是正文'
          }
        ]
      }
    ]
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
