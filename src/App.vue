<template>
  <div id="app">
    <sidebar
      :is-expand.sync="isExpand"
      :is-hover-expand.sync="isHoverExpand"/>
    <div
      class="page-container"
      :class="{
        'sidebar-expand': isExpand,
        'sidebar-un-expand': !isExpand,
        'sidebar-hover-expand': isHoverExpand,
      }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Page from '@/components/page'

export default {
  components: {
    Sidebar,
    Page,
  },
  data() {
    return {
      isExpand: true,
      isHoverExpand: false,
    }
  },
}
</script>

<style lang="scss">
html,
body,
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-container {
  width: 100%;
  height: 100%;
  transition: padding 0.1s;
  background: #1c1c1c;

  &.sidebar-expand {
    padding-left: 385px;
  }
  &.sidebar-un-expand {
    padding-left: 60px;
  }
  &.sidebar-hover-expand {
    padding-left: 80px;
  }
}
</style>
