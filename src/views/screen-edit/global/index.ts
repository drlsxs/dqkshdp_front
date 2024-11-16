export function getComponent(event:any,rootComp:DScreen.CompObj) {
  let targetComp: DScreen.CompObj = event.target.__vueParentComponent.props.comp;
  // 如果没有props-comp
  if (!targetComp) {
    targetComp = rootComp;
  }
  // 如果他不是容器组件
  if (!targetComp.isContainer) {

  }

  return targetComp;

}



