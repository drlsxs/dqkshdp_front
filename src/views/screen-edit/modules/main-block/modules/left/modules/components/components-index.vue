<script setup lang="ts">
import ComponentSearch from "./modules/component-search.vue";
import BasicComponent from "./modules/basic-component/bastic-component.vue";
import {onMounted, reactive, ref, watch} from "vue";
let defaultActive = reactive(['basic'])
let expandRecord = reactive({
  basic: "+",
  dd: "+",
});

function clickHeaderItem(data) {
  expandRecord[data.name] = data.expanded ? "-" : "+";
}

onMounted(() => {
  defaultActive.map(item=>expandRecord[item] = "-")
});


</script>

<template>
  <NLayout>
    <NLayoutHeader>
      <ComponentSearch></ComponentSearch>
    </NLayoutHeader>
    <NLayoutContent class="h-[calc(100%-40px)] p2">
      <NCollapse @item-header-click="clickHeaderItem" arrow-placement="left" :default-expanded-names="defaultActive">
        <NCollapseItem title="基础组件" name="basic">
          <template #arrow>
            <span class="font-bold">{{expandRecord.basic}}</span>
          </template>
          <BasicComponent></BasicComponent>
        </NCollapseItem>
        <NCollapseItem title="高级组件" name="dd">
          <template #arrow>
            <span class="font-bold">{{expandRecord.dd}}</span>
          </template>
          <BasicComponent></BasicComponent>
        </NCollapseItem>
      </NCollapse>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped lang="scss">
.font-bold{
  transform: rotate(-90deg);
}
</style>
