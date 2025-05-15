<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import BuildInComponent from '@/views/screen-edit/modules/main-block/modules/left/modules/components/modules/buildIn-component/buildIn-component.vue';
import ComponentSearch from './modules/component-search.vue';
import NativeComponent from './modules/native-component/native-component.vue';
import ExternalComponent from './modules/external-component/external-component.vue';

const defaultActive: UnionKey.compType[] = reactive(['native']);
const expandRecord: Record<UnionKey.compType, string> = reactive({
  native: '+',
  buildIn: '+',
  external: '+'
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
        <NCollapseItem title="原生元素" name="native">
          <template #arrow>
            <span class="font-bold">{{ expandRecord.native }}</span>
          </template>
          <NativeComponent></NativeComponent>
        </NCollapseItem>
        <NCollapseItem title="内置组件" name="buildIn">
          <template #arrow>
            <span class="font-bold">{{ expandRecord.buildIn }}</span>
          </template>
          <BuildInComponent></BuildInComponent>
        </NCollapseItem>
        <NCollapseItem title="外部组件" name="external">
          <template #arrow>
            <span class="font-bold">{{ expandRecord.external }}</span>
          </template>
          <ExternalComponent></ExternalComponent>
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
