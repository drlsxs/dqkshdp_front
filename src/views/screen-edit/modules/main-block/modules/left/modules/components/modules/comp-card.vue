<script setup lang="ts">
import {ref} from "vue";
import {useEventListener} from "@vueuse/core";

interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}

const cardRef = ref();

const props = defineProps<Props>();

useEventListener(cardRef, 'dragstart', (event) => {
  event.dataTransfer?.setData('comp',JSON.stringify(props.comp))
})
</script>

<template>
  <n-card draggable="true" ref="cardRef" hoverable class="cursor-pointer">
    <img draggable="false" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
    <div class="comp-name pt1">
      {{comp.name}}
    </div>
  </n-card>
</template>

<style scoped>

</style>
