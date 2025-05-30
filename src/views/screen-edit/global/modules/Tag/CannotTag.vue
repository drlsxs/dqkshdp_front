<script setup lang="ts">
interface Props {
  // 落入组件对象
  comp: DScreen.CompObj;
  // 拖的组件
  dragComp: DScreen.CompObj;
  // 拖拽组件
  domInfo: DScreen.DomInfo;
}

defineProps<Props>();
</script>

<template>
  <div
    v-show="domInfo.id && domInfo.type === 'cannot' && comp.type !== 'group'"
    :com-id="domInfo.id"
    class="select-com-outline cannot-tag pointer-events-none fixed z-99 outline-red outline"
    :style="{
      width: domInfo.width + 'px',
      height: domInfo.height + 'px',
      left: domInfo.left + 'px',
      top: domInfo.top + 'px'
    }"
  >
    <div
      class="fixed z-99 h-21px bg-red px1 text-white lh-21px -left-2px -top-22px"
      :style="[
        comp.type !== 'group' ? { top: domInfo.top + domInfo.height + 'px', left: domInfo.left - 3 + 'px' } : {}
      ]"
    >
      <span>
        <span v-if="comp.childKey">{{ `需要子组件${comp.childKey}` }}</span>
        <span v-else>{{ `父组件是${dragComp.parentKey}` }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped></style>
