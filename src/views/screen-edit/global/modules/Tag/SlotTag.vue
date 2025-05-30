<script setup lang="ts">
import $D from '@/views/screen-edit/global';

interface Props {
  comp: DScreen.CompObj;
}

defineProps<Props>();

function selectDropSlot(slotKey: string) {
  $D.selSlotKey(slotKey);
}
</script>

<template>
  <div id="slot-indicator" class="slot-indicator">
    <div class="slotInfo">
      <span>插入组件：{{ comp.key }}</span>
      ，
      <span>插入位置：</span>
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
  </div>
</template>

<style scoped>
.slot-indicator {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  display: none;
  outline: 2px solid #facc15ff;
}

.slot-indicator .slotInfo {
  pointer-events: all;
  position: absolute;
  bottom: -22px;
  left: -2px;
  background: #facc15ff;
  color: white;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 3px;
  white-space: nowrap;
}
</style>
