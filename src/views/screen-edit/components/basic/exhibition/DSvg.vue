<script setup lang="ts">
import { useSvgIcon } from '@/hooks/common/icon';
defineOptions({ name: 'DText' });
const { SvgIconVNode } = useSvgIcon();
interface Props {
  comp: DScreen.CompObj;
}
const Icon = SvgIconVNode({ icon: 'ph:user-circle' });
defineProps<Props>();
</script>

<template>
  <span class="svg-comp inline-block">
    <Icon></Icon>
  </span>
</template>

<style scoped></style>
