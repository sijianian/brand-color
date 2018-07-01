<template>
  <div id="app">
    <sidebar/>
    <div class="layout-container">
      <layout-header/>
      <router-view></router-view>
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
</style>
