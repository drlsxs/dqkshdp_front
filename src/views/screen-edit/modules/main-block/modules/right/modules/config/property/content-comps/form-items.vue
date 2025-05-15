<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  // 标签名称
  formItems: Record<string, any>;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: Record<string, any>): void;
}

const emit = defineEmits<Emits>();
const formItem = computed({
  get: () => props.formItems,
  set: value => {
    emit('update:modelValue', { ...props.formItems, value });
  }
});
</script>

<template>
  <!-- v-model:value 才能双向绑定 -->
  <NFlex align="center" justify="space-between">
    <NFlex class="w-2/12">{{ formItem.name }}</NFlex>
    <NFlex class="w-3/4">
      <NInput v-if="formItem.control === 'textarea'" v-model:value="formItem.value" type="textarea" />
      <NInput v-if="formItem.control === 'input'" v-model:value="formItem.value" type="text" />
      <NSwitch v-if="formItem.control === 'switch'" v-model:value="formItem.value" />
      <NInputNumber v-if="formItem.control === 'inputNumber'" v-model:value="formItem.value" />
    </NFlex>
  </NFlex>
</template>

<style scoped></style>
