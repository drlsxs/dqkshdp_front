<script setup lang="ts">
import { reactive } from 'vue';
import CompCard from '../comp-card.vue';

const compList: DScreen.CompObj[] = reactive([
  {
    name: '容器',
    type: 'comp',
    key: 'DLayout',
    children: [],
    isContainer: true
  }
]);
</script>

<template>
  <div>
    <NGrid :cols="3" x-gap="5" y-gap="5">
      <NGi v-for="comp in compList">
        <CompCard :comp="comp"></CompCard>
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped></style>
