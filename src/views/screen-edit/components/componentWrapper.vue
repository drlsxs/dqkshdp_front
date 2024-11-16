<script setup lang="ts">
import type { Component } from 'vue';
import DLayout from '@/views/screen-edit/components/basic/layout/DLayout.vue';

interface Props {
  // 组件对象
  compList: DScreen.CompObj[];
}

const compMap: Record<string, Component> = {
  DLayout
};

const props = defineProps<Props>();
</script>

<template>
  <component :is="compMap[compObj.key]" v-for="compObj in compList" class="component-wrapper" :comp="compObj">
    <template v-if="compObj.children.length" #child>
      <ComponentWrapper :comp-list="compObj.children"></ComponentWrapper>
    </template>
  </component>
</template>

<style scoped></style>
