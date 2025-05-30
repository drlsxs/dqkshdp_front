<script setup lang="ts">
import { computed } from 'vue';
import { NIcon } from 'naive-ui';
import {
  AlignBottom20Filled,
  AlignCenterHorizontal20Filled,
  AlignCenterVertical20Filled,
  AlignLeft20Filled,
  AlignRight20Filled,
  AlignSpaceAroundHorizontal20Filled,
  AlignSpaceBetweenHorizontal20Filled,
  AlignTop20Filled,
  ArrowBidirectionalUpDown20Filled,
  Edit32Regular,
  FontDecrease20Filled,
  FontIncrease20Filled,
  LineStyle24Filled,
  PaintBucket20Regular,
  TextBold20Regular,
  TextItalic20Filled,
  TextStrikethrough20Filled,
  TextUnderline20Filled,
  VideoBackgroundEffect24Regular
} from '@vicons/fluent';
import { BanOutline } from '@vicons/ionicons5';
import {
  fontFamilyOptions,
  fontSizeOptions,
  unitOptions
} from '@/views/screen-edit/modules/main-block/modules/right/modules/config/style/style-options';
interface Props {
  // 标签名称
  comp: DScreen.CompObj;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: DScreen.CompObj): void;
}

const emit = defineEmits<Emits>();
const comps = computed({
  get: () => props.comp,
  set: value => {
    emit('update:modelValue', value);
  }
});

// 处理字体
function handleFont(type: string) {
  const { styleData } = comps.value;
  switch (type) {
    case 'bold':
      styleData.fontWeight = styleData.fontWeight === '' ? 'bold' : '';
      break;
    case 'italic':
      styleData.fontStyle = styleData.fontStyle === '' ? 'italic' : '';
      break;
    case 'underline':
      styleData.textDecoration = styleData.textDecoration.includes('underline')
        ? styleData.textDecoration.replace('underline', '')
        : 'underline'.concat(styleData.textDecoration);
      break;
    case 'deleteLine':
      styleData.textDecoration = styleData.textDecoration.includes('line-through')
        ? styleData.textDecoration.replace(' line-through', '')
        : styleData.textDecoration.concat(' line-through');
      break;
    default:
      break;
  }
}

// 处理布局
function handleLayout(type: string) {
  const { styleData } = comps.value;
  switch (type) {
    case 'none':
      styleData.display = '';
      styleData.flexDirection = '';
      styleData.justifyContent = '';
      styleData.alignItems = '';
      break;
    case 'row':
      styleData.display = 'flex';
      styleData.flexDirection = 'row';
      break;
    case 'column':
      styleData.display = 'flex';
      styleData.flexDirection = 'column';
      break;
    default:
      break;
  }
}

function handleHorizontal(type: string) {
  const { styleData } = comps.value;
  styleData.display = 'flex';
  styleData.justifyContent = type;
}

function handleVertical(type: string) {
  const { styleData } = comps.value;
  styleData.display = 'flex';
  styleData.alignItems = type;
}

function handleUnit(key: string, unit: string) {
  const { styleData } = comps.value;
  styleData.unit[key] = unit;
}
</script>

