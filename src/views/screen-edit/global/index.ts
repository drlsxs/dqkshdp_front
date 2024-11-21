// 获取自身组件
export function getSelfComp(event: any, rootComp: DScreen.CompObj) {
  let selfComp: DScreen.CompObj = event.target.__vueParentComponent.props.comp;
  if (!selfComp) {
    selfComp = rootComp;
  }
  return selfComp;
}

// 获取落下组件，如果是容器就是自身，不是找他的上级容器
export function getContainerComp(event: any, rootComp: DScreen.CompObj) {
  let targetComp: DScreen.CompObj = getSelfComp(event, rootComp);
  let compIndex = 0;
  // 如果落下的组件不是容器组件
  if (!targetComp.isContainer) {
    // 找到这个组件的上一级容器组件
    const { parentComp, index } = getParentComp(rootComp, targetComp);
    targetComp = parentComp;
    compIndex = index;
  } else {
    if (!targetComp.children) targetComp.children = [];
    compIndex = targetComp.children?.length as number;
  }
  return {
    targetComp,
    compIndex
  };
}

// 获取组件的上一级组件
export function getParentComp(rootComp: DScreen.CompObj, comp: DScreen.CompObj) {
  let parentComp: DScreen.CompObj = {} as DScreen.CompObj;
  let index = 0;
  function getComp(root: DScreen.CompObj, target: DScreen.CompObj) {
    if (root.children) {
      root.children.forEach((item, idx) => {
        if (item.id === target.id) {
          parentComp = root;
          index = idx;
        } else {
          getComp(item, comp);
        }
      });
    }
  }
  getComp(rootComp, comp);
  return { parentComp, index };
}
