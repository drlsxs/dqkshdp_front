<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import ComponentSearch from './modules/component-search.vue';
import BasicComponent from './modules/basic-component/bastic-component.vue';

const defaultActive: UnionKey.compType[] = reactive(['basic']);
const expandRecord: Record<UnionKey.compType, string> = reactive({
  basic: '+',
  advance: '+'
});

function clickHeaderItem({ name, expanded }: { name: UnionKey.compType; expanded: boolean }) {
  expandRecord[name] = expanded ? '-' : '+';
}

onMounted(() => {
  defaultActive.map(item => (expandRecord[item] = '-'));
});
</script>

<template>
  <NLayout>
    <NLayoutHeader class="px2">
      <ComponentSearch></ComponentSearch>
    </NLayoutHeader>
    <NLayoutContent class="h-[calc(100%-40px)] p2">
      <NCollapse arrow-placement="left" :default-expanded-names="defaultActive" @item-header-click="clickHeaderItem">
        <NCollapseItem title="基础组件" name="basic">
          <template #arrow>
            <span class="font-bold">{{ expandRecord.basic }}</span>
          </template>
          <BasicComponent></BasicComponent>
        </NCollapseItem>
        <NCollapseItem title="高级组件" name="advance">
          <template #arrow>
            <span class="font-bold">{{ expandRecord.advance }}</span>
          </template>
          <BasicComponent></BasicComponent>
        </NCollapseItem>
      </NCollapse>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped lang="scss">
.font-bold {
  transform: rotate(-90deg);
}
</style>
