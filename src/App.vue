<template>
  <router-view />
</template>

<script setup>


// 设置根元素的字体大小
const w = document.body.clientWidth
// 动态调整字体大小以响应窗口大小
function setRemBasedOnWindow() {
  const w = document.body.clientWidth
  if (w > 800) {
    document.documentElement.style.fontSize = '8px';
  } else {
    document.documentElement.style.fontSize = '1vw';
  }
}

// 初始化设置
setRemBasedOnWindow();
// 当窗口大小变化时调整字体大小
window.addEventListener('resize', setRemBasedOnWindow);
</script>

<style lang="less">
:root,
:host {
  --van-primary-color: #8475f9 !important;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}


#app {
  font-size: 3.2rem;
  background-color: #000;
  color: #eee;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

div {
  box-sizing: border-box;
  transition: all ease .2s, font-size ease 0s;
}

input {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
}
</style>
