import { defineStore } from 'pinia';
import type { Component, VNode } from 'vue';
import { h, ref } from 'vue';
import type { TreeOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { FileTrayFullOutline } from '@vicons/ionicons5';
import { jsonClone } from '@sa/utils';
import { SetupStoreId } from '@/enum';
import { addUnit, compCommonStyle, containerDefaultStyle } from '@/views/screen-edit/global/config/style';
import buildInComp from '@/store/modules/screen/comps/buiidin';
import { getPropsData, setFallCompChild } from '@/views/screen-edit/global/config/comp-property';

export const useScreenStore = defineStore(SetupStoreId.Screen, () => {
  const pageList = ref<DScreen.CompObj[]>([
    {
      id: 'page1',
      name: '页面 1',
      key: 'page',
      type: 'group',
      children: [
        {
          name: '弹性容器',
          type: 'buildIn',
          key: 'DLayout',
          isContainer: true,
          id: '5cb024f5-8f42-49cb-8400-25ec50b856f9',
          styleData: {
            fontSize: '14',
            fontWeight: '',
            fontStyle: '',
            fontFamily: '',
            textDecoration: '',
            color: '#000',
            display: 'flex',
            textAlign: 'left',
            lineHeight: '1.5',
            width: '',
            height: '',
            paddingLeft: '200',
            paddingRight: '200',
            paddingTop: '0',
            paddingBottom: '0',
            marginLeft: '0',
            marginRight: '0',
            marginTop: '0',
            marginBottom: '0',
            borderStyle: 'solid',
            borderWidth: '',
            borderColor: '',
            backgroundColor: 'rgba(231, 231, 231, 1)',
            boxShadow: '',
            borderRadius: '',
            opacity: 100,
            position: '',
            flexDirection: '',
            minHeight: '',
            justifyContent: 'space-between',
            alignItems: '',
            unit: {
              fontSize: 'px',
              width: 'px',
              height: 'px',
              paddingLeft: 'px',
              paddingRight: 'px',
              paddingTop: 'px',
              paddingBottom: 'px',
              marginLeft: 'px',
              marginRight: 'px',
              marginTop: 'px',
              marginBottom: 'px',
              borderRadius: 'px',
              borderWidth: 'px'
            }
          },
          slots: [
            {
              name: '默认',
              type: '',
              key: 'default'
            }
          ],
          slotKey: 'default',
          config: [],
          props: {},
          children: [
            {
              name: '弹性容器',
              type: 'buildIn',
              key: 'DLayout',
              isContainer: true,
              id: '914ade83-992f-4d90-a850-c9cee59780f8',
              styleData: {
                fontSize: '14',
                fontWeight: '',
                fontStyle: '',
                fontFamily: '',
                textDecoration: '',
                color: '#000',
                display: 'flex',
                textAlign: 'left',
                lineHeight: '1.5',
                width: '',
                height: '',
                paddingLeft: '5',
                paddingRight: '5',
                paddingTop: '5',
                paddingBottom: '5',
                marginLeft: '2',
                marginRight: '2',
                marginTop: '2',
                marginBottom: '2',
                borderStyle: 'solid',
                borderWidth: '',
                borderColor: '',
                backgroundColor: '',
                boxShadow: '',
                borderRadius: '',
                opacity: 100,
                position: '',
                flexDirection: '',
                minHeight: '',
                justifyContent: '',
                alignItems: 'center',
                unit: {
                  fontSize: 'px',
                  width: 'px',
                  height: 'px',
                  paddingLeft: 'px',
                  paddingRight: 'px',
                  paddingTop: 'px',
                  paddingBottom: 'px',
                  marginLeft: 'px',
                  marginRight: 'px',
                  marginTop: 'px',
                  marginBottom: 'px',
                  borderRadius: 'px',
                  borderWidth: 'px'
                }
              },
              slots: [
                {
                  name: '默认',
                  type: '',
                  key: 'default'
                }
              ],
              slotKey: 'default',
              config: [],
              props: {},
              children: [
                {
                  name: '图像',
                  type: 'external',
                  key: 'NImage',
                  isContainer: false,
                  id: '170bf3ee-6134-4f49-8061-8be3fed93712',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: '',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '0',
                    paddingRight: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                    marginLeft: '0',
                    marginRight: '0',
                    marginTop: '0',
                    marginBottom: '0',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '80',
                    opacity: 100,
                    position: '',
                    flexDirection: '',
                    minHeight: '',
                    justifyContent: '',
                    alignItems: '',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  props: {
                    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
                    width: '60',
                    height: '60',
                    alt: '图标加载失败',
                    'preview-disabled': true
                  },
                  config: [
                    {
                      name: '图片地址',
                      key: 'src',
                      type: 'string',
                      control: 'input',
                      value: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
                    },
                    {
                      name: '图片宽度',
                      key: 'width',
                      type: 'string',
                      control: 'input',
                      value: '60'
                    },
                    {
                      name: '图片高度',
                      key: 'height',
                      type: 'string',
                      control: 'input',
                      value: '60'
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
                  ],
                  slotKey: 'default',
                  slots: []
                },
                {
                  name: '文字',
                  type: 'buildIn',
                  key: 'DText',
                  isContainer: false,
                  id: '6324e273-3c79-4d72-ad5d-1c3216fa4308',
                  styleData: {
                    fontSize: '26',
                    fontWeight: 'bold',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '0',
                    paddingRight: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                    marginLeft: '20',
                    marginRight: '0',
                    marginTop: '0',
                    marginBottom: '0',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: '',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  config: [
                    {
                      name: '数据',
                      type: 'group',
                      key: 'data',
                      group: [
                        {
                          name: '文本内容',
                          key: 'content',
                          type: 'string',
                          control: 'textarea',
                          value: '虎牙直播\n'
                        }
                      ]
                    }
                  ],
                  slotKey: 'default',
                  props: {
                    content: '虎牙直播\n'
                  },
                  slots: []
                },
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: '96fe33d9-b87a-470c-a84b-fbd2b0b4e95c',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '0',
                    paddingRight: '20',
                    paddingTop: '0',
                    paddingBottom: '0',
                    marginLeft: '50',
                    marginRight: '0',
                    marginTop: '0',
                    marginBottom: '0',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'row',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '62bee4d6-a6ee-496f-ae58-3f8e034e4303',
                      styleData: {
                        fontSize: '18',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '19',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '首页'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '首页'
                      },
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '023cc994-297d-42a9-8abf-d5f054a07b8a',
                      styleData: {
                        fontSize: '18',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '10',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '直播'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '直播'
                      },
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '78d8e8ab-b0fd-4048-9121-39b49a9673e0',
                      styleData: {
                        fontSize: '18',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '10',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '分类\n'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '分类\n'
                      },
                      slots: []
                    },
                    {
                      name: '图像',
                      type: 'external',
                      key: 'NImage',
                      isContainer: false,
                      id: 'e10f8c3b-4d26-4dd4-b65e-3c1282ba76a4',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '10',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      props: {
                        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                        width: '30',
                        height: '30',
                        alt: '图标加载失败',
                        'preview-disabled': true
                      },
                      config: [
                        {
                          name: '图片地址',
                          key: 'src',
                          type: 'string',
                          control: 'input',
                          value: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                        },
                        {
                          name: '图片宽度',
                          key: 'width',
                          type: 'string',
                          control: 'input',
                          value: '30'
                        },
                        {
                          name: '图片高度',
                          key: 'height',
                          type: 'string',
                          control: 'input',
                          value: '30'
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
                      ],
                      slotKey: 'default',
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: 'a20c8c0a-df93-4a10-bf8d-95651a651a81',
                      styleData: {
                        fontSize: '18',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '10',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '视频'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '视频'
                      },
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: 'f912d998-ee31-4f5d-8333-d6473b429e41',
                      styleData: {
                        fontSize: '18',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '游戏'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '游戏'
                      },
                      slots: []
                    }
                  ]
                },
                {
                  name: '文本输入',
                  type: 'external',
                  key: 'NInput',
                  isContainer: false,
                  id: '8be90399-1b50-49c4-bb83-98b5c2f2e203',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: '',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '200',
                    height: '30',
                    paddingLeft: '0',
                    paddingRight: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                    marginLeft: '0',
                    marginRight: '0',
                    marginTop: '0',
                    marginBottom: '0',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '16',
                    opacity: 100,
                    position: '',
                    flexDirection: '',
                    minHeight: '',
                    justifyContent: '',
                    alignItems: '',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  props: {
                    model: {},
                    path: '',
                    value: ''
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
                        dropKey: 'path'
                      }
                    }
                  ],
                  slotKey: 'default',
                  slots: []
                }
              ]
            },
            {
              name: '弹性容器',
              type: 'buildIn',
              key: 'DLayout',
              isContainer: true,
              id: 'ab9c73a1-7203-470d-bc20-9234e33b3ad8',
              styleData: {
                fontSize: '14',
                fontWeight: '',
                fontStyle: '',
                fontFamily: '',
                textDecoration: '',
                color: '#000',
                display: 'flex',
                textAlign: 'left',
                lineHeight: '1.5',
                width: '',
                height: '',
                paddingLeft: '5',
                paddingRight: '5',
                paddingTop: '5',
                paddingBottom: '5',
                marginLeft: '2',
                marginRight: '2',
                marginTop: '2',
                marginBottom: '2',
                borderStyle: 'solid',
                borderWidth: '',
                borderColor: '',
                backgroundColor: '',
                boxShadow: '',
                borderRadius: '',
                opacity: 100,
                position: '',
                flexDirection: 'row',
                minHeight: '',
                justifyContent: 'center',
                alignItems: 'center',
                unit: {
                  fontSize: 'px',
                  width: 'px',
                  height: 'px',
                  paddingLeft: 'px',
                  paddingRight: 'px',
                  paddingTop: 'px',
                  paddingBottom: 'px',
                  marginLeft: 'px',
                  marginRight: 'px',
                  marginTop: 'px',
                  marginBottom: 'px',
                  borderRadius: 'px',
                  borderWidth: 'px'
                }
              },
              slots: [
                {
                  name: '默认',
                  type: '',
                  key: 'default'
                }
              ],
              slotKey: 'default',
              config: [],
              props: {},
              children: [
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: 'ca842292-61d5-469f-9b39-4603ad44ec65',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '20',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'column',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '矢量图',
                      type: 'buildIn',
                      key: 'DSvg',
                      isContainer: false,
                      id: 'cd9fcbf8-74ca-4bd9-aa70-9c6ce9a5be45',
                      styleData: {
                        fontSize: '28',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slotKey: 'default',
                      config: [],
                      props: {},
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: 'f4e9acc2-a614-4791-8159-51570bffe115',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: 'IG粉丝站'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: 'IG粉丝站'
                      },
                      slots: []
                    }
                  ]
                },
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: '746e9c27-3d01-40ec-a8ae-ee15e64d35f9',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '20',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'column',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '矢量图',
                      type: 'buildIn',
                      key: 'DSvg',
                      isContainer: false,
                      id: '6eba81ba-8eac-442d-b950-0821dec3ecec',
                      styleData: {
                        fontSize: '28',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slotKey: 'default',
                      config: [],
                      props: {},
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '9af25dd1-0cb0-407d-a13e-84bbd92ed77e',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '开播'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '开播'
                      },
                      slots: []
                    }
                  ]
                },
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: '498fc3eb-1a9d-4f8b-9618-02c57af96c51',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '20',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'column',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '矢量图',
                      type: 'buildIn',
                      key: 'DSvg',
                      isContainer: false,
                      id: 'becc7f07-0ee0-425c-b2d0-1afec91fb132',
                      styleData: {
                        fontSize: '28',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slotKey: 'default',
                      config: [],
                      props: {},
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '068ff418-7b56-451e-a7ae-81844316f369',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '下载'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '下载'
                      },
                      slots: []
                    }
                  ]
                },
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: '65c0e95d-becd-4606-ac87-98b080aa7cf3',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '20',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'column',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '矢量图',
                      type: 'buildIn',
                      key: 'DSvg',
                      isContainer: false,
                      id: '40ad04b6-b253-4fb6-9949-8bc7e22bc00f',
                      styleData: {
                        fontSize: '28',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slotKey: 'default',
                      config: [],
                      props: {},
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: 'b013469e-2f5f-499f-b6b6-6d5a1b94c6b4',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '关注'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '关注'
                      },
                      slots: []
                    }
                  ]
                },
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: '4c5f7e4d-9b82-4552-8868-06c8fcaf8429',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '20',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'column',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '矢量图',
                      type: 'buildIn',
                      key: 'DSvg',
                      isContainer: false,
                      id: '76356917-6f25-464c-9599-50519a448c1f',
                      styleData: {
                        fontSize: '28',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slotKey: 'default',
                      config: [],
                      props: {},
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '5b2d0886-fb1f-4ddb-b270-f3b760fea32e',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '历史'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '历史'
                      },
                      slots: []
                    }
                  ]
                },
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: '83628ffb-0581-4026-9375-23d97197b59f',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '20',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'column',
                    minHeight: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '矢量图',
                      type: 'buildIn',
                      key: 'DSvg',
                      isContainer: false,
                      id: '9142c085-f748-4d44-9a9e-9b3ee24f41ec',
                      styleData: {
                        fontSize: '28',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slotKey: 'default',
                      config: [],
                      props: {},
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '565ef4e2-0607-4f53-9ded-58430eb5d673',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '任务'
                            }
                          ]
                        }
                      ],
                      slotKey: 'default',
                      props: {
                        content: '任务'
                      },
                      slots: []
                    }
                  ]
                },
                {
                  name: '图像',
                  type: 'external',
                  key: 'NImage',
                  isContainer: false,
                  id: 'd74b2e65-ba08-4a81-9e26-6ae49eb9a741',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: '',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '0',
                    paddingRight: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                    marginLeft: '0',
                    marginRight: '0',
                    marginTop: '0',
                    marginBottom: '0',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '40',
                    opacity: 100,
                    position: '',
                    flexDirection: '',
                    minHeight: '',
                    justifyContent: '',
                    alignItems: '',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px'
                    }
                  },
                  props: {
                    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
                    width: '40',
                    height: '40',
                    alt: '图标加载失败',
                    'preview-disabled': true
                  },
                  config: [
                    {
                      name: '图片地址',
                      key: 'src',
                      type: 'string',
                      control: 'input',
                      value: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
                    },
                    {
                      name: '图片宽度',
                      key: 'width',
                      type: 'string',
                      control: 'input',
                      value: '40'
                    },
                    {
                      name: '图片高度',
                      key: 'height',
                      type: 'string',
                      control: 'input',
                      value: '40'
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
                  ],
                  slotKey: 'default',
                  slots: []
                }
              ]
            }
          ]
        },
        {
          name: '弹性容器',
          type: 'buildIn',
          key: 'DLayout',
          isContainer: true,
          id: '1e8921ca-1372-4652-9b18-dd5c727486b6',
          styleData: {
            fontSize: '14',
            fontWeight: '',
            fontStyle: '',
            fontFamily: '',
            textDecoration: '',
            color: '#000',
            display: '',
            textAlign: 'left',
            lineHeight: '1.5',
            width: '',
            height: '93',
            paddingLeft: '0',
            paddingRight: '0',
            paddingTop: '0',
            paddingBottom: '0',
            marginLeft: '0',
            marginRight: '0',
            marginTop: '0',
            marginBottom: '0',
            borderStyle: 'solid',
            borderWidth: '',
            borderColor: '',
            backgroundColor: '',
            boxShadow: '',
            borderRadius: '',
            opacity: 100,
            position: '',
            flexDirection: '',
            minHeight: '',
            justifyContent: '',
            alignItems: '',
            unit: {
              fontSize: 'px',
              width: 'px',
              height: '%',
              paddingLeft: 'px',
              paddingRight: 'px',
              paddingTop: 'px',
              paddingBottom: 'px',
              marginLeft: 'px',
              marginRight: 'px',
              marginTop: 'px',
              marginBottom: 'px',
              borderRadius: 'px',
              borderWidth: 'px',
              rowGap: 'px',
              columnGap: 'px'
            }
          },
          slots: [
            {
              name: '默认',
              type: '',
              key: 'default'
            }
          ],
          slotKey: 'default',
          config: [],
          props: {},
          children: [
            {
              name: '图层',
              type: 'native',
              key: 'DIV',
              isContainer: true,
              id: '9e55517e-1ba8-4e74-aaa3-c108f3096759',
              styleData: {
                fontSize: '14',
                fontWeight: '',
                fontStyle: '',
                fontFamily: '',
                textDecoration: '',
                color: '#000',
                display: '',
                textAlign: 'left',
                lineHeight: '1.5',
                width: '300',
                height: '100',
                paddingLeft: '5',
                paddingRight: '5',
                paddingTop: '5',
                paddingBottom: '5',
                marginLeft: '0',
                marginRight: '0',
                marginTop: '0',
                marginBottom: '0',
                borderStyle: 'solid',
                borderWidth: '',
                borderColor: '',
                backgroundColor: 'rgba(191, 191, 191, 1)',
                boxShadow: '',
                borderRadius: '',
                opacity: 100,
                position: '',
                flexDirection: '',
                minHeight: '',
                justifyContent: '',
                alignItems: '',
                unit: {
                  fontSize: 'px',
                  width: 'px',
                  height: '%',
                  paddingLeft: 'px',
                  paddingRight: 'px',
                  paddingTop: 'px',
                  paddingBottom: 'px',
                  marginLeft: 'px',
                  marginRight: 'px',
                  marginTop: 'px',
                  marginBottom: 'px',
                  borderRadius: 'px',
                  borderWidth: 'px'
                }
              },
              slotKey: 'default',
              config: [],
              props: {},
              slots: [
                {
                  name: '默认',
                  key: 'default',
                  type: ''
                }
              ],
              children: [
                {
                  name: '弹性容器',
                  type: 'buildIn',
                  key: 'DLayout',
                  isContainer: true,
                  id: '1ea96ecb-2630-4c8a-9f57-bee4d8680591',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: 'flex',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '',
                    height: '',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '2',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: 'column',
                    minHeight: '',
                    justifyContent: '',
                    alignItems: '',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px',
                      rowGap: 'px',
                      columnGap: 'px'
                    },
                    rowGap: '10'
                  },
                  slots: [
                    {
                      name: '默认',
                      type: '',
                      key: 'default'
                    }
                  ],
                  slotKey: 'default',
                  config: [],
                  props: {},
                  children: [
                    {
                      name: '弹性容器',
                      type: 'buildIn',
                      key: 'DLayout',
                      isContainer: true,
                      id: '42ed7bf0-61fd-463c-92ca-14e5c995bb3a',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: 'flex',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '5',
                        paddingRight: '5',
                        paddingTop: '5',
                        paddingBottom: '5',
                        marginLeft: '2',
                        marginRight: '2',
                        marginTop: '2',
                        marginBottom: '2',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: 'center',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slots: [
                        {
                          name: '默认',
                          type: '',
                          key: 'default'
                        }
                      ],
                      slotKey: 'default',
                      config: [],
                      props: {},
                      children: [
                        {
                          name: '矢量图',
                          type: 'buildIn',
                          key: 'DSvg',
                          isContainer: false,
                          id: 'a9928aa3-dccb-401d-8f56-d40c807eb215',
                          styleData: {
                            fontSize: '28',
                            fontWeight: '',
                            fontStyle: '',
                            fontFamily: '',
                            textDecoration: '',
                            color: '#000',
                            display: '',
                            textAlign: 'left',
                            lineHeight: '1.5',
                            width: '',
                            height: '',
                            paddingLeft: '0',
                            paddingRight: '0',
                            paddingTop: '0',
                            paddingBottom: '0',
                            marginLeft: '0',
                            marginRight: '10',
                            marginTop: '0',
                            marginBottom: '0',
                            borderStyle: 'solid',
                            borderWidth: '',
                            borderColor: '',
                            backgroundColor: '',
                            boxShadow: '',
                            borderRadius: '',
                            opacity: 100,
                            position: '',
                            flexDirection: '',
                            minHeight: '',
                            justifyContent: '',
                            alignItems: '',
                            unit: {
                              fontSize: 'px',
                              width: 'px',
                              height: 'px',
                              paddingLeft: 'px',
                              paddingRight: 'px',
                              paddingTop: 'px',
                              paddingBottom: 'px',
                              marginLeft: 'px',
                              marginRight: 'px',
                              marginTop: 'px',
                              marginBottom: 'px',
                              borderRadius: 'px',
                              borderWidth: 'px'
                            }
                          },
                          slotKey: 'default',
                          config: [],
                          props: {},
                          slots: []
                        },
                        {
                          name: '文字',
                          type: 'buildIn',
                          key: 'DText',
                          isContainer: false,
                          id: 'c9bdf256-e5e8-46e1-9099-78a54256a3ea',
                          styleData: {
                            fontSize: '14',
                            fontWeight: '',
                            fontStyle: '',
                            fontFamily: '',
                            textDecoration: '',
                            color: '#000',
                            display: '',
                            textAlign: 'left',
                            lineHeight: '1.5',
                            width: '',
                            height: '',
                            paddingLeft: '0',
                            paddingRight: '0',
                            paddingTop: '0',
                            paddingBottom: '0',
                            marginLeft: '0',
                            marginRight: '0',
                            marginTop: '0',
                            marginBottom: '0',
                            borderStyle: 'solid',
                            borderWidth: '',
                            borderColor: '',
                            backgroundColor: '',
                            boxShadow: '',
                            borderRadius: '',
                            opacity: 100,
                            position: '',
                            flexDirection: '',
                            minHeight: '',
                            justifyContent: '',
                            alignItems: '',
                            unit: {
                              fontSize: 'px',
                              width: 'px',
                              height: 'px',
                              paddingLeft: 'px',
                              paddingRight: 'px',
                              paddingTop: 'px',
                              paddingBottom: 'px',
                              marginLeft: 'px',
                              marginRight: 'px',
                              marginTop: 'px',
                              marginBottom: 'px',
                              borderRadius: 'px',
                              borderWidth: 'px'
                            }
                          },
                          config: [
                            {
                              name: '数据',
                              type: 'group',
                              key: 'data',
                              group: [
                                {
                                  name: '文本内容',
                                  key: 'content',
                                  type: 'string',
                                  control: 'textarea',
                                  value: '我的关注'
                                }
                              ]
                            }
                          ],
                          slotKey: 'default',
                          props: {
                            content: '我的关注'
                          },
                          slots: []
                        }
                      ]
                    },
                    {
                      name: '弹性容器',
                      type: 'buildIn',
                      key: 'DLayout',
                      isContainer: true,
                      id: '1592d06d-aa84-452c-8f82-d915b1054749',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: 'flex',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '5',
                        paddingRight: '5',
                        paddingTop: '5',
                        paddingBottom: '5',
                        marginLeft: '2',
                        marginRight: '2',
                        marginTop: '2',
                        marginBottom: '2',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: 'center',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px'
                        }
                      },
                      slots: [
                        {
                          name: '默认',
                          type: '',
                          key: 'default'
                        }
                      ],
                      slotKey: 'default',
                      config: [],
                      props: {},
                      children: [
                        {
                          name: '矢量图',
                          type: 'buildIn',
                          key: 'DSvg',
                          isContainer: false,
                          id: '40e95a19-fa68-4420-85ee-397d069129bd',
                          styleData: {
                            fontSize: '28',
                            fontWeight: '',
                            fontStyle: '',
                            fontFamily: '',
                            textDecoration: '',
                            color: '#000',
                            display: '',
                            textAlign: 'left',
                            lineHeight: '1.5',
                            width: '',
                            height: '',
                            paddingLeft: '0',
                            paddingRight: '0',
                            paddingTop: '0',
                            paddingBottom: '0',
                            marginLeft: '0',
                            marginRight: '10',
                            marginTop: '0',
                            marginBottom: '0',
                            borderStyle: 'solid',
                            borderWidth: '',
                            borderColor: '',
                            backgroundColor: '',
                            boxShadow: '',
                            borderRadius: '',
                            opacity: 100,
                            position: '',
                            flexDirection: '',
                            minHeight: '',
                            justifyContent: '',
                            alignItems: '',
                            unit: {
                              fontSize: 'px',
                              width: 'px',
                              height: 'px',
                              paddingLeft: 'px',
                              paddingRight: 'px',
                              paddingTop: 'px',
                              paddingBottom: 'px',
                              marginLeft: 'px',
                              marginRight: 'px',
                              marginTop: 'px',
                              marginBottom: 'px',
                              borderRadius: 'px',
                              borderWidth: 'px'
                            }
                          },
                          slotKey: 'default',
                          config: [],
                          props: {},
                          slots: []
                        },
                        {
                          name: '文字',
                          type: 'buildIn',
                          key: 'DText',
                          isContainer: false,
                          id: '5597e647-15f9-4d10-be77-9e6a34db0062',
                          styleData: {
                            fontSize: '14',
                            fontWeight: '',
                            fontStyle: '',
                            fontFamily: '',
                            textDecoration: '',
                            color: '#000',
                            display: '',
                            textAlign: 'left',
                            lineHeight: '1.5',
                            width: '',
                            height: '',
                            paddingLeft: '0',
                            paddingRight: '0',
                            paddingTop: '0',
                            paddingBottom: '0',
                            marginLeft: '0',
                            marginRight: '0',
                            marginTop: '0',
                            marginBottom: '0',
                            borderStyle: 'solid',
                            borderWidth: '',
                            borderColor: '',
                            backgroundColor: '',
                            boxShadow: '',
                            borderRadius: '',
                            opacity: 100,
                            position: '',
                            flexDirection: '',
                            minHeight: '',
                            justifyContent: '',
                            alignItems: '',
                            unit: {
                              fontSize: 'px',
                              width: 'px',
                              height: 'px',
                              paddingLeft: 'px',
                              paddingRight: 'px',
                              paddingTop: 'px',
                              paddingBottom: 'px',
                              marginLeft: 'px',
                              marginRight: 'px',
                              marginTop: 'px',
                              marginBottom: 'px',
                              borderRadius: 'px',
                              borderWidth: 'px'
                            }
                          },
                          config: [
                            {
                              name: '数据',
                              type: 'group',
                              key: 'data',
                              group: [
                                {
                                  name: '文本内容',
                                  key: 'content',
                                  type: 'string',
                                  control: 'textarea',
                                  value: '全部直播\n'
                                }
                              ]
                            }
                          ],
                          slotKey: 'default',
                          props: {
                            content: '全部直播\n'
                          },
                          slots: []
                        }
                      ]
                    },
                    {
                      name: '折叠面板',
                      type: 'external',
                      key: 'NCollapse',
                      isContainer: true,
                      id: '523a2ce2-64e3-4548-9ce1-af5bf493ca35',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px',
                          rowGap: 'px',
                          columnGap: 'px'
                        },
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
                      childKey: 'NCollapseItem',
                      slotKey: 'default',
                      config: [],
                      props: {},
                      children: [
                        {
                          name: '折叠面板项',
                          type: 'external',
                          key: 'NCollapseItem',
                          parentKey: 'NCollapse',
                          isContainer: true,
                          id: '9d94c3b7-bb3e-4423-9a05-aaa491ceb8c1',
                          styleData: {
                            fontSize: '14',
                            fontWeight: '',
                            fontStyle: '',
                            fontFamily: '',
                            textDecoration: '',
                            color: '#000',
                            display: '',
                            textAlign: 'left',
                            lineHeight: '1.5',
                            width: '',
                            height: '',
                            paddingLeft: '5',
                            paddingRight: '5',
                            paddingTop: '5',
                            paddingBottom: '5',
                            marginLeft: '2',
                            marginRight: '2',
                            marginTop: '2',
                            marginBottom: '2',
                            borderStyle: 'solid',
                            borderWidth: '',
                            borderColor: '',
                            backgroundColor: '',
                            boxShadow: '',
                            borderRadius: '',
                            opacity: 100,
                            position: '',
                            flexDirection: '',
                            minHeight: '',
                            justifyContent: '',
                            alignItems: '',
                            unit: {
                              fontSize: 'px',
                              width: 'px',
                              height: 'px',
                              paddingLeft: 'px',
                              paddingRight: 'px',
                              paddingTop: 'px',
                              paddingBottom: 'px',
                              marginLeft: 'px',
                              marginRight: 'px',
                              marginTop: 'px',
                              marginBottom: 'px',
                              borderRadius: 'px',
                              borderWidth: 'px',
                              rowGap: 'px',
                              columnGap: 'px'
                            }
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
                              key: 'header',
                              name: '头部内容'
                            },
                            {
                              key: 'header-extra',
                              name: '头部额外'
                            }
                          ],
                          dynamic: true,
                          config: [
                            {
                              name: '标题',
                              key: 'title',
                              type: 'string',
                              control: 'input',
                              value: '赛事直播2222222222'
                            },
                            {
                              name: '名称',
                              key: 'name',
                              type: 'string',
                              control: 'input',
                              value: '1122'
                            }
                          ],
                          props: {
                            title: '赛事直播2222222222',
                            name: '1122'
                          },
                          slotKey: 'default',
                          children: [
                            {
                              name: '弹性容器',
                              type: 'buildIn',
                              key: 'DLayout',
                              isContainer: true,
                              id: '00434af1-e9fb-45fe-a2f5-e033a2218b3a',
                              styleData: {
                                fontSize: '14',
                                fontWeight: '',
                                fontStyle: '',
                                fontFamily: '',
                                textDecoration: '',
                                color: '#000',
                                display: 'flex',
                                textAlign: 'left',
                                lineHeight: '1.5',
                                width: '',
                                height: '',
                                paddingLeft: '5',
                                paddingRight: '5',
                                paddingTop: '5',
                                paddingBottom: '5',
                                marginLeft: '2',
                                marginRight: '2',
                                marginTop: '2',
                                marginBottom: '2',
                                borderStyle: 'solid',
                                borderWidth: '',
                                borderColor: '',
                                backgroundColor: 'rgba(191, 190, 184, 1)',
                                boxShadow: '',
                                borderRadius: '7',
                                opacity: 100,
                                position: '',
                                flexDirection: 'column',
                                minHeight: '',
                                justifyContent: '',
                                alignItems: '',
                                unit: {
                                  fontSize: 'px',
                                  width: 'px',
                                  height: 'px',
                                  paddingLeft: 'px',
                                  paddingRight: 'px',
                                  paddingTop: 'px',
                                  paddingBottom: 'px',
                                  marginLeft: 'px',
                                  marginRight: 'px',
                                  marginTop: 'px',
                                  marginBottom: 'px',
                                  borderRadius: 'px',
                                  borderWidth: 'px',
                                  rowGap: 'px',
                                  columnGap: 'px'
                                },
                                rowGap: '5'
                              },
                              slots: [
                                {
                                  name: '默认',
                                  type: '',
                                  key: 'default'
                                }
                              ],
                              slotKey: 'default',
                              config: [],
                              props: {},
                              children: [
                                {
                                  name: '弹性容器',
                                  type: 'buildIn',
                                  key: 'DLayout',
                                  isContainer: true,
                                  id: 'baf285c1-b043-488a-8cd5-7834985bd166',
                                  styleData: {
                                    fontSize: '14',
                                    fontWeight: '',
                                    fontStyle: '',
                                    fontFamily: '',
                                    textDecoration: '',
                                    color: '#000',
                                    display: '',
                                    textAlign: 'left',
                                    lineHeight: '1.5',
                                    width: '',
                                    height: '',
                                    paddingLeft: '5',
                                    paddingRight: '5',
                                    paddingTop: '5',
                                    paddingBottom: '5',
                                    marginLeft: '2',
                                    marginRight: '2',
                                    marginTop: '2',
                                    marginBottom: '2',
                                    borderStyle: 'solid',
                                    borderWidth: '',
                                    borderColor: '',
                                    backgroundColor: '',
                                    boxShadow: '',
                                    borderRadius: '',
                                    opacity: 100,
                                    position: '',
                                    flexDirection: '',
                                    minHeight: '',
                                    justifyContent: '',
                                    alignItems: '',
                                    unit: {
                                      fontSize: 'px',
                                      width: 'px',
                                      height: 'px',
                                      paddingLeft: 'px',
                                      paddingRight: 'px',
                                      paddingTop: 'px',
                                      paddingBottom: 'px',
                                      marginLeft: 'px',
                                      marginRight: 'px',
                                      marginTop: 'px',
                                      marginBottom: 'px',
                                      borderRadius: 'px',
                                      borderWidth: 'px',
                                      rowGap: 'px',
                                      columnGap: 'px'
                                    }
                                  },
                                  slots: [
                                    {
                                      name: '默认',
                                      type: '',
                                      key: 'default'
                                    }
                                  ],
                                  slotKey: 'default',
                                  config: [],
                                  props: {},
                                  children: [
                                    {
                                      name: '矢量图',
                                      type: 'buildIn',
                                      key: 'DSvg',
                                      isContainer: false,
                                      id: 'f9c31c7f-ff5f-4e15-860a-aa0475c26da5',
                                      styleData: {
                                        fontSize: '20',
                                        fontWeight: '',
                                        fontStyle: '',
                                        fontFamily: '',
                                        textDecoration: '',
                                        color: '#000',
                                        display: '',
                                        textAlign: 'left',
                                        lineHeight: '1.5',
                                        width: '',
                                        height: '',
                                        paddingLeft: '0',
                                        paddingRight: '0',
                                        paddingTop: '10',
                                        paddingBottom: '0',
                                        marginLeft: '0',
                                        marginRight: '0',
                                        marginTop: '0',
                                        marginBottom: '0',
                                        borderStyle: 'solid',
                                        borderWidth: '',
                                        borderColor: '',
                                        backgroundColor: '',
                                        boxShadow: '',
                                        borderRadius: '',
                                        opacity: 100,
                                        position: '',
                                        flexDirection: '',
                                        minHeight: '',
                                        justifyContent: '',
                                        alignItems: '',
                                        unit: {
                                          fontSize: 'px',
                                          width: 'px',
                                          height: 'px',
                                          paddingLeft: 'px',
                                          paddingRight: 'px',
                                          paddingTop: 'px',
                                          paddingBottom: 'px',
                                          marginLeft: 'px',
                                          marginRight: 'px',
                                          marginTop: 'px',
                                          marginBottom: 'px',
                                          borderRadius: 'px',
                                          borderWidth: 'px',
                                          rowGap: 'px',
                                          columnGap: 'px'
                                        }
                                      },
                                      slotKey: 'default',
                                      config: [],
                                      props: {},
                                      slots: []
                                    },
                                    {
                                      name: '弹性容器',
                                      type: 'buildIn',
                                      key: 'DLayout',
                                      isContainer: true,
                                      id: '756c74d0-3c90-4afb-bbbc-cbf4ca9b1a0b',
                                      styleData: {
                                        fontSize: '14',
                                        fontWeight: '',
                                        fontStyle: '',
                                        fontFamily: '',
                                        textDecoration: '',
                                        color: '#000',
                                        display: 'flex',
                                        textAlign: 'left',
                                        lineHeight: '1.5',
                                        width: '',
                                        height: '',
                                        paddingLeft: '5',
                                        paddingRight: '5',
                                        paddingTop: '5',
                                        paddingBottom: '5',
                                        marginLeft: '2',
                                        marginRight: '2',
                                        marginTop: '2',
                                        marginBottom: '2',
                                        borderStyle: 'solid',
                                        borderWidth: '',
                                        borderColor: '',
                                        backgroundColor: '',
                                        boxShadow: '',
                                        borderRadius: '',
                                        opacity: 100,
                                        position: '',
                                        flexDirection: 'column',
                                        minHeight: '',
                                        justifyContent: 'left',
                                        alignItems: 'start',
                                        unit: {
                                          fontSize: 'px',
                                          width: 'px',
                                          height: 'px',
                                          paddingLeft: 'px',
                                          paddingRight: 'px',
                                          paddingTop: 'px',
                                          paddingBottom: 'px',
                                          marginLeft: 'px',
                                          marginRight: 'px',
                                          marginTop: 'px',
                                          marginBottom: 'px',
                                          borderRadius: 'px',
                                          borderWidth: 'px',
                                          rowGap: 'px',
                                          columnGap: 'px'
                                        }
                                      },
                                      slots: [
                                        {
                                          name: '默认',
                                          type: '',
                                          key: 'default'
                                        }
                                      ],
                                      slotKey: 'default',
                                      config: [],
                                      props: {},
                                      children: [
                                        {
                                          name: '文字',
                                          type: 'buildIn',
                                          key: 'DText',
                                          isContainer: false,
                                          id: '3aa2a092-d6a0-42c8-bc11-2a9ecdb2043a',
                                          styleData: {
                                            fontSize: '14',
                                            fontWeight: '',
                                            fontStyle: '',
                                            fontFamily: '',
                                            textDecoration: '',
                                            color: '#000',
                                            display: '',
                                            textAlign: 'left',
                                            lineHeight: '1.5',
                                            width: '',
                                            height: '',
                                            paddingLeft: '0',
                                            paddingRight: '0',
                                            paddingTop: '0',
                                            paddingBottom: '0',
                                            marginLeft: '0',
                                            marginRight: '0',
                                            marginTop: '0',
                                            marginBottom: '0',
                                            borderStyle: 'solid',
                                            borderWidth: '',
                                            borderColor: '',
                                            backgroundColor: '',
                                            boxShadow: '',
                                            borderRadius: '',
                                            opacity: 100,
                                            position: '',
                                            flexDirection: '',
                                            minHeight: '',
                                            justifyContent: '',
                                            alignItems: '',
                                            unit: {
                                              fontSize: 'px',
                                              width: 'px',
                                              height: 'px',
                                              paddingLeft: 'px',
                                              paddingRight: 'px',
                                              paddingTop: 'px',
                                              paddingBottom: 'px',
                                              marginLeft: 'px',
                                              marginRight: 'px',
                                              marginTop: 'px',
                                              marginBottom: 'px',
                                              borderRadius: 'px',
                                              borderWidth: 'px',
                                              rowGap: 'px',
                                              columnGap: 'px'
                                            }
                                          },
                                          config: [
                                            {
                                              name: '数据',
                                              type: 'group',
                                              key: 'data',
                                              group: [
                                                {
                                                  name: '文本内容',
                                                  key: 'content',
                                                  type: 'string',
                                                  control: 'textarea',
                                                  value: 'LPL第二赛段组内赛'
                                                }
                                              ]
                                            }
                                          ],
                                          slotKey: 'default',
                                          props: {
                                            content: 'LPL第二赛段组内赛'
                                          },
                                          slots: []
                                        },
                                        {
                                          name: '文字',
                                          type: 'buildIn',
                                          key: 'DText',
                                          isContainer: false,
                                          id: '6048a606-c80c-483d-9797-3e51f5cdd69e',
                                          styleData: {
                                            fontSize: '14',
                                            fontWeight: '',
                                            fontStyle: '',
                                            fontFamily: '',
                                            textDecoration: '',
                                            color: '#000',
                                            display: '',
                                            textAlign: 'left',
                                            lineHeight: '1.5',
                                            width: '',
                                            height: '',
                                            paddingLeft: '0',
                                            paddingRight: '0',
                                            paddingTop: '0',
                                            paddingBottom: '0',
                                            marginLeft: '0',
                                            marginRight: '0',
                                            marginTop: '0',
                                            marginBottom: '0',
                                            borderStyle: 'solid',
                                            borderWidth: '',
                                            borderColor: '',
                                            backgroundColor: '',
                                            boxShadow: '',
                                            borderRadius: '',
                                            opacity: 100,
                                            position: '',
                                            flexDirection: '',
                                            minHeight: '',
                                            justifyContent: '',
                                            alignItems: '',
                                            unit: {
                                              fontSize: 'px',
                                              width: 'px',
                                              height: 'px',
                                              paddingLeft: 'px',
                                              paddingRight: 'px',
                                              paddingTop: 'px',
                                              paddingBottom: 'px',
                                              marginLeft: 'px',
                                              marginRight: 'px',
                                              marginTop: 'px',
                                              marginBottom: 'px',
                                              borderRadius: 'px',
                                              borderWidth: 'px',
                                              rowGap: 'px',
                                              columnGap: 'px'
                                            }
                                          },
                                          config: [
                                            {
                                              name: '数据',
                                              type: 'group',
                                              key: 'data',
                                              group: [
                                                {
                                                  name: '文本内容',
                                                  key: 'content',
                                                  type: 'string',
                                                  control: 'textarea',
                                                  value: 'WE 1: 1 LGD'
                                                }
                                              ]
                                            }
                                          ],
                                          slotKey: 'default',
                                          props: {
                                            content: 'WE 1: 1 LGD'
                                          },
                                          slots: []
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: '弹性容器',
                                  type: 'buildIn',
                                  key: 'DLayout',
                                  isContainer: true,
                                  id: '1413085b-adf5-415d-83d4-ac2b0eec062e',
                                  styleData: {
                                    fontSize: '14',
                                    fontWeight: '',
                                    fontStyle: '',
                                    fontFamily: '',
                                    textDecoration: '',
                                    color: '#000',
                                    display: '',
                                    textAlign: 'left',
                                    lineHeight: '1.5',
                                    width: '',
                                    height: '',
                                    paddingLeft: '5',
                                    paddingRight: '5',
                                    paddingTop: '5',
                                    paddingBottom: '5',
                                    marginLeft: '2',
                                    marginRight: '2',
                                    marginTop: '2',
                                    marginBottom: '2',
                                    borderStyle: 'solid',
                                    borderWidth: '',
                                    borderColor: '',
                                    backgroundColor: '',
                                    boxShadow: '',
                                    borderRadius: '',
                                    opacity: 100,
                                    position: '',
                                    flexDirection: '',
                                    minHeight: '',
                                    justifyContent: '',
                                    alignItems: '',
                                    unit: {
                                      fontSize: 'px',
                                      width: 'px',
                                      height: 'px',
                                      paddingLeft: 'px',
                                      paddingRight: 'px',
                                      paddingTop: 'px',
                                      paddingBottom: 'px',
                                      marginLeft: 'px',
                                      marginRight: 'px',
                                      marginTop: 'px',
                                      marginBottom: 'px',
                                      borderRadius: 'px',
                                      borderWidth: 'px',
                                      rowGap: 'px',
                                      columnGap: 'px'
                                    }
                                  },
                                  slots: [
                                    {
                                      name: '默认',
                                      type: '',
                                      key: 'default'
                                    }
                                  ],
                                  slotKey: 'default',
                                  config: [],
                                  props: {},
                                  children: [
                                    {
                                      name: '矢量图',
                                      type: 'buildIn',
                                      key: 'DSvg',
                                      isContainer: false,
                                      id: 'fa449cfd-282e-45c2-b2b4-56870e711848',
                                      styleData: {
                                        fontSize: '20',
                                        fontWeight: '',
                                        fontStyle: '',
                                        fontFamily: '',
                                        textDecoration: '',
                                        color: '#000',
                                        display: '',
                                        textAlign: 'left',
                                        lineHeight: '1.5',
                                        width: '',
                                        height: '',
                                        paddingLeft: '0',
                                        paddingRight: '0',
                                        paddingTop: '10',
                                        paddingBottom: '0',
                                        marginLeft: '0',
                                        marginRight: '0',
                                        marginTop: '0',
                                        marginBottom: '0',
                                        borderStyle: 'solid',
                                        borderWidth: '',
                                        borderColor: '',
                                        backgroundColor: '',
                                        boxShadow: '',
                                        borderRadius: '',
                                        opacity: 100,
                                        position: '',
                                        flexDirection: '',
                                        minHeight: '',
                                        justifyContent: '',
                                        alignItems: '',
                                        unit: {
                                          fontSize: 'px',
                                          width: 'px',
                                          height: 'px',
                                          paddingLeft: 'px',
                                          paddingRight: 'px',
                                          paddingTop: 'px',
                                          paddingBottom: 'px',
                                          marginLeft: 'px',
                                          marginRight: 'px',
                                          marginTop: 'px',
                                          marginBottom: 'px',
                                          borderRadius: 'px',
                                          borderWidth: 'px',
                                          rowGap: 'px',
                                          columnGap: 'px'
                                        }
                                      },
                                      slotKey: 'default',
                                      config: [],
                                      props: {},
                                      slots: []
                                    },
                                    {
                                      name: '弹性容器',
                                      type: 'buildIn',
                                      key: 'DLayout',
                                      isContainer: true,
                                      id: 'eb580707-f99b-4afc-ac1b-599f7eac9b6a',
                                      styleData: {
                                        fontSize: '14',
                                        fontWeight: '',
                                        fontStyle: '',
                                        fontFamily: '',
                                        textDecoration: '',
                                        color: '#000',
                                        display: 'flex',
                                        textAlign: 'left',
                                        lineHeight: '1.5',
                                        width: '',
                                        height: '',
                                        paddingLeft: '5',
                                        paddingRight: '5',
                                        paddingTop: '5',
                                        paddingBottom: '5',
                                        marginLeft: '2',
                                        marginRight: '2',
                                        marginTop: '2',
                                        marginBottom: '2',
                                        borderStyle: 'solid',
                                        borderWidth: '',
                                        borderColor: '',
                                        backgroundColor: '',
                                        boxShadow: '',
                                        borderRadius: '',
                                        opacity: 100,
                                        position: '',
                                        flexDirection: 'column',
                                        minHeight: '',
                                        justifyContent: 'left',
                                        alignItems: 'start',
                                        unit: {
                                          fontSize: 'px',
                                          width: 'px',
                                          height: 'px',
                                          paddingLeft: 'px',
                                          paddingRight: 'px',
                                          paddingTop: 'px',
                                          paddingBottom: 'px',
                                          marginLeft: 'px',
                                          marginRight: 'px',
                                          marginTop: 'px',
                                          marginBottom: 'px',
                                          borderRadius: 'px',
                                          borderWidth: 'px',
                                          rowGap: 'px',
                                          columnGap: 'px'
                                        }
                                      },
                                      slots: [
                                        {
                                          name: '默认',
                                          type: '',
                                          key: 'default'
                                        }
                                      ],
                                      slotKey: 'default',
                                      config: [],
                                      props: {},
                                      children: [
                                        {
                                          name: '文字',
                                          type: 'buildIn',
                                          key: 'DText',
                                          isContainer: false,
                                          id: 'dc9cd7ea-16dc-4a84-8909-0f91e627aa2c',
                                          styleData: {
                                            fontSize: '14',
                                            fontWeight: '',
                                            fontStyle: '',
                                            fontFamily: '',
                                            textDecoration: '',
                                            color: '#000',
                                            display: '',
                                            textAlign: 'left',
                                            lineHeight: '1.5',
                                            width: '',
                                            height: '',
                                            paddingLeft: '0',
                                            paddingRight: '0',
                                            paddingTop: '0',
                                            paddingBottom: '0',
                                            marginLeft: '0',
                                            marginRight: '0',
                                            marginTop: '0',
                                            marginBottom: '0',
                                            borderStyle: 'solid',
                                            borderWidth: '',
                                            borderColor: '',
                                            backgroundColor: '',
                                            boxShadow: '',
                                            borderRadius: '',
                                            opacity: 100,
                                            position: '',
                                            flexDirection: '',
                                            minHeight: '',
                                            justifyContent: '',
                                            alignItems: '',
                                            unit: {
                                              fontSize: 'px',
                                              width: 'px',
                                              height: 'px',
                                              paddingLeft: 'px',
                                              paddingRight: 'px',
                                              paddingTop: 'px',
                                              paddingBottom: 'px',
                                              marginLeft: 'px',
                                              marginRight: 'px',
                                              marginTop: 'px',
                                              marginBottom: 'px',
                                              borderRadius: 'px',
                                              borderWidth: 'px',
                                              rowGap: 'px',
                                              columnGap: 'px'
                                            }
                                          },
                                          config: [
                                            {
                                              name: '数据',
                                              type: 'group',
                                              key: 'data',
                                              group: [
                                                {
                                                  name: '文本内容',
                                                  key: 'content',
                                                  type: 'string',
                                                  control: 'textarea',
                                                  value: '斯诺克'
                                                }
                                              ]
                                            }
                                          ],
                                          slotKey: 'default',
                                          props: {
                                            content: '斯诺克'
                                          },
                                          slots: []
                                        },
                                        {
                                          name: '文字',
                                          type: 'buildIn',
                                          key: 'DText',
                                          isContainer: false,
                                          id: 'eae4f768-fdf6-4d7a-ae3f-d4979d873df1',
                                          styleData: {
                                            fontSize: '14',
                                            fontWeight: '',
                                            fontStyle: '',
                                            fontFamily: '',
                                            textDecoration: '',
                                            color: '#000',
                                            display: '',
                                            textAlign: 'left',
                                            lineHeight: '1.5',
                                            width: '',
                                            height: '',
                                            paddingLeft: '0',
                                            paddingRight: '0',
                                            paddingTop: '0',
                                            paddingBottom: '0',
                                            marginLeft: '0',
                                            marginRight: '0',
                                            marginTop: '0',
                                            marginBottom: '0',
                                            borderStyle: 'solid',
                                            borderWidth: '',
                                            borderColor: '',
                                            backgroundColor: '',
                                            boxShadow: '',
                                            borderRadius: '',
                                            opacity: 100,
                                            position: '',
                                            flexDirection: '',
                                            minHeight: '',
                                            justifyContent: '',
                                            alignItems: '',
                                            unit: {
                                              fontSize: 'px',
                                              width: 'px',
                                              height: 'px',
                                              paddingLeft: 'px',
                                              paddingRight: 'px',
                                              paddingTop: 'px',
                                              paddingBottom: 'px',
                                              marginLeft: 'px',
                                              marginRight: 'px',
                                              marginTop: 'px',
                                              marginBottom: 'px',
                                              borderRadius: 'px',
                                              borderWidth: 'px',
                                              rowGap: 'px',
                                              columnGap: 'px'
                                            }
                                          },
                                          config: [
                                            {
                                              name: '数据',
                                              type: 'group',
                                              key: 'data',
                                              group: [
                                                {
                                                  name: '文本内容',
                                                  key: 'content',
                                                  type: 'string',
                                                  control: 'textarea',
                                                  value: '白雨 1:1 夏雨'
                                                }
                                              ]
                                            }
                                          ],
                                          slotKey: 'default',
                                          props: {
                                            content: '白雨 1:1 夏雨'
                                          },
                                          slots: []
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: '弹性容器',
                                  type: 'buildIn',
                                  key: 'DLayout',
                                  isContainer: true,
                                  id: 'e83432cf-6977-446b-9917-db348f9fee84',
                                  styleData: {
                                    fontSize: '14',
                                    fontWeight: '',
                                    fontStyle: '',
                                    fontFamily: '',
                                    textDecoration: '',
                                    color: '#000',
                                    display: '',
                                    textAlign: 'left',
                                    lineHeight: '1.5',
                                    width: '',
                                    height: '',
                                    paddingLeft: '5',
                                    paddingRight: '5',
                                    paddingTop: '5',
                                    paddingBottom: '5',
                                    marginLeft: '2',
                                    marginRight: '2',
                                    marginTop: '2',
                                    marginBottom: '2',
                                    borderStyle: 'solid',
                                    borderWidth: '',
                                    borderColor: '',
                                    backgroundColor: '',
                                    boxShadow: '',
                                    borderRadius: '',
                                    opacity: 100,
                                    position: '',
                                    flexDirection: '',
                                    minHeight: '',
                                    justifyContent: '',
                                    alignItems: '',
                                    unit: {
                                      fontSize: 'px',
                                      width: 'px',
                                      height: 'px',
                                      paddingLeft: 'px',
                                      paddingRight: 'px',
                                      paddingTop: 'px',
                                      paddingBottom: 'px',
                                      marginLeft: 'px',
                                      marginRight: 'px',
                                      marginTop: 'px',
                                      marginBottom: 'px',
                                      borderRadius: 'px',
                                      borderWidth: 'px',
                                      rowGap: 'px',
                                      columnGap: 'px'
                                    }
                                  },
                                  slots: [
                                    {
                                      name: '默认',
                                      type: '',
                                      key: 'default'
                                    }
                                  ],
                                  slotKey: 'default',
                                  config: [],
                                  props: {},
                                  children: [
                                    {
                                      name: '矢量图',
                                      type: 'buildIn',
                                      key: 'DSvg',
                                      isContainer: false,
                                      id: 'b02d5f9d-cee9-43af-87a8-708d2875c9fa',
                                      styleData: {
                                        fontSize: '20',
                                        fontWeight: '',
                                        fontStyle: '',
                                        fontFamily: '',
                                        textDecoration: '',
                                        color: '#000',
                                        display: '',
                                        textAlign: 'left',
                                        lineHeight: '1.5',
                                        width: '',
                                        height: '',
                                        paddingLeft: '0',
                                        paddingRight: '0',
                                        paddingTop: '10',
                                        paddingBottom: '0',
                                        marginLeft: '0',
                                        marginRight: '0',
                                        marginTop: '0',
                                        marginBottom: '0',
                                        borderStyle: 'solid',
                                        borderWidth: '',
                                        borderColor: '',
                                        backgroundColor: '',
                                        boxShadow: '',
                                        borderRadius: '',
                                        opacity: 100,
                                        position: '',
                                        flexDirection: '',
                                        minHeight: '',
                                        justifyContent: '',
                                        alignItems: '',
                                        unit: {
                                          fontSize: 'px',
                                          width: 'px',
                                          height: 'px',
                                          paddingLeft: 'px',
                                          paddingRight: 'px',
                                          paddingTop: 'px',
                                          paddingBottom: 'px',
                                          marginLeft: 'px',
                                          marginRight: 'px',
                                          marginTop: 'px',
                                          marginBottom: 'px',
                                          borderRadius: 'px',
                                          borderWidth: 'px',
                                          rowGap: 'px',
                                          columnGap: 'px'
                                        }
                                      },
                                      slotKey: 'default',
                                      config: [],
                                      props: {},
                                      slots: []
                                    },
                                    {
                                      name: '弹性容器',
                                      type: 'buildIn',
                                      key: 'DLayout',
                                      isContainer: true,
                                      id: 'a7f90f1f-22ef-4793-8781-adc9854887c7',
                                      styleData: {
                                        fontSize: '14',
                                        fontWeight: '',
                                        fontStyle: '',
                                        fontFamily: '',
                                        textDecoration: '',
                                        color: '#000',
                                        display: 'flex',
                                        textAlign: 'left',
                                        lineHeight: '1.5',
                                        width: '',
                                        height: '',
                                        paddingLeft: '5',
                                        paddingRight: '5',
                                        paddingTop: '5',
                                        paddingBottom: '5',
                                        marginLeft: '2',
                                        marginRight: '2',
                                        marginTop: '2',
                                        marginBottom: '2',
                                        borderStyle: 'solid',
                                        borderWidth: '',
                                        borderColor: '',
                                        backgroundColor: '',
                                        boxShadow: '',
                                        borderRadius: '',
                                        opacity: 100,
                                        position: '',
                                        flexDirection: 'column',
                                        minHeight: '',
                                        justifyContent: 'left',
                                        alignItems: 'start',
                                        unit: {
                                          fontSize: 'px',
                                          width: 'px',
                                          height: 'px',
                                          paddingLeft: 'px',
                                          paddingRight: 'px',
                                          paddingTop: 'px',
                                          paddingBottom: 'px',
                                          marginLeft: 'px',
                                          marginRight: 'px',
                                          marginTop: 'px',
                                          marginBottom: 'px',
                                          borderRadius: 'px',
                                          borderWidth: 'px',
                                          rowGap: 'px',
                                          columnGap: 'px'
                                        }
                                      },
                                      slots: [
                                        {
                                          name: '默认',
                                          type: '',
                                          key: 'default'
                                        }
                                      ],
                                      slotKey: 'default',
                                      config: [],
                                      props: {},
                                      children: [
                                        {
                                          name: '文字',
                                          type: 'buildIn',
                                          key: 'DText',
                                          isContainer: false,
                                          id: '257bb944-ff78-48f3-ae11-35639821ce7d',
                                          styleData: {
                                            fontSize: '14',
                                            fontWeight: '',
                                            fontStyle: '',
                                            fontFamily: '',
                                            textDecoration: '',
                                            color: '#000',
                                            display: '',
                                            textAlign: 'left',
                                            lineHeight: '1.5',
                                            width: '',
                                            height: '',
                                            paddingLeft: '0',
                                            paddingRight: '0',
                                            paddingTop: '0',
                                            paddingBottom: '0',
                                            marginLeft: '0',
                                            marginRight: '0',
                                            marginTop: '0',
                                            marginBottom: '0',
                                            borderStyle: 'solid',
                                            borderWidth: '',
                                            borderColor: '',
                                            backgroundColor: '',
                                            boxShadow: '',
                                            borderRadius: '',
                                            opacity: 100,
                                            position: '',
                                            flexDirection: '',
                                            minHeight: '',
                                            justifyContent: '',
                                            alignItems: '',
                                            unit: {
                                              fontSize: 'px',
                                              width: 'px',
                                              height: 'px',
                                              paddingLeft: 'px',
                                              paddingRight: 'px',
                                              paddingTop: 'px',
                                              paddingBottom: 'px',
                                              marginLeft: 'px',
                                              marginRight: 'px',
                                              marginTop: 'px',
                                              marginBottom: 'px',
                                              borderRadius: 'px',
                                              borderWidth: 'px',
                                              rowGap: 'px',
                                              columnGap: 'px'
                                            }
                                          },
                                          config: [
                                            {
                                              name: '数据',
                                              type: 'group',
                                              key: 'data',
                                              group: [
                                                {
                                                  name: '文本内容',
                                                  key: 'content',
                                                  type: 'string',
                                                  control: 'textarea',
                                                  value: '传奇杯S3'
                                                }
                                              ]
                                            }
                                          ],
                                          slotKey: 'default',
                                          props: {
                                            content: '传奇杯S3'
                                          },
                                          slots: []
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: '图层',
              type: 'native',
              key: 'DIV',
              isContainer: true,
              id: 'ad1f909d-ea3d-4915-a4d9-d98624c1ede5',
              styleData: {
                fontSize: '14',
                fontWeight: '',
                fontStyle: '',
                fontFamily: '',
                textDecoration: '',
                color: '#000',
                display: '',
                textAlign: 'left',
                lineHeight: '1.5',
                width: '84',
                height: '',
                paddingLeft: '5',
                paddingRight: '5',
                paddingTop: '5',
                paddingBottom: '5',
                marginLeft: '2',
                marginRight: '2',
                marginTop: '2',
                marginBottom: '2',
                borderStyle: 'solid',
                borderWidth: '',
                borderColor: '',
                backgroundColor: '',
                boxShadow: '',
                borderRadius: '',
                opacity: 100,
                position: '',
                flexDirection: '',
                minHeight: '',
                justifyContent: '',
                alignItems: '',
                unit: {
                  fontSize: 'px',
                  width: '%',
                  height: 'px',
                  paddingLeft: 'px',
                  paddingRight: 'px',
                  paddingTop: 'px',
                  paddingBottom: 'px',
                  marginLeft: 'px',
                  marginRight: 'px',
                  marginTop: 'px',
                  marginBottom: 'px',
                  borderRadius: 'px',
                  borderWidth: 'px',
                  rowGap: 'px',
                  columnGap: 'px'
                }
              },
              slotKey: 'default',
              config: [],
              props: {},
              slots: [
                {
                  name: '默认',
                  key: 'default',
                  type: ''
                }
              ],
              children: [
                {
                  name: '卡片',
                  type: 'external',
                  key: 'NCard',
                  isContainer: true,
                  id: 'a873e207-0eeb-4d58-a24a-9745f63ecd10',
                  styleData: {
                    fontSize: '14',
                    fontWeight: '',
                    fontStyle: '',
                    fontFamily: '',
                    textDecoration: '',
                    color: '#000',
                    display: '',
                    textAlign: 'left',
                    lineHeight: '1.5',
                    width: '400',
                    height: '300',
                    paddingLeft: '5',
                    paddingRight: '5',
                    paddingTop: '5',
                    paddingBottom: '5',
                    marginLeft: '2',
                    marginRight: '2',
                    marginTop: '2',
                    marginBottom: '2',
                    borderStyle: 'solid',
                    borderWidth: '',
                    borderColor: '',
                    backgroundColor: '',
                    boxShadow: '',
                    borderRadius: '',
                    opacity: 100,
                    position: '',
                    flexDirection: '',
                    minHeight: '',
                    justifyContent: '',
                    alignItems: '',
                    unit: {
                      fontSize: 'px',
                      width: 'px',
                      height: 'px',
                      paddingLeft: 'px',
                      paddingRight: 'px',
                      paddingTop: 'px',
                      paddingBottom: 'px',
                      marginLeft: 'px',
                      marginRight: 'px',
                      marginTop: 'px',
                      marginBottom: 'px',
                      borderRadius: 'px',
                      borderWidth: 'px',
                      rowGap: 'px',
                      columnGap: 'px'
                    }
                  },
                  props: {
                    bordered: true,
                    closable: false,
                    hoverable: true
                  },
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
                  ],
                  slotKey: 'default',
                  children: [
                    {
                      name: '弹性容器',
                      type: 'buildIn',
                      key: 'DLayout',
                      isContainer: true,
                      id: '38ab4d24-db7f-4f00-b7f6-bfdf26f27c2e',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '5',
                        paddingRight: '5',
                        paddingTop: '5',
                        paddingBottom: '5',
                        marginLeft: '2',
                        marginRight: '2',
                        marginTop: '2',
                        marginBottom: '2',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px',
                          rowGap: 'px',
                          columnGap: 'px'
                        }
                      },
                      slots: [
                        {
                          name: '默认',
                          type: '',
                          key: 'default'
                        }
                      ],
                      slotKey: 'default',
                      config: [],
                      props: {},
                      children: [
                        {
                          name: '矢量图',
                          type: 'buildIn',
                          key: 'DSvg',
                          isContainer: false,
                          id: 'a6ac6f1e-75eb-4bc6-9071-db33d1b24b33',
                          styleData: {
                            fontSize: '14',
                            fontWeight: '',
                            fontStyle: '',
                            fontFamily: '',
                            textDecoration: '',
                            color: '#000',
                            display: '',
                            textAlign: 'left',
                            lineHeight: '1.5',
                            width: '',
                            height: '',
                            paddingLeft: '0',
                            paddingRight: '0',
                            paddingTop: '0',
                            paddingBottom: '0',
                            marginLeft: '0',
                            marginRight: '0',
                            marginTop: '0',
                            marginBottom: '0',
                            borderStyle: 'solid',
                            borderWidth: '',
                            borderColor: '',
                            backgroundColor: '',
                            boxShadow: '',
                            borderRadius: '',
                            opacity: 100,
                            position: '',
                            flexDirection: '',
                            minHeight: '',
                            justifyContent: '',
                            alignItems: '',
                            unit: {
                              fontSize: 'px',
                              width: 'px',
                              height: 'px',
                              paddingLeft: 'px',
                              paddingRight: 'px',
                              paddingTop: 'px',
                              paddingBottom: 'px',
                              marginLeft: 'px',
                              marginRight: 'px',
                              marginTop: 'px',
                              marginBottom: 'px',
                              borderRadius: 'px',
                              borderWidth: 'px',
                              rowGap: 'px',
                              columnGap: 'px'
                            }
                          },
                          slotKey: 'default',
                          config: [],
                          props: {},
                          slots: []
                        },
                        {
                          name: '文字',
                          type: 'buildIn',
                          key: 'DText',
                          isContainer: false,
                          id: '35d2d470-c94d-452b-8957-ab4a0bb60b80',
                          styleData: {
                            fontSize: '14',
                            fontWeight: '',
                            fontStyle: '',
                            fontFamily: '',
                            textDecoration: '',
                            color: '#000',
                            display: '',
                            textAlign: 'left',
                            lineHeight: '1.5',
                            width: '',
                            height: '',
                            paddingLeft: '0',
                            paddingRight: '0',
                            paddingTop: '0',
                            paddingBottom: '0',
                            marginLeft: '0',
                            marginRight: '0',
                            marginTop: '0',
                            marginBottom: '0',
                            borderStyle: 'solid',
                            borderWidth: '',
                            borderColor: '',
                            backgroundColor: '',
                            boxShadow: '',
                            borderRadius: '',
                            opacity: 100,
                            position: '',
                            flexDirection: '',
                            minHeight: '',
                            justifyContent: '',
                            alignItems: '',
                            unit: {
                              fontSize: 'px',
                              width: 'px',
                              height: 'px',
                              paddingLeft: 'px',
                              paddingRight: 'px',
                              paddingTop: 'px',
                              paddingBottom: 'px',
                              marginLeft: 'px',
                              marginRight: 'px',
                              marginTop: 'px',
                              marginBottom: 'px',
                              borderRadius: 'px',
                              borderWidth: 'px',
                              rowGap: 'px',
                              columnGap: 'px'
                            }
                          },
                          config: [
                            {
                              name: '数据',
                              type: 'group',
                              key: 'data',
                              group: [
                                {
                                  name: '文本内容',
                                  key: 'content',
                                  type: 'string',
                                  control: 'textarea',
                                  value: '文本内容'
                                }
                              ]
                            }
                          ],
                          slotKey: 'default',
                          props: {
                            content: '文本内容'
                          },
                          slots: []
                        }
                      ]
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: '6e79addc-d8ca-4a76-b5c5-5b856f133765',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px',
                          rowGap: 'px',
                          columnGap: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '文本内容'
                            }
                          ]
                        }
                      ],
                      slotKey: 'header',
                      props: {
                        content: '文本内容'
                      },
                      slots: []
                    },
                    {
                      name: '图像',
                      type: 'external',
                      key: 'NImage',
                      isContainer: false,
                      id: '6285659a-f273-4351-bddb-5c3fa0463754',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '100',
                        height: '200',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: '%',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px',
                          rowGap: 'px',
                          columnGap: 'px'
                        }
                      },
                      props: {
                        src: '',
                        width: '',
                        height: '',
                        alt: '图标加载失败',
                        'preview-disabled': true
                      },
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
                          value: ''
                        },
                        {
                          name: '图片高度',
                          key: 'height',
                          type: 'string',
                          control: 'input',
                          value: ''
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
                      ],
                      slotKey: 'cover',
                      slots: []
                    },
                    {
                      name: '文字',
                      type: 'buildIn',
                      key: 'DText',
                      isContainer: false,
                      id: 'e5a9132f-eb94-47c4-92b6-6ca0e6bad501',
                      styleData: {
                        fontSize: '14',
                        fontWeight: '',
                        fontStyle: '',
                        fontFamily: '',
                        textDecoration: '',
                        color: '#000',
                        display: '',
                        textAlign: 'left',
                        lineHeight: '1.5',
                        width: '',
                        height: '',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '0',
                        paddingBottom: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        borderStyle: 'solid',
                        borderWidth: '',
                        borderColor: '',
                        backgroundColor: '',
                        boxShadow: '',
                        borderRadius: '',
                        opacity: 100,
                        position: '',
                        flexDirection: '',
                        minHeight: '',
                        justifyContent: '',
                        alignItems: '',
                        unit: {
                          fontSize: 'px',
                          width: 'px',
                          height: 'px',
                          paddingLeft: 'px',
                          paddingRight: 'px',
                          paddingTop: 'px',
                          paddingBottom: 'px',
                          marginLeft: 'px',
                          marginRight: 'px',
                          marginTop: 'px',
                          marginBottom: 'px',
                          borderRadius: 'px',
                          borderWidth: 'px',
                          rowGap: 'px',
                          columnGap: 'px'
                        }
                      },
                      config: [
                        {
                          name: '数据',
                          type: 'group',
                          key: 'data',
                          group: [
                            {
                              name: '文本内容',
                              key: 'content',
                              type: 'string',
                              control: 'textarea',
                              value: '文本内容'
                            }
                          ]
                        }
                      ],
                      slotKey: 'action',
                      props: {
                        content: '文本内容'
                      },
                      slots: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      isContainer: true,
      styleData: {
        fontSize: '14',
        fontWeight: '',
        fontStyle: '',
        fontFamily: '',
        textDecoration: '',
        color: '#000',
        display: '',
        textAlign: 'left',
        lineHeight: '1.5',
        width: '',
        height: '100',
        paddingLeft: '0',
        paddingRight: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        marginTop: '0',
        marginBottom: '0',
        borderStyle: 'solid',
        borderWidth: '',
        borderColor: '',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '',
        borderRadius: '',
        opacity: 100,
        position: '',
        flexDirection: '',
        minHeight: '',
        justifyContent: '',
        alignItems: '',
        unit: {
          fontSize: 'px',
          width: 'px',
          height: '%',
          paddingLeft: 'px',
          paddingRight: 'px',
          paddingTop: 'px',
          paddingBottom: 'px',
          marginLeft: 'px',
          marginRight: 'px',
          marginTop: 'px',
          marginBottom: 'px',
          borderRadius: 'px',
          borderWidth: 'px'
        }
      },
      props: {},
      config: [],
      slots: [
        {
          name: '默认',
          key: 'default',
          type: ''
        }
      ],
      slotKey: 'default'
    }
  ]);
  const curPage = ref<DScreen.CompObj>(pageList.value[0]);
  const curPageComps = ref<Record<string, DScreen.CompObj>>({});
  const pageDoor = ref<TreeOption[]>([
    {
      key: 'index',
      label: '页面 1  ',
      prefix: () =>
        h(NIcon, null, {
          default: () => h(FileTrayFullOutline)
        })
    }
  ]);
  const domInfo = ref<DScreen.DomInfo>({} as DScreen.DomInfo);
  // 拖拽移入的组件
  const overComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // 锁定的组件
  const lockComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // 当前组件
  const curComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // 当前复制组件
  const curCopyComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // 拖拽不能放入组件id
  const cannotDropComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // 是否内部拖拽
  const isInnerDrag = ref(false);
  // 是否滚动
  const isWheel = ref(false);
  // 当前拖拽的组件
  const curDragComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // 之前拖拽移入的
  const mDropComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // 之前落下的组件
  const mFallComp = ref<DScreen.CompObj>({} as DScreen.CompObj);
  // Ui组件
  const modalUI = {} as Record<string, any>;
  // 之前拖入的组件索引
  const mCompIndex = ref(0);
  // 是否复制
  const isCopy = ref(false);
  // 是否编辑
  const isEdit = ref(false);

  /**
   * 找出当前页面对应的屏幕
   *
   * @param key
   */
  function getClickPageScreen(key: TreeOption['key']) {
    const findScreen = pageList.value.find(item => item.key === key) as DScreen.CompObj;
    curPage.value = findScreen;
    curPageComps.value = {};
    return curPage;
  }

  function getLockDomInfo(comp: DScreen.CompObj) {
    const clickIndicator = document.getElementById('click-indicator') as HTMLElement;
    const clickDisplay = clickIndicator.style.display;
    if (clickDisplay === 'none' || !clickIndicator) {
      return;
    }
    const clickCompId = clickIndicator.dataset.id;
    if (clickCompId !== comp.id) {
      return;
    }
    const curCompEl = document.getElementById(clickCompId) as HTMLElement;
    if (!curCompEl) {
      return;
    }
    const curCompRect = curCompEl.getBoundingClientRect();
    console.log(clickIndicator, curCompRect);
    clickIndicator.style.left = `${curCompRect.left}px`;
    clickIndicator.style.top = `${curCompRect.top}px`;
    // 更新边框尺寸
    clickIndicator.style.width = `${curCompRect.width}px`;
    clickIndicator.style.height = `${curCompRect.height}px`;
  }

  /** 更新鼠标移入的组件 */
  function updateHoverComp(targetComp: DScreen.CompObj) {
    curComp.value = targetComp;
  }

  /** 更新拖拽移入的组件 */
  function updateDragOverComp(dropComp: DScreen.CompObj) {
    // 如果指定子组件，并且当前不是需要的子组件返回
    if (dropComp.childKey && dropComp.childKey !== curDragComp.value.key) {
      domInfo.value.type = 'cannot';
      return;
    }
    // 如果当前组件指定父元素，并且当前落入组件不是他的父元素返回
    if (curDragComp.value.parentKey && curDragComp.value.parentKey !== dropComp.key) {
      domInfo.value.type = 'cannot';
    }
    domInfo.value.type = 'drag';
  }

  function selSlotKey(slotKey: string) {
    overComp.value = curPage.value;
    mDropComp.value.slotKey = slotKey;
    dropEditor(null, null, true);
  }

  function resetSlotKey(comp: DScreen.CompObj) {
    comp.slots &&
      comp.slots.forEach((item: any) => {
        item.type = '';
      });
  }

  function setSlotKey(slotKey: string, comp: DScreen.CompObj) {
    comp.slots &&
      comp.slots.forEach((item: any) => {
        if (item.key === slotKey) {
          item.type = slotKey;
          comp.slotKey = slotKey;
        }
      });
  }

  /**
   * 获取落下组件，如果是容器就是自身，不是找他的上级容器
   *
   * @param event
   * @param rootComp
   */
  function getFallContainerComp(event: any, rootComp: DScreen.CompObj) {
    let fallComp: DScreen.CompObj | null = getSelfComp(event, rootComp, '');
    let compIndex = 0;
    // // 如果落下的组件不是容器组件
    if (!fallComp.isContainer) {
      // 找到这个组件的上一级容器组件
      const { parentComp, index } = getParentComp(rootComp, fallComp);
      fallComp = parentComp;
      compIndex = index;
    } else {
      compIndex = findEventCompIndex(event, fallComp);
    }
    return { fallComp, compIndex };
  }

  /**
   * 获取事件落下的组件索引
   *
   * @param event
   * @param rootComp
   */
  function findEventCompIndex(event: any, fallComp: DScreen.CompObj) {
    let compIndex = 0;
    const fallChidren = fallComp.children as DScreen.CompObj[];
    if (!fallChidren.length) {
      compIndex = 0;
    } else {
      const leftList = [] as number[];
      const rightList = [] as number[];
      const topList = [] as number[];
      const bottomList = [] as number[];
      fallChidren.forEach((item: any) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          leftList.push(rect.left);
          rightList.push(rect.right);
          topList.push(rect.top);
          bottomList.push(rect.bottom);
        }
      });
      const rectangle = {
        left: Math.min(...leftList),
        right: Math.max(...rightList),
        top: Math.min(...topList),
        bottom: Math.max(...bottomList)
      };
      // 判断是否处于矩形内
      if (
        event.clientX >= rectangle.left &&
        event.clientX <= rectangle.right &&
        event.clientY >= rectangle.top &&
        event.clientY <= rectangle.bottom
      ) {
        const xindex = rightList.findIndex(item => item >= event.clientX);
        const yindex = bottomList.findIndex(item => item >= event.clientY);
        compIndex = xindex || yindex;
      } else {
        // 如果不在矩形内
        if (event.clientX < rectangle.left) {
          compIndex = 0;
        } else if (event.clientX > rectangle.right) {
          compIndex = fallChidren.length;
        }
        if (event.clientY < rectangle.top) {
          compIndex = 0;
        } else if (event.clientY > rectangle.bottom) {
          compIndex = fallChidren.length;
        }
      }
    }
    return compIndex;
  }

  /**
   * 获取组件的上一级组件
   *
   * @param rootComp
   * @param comp
   */
  function getParentComp(rootComp: DScreen.CompObj, comp: DScreen.CompObj) {
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

  function getSelfComp(event: any, rootComp: DScreen.CompObj, id: string) {
    let compId = '';
    let compEl = null;
    let targetComp: DScreen.CompObj = {} as DScreen.CompObj;
    if (id) {
      compId = id;
    } else {
      compEl = event.target.closest('.comp-item');
      compId = compEl ? compEl.id : '';
    }
    // 如果comp
    if (!compEl && !compId) {
      targetComp = rootComp;
    } else {
      getComp(rootComp, compId);
    }
    function getComp(root: DScreen.CompObj, compIds: string | number) {
      if (compIds === root.id) {
        targetComp = root;
        return;
      }
      if (root.children) {
        root.children.forEach(item => {
          if (item.id === compIds) {
            targetComp = item;
          } else {
            getComp(item, compIds);
          }
        });
      }
    }
    console.log(targetComp, 'targetComp');
    return targetComp;
  }

  /**
   * 组件拖拽到编辑器落下事件
   *
   * @param _
   * @param event
   * @param selSlot
   */
  function dropEditor(_: any, event: DragEvent | TouchEvent | any, selSlot?: boolean) {
    let dropComp: DScreen.CompObj = {} as DScreen.CompObj;
    let fallComp: DScreen.CompObj = {} as DScreen.CompObj;
    let compIndex: number = 0;
    if (event instanceof DragEvent) {
      // 判断外部拖拽用拷贝，内部直接用值
      if (isInnerDrag.value) {
        dropComp = curDragComp.value;
      } else {
        dropComp = jsonClone(curDragComp.value);
      }
      ({ fallComp, compIndex } = getFallContainerComp(event, curPage.value));
    } else {
      dropComp = mDropComp.value;
      fallComp = mFallComp.value;
      compIndex = mCompIndex.value;
    }
    // 如果指定子组件，并且当前不是需要的子组件返回
    if (fallComp.childKey && fallComp.childKey !== dropComp.key) {
      resetComp(true);
      return;
    }
    // 如果指定父组件，并且当前落入组件不是父组件返回
    if (dropComp.parentKey && dropComp.parentKey !== fallComp.key) {
      resetComp(true);
      return;
    }
    // 判断落下的组件需要选择插槽，只有默认插槽自动选择默认插槽，其他插槽手动选择插槽后在触发落入编辑器事件
    if (fallComp.type === 'group') {
      dropComp.slotKey = 'default';
    } else if (!selSlot) {
      const slotLen = fallComp?.slots.length;
      if (slotLen > 1) {
        setDropComp(dropComp, fallComp, compIndex);
        return;
      }
      dropComp.slotKey = fallComp?.slots[0]?.key;
      resetComp();
    }
    // 如果是内部拖拽
    if (isInnerDrag.value) {
      // 落下的不是自身
      if (fallComp.id !== dropComp.id) {
        // 最后删除掉自身
        const { parentComp, index } = getParentComp(curPage.value, dropComp);
        parentComp.children?.splice(index, 1);
      }
    }
    if (!fallComp.children) {
      fallComp.children = [];
    }

    if (!dropComp.id && !isInnerDrag.value) {
      initComp(dropComp, fallComp);
    }
    // 获取插槽
    fallComp.children.splice(compIndex, 0, dropComp);
    // 组件数据下放判断
    setFallCompChild(fallComp);
    // window.$emitter?.emit('dropComp', dropComp);
    resetComp(true);
  }

  // 如果是自身，必是内部拖拽，不往自身继续添加子元素
  function initComp(chilComp: DScreen.CompObj, parentComp: DScreen.CompObj | null) {
    if (!chilComp.id) {
      // 外部拖拽赋值id,内部id不变
      chilComp.id = `${window.crypto.randomUUID()}`;
    }
    const len = Object.keys(chilComp.styleData).length;
    // 还没有样式。克隆一份基础样式给组件
    const initStyle = jsonClone(compCommonStyle);
    if (!len) {
      if (chilComp.isContainer) {
        chilComp.styleData = Object.assign(initStyle, jsonClone(containerDefaultStyle));
      }
      chilComp.styleData = initStyle;
    } else {
      chilComp.styleData = Object.assign(initStyle, chilComp.styleData);
    }
    // 还没有属性，设置属性配置
    if (!chilComp.config) {
      chilComp.config = [];
    }
    if (!chilComp.props) {
      chilComp.props = {};
    }
    chilComp.props = Object.assign(chilComp.props, getPropsData(chilComp));
    // 设置默认插槽
    if (!chilComp.slots) {
      if (chilComp.isContainer) {
        chilComp.slots = [{ name: '默认', key: 'default', type: '' }];
      } else {
        chilComp.slots = [];
      }
    }
    // 自身被插入位置
    if (!chilComp.slotKey) {
      chilComp.slotKey = 'default';
    }
    // 如果是容器，没有子元素，给子元素赋空
    if (chilComp.isContainer && !chilComp.children) {
      chilComp.children = [];
    }
    // 设置组件记录
    curPageComps.value[chilComp.id] = chilComp;
    if (chilComp.children && chilComp.children.length > 0) {
      chilComp.children.forEach((item: DScreen.CompObj) => {
        initComp(item, chilComp);
      });
    }
  }

  /** 更新选中组件的数据 */
  function updateCurComp(comp: Record<string, any>) {
    Object.assign(curComp.value, comp);
  }

  function setCurComp(comp: DScreen.CompObj) {
    curComp.value = comp;
  }

  function setCurDragComp(comp: DScreen.CompObj, innerDrag?: boolean) {
    isInnerDrag.value = innerDrag;
    curDragComp.value = comp;
  }

  function setDropComp(comp: DScreen.CompObj, fallComp: DScreen.CompObj, compIndex: number) {
    mDropComp.value = comp;
    mFallComp.value = fallComp;
    mCompIndex.value = compIndex;
  }

  function resetCurComp() {
    curComp.value = curPage.value;
    const hoverIndicator = document.getElementById('hover-indicator') as HTMLElement;
    hoverIndicator.style.display = 'none';
  }

  /** @param clear {boolean required:false} 是否清空指示器 */
  function resetComp(clear?: boolean) {
    curComp.value = curPage.value;
    overComp.value = curPage.value;
    cannotDropComp.value = curPage.value;
    lockComp.value = curPage.value;
    if (clear) {
      clearIndicator();
    }
  }

  // 清空指示器
  function clearIndicator() {
    const slotIndicator = document.getElementById('slot-indicator') as HTMLElement;
    slotIndicator.style.display = 'none';
    const clickIndicator = document.getElementById('click-indicator') as HTMLElement;
    clickIndicator.style.display = 'none';
    const hoverIndicator = document.getElementById('hover-indicator') as HTMLElement;
    hoverIndicator.style.display = 'none';
  }

  function deleteComp(comp: DScreen.CompObj) {
    const { parentComp, index } = getParentComp(curPage.value, comp);
    parentComp.children?.splice(index, 1);
  }

  function copyComp(comp: DScreen.CompObj) {
    const { parentComp, index } = getParentComp(curPage.value, comp);
    const newComp = jsonClone(comp);
    // 重新计算newComp的id和domInfo
    getCompId(newComp);
    overComp.value = newComp;
    parentComp.children?.splice(index + 1, 0, newComp);
    setTimeout(() => {
      updateHoverComp(newComp);
    });
  }

  function getCompId(comp: DScreen.CompObj) {
    // todo 这个id使用时间生成同步时是一样的
    comp.id = `${window.crypto.randomUUID()}`;
    // 设置组件记录
    curPageComps.value[comp.id] = comp;
    if (comp.children && comp.children.length > 0) {
      comp.children.forEach((item: DScreen.CompObj) => {
        getCompId(item);
      });
    }
  }

  function pasteComp(lockComps: DScreen.CompObj, copyComp: DScreen.CompObj) {
    let fallComp: DScreen.CompObj = {} as DScreen.CompObj;
    let compIndex: number = 0;
    if (lockComps.isContainer) {
      fallComp = lockComps;
      compIndex = lockComps.children?.length as number | 0;
    } else {
      ({ parentComp: fallComp, index: compIndex } = getParentComp(
        curPage.value,
        lockComps.type === 'group' ? lockComp.value : lockComps
      ));
    }
    const newComp = jsonClone(copyComp);
    // 剪切
    if (!isCopy.value) {
      deleteComp(copyComp);
    }
    // 重新计算newComp的id和domInfo
    getCompId(newComp);
    fallComp.children?.splice(compIndex + 1, 0, newComp);
  }

  function updateLockComp() {
    // 不是页面
    if (curComp.value.type !== 'group') {
      if (lockComp.value.id !== curComp.value.id) {
        lockComp.value = curComp.value;
      } else {
        lockComp.value = curPage.value;
      }
    } else {
      lockComp.value = curPage.value;
    }
  }

  function keyKevent(event: KeyboardEvent) {
    // 按下删除键 或者ctrl+y 删除
    if ((event.ctrlKey && event.key === 'y') || event.key === 'Delete') {
      if (lockComp.value.type !== 'group') {
        deleteComp(lockComp.value);
        resetComp(true);
      }
      return;
    }
    // 按下ctrl+d 复制
    if (event.ctrlKey && event.key === 'd') {
      event.preventDefault();
      if (curComp.value.type !== 'group') {
        resetComp();
        copyComp(curComp.value);
      }
    }
    // 按下ctrl+c 复制
    if ((event.ctrlKey && event.key === 'c') || (event.ctrlKey && event.key === 'x')) {
      if (event && event.target && (event.target as HTMLElement).matches('input, textarea, [contenteditable]')) {
        return;
      }
      isCopy.value = event.key === 'c';
      event.preventDefault();
      if (lockComp.value.type !== 'group') {
        curCopyComp.value = jsonClone(lockComp.value);
      }
    }
    // 按下ctrl+v 粘贴
    if (event.ctrlKey && event.key === 'v') {
      if (event && event.target && (event.target as HTMLElement).matches('input, textarea, [contenteditable]')) {
        return;
      }
      event.preventDefault();
      if (curCopyComp.value.id && curCopyComp.value.type !== 'group') {
        pasteComp(lockComp.value, curCopyComp.value);
      }
    }
  }
  function resolveNaiveUI(loaded) {
    import('naive-ui').then(modal => {
      modalUI.naive = modal;
      console.log('loaded');
      loaded();
    });
  }

  function initPage() {
    curPageComps.value[curPage.value.id] = curPage.value;
    initComp(curPage.value, null);
  }

  function getCompVNode(comp: DScreen.CompObj) {
    console.log(comp, 'comp');
    let back: Component | VNode | null;
    const props = {
      class: [
        'comp-item',
        comp.class,
        {
          'is-container': comp.isContainer,
          'has-children': comp.children && comp.children.length
        }
      ],
      draggable: isEdit.value,
      'data-label': comp.name,
      comp,
      id: comp.id,
      style: addUnit(comp.styleData),
      ...comp.props
    };
    // 动态获取子组件值
    const children: Record<string, () => VNode[] | string[]> = {};
    // 如果子节点是单纯文字
    const { content } = comp.props;
    if (content) {
      children.default = () => [content];
    }
    // 如果子节点是组件
    if (comp.children && comp.children.length > 0) {
      // 对子组件的slotKey进行分组
      const group: Record<string, VNode[]> = {};
      comp.children.forEach((item: DScreen.CompObj) => {
        if (!group[item.slotKey]) {
          group[item.slotKey] = [];
        }
        group[item.slotKey].push(getCompVNode(item));
      });
      for (const groupKey in group) {
        children[groupKey] = () => group[groupKey];
      }
    }
    if (comp.type === 'buildIn') {
      back = h(buildInComp[comp.key], props, children);
    } else if (comp.type === 'native') {
      back = h(comp.key, props, children);
    } else if (comp.type === 'external') {
      back = h(modalUI.naive[comp.key], props, children);
    } else {
      console.warn('Invalid component type:', comp.type);
      back = null; // or assign a default component
    }
    if (!back) {
      throw new Error(`Component not found for the given key: ${comp.key}`);
    }
    if (isEdit.value) {
      setTimeout(() => {
        getLockDomInfo(comp);
      });
    }
    return back;
  }

  function destroyPage() {
    isEdit.value = false;
  }

  return {
    pageList,
    curPage,
    curPageComps,
    curDragComp,
    pageDoor,
    mDropComp,
    modalUI,
    isWheel,
    isEdit,
    overComp,
    lockComp,
    curComp,
    domInfo,
    cannotDropComp,
    initPage,
    destroyPage,
    getClickPageScreen,
    updateHoverComp,
    updateLockComp,
    updateDragOverComp,
    selSlotKey,
    getFallContainerComp,
    getSelfComp,
    getParentComp,
    dropEditor,
    clearIndicator,
    updateCurComp,
    resetComp,
    resetCurComp,
    setCurComp,
    setCurDragComp,
    getCompVNode,
    getLockDomInfo,
    keyKevent,
    deleteComp,
    setDropComp,
    resolveNaiveUI
  };
});
