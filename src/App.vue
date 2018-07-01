<template>
  <div id="app">
    <sidebar/>
    <div class="layout-container">
      <layout-header/>
      <router-view></router-view>
    </div>
    <div class="loading">
      <div v-for="item of 3" :key="item"/>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/header'
import Sidebar from '@/components/sidebar'
import Page from '@/components/page'

export default {
  components: {
    LayoutHeader,
    Sidebar,
    Page,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/config.scss';

html,
body,
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
}
.layout-container {
  flex: 1;
  overflow: auto;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  animation: loadingTransform 1s ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  > div {
    flex: 1;
    height: 100%;
    &:nth-child(1) {
      background: #1c1c1c;
    }
    &:nth-child(2) {
      background: #ff6600;
    }
    &:nth-child(3) {
      background: #ffffff;
    }
  }
}
@keyframes loadingTransform {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
