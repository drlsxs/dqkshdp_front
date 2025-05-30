<script setup lang="ts"></script>

<template>
  <!-- 用于显示边框和标签的固定元素 -->
  <div id="click-indicator" class="click-indicator">
    <div class="label"></div>
  </div>
</template>

<style scoped>
.click-indicator {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  display: none;
  outline: 2px solid #22d3eeff;
}

.click-indicator .label {
  position: absolute;
  bottom: -22px;
  left: -2px;
  background: #22d3eeff;
  color: white;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 3px;
  white-space: nowrap;
}
</style>
