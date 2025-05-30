import { ref } from 'vue';
import $D from '@/views/screen-edit/global';
function getPropsData(comp: DScreen.CompObj) {
  const props = {};
  function getPropertyValue(config: DScreen.ConfigItem[]) {
    const { parentComp } = $D.getParentComp($D.curPage, comp);
    config.forEach(item => {
      if (item.type === 'group') {
        getPropertyValue(item.group);
      } else {
        // 处理item vModal为true
        if (item.vModel) {
          item.value = ref(item.value);
          props[`onUpdate:${item.key}`] = value => {
            if (typeof item.value === 'string') {
              item.value = value;
            } else {
              item.value.value = value;
            }
            // 处理下钻数据
            const { dropItem, dropType, dropKey, dropIndex } = item.dropData;
            const bindDropData = dropType === 'array' ? dropItem[dropIndex] : {};
            console.log(comp, 'dsadasdas');
          };
        }
        props[item.key] = item.value;
      }
    });
  }
  getPropertyValue(comp.config);
  return props;
}

function setFallCompChild(comp: DScreen.CompObj) {
  function setFallFn(comps: DScreen.CompObj) {
    const fallData = comps.config.filter(item => item.dropdown);
    const dropData = [];
    // 配置项item
    fallData.forEach(item => {
      const dropObj = {
        dropKey: item.key,
        dropItem: item.value,
        dropType: item.type,
        dropIndex: 0
      };
      dropData.push(dropObj);
    });
  }
  setFallFn(comp);
}

export { getPropsData, setFallCompChild };
