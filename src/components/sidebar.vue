<template>
  <div class="layout-sidebar"
    :class="{
      'un-expand': !isExpand,
    }">
    <div class="un-expand-wrap"
      v-show="!isExpand">
      <i class="iconfont icon-alibaba"
        @click="redirectHome"/>

      <i class="iconfont icon-search"
        @click="openSearch"/>

      <i class="iconfont icon-category"
        @click="handleExpandOpen"/>
    </div>

    <div class="expand-wrap"
      v-show="isExpand">
      <i class="el-icon-close"
        @click="handleExpandClose"/>

      <img class="layout-sidebar-logo"
        src="@/assets/images/logo.png"
        @click="redirectHome">

      <search-box ref="searchBox"/>

      <i class="iconfont icon-search search-box-icon"/>

      <div class="line"/>

      <el-radio-group
        size="small"
        class="layout-sidebar-switch"
        v-model="isCollapse">
        <el-radio-button
          :label="false">
          <i class="el-icon-more"/>
        </el-radio-button>
        <el-radio-button
          :label="true">
          <i class="el-icon-news"/>
        </el-radio-button>
      </el-radio-group>

      <el-menu
        background-color="#1C1C1C"
        router>
        <el-menu-item-group
          v-for="(item, index) of menuList"
          :key="index">
          <span slot="title">{{ item.title }}</span>
          <el-menu-item v-for="(item, index) of item.children"
            :key="index"
            :index="item.index">{{ item.name }}</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/search-box'

export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      isExpand: false,
      isCollapse: false,
      menuList: [
        {
          title: 'Brand Story',
          children: [
            {
              name: 'Our Mission',
              index: '/about',
            },
            {
              name: 'Brand Color',
              index: '/brandColor',
            },
          ],
        },
        {
          title: 'Design Language',
          children: [
            {
              name: 'UX Design Language',
              index: '/',
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleExpandOpen() {
      this.isExpand = true
    },
    handleExpandClose() {
      this.isExpand = false
    },
    openSearch() {
      this.handleExpandOpen()
      this.$nextTick(() => {
        this.$refs.searchBox.$el.focus()
      })
    },
    redirectHome() {
      this.$router.push({
        name: 'home',
      })
    },
  },
}
</script>

<style lang="scss">
.layout-sidebar {
  float: left;
  width: 285px;
  height: 100%;
  background: #1c1c1c;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.2s;
  z-index: 100;

  &.un-expand {
    width: 60px;
    &:hover {
      width: 80px;
    }
  }

  .search-box-icon {
    position: absolute;
    top: 226px;
    right: 30px;
    font-size: 20px;
  }

  .un-expand-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 22px;

    i {
      font-size: 30px;
      color: #999999;
      cursor: pointer;
      &:not(:first-child) {
        margin-top: 40px;
      }
      &.icon-category {
        font-size: 18px;
      }
      &.icon-alibaba {
        font-size: 18px;
      }
    }
  }

  .expand-wrap {
    position: relative;
    .el-icon-close {
      position: absolute;
      top: 20px;
      left: 20px;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
    }

    .layout-sidebar-logo {
      border-radius: 0;
      margin: 80px 0 100px 0;
      width: 190px;
      cursor: pointer;
    }

    .line {
      margin: 40px 60px 0px 55px;
      height: 1px;
      background: #fff;
    }

    .layout-sidebar-switch {
      margin: 20px 0 38px 0;
      border: 1px solid #fff;

      .el-radio-button {
        .el-radio-button__inner {
          border-radius: 0;
        }
      }
    }

    .el-menu {
      border-right: none;

      .el-menu-item-group {
        padding: 0 26px 0 32px;
        text-align: left;

        .el-menu-item-group__title {
          font-size: 24px;
          color: #e2ebe9;
          font-weight: bold;
          line-height: 28px;
        }

        .el-menu-item {
          font-size: 18px;
          color: #999999 !important;
          height: 32px;
          line-height: 32px;

          &:hover,
          &.is-active {
            color: #e2ebe9 !important;
            text-decoration: underline;
            background: #242424 !important;
          }
        }
      }
    }
  }
}
</style>
