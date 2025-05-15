<!--属性内容-->
<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { getPropsData } from '@/views/screen-edit/global/config/comp-property';
import Items from './content-comps/items.vue';

interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: Record<string, any>): void;
}

const emit = defineEmits<Emits>();
const comps = computed({
  get: () => props.comp,
  set: value => {
    emit('update:modelValue', value);
  }
});

function getCompProps() {
  comps.value.props = Object.assign(comps.value.props, getPropsData(comps.value.config));
}

watchEffect(() => getCompProps());
</script>

<template>
  <NList :show-divider="false">
    <NListItem v-for="item in comp.config" v-show="item.type !== 'v-modal'" :key="item.key">
      <Items :items="item" />
    </NListItem>
  </NList>
</template>

<style scoped></style>
