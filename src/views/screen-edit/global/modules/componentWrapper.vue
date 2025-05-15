<script setup lang="ts">
import OneComponent from '@/views/screen-edit/global/modules/oneComponent.vue';

interface Props {
  modelValue: DScreen.CompObj[];
}
defineProps<Props>();
</script>

<template>
  <OneComponent v-for="compObj in modelValue" :key="compObj.id" :comp-obj="compObj"></OneComponent>
</template>

<style lang="scss" scoped></style>
