/** 大屏全局类型定义 */
declare namespace DScreen {
  namespace Global {
    type basic = 'container' | 'text';
    type advance = 'map';
  }

  interface Slots {
    /** 插槽名称 */
    name: string;
    /** 插槽key */
    key: string;
    /** 插槽类型 */
    type?: string;
  }

  interface CompObj {
    /** 组件类名 */
    class?: string;
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
    /** 文档信息 */
    domInfo?: Record<string, any>;
    /** 组件配置表 */
    config?: Record<string, any>[];
    /** 组件配置值 */
    props?: Record<string, any>;
    /** 需要动态修改 */
    dynamic?: boolean;
    /** 插槽配置 */
    slots?: Slots[];
    /** 自身被插入的插槽位置 */
    slotKey?: string;
  }

  // 组件类型
  namespace comType {
    type schema = {
      basic: { title: string } & Record<Global.basic, any>;
      advance: { title: string } & Record<Global.advance, any>;
    };
  }
}
