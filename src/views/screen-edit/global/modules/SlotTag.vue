<script setup lang="ts">
import $D from '@/views/screen-edit/global';

interface Props {
  // 组件对象
  comp: DScreen.CompObj;
}

defineProps<Props>();

function selectDropSlot(slotKey: string) {
  $D.selSlotKey(slotKey);
}
</script>

<template>
  <div
    v-if="comp._isDragOver && comp.isContainer"
    class="fixed z-99 h-21px bg-yellow px1 text-white lh-21px -left-2px -top-22px"
    :com-id="comp.id"
    :style="{ left: comp.domInfo.left - 2 + 'px', top: comp.domInfo.top + comp.domInfo.height - 0.1 + 'px' }"
  >
    <span>插入位置:</span>
    &nbsp;&nbsp;&nbsp;
    <span
      v-for="(item, idx) in comp.slots"
      :key="item.key"
      :slot-key="item.key"
      size="small"
      type="info"
      class="cursor-pointer"
      @click="selectDropSlot(item.key)"
    >
      {{ item.name }}
      <span v-if="idx < comp.slots.length - 1" class="px1">|</span>
    </span>
  </div>
</template>

<style scoped></style>
