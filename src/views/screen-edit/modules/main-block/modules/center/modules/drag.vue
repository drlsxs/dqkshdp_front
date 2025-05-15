<script setup lang="ts">
import { ref } from 'vue';
import { useDraggable } from 'vue-draggable-plus';

const list1 = ref<DScreen.CompObj[]>([
  {
    name: '容器',
    type: 'comp',
    key: 'DLayout',
    isContainer: true,
    id: '11',
    style: {}
  },
  {
    name: '文字',
    type: 'comp',
    key: 'DText',
    isContainer: false,
    id: '22',
    style: {}
  },
  {
    name: '矢量图',
    type: 'comp',
    key: 'DSvg',
    isContainer: false,
    id: '33',
    style: {}
  }
]);

const el1 = ref();
useDraggable(el1, list1, {
  animation: 150,
  group: {
    name: 'people',
    pull: 'clone',
    put: false
  },
  sort: false,
  clone(element: Record<'name' | 'id', string>) {
    const len = 10;
    return {
      name: `${element.name}-clone-${len}`,
      id: `${element.id}-clone-${len}`
    };
  }
});
</script>

<template>
  <div class="flex">
    <section ref="el1" class="w-300px flex flex-col gap-2 rounded bg-gray-500/5 p-4">
      <div v-for="item in list1" :key="item.id" class="h-50px cursor-move rounded bg-gray-500/5 p-3">
        {{ item.name }}
      </div>
    </section>
  </div>
</template>
