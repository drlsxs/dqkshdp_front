<script setup lang="ts">
import { ref } from 'vue';
import CompCard from '../comp-card.vue';

const compList = ref<DScreen.CompObj[]>([
  {
    name: '标签',
    type: 'external',
    key: 'NTag',
    isContainer: false,
    id: '',
    styleData: {},
    config: [
      {
        name: '数据',
        type: 'group',
        key: 'data',
        group: [
          {
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: '超人不会飞'
          }
        ]
      },
      {
        name: '边框',
        key: 'bordered',
        type: 'boolean',
        control: 'switch',
        value: true
      },
      {
        name: '是否可选',
        key: 'checkable',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '是否被选中',
        key: 'checked',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '是否可关闭',
        key: 'closable',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '是否圆角',
        key: 'round',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '大小',
        key: 'size',
        type: 'string',
        control: 'input',
        value: 'small'
      },
      {
        name: '是否加粗',
        key: 'strong',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '类型',
        key: 'type',
        type: 'string',
        control: 'input',
        value: 'default'
      }
    ]
  },
  {
    name: '评分',
    type: 'external',
    key: 'NRate',
    isContainer: false,
    id: '',
    styleData: {}
  },
  {
    name: '按钮',
    type: 'external',
    key: 'NButton',
    isContainer: false,
    id: '',
    styleData: {},
    config: [
      {
        name: '数据',
        type: 'group',
        key: 'data',
        group: [
          {
            name: '文本',
            key: 'content',
            type: 'string',
            control: 'textarea',
            value: 'Default'
          }
        ]
      },
      {
        name: '边框',
        key: 'bordered',
        type: 'boolean',
        control: 'switch',
        value: true
      },
      {
        name: '是否可选',
        key: 'checkable',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '是否被选中',
        key: 'checked',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '是否可关闭',
        key: 'closable',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '是否圆角',
        key: 'round',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '大小',
        key: 'size',
        type: 'string',
        control: 'input',
        value: 'small'
      },
      {
        name: '是否加粗',
        key: 'strong',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '类型',
        key: 'type',
        type: 'string',
        control: 'input',
        value: 'default'
      }
    ],
    props: {
      onClick: () => {
        console.log(111111, '按钮');
      }
    }
  },
  {
    name: '日历',
    type: 'external',
    key: 'NCalendar',
    isContainer: false,
    id: '',
    styleData: {}
  },
  {
    name: '无数据',
    type: 'external',
    key: 'NEmpty',
    isContainer: false,
    id: '',
    styleData: {}
  },
  {
    name: '分页',
    type: 'external',
    key: 'NPagination',
    isContainer: false,
    id: '',
    styleData: {},
    config: [
      {
        name: '总页数',
        key: 'page-count',
        type: 'number',
        control: 'inputNumber',
        value: 100
      },
      {
        name: '当前页',
        key: 'page',
        type: 'number',
        control: 'inputNumber',
        value: 1
      },
      {
        name: '默认当前页',
        key: 'default-page',
        type: 'number',
        control: 'inputNumber',
        value: 1
      }
    ]
  },
  {
    name: '标签页',
    type: 'external',
    key: 'NTabs',
    isContainer: true,
    id: '',
    styleData: {
      height: '300px'
    },
    childKey: 'NTabPane'
  },
  {
    name: '标签页面板',
    type: 'external',
    key: 'NTabPane',
    isContainer: true,
    dynamic: true,
    id: '',
    styleData: {
      height: '100%'
    },
    parentKey: 'NTabs',
    config: [
      {
        name: '标签名',
        key: 'name',
        type: 'string',
        control: 'input',
        value: 'tab'
      },
      {
        name: '标签标题',
        key: 'tab',
        type: 'string',
        control: 'input',
        value: '标签页面板'
      }
    ],
    props: {
      name: 'tab',
      tab: '标签页面板'
    }
  },
  {
    name: '下拉菜单',
    type: 'external',
    key: 'NDropdown',
    isContainer: true,
    id: '',
    styleData: {
      height: '300px'
    },
    children: [
      {
        name: '按钮',
        type: 'external',
        key: 'NButton',
        isContainer: false,
        id: '',
        styleData: {},
        props: {
          content: '下拉菜单'
        }
      }
    ]
  },
  {
    name: '列表',
    type: 'external',
    key: 'NList',
    isContainer: true,
    id: '',
    styleData: {
      'padding-bottom': '10px'
    },
    slots: [
      {
        name: '默认',
        key: 'default'
      },
      {
        name: '列表底部',
        key: 'footer'
      },
      {
        name: '列表头部',
        key: 'header'
      }
    ],
    childKey: 'NListItem'
  },
  {
    name: '列表项',
    type: 'external',
    key: 'NListItem',
    parentKey: 'NList',
    isContainer: true,
    id: '',
    styleData: {},
    slots: [
      {
        key: 'default',
        name: '默认'
      },
      {
        key: 'prefix',
        name: '首部内容'
      },
      {
        key: 'suffix',
        name: '尾部内容'
      }
    ]
  },
  {
    name: '折叠面板',
    type: 'external',
    key: 'NCollapse',
    isContainer: true,
    id: '',
    styleData: {
      'padding-bottom': '10px'
    },
    slots: [
      {
        key: 'default',
        name: '默认'
      },
      {
        key: 'arrow',
        name: '自定义图标'
      },
      {
        key: 'header-extra',
        name: '头部额外'
      }
    ],
    childKey: 'NCollapseItem'
  },
  {
    name: '折叠面板项',
    type: 'external',
    key: 'NCollapseItem',
    parentKey: 'NCollapse',
    isContainer: true,
    id: '',
    styleData: {},
    slots: [
      {
        key: 'default',
        name: '默认'
      },
      {
        key: 'arrow',
        name: '自定义图标'
      },
      {
        key: 'header',
        name: '头部内容'
      },
      {
        key: 'header-extra',
        name: '头部额外'
      }
    ],
    config: [
      {
        name: '标题',
        key: 'title',
        type: 'string',
        control: 'input',
        value: '标题'
      },
      {
        name: '名称',
        key: 'name',
        type: 'string',
        control: 'input',
        value: 'name'
      }
    ],
    props: {
      title: '标题',
      name: 'title'
    }
  },
  {
    name: '面包屑',
    type: 'external',
    key: 'NBreadcrumb',
    isContainer: true,
    id: '',
    styleData: {},
    props: {},
    childKey: 'NBreadcrumbItem'
  },
  {
    name: '面包屑项',
    type: 'external',
    key: 'NBreadcrumbItem',
    parentKey: 'NBreadcrumb',
    isContainer: true,
    id: '',
    styleData: {},
    props: {}
  },
  {
    name: '警示信息',
    type: 'external',
    key: 'NAlert',
    isContainer: true,
    id: '',
    styleData: {},
    props: {
      title: '标题',
      type: 'info'
    }
  },
  {
    name: '表单',
    type: 'external',
    key: 'NForm',
    isContainer: true,
    id: '',
    styleData: {
      'padding-right': '0'
    },
    props: {},
    childKey: 'NFormItem',
    config: [
      {
        name: '值',
        key: 'model',
        type: 'object',
        control: '',
        value: {},
        dropdown: true
      }
    ]
  },
  {
    name: '表单项',
    type: 'external',
    key: 'NFormItem',
    isContainer: true,
    id: '',
    styleData: {
      padding: '0'
    },
    parentKey: 'NForm',
    props: {
      label: '标签',
      path: 'name'
    },
    config: [
      {
        name: '标签名',
        key: 'label',
        type: 'string',
        control: 'input',
        value: ''
      },
      {
        name: '标签路径',
        key: 'path',
        type: 'string',
        control: 'input',
        value: '',
        dropdown: true
      }
    ]
  },
  {
    name: '颜色选择器',
    type: 'external',
    key: 'NColorPicker',
    isContainer: false,
    id: '',
    styleData: {},
    props: {}
  },
  {
    name: '文本输入',
    type: 'external',
    key: 'NInput',
    isContainer: false,
    id: '',
    styleData: {},
    props: {
      model: {},
      path: ''
    },
    config: [
      {
        name: '值',
        key: 'value',
        type: 'string',
        control: 'textarea',
        value: '',
        vModel: true,
        dropData: {
          dropItem: 'model',
          dropType: 'object',
          dropKey: 'path',
          dropIndex: 0
        }
      }
    ]
  },
  {
    name: '单选',
    type: 'external',
    key: 'NRadio',
    isContainer: true,
    id: '',
    styleData: {},
    props: {}
  },
  {
    name: '滑动选择',
    type: 'external',
    key: 'NSlider',
    isContainer: true,
    id: '',
    styleData: {},
    props: {},
    slots: [
      {
        key: 'thumb',
        name: '滑块按钮'
      }
    ]
  },
  {
    name: '开关',
    type: 'external',
    key: 'NSwitch',
    isContainer: false,
    id: '',
    styleData: {},
    props: {}
  },
  {
    name: '图像',
    type: 'external',
    key: 'NImage',
    isContainer: false,
    id: '',
    styleData: {},
    props: {},
    config: [
      {
        name: '图片地址',
        key: 'src',
        type: 'string',
        control: 'input',
        value: ''
      },
      {
        name: '图片宽度',
        key: 'width',
        type: 'string',
        control: 'input',
        value: '100'
      },
      {
        name: '图片高度',
        key: 'height',
        type: 'string',
        control: 'input',
        value: '100'
      },
      {
        name: '图片说明',
        key: 'alt',
        type: 'string',
        control: 'input',
        value: '图标加载失败'
      },
      {
        name: '禁用预览',
        key: 'preview-disabled',
        type: 'boolean',
        control: 'switch',
        value: true
      }
    ]
  },
  {
    name: '卡片',
    type: 'external',
    key: 'NCard',
    isContainer: true,
    id: '',
    styleData: {},
    props: {},
    config: [
      {
        name: '是否显示卡片边框',
        key: 'bordered',
        type: 'boolean',
        control: 'switch',
        value: true
      },
      {
        name: '是否允许关闭',
        key: 'closable',
        type: 'boolean',
        control: 'switch',
        value: false
      },
      {
        name: '卡片是否可悬浮',
        key: 'hoverable',
        type: 'boolean',
        control: 'switch',
        value: true
      }
    ],
    slots: [
      {
        key: 'cover',
        name: '覆盖内容'
      },
      {
        key: 'header',
        name: '头部内容'
      },
      {
        key: 'default',
        name: '卡片内容'
      },
      {
        key: 'footer',
        name: '底部内容'
      },
      {
        key: 'action',
        name: '操作区域内容'
      }
    ]
  }
]);
const compRef = ref();
</script>

<template>
  <div>
    <NGrid ref="compRef" class="bg-gray-500/5 p-4" :cols="3" x-gap="5" y-gap="5">
      <NGi v-for="comp in compList" :key="comp.id">
        <CompCard :comp="comp"></CompCard>
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped></style>
