<script setup lang="ts">
import OneComponent from '@/views/screen-edit/global/modules/oneComponent.vue';

interface Props {
  modelValue: DScreen.CompObj[];
}
defineProps<Props>();
</script>

<template>
  <OneComponent v-for="comp in modelValue" :key="comp.id" :comp="comp"></OneComponent>
</template>

<style lang="scss" scoped></style>
