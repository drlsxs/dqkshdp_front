<script setup lang="ts">
import type { Component } from 'vue';
import DLayout from "@/views/screen-edit/components/basic/layout/DLayout.vue";

interface Props {
  // 组件对象
  compList: DScreen.CompObj[];
}

const compMap: Record<string, Component> = {
  "DLayout": DLayout,
}


const props = defineProps<Props>();

</script>

<template>
  <component
    class="component-wrapper"
    v-for="compObj in compList"
    :is="compMap[compObj.key]"
    :comp="compObj"
  >
    <template #child v-if="compObj.children.length">
      <ComponentWrapper :comp-list="compObj.children"></ComponentWrapper>
    </template>
  </component>
</template>

<style scoped>

</style>
