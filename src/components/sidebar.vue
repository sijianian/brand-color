<template>
  <div class="layout-sidebar"
    :class="{
      'un-expand': !isExpand,
      'un-hover-expand': isHoverExpand,
    }"
    @mouseenter.stop="unExpandMouseenter"
    @mouseleave.stop="unExpandMouseleave">
    <div class="un-expand-wrap"
      v-show="!isExpand">
      <div class="logo"/>

      <i class="el-icon-search"
        @click="openSearch"/>

      <i class="el-icon-menu"
        @click="handleExpandOpen"/>
    </div>

    <div class="expand-wrap"
      v-show="isExpand">
      <i class="el-icon-close"
        @click="handleExpandClose"/>

      <el-button class="layout-sidebar-logo">
        <span style="color: #FF6868">Logo</span>
      </el-button>

      <search-box ref="searchBox"/>

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
  props: {
    isExpand: {
      type: Boolean,
      default: true,
    },
    isHoverExpand: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
      this.$emit('update:isHoverExpand', false)
      this.$emit('update:isExpand', true)
    },
    handleExpandClose() {
      this.$emit('update:isExpand', false)
    },
    openSearch() {
      this.handleExpandOpen()
      this.$nextTick(() => {
        this.$refs.searchBox.$el.focus()
      })
    },
    unExpandMouseenter() {
      if (this.isExpand) {
        return
      }
      this.$emit('update:isHoverExpand', true)
    },
    unExpandMouseleave() {
      this.$emit('update:isHoverExpand', false)
    },
  },
}
</script>

<style lang="scss">
.layout-sidebar {
  width: 385px;
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  background: #1c1c1c;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.2s;
  z-index: 100;

  &.un-expand {
    width: 60px;
  }

  &.un-hover-expand {
    width: 80px;
  }

  .un-expand-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    .logo {
      width: 40px;
      height: 20px;
      background: #d8d8d8;
      cursor: pointer;
    }

    i {
      margin-top: 40px;
      font-size: 30px;
      color: #999999;
      cursor: pointer;
    }
  }

  .expand-wrap {
    .el-icon-close {
      position: absolute;
      top: 40px;
      left: 40px;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
    }

    .layout-sidebar-logo {
      border-radius: 0;
      margin: 80px 0 100px 0;
      background: #d8d8d8;
      width: 190px;
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
        padding: 0 26px 0 44px;
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
