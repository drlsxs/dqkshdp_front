export const inputStyle = {
  '--n-border-radius': '0',
  '--n-border-hover': '1px solid transparent',
  '--n-border-focus': '1px solid transparent'
};

export const editorStyle = {
  '--d-comp-hover-style': '2px solid #207cfb',
  '--d-comp-click-style': '2px solid lightblue',
  '--d-comp--drag-over': '#c3d4f1'
};

export const segmentTabStyle = {
  '--n-color-segment': '#eaedef',
  '--n-tab-color-segment': '#fff',
  '--n-tab-text-color-active': '#000',
  '--n-font-weight-strong': 'bold',
  '--n-tab-border-radius': '3px',
  '--n-tab-text-color': '#787575'
};

export const inputStyleIn = {
  '--n-color': 'rgb(243 243 243)'
};

export const containerDefaultStyle = {
  paddingRight: '5',
  paddingBottom: '5',
  paddingLeft: '5',
  paddingTop: '5',
  marginTop: '2',
  marginBottom: '2',
  marginLeft: '2',
  marginRight: '2'
};

export const compCommonStyle = {
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
};

const needAddUnit = [
  'fontSize',
  'width',
  'height',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderRadius',
  'borderWidth',
  'rowGap',
  'columnGap'
];

export const addUnit = (style: any) => {
  const styleObj: Record<string, any> = {};
  for (const key in style) {
    if (needAddUnit.includes(key)) {
      styleObj[key] = `${style[key]}${style.unit[key]}`;
    } else {
      styleObj[key] = style[key];
    }
  }
  console.log(styleObj, 'styleObj');
  return styleObj;
};
