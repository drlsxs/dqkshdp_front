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
  interface DropData {
    dropItem: string;
    dropType: string;
    dropKey: string;
    dropIndex: number;
  }

  interface DomInfo {
    el: string;
    width: number;
    height: number;
    top: number;
    left: number;
    type: string;
    name: string;
  }

  interface ConfigItem {
    name: string;
    key: string;
    type: string;
    control?: string;
    value?: unknown;
    vModel?: boolean;
    show?: boolean;
    dropdown?: boolean;
    options?: Record<string, any>[];
    group?: ConfigItem[];
    dropData?: DropData;
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
    /** 组件样式 */
    styleData: Record<string, any>;
    /** 文档信息 */
    domInfo?: DomInfo;
    /** 组件配置表 */
    config?: ConfigItem[];
    /** 组件配置值 */
    props?: Record<string, any>;
    /** 需要动态修改 */
    dynamic?: boolean;
    /** 插槽配置 */
    slots?: Slots[];
    /** 自身被插入的插槽位置 */
    slotKey?: string;
    /** 指定父元素key */
    parentKey?: string;
    /** 指定子元素key */
    childKey?: string;
  }

  // 组件类型
  namespace comType {
    type schema = {
      basic: { title: string } & Record<Global.basic, any>;
      advance: { title: string } & Record<Global.advance, any>;
    };
  }
}
