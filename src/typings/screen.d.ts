/** 大屏全局类型定义 */
declare namespace DScreen {
  namespace Global {
    type basic = 'container' | 'text';
    type advance = 'map';
  }

  interface CompObj {
    /** 组件名称 */
    name: string;
    /** 组件类型 */
    type: string;
    /** 组件key */
    key: string;
    /** 组件内子组件 */
    children?: CompObj[];
    /** 是否可以加子组件 */
    isContainer: boolean;
    /** 组件id */
    id: string;
    /** 是否鼠标移入 */
    _isHover?: boolean;
    /** 是否鼠标拖拽移入 */
    _isDragOver?: boolean;
    /** 是否内部拖拽 */
    _isInnerDrag?: boolean;
    /** 是否被点击 */
    _isClick?: boolean;
    /** 组件样式 */
    style: Record<string, string>;
  }

  // 组件类型
  namespace comType {
    type schema = {
      basic: { title: string } & Record<Global.basic, any>;
      advance: { title: string } & Record<Global.advance, any>;
    };
  }
}
