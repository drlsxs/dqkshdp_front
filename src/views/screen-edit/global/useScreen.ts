import { useDebounceFn, useDropZone, useEventListener } from '@vueuse/core';
import $D from './index';

function initEditorEvent(pageRef: HTMLElement) {
  $D.isEdit = true; // 标识当前是编辑器模式
  // 组件拖入编辑器逻辑
  useDropZone(pageRef, $D.dropEditor);
  // 容器
  const container = document.querySelector('.dPage') as HTMLElement;
  // 移入指示器
  const hoverIndicator = document.getElementById('hover-indicator') as HTMLElement;
  const hoverLabel = hoverIndicator.querySelector('.label') as HTMLElement;
  // 插槽指示器
  const slotIndicator = document.getElementById('slot-indicator') as HTMLElement;
  // 选中指示器
  const clickIndicator = document.getElementById('click-indicator') as HTMLElement;
  const clickLabel = clickIndicator.querySelector('.label') as HTMLElement;
  // 鼠标移入组件时
  container.addEventListener('mouseover', (e: MouseEvent) => {
    if ($D.isWheel) {
      $D.resetCurComp();
      return;
    }
    const target = e.target as HTMLElement;
    const nestedDiv = target.closest('.comp-item') as HTMLElement;
    if (!nestedDiv) {
      hoverIndicator.style.display = 'none';
      return;
    }
    const id = nestedDiv.id;
    // 判断是否当前移入容器正在显示插槽
    const slotDisplay = slotIndicator.style.display;
    const slotId = slotIndicator.dataset.id;
    if (slotDisplay === 'block' && slotId === id) {
      hoverIndicator.style.display = 'none';
      return;
    }
    // 判断是否锁定·
    const clickDisplay = clickIndicator.style.display;
    const clockId = clickIndicator.dataset.id;
    if (clickDisplay === 'block' && clockId === id) {
      hoverIndicator.style.display = 'none';
      return;
    }
    // 获取元素位置和尺寸
    const rect = nestedDiv.getBoundingClientRect();
    const label = nestedDiv.dataset.label as string;
    // 更新指示器位置和样式
    hoverIndicator.style.display = 'block';
    hoverIndicator.style.left = `${rect.left}px`;
    hoverIndicator.style.top = `${rect.top}px`;
    // 更新边框尺寸
    hoverIndicator.style.width = `${rect.width}px`;
    hoverIndicator.style.height = `${rect.height}px`;
    // 更新标签内容
    hoverLabel.textContent = label;
  });
  // 选中组件时
  container.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const nestedDiv = target.closest('.comp-item') as HTMLElement;
    if (!nestedDiv) {
      clickIndicator.style.display = 'none';
      return;
    }
    // 获取元素位置和尺寸
    const rect = nestedDiv.getBoundingClientRect();
    const label = nestedDiv.dataset.label as string;
    const id = nestedDiv.id;
    slotIndicator.style.display = 'none';
    hoverIndicator.style.display = 'none';
    $D.lockComp = $D.curPageComps[id];
    // 更新指示器位置和样式
    clickIndicator.style.display = 'block';
    clickIndicator.style.left = `${rect.left}px`;
    clickIndicator.style.top = `${rect.top}px`;
    // 更新边框尺寸
    clickIndicator.style.width = `${rect.width}px`;
    clickIndicator.style.height = `${rect.height}px`;
    clickIndicator.dataset.id = id;
    // 更新标签内容
    clickLabel.textContent = label;
    console.log($D.lockComp, '选中组件');
  });
  // 在容器中拖动，拖动时拖动到组件时
  container.addEventListener('dragover', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const nestedDiv = target.closest('.comp-item');
    if (!nestedDiv) {
      slotIndicator.style.display = 'none';
      return;
    }
    // 获取元素位置和尺寸
    const rect = nestedDiv.getBoundingClientRect();
    const id = nestedDiv.id;
    $D.overComp = $D.curPageComps[id];
    // 只有是容器才显示拖入框
    if ($D.overComp.isContainer) {
      // 更新指示器位置和样式
      slotIndicator.style.display = 'block';
      slotIndicator.style.left = `${rect.left}px`;
      slotIndicator.style.top = `${rect.top}px`;
      // 更新边框尺寸
      slotIndicator.style.width = `${rect.width}px`;
      slotIndicator.style.height = `${rect.height}px`;
      slotIndicator.dataset.id = id;
    }
  });
  // 拖入容器
  container.addEventListener('dragenter', () => {
    $D.resetComp(true);
  });
  // 鼠标移出容器
  container.addEventListener('mouseleave', () => {
    hoverIndicator.style.display = 'none';
  });
  // 监听键盘事件
  useEventListener(document, 'keydown', event => {
    $D.keyKevent(event);
  });
  // 鼠标离开编辑器
  useEventListener(pageRef, 'mouseout', () => {
    $D.curComp = $D.curPageComps[$D.curPage.id];
  });
  // 鼠标滚动后200ms执行
  const debouncedFn = useDebounceFn(() => {
    $D.isWheel = false;
  }, 200);
  // 鼠标开始滚动
  useEventListener(pageRef, 'wheel', () => {
    $D.isWheel = true;
    $D.resetComp(true);
  });
  // 使用防抖函数最后结束后再执行
  useEventListener(pageRef, 'wheel', debouncedFn);
}

export { initEditorEvent };
