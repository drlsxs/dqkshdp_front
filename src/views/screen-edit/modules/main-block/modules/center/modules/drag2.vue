<script setup lang="ts">
import { useDraggable } from 'vue-draggable-plus';
import { ref } from 'vue';

const el2 = ref();

const list2 = ref([]);

useDraggable(el2, list2, {
  animation: 150,
  group: 'people'
});
</script>

<template>
  <div class="flex">
    <section ref="el2" class="m-auto max-h-350px w-300px flex flex-col gap-2 overflow-auto rounded bg-gray-500/5 p-4">
      <div v-for="item in list2" :key="item.id" class="h-50px cursor-move rounded bg-gray-500/5 p-3">
        {{ item.name }}
      </div>
    </section>
  </div>
</template>

<style scoped></style>
