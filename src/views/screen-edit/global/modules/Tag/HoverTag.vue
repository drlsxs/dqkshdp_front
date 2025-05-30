<script setup lang="ts"></script>

<template>
  <!-- 用于显示边框和标签的固定元素 -->
  <div id="hover-indicator" class="hover-indicator">
    <div class="label"></div>
  </div>
</template>

<style scoped>
.hover-indicator {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  display: none;
  outline: 2px solid #4285f4;
}

.hover-indicator .label {
  position: absolute;
  bottom: -22px;
  left: -2px;
  background: #4285f4;
  color: white;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 3px;
  white-space: nowrap;
}
</style>
