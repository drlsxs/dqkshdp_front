<script setup lang="ts">
import FormItems from './form-items.vue';

interface Props {
  // 标签名称
  items: DScreen.ConfigItem;
}

defineProps<Props>();
</script>

<template>
  <NCollapse v-if="items.type === 'group'" class="px-1" arrow-placement="right">
    <NCollapseItem class="border-b-[1px] border-[#eaedef] pb-4" :title="items.name" :name="items.key">
      <FormItems v-for="item in items.group" :key="item.key" class="px-1" :form-items="item"></FormItems>
    </NCollapseItem>
  </NCollapse>
  <NLayout v-else>
    <FormItems class="px-2" :form-items="items"></FormItems>
  </NLayout>
</template>

<style scoped></style>
