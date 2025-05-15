<!--插槽选项组件-->
<script setup lang="ts">
interface Props {
  // 组件对象
  comp: DScreen.CompObj;
}

defineProps<Props>();
</script>

<template>
  <!--  absolute left-0 top-0 h-full w-full-->
  <div class="slot-option-comp absolute left-0 top-0 h-full w-full flex">
    <div
      v-for="item in comp.slots"
      :key="item.name"
      :slot-key="item.key"
      :class="{ 'is-drag-over': item.type, 'not-last:border-r-2px border-#819fc3': comp._isDragOver }"
      class="slot-item h-full w-full flex cursor-pointer items-center justify-center border-dashed text-#716d6d not-last:mr-2px"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped></style>
