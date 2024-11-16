<script setup lang="ts">
defineOptions({name:'DLayout'})
interface Props {
  comp: DScreen.CompObj;
}

const props = defineProps<Props>();



</script>

<template>
  <div class="flex items-center justify-between">
    <slot name="child"></slot>
    <div

      class="layout-out-border min-h-40px  w-full flex items-center justify-center cursor-pointer border-1 border-dashed border-#dedede"
    >
      <span v-if="!comp.children.length">拖动组件到此区域</span>
    </div>
  </div>
</template>

<style scoped>

</style>
