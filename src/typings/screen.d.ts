/** 大屏全局类型定义 */
declare namespace DScreen {
  interface CompObj {
    /** 组件名称 */
    name: string;
    /** 组件类型 */
    type: string;
    /** 组件key */
    key: string;
    /** 组件内子组件 */
    children: CompObj[];
    /** 是否可以加子组件 */
    isContainer: boolean;
    /** 组件id */
    id: string;
  }
}
