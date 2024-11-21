<script setup lang="ts">
import { reactive } from 'vue';
import CompCard from '../comp-card.vue';

const compList: DScreen.CompObj[] = reactive([
  {
    name: '容器',
    type: 'comp',
    key: 'DLayout',
    isContainer: true,
    id: ''
  },
  {
    name: '文字',
    type: 'comp',
    key: 'DText',
    isContainer: false,
    id: ''
  },
  {
    name: '矢量图',
    type: 'comp',
    key: 'DSvg',
    isContainer: false,
    id: ''
  }
]);
</script>

<template>
  <div>
    <NGrid :cols="3" x-gap="5" y-gap="5">
      <NGi v-for="comp in compList" :key="comp.key">
        <CompCard :comp="comp"></CompCard>
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped></style>
