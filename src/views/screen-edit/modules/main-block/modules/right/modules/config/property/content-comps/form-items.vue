<script setup lang="ts">
interface Props {
  // 标签名称
  formItems: DScreen.ConfigItem;
}
defineProps<Props>();
</script>

<template>
  <!-- v-model:value 才能双向绑定 -->
  <NFlex align="center" justify="space-between">
    <NFlex class="w-2/12">{{ formItems.name }}</NFlex>
    <NFlex class="w-3/4">
      <NInput v-if="formItems.control === 'textarea'" v-model:value="formItems.value" type="textarea" />
      <NInput v-if="formItems.control === 'input'" v-model:value="formItems.value" type="text" />
      <NSwitch v-if="formItems.control === 'switch'" v-model:value="formItems.value" />
      <NInputNumber v-if="formItems.control === 'inputNumber'" v-model:value="formItems.value" />
    </NFlex>
  </NFlex>
</template>

<style scoped></style>
