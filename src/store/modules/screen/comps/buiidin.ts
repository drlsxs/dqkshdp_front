import type { Component } from 'vue';
import DLayout from '@/views/screen-edit/components/basic/layout/DLayout.vue';
import DText from '@/views/screen-edit/components/basic/exhibition/DText.vue';
import DSvg from '@/views/screen-edit/components/basic/exhibition/DSvg.vue';
import DragOverSlotOption from '@/views/screen-edit/components/DragOverSlotOption.vue';

const buildInComp: Record<string, Component> = {
  DLayout,
  DText,
  DSvg,
  DragOverSlotOption
};

export default buildInComp;