<template>
  <div class="style-content mt-2 p-2">
    <NRow>
      <NCol :span="5">文字</NCol>
      <NCol :span="19">
        <NRow :gutter="[8, 5]">
          <NRow>
            <NFlex class="gap-2!">
              <NButton size="small">
                <NIcon size="18">
                  <FontIncrease20Filled></FontIncrease20Filled>
                </NIcon>
              </NButton>
              <NButton size="small">
                <NIcon size="18">
                  <FontDecrease20Filled></FontDecrease20Filled>
                </NIcon>
              </NButton>
            </NFlex>
          </NRow>
          <NRow class="mt-2!" :gutter="8">
            <NCol :span="10">
              <NSelect v-model:value="comps.styleData.fontFamily" size="small" :options="fontFamilyOptions"></NSelect>
            </NCol>
            <NCol :span="8">
              <NSelect v-model:value="comps.styleData.fontSize" size="small" :options="fontSizeOptions"></NSelect>
            </NCol>
          </NRow>
          <NRow class="mt-2!">
            <NCol :span="24">
              <NButtonGroup>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.fontWeight === 'bold' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleFont('bold')"
                >
                  <NIcon size="18">
                    <TextBold20Regular></TextBold20Regular>
                  </NIcon>
                </NButton>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.fontStyle === 'italic' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleFont('italic')"
                >
                  <NIcon size="18">
                    <TextItalic20Filled></TextItalic20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  :style="{ background: comps.styleData.textDecoration.includes('underline') ? '#f3f3f3' : '' }"
                  size="small"
                  :focusable="false"
                  @click="handleFont('underline')"
                >
                  <NIcon size="18">
                    <TextUnderline20Filled></TextUnderline20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  :style="{ background: comps.styleData.textDecoration.includes(' line-through') ? '#f3f3f3' : '' }"
                  size="small"
                  :focusable="false"
                  @click="handleFont('deleteLine')"
                >
                  <NIcon size="18">
                    <TextStrikethrough20Filled></TextStrikethrough20Filled>
                  </NIcon>
                </NButton>
                <NButton size="small" :focusable="false">
                  <div class="relative">
                    <div class="relative top--2px text-3.5">A</div>
                    <NColorPicker
                      v-model:value="comps.styleData.color"
                      :style="{ '--n-border': 'none' }"
                      class="absolute left--8px top-8px h-12px w-25px"
                      size="small"
                    >
                      <template #label>
                        <div></div>
                      </template>
                    </NColorPicker>
                  </div>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
      <NDivider class="my-4!" />
    </NRow>
    <NRow>
      <NCol :span="5">宽高</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">W</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.width"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <NDropdown trigger="hover" :options="unitOptions" @select="unit => handleUnit('width', unit)">
                    <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">
                      {{ comps.styleData.unit.width }}
                    </div>
                  </NDropdown>
                </div>
              </NButton>
            </NCol>
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">H</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.height"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <NDropdown trigger="hover" :options="unitOptions" @select="unit => handleUnit('height', unit)">
                    <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">
                      {{ comps.styleData.unit.height }}
                    </div>
                  </NDropdown>
                </div>
              </NButton>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
    <NRow class="mt-4!">
      <NCol :span="5">弹性布局</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow>
            <NCol :span="24">
              <NButtonGroup>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.flexDirection === '' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleLayout('none')"
                >
                  <NIcon size="18">
                    <BanOutline></BanOutline>
                  </NIcon>
                </NButton>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.flexDirection === 'row' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleLayout('row')"
                >
                  <NIcon class="rotate-90" size="18">
                    <ArrowBidirectionalUpDown20Filled></ArrowBidirectionalUpDown20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  :style="{ background: comps.styleData.flexDirection === 'column' ? '#f3f3f3' : '' }"
                  size="small"
                  :focusable="false"
                  @click="handleLayout('column')"
                >
                  <NIcon size="18">
                    <ArrowBidirectionalUpDown20Filled></ArrowBidirectionalUpDown20Filled>
                  </NIcon>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
    <NRow class="mt-4!">
      <NCol :span="5">对齐</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="24">
              <NButtonGroup>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.justifyContent === 'left' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleHorizontal('left')"
                >
                  <NIcon size="18">
                    <AlignLeft20Filled></AlignLeft20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.justifyContent === 'center' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleHorizontal('center')"
                >
                  <NIcon size="18">
                    <AlignCenterHorizontal20Filled></AlignCenterHorizontal20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  :style="{ background: comps.styleData.justifyContent === 'right' ? '#f3f3f3' : '' }"
                  size="small"
                  :focusable="false"
                  @click="handleHorizontal('right')"
                >
                  <NIcon size="18">
                    <AlignRight20Filled></AlignRight20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  :style="{ background: comps.styleData.justifyContent === 'space-around' ? '#f3f3f3' : '' }"
                  size="small"
                  :focusable="false"
                  @click="handleHorizontal('space-around')"
                >
                  <NIcon size="18">
                    <AlignSpaceAroundHorizontal20Filled></AlignSpaceAroundHorizontal20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  :style="{ background: comps.styleData.justifyContent === 'space-between' ? '#f3f3f3' : '' }"
                  size="small"
                  :focusable="false"
                  @click="handleHorizontal('space-between')"
                >
                  <NIcon size="18">
                    <AlignSpaceBetweenHorizontal20Filled></AlignSpaceBetweenHorizontal20Filled>
                  </NIcon>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
        <NRow class="mt-3!" :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="24">
              <NButtonGroup>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.alignItems === 'start' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleVertical('start')"
                >
                  <NIcon size="18">
                    <AlignTop20Filled></AlignTop20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  size="small"
                  :style="{ background: comps.styleData.alignItems === 'center' ? '#f3f3f3' : '' }"
                  :focusable="false"
                  @click="handleVertical('center')"
                >
                  <NIcon size="18">
                    <AlignCenterVertical20Filled></AlignCenterVertical20Filled>
                  </NIcon>
                </NButton>
                <NButton
                  :style="{ background: comps.styleData.alignItems === 'end' ? '#f3f3f3' : '' }"
                  size="small"
                  :focusable="false"
                  @click="handleVertical('end')"
                >
                  <NIcon size="18">
                    <AlignBottom20Filled></AlignBottom20Filled>
                  </NIcon>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
    <NRow class="mt-4!">
      <NCol :span="5">间距</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">列</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.columnGap"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <NDropdown trigger="hover" :options="unitOptions" @select="unit => handleUnit('columnGap', unit)">
                    <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">
                      {{ comps.styleData.unit.columnGap }}
                    </div>
                  </NDropdown>
                </div>
              </NButton>
            </NCol>
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">行</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.rowGap"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <NDropdown trigger="hover" :options="unitOptions" @select="unit => handleUnit('rowGap', unit)">
                    <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">
                      {{ comps.styleData.unit.rowGap }}
                    </div>
                  </NDropdown>
                </div>
              </NButton>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
      <NDivider class="my-4!" />
    </NRow>
    <NRow>
      <NCol :span="5">边框</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="24">
              <NButtonGroup>
                <NButton size="small" :focusable="false">
                  <NIcon size="18">
                    <LineStyle24Filled></LineStyle24Filled>
                  </NIcon>
                </NButton>
                <NButton size="small" :focusable="false">
                  <div class="relative">
                    <NIcon class="relative top--2px">
                      <Edit32Regular></Edit32Regular>
                    </NIcon>
                    <NColorPicker
                      v-model:value="comps.styleData.borderColor"
                      :style="{ '--n-border': 'none' }"
                      class="absolute left--6px top-8px h-12px w-25px"
                      size="small"
                    >
                      <template #label>
                        <div></div>
                      </template>
                    </NColorPicker>
                  </div>
                </NButton>
                <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                  <div class="flex items-center">
                    <div class="style-item-config-value mr-4px w-20px">
                      <NInput
                        v-model:value="comps.styleData.borderWidth"
                        class="out-input"
                        size="small"
                        placeholder=""
                      ></NInput>
                    </div>
                    <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                  </div>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
    <NRow class="mt-4!">
      <NCol :span="5">背景</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="24">
              <NButtonGroup>
                <NButton size="small" :focusable="false">
                  <div class="relative">
                    <NIcon size="16" class="relative top--2px">
                      <PaintBucket20Regular></PaintBucket20Regular>
                    </NIcon>
                    <NColorPicker
                      v-model:value="comps.styleData.backgroundColor"
                      :style="{ '--n-border': 'none' }"
                      class="absolute left--5px top-10px h-12px w-25px"
                      size="small"
                    >
                      <template #label>
                        <div></div>
                      </template>
                    </NColorPicker>
                  </div>
                </NButton>
                <NButton size="small" :focusable="false">
                  <NIcon size="18">
                    <VideoBackgroundEffect24Regular></VideoBackgroundEffect24Regular>
                  </NIcon>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
    <NRow class="mt-4!">
      <NCol :span="5">内边距</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">上</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.paddingTop"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">下</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.paddingBottom"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
          </NRow>
          <NRow class="mt-3!" :gutter="8">
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">左</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.paddingLeft"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">右</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.paddingRight"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
    <NRow class="mt-4!">
      <NCol :span="5">外边距</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">上</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.marginTop"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">下</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.marginBottom"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
          </NRow>
          <NRow class="mt-3!" :gutter="8">
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">左</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.marginLeft"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
            <NCol :span="11">
              <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                <div class="style-item-config-unit h-28px border-r-1 border-l-#E0E0E6FF px-1 lh-28px">右</div>
                <div class="flex items-center">
                  <div class="style-item-config-value mr-4px w-60px">
                    <NInput
                      v-model:value="comps.styleData.marginRight"
                      class="out-input"
                      size="small"
                      placeholder=""
                    ></NInput>
                  </div>
                  <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                </div>
              </NButton>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
      <NDivider class="my-4!" />
    </NRow>
    <NRow>
      <NCol :span="5">圆角半径</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="24">
              <NButtonGroup>
                <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                  <div class="flex items-center">
                    <div class="style-item-config-value mr-4px w-20px">
                      <NInput
                        v-model:value="comps.styleData.borderRadius"
                        class="out-input"
                        size="small"
                        placeholder=""
                      ></NInput>
                    </div>
                    <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">px</div>
                  </div>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
    <NRow class="mt-4!">
      <NCol :span="5">透明度</NCol>
      <NCol :span="18">
        <NRow :gutter="[8, 5]">
          <NRow :gutter="8">
            <NCol :span="24">
              <NButtonGroup>
                <NButton class="pl-4px! pr-0!" size="small" :focusable="true">
                  <div class="flex items-center">
                    <div class="style-item-config-value mr-4px w-100px">
                      <NInputNumber
                        v-model:value="comps.styleData.opacity"
                        class="out-input"
                        size="small"
                        placeholder=""
                        max="100"
                        min="0"
                      ></NInputNumber>
                    </div>
                    <div class="style-item-config-unit h-28px border-l-1 border-l-#E0E0E6FF px-1 lh-28px">%</div>
                  </div>
                </NButton>
              </NButtonGroup>
            </NCol>
          </NRow>
        </NRow>
      </NCol>
    </NRow>
  </div>
</template>

<style scoped lang="scss">
.style-item {
  font-size: 13px;
  .style-item-options {
    &.active {
      background-color: #ffffff;
    }
  }
  background-color: rgb(243 243 243);
  .style-item-config-props.show-r-border {
    border-right: 1px solid #c9c9c9;
    padding-right: 8px;
  }
}
:deep(.n-input:not(.n-input--disabled)) {
  .n-input-wrapper {
    padding: 0;
  }
  background-color: transparent;
  .n-input__border {
    border: none;
  }
  .n-input__state-border {
    border: none;
    box-shadow: none;
  }
}
</style>
