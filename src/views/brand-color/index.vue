<template>
  <page
    class="page-brand-color"
    title="Brand Color"
    ref="page">
    <el-tabs class="tabs"
      slot="header-other"
      v-model="activeName">
      <el-tab-pane
        label="Neutral colors"
        name="1"/>
      <el-tab-pane
        label="Color 01"
        name="2"/>
      <el-tab-pane
        label="Color 02"
        name="3"/>
    </el-tabs>

    <div class="download">
      <img src="@/assets/images/sketch.png" alt="">
    </div>

    <div class="content"
      v-show="activeName === '1'">
      <p>
        Alibaba.com is a global platform where buyers and suppliers engage in conducting business from around the world. Thus our design
        <br>
        Alibaba.com is a global platform where buyers and suppliers engage in conducting business from around the world. Thus our design
      </p>

      <h2>Neutral colors</h2>

      <ul class="color-wrap">
        <li v-for="(item, index) of neutralcolors"
          :key="index">
          <div class="main"
            :style="{
              background: item.color,
            }">
            <span class="copy"
              @click="copy(item)">Copy</span>
          </div>
          <div class="name">{{ item.name }}</div>
          <div class="color"
            :style="{
              color: item.color,
            }">{{ item.color }}</div>
        </li>
      </ul>

      <h3>Case</h3>

      <div class="img-wrap">
        <img src="@/assets/images/Snip20180624_23.png" alt="">
      </div>

      <h2>Font colors</h2>

      <ul class="color-wrap">
        <li v-for="(item, index) of fontsColors"
          :key="index">
          <div class="main"
            :style="{
              background: item.color,
            }">
            <span class="copy"
              @click="copy(item)">Copy</span>
          </div>
          <div class="name">{{ item.name }}</div>
          <div class="color"
            :style="{
              color: item.color,
            }">{{ item.color }}</div>
        </li>
      </ul>

      <h3>Case</h3>

      <div class="img-wrap">
        <img src="@/assets/images/Snip20180624_24.png" alt="">

        <br>

        <img src="@/assets/images/Snip20180624_24.png" alt="">
      </div>
    </div>
  </page>
</template>

<script>
import clipboard from '@/utils/clipboard'

export default {
  data() {
    return {
      activeName: '1',
      neutralcolors: [
        {
          name: 'line1-1 浅',
          color: '#E8E8E8',
        },
        {
          name: 'line1-2 常规',
          color: '#D9D9D9',
        },
        {
          name: 'line1-3 深',
          color: '#BFBFBF',
        },
        {
          name: 'fill1-1 浅',
          color: '#E8E8E8',
        },
        {
          name: 'fill1-2 常规',
          color: '#D9D9D9',
        },
        {
          name: 'fill1-3 深',
          color: '#BFBFBF',
        },
      ],
      fontsColors: [
        {
          name: 'text1-1 轻',
          color: '#CCCCCC',
        },
        {
          name: 'text1-2 浅',
          color: '#999999',
        },
        {
          name: 'text1-3 常规',
          color: '#666666',
        },
        {
          name: 'text1-4 深',
          color: '#333333',
        },
        {
          name: 'text1-5 重',
          color: '#FFFFFF',
        },
      ],
    }
  },
  methods: {
    copy(item) {
      clipboard.copy(item.color)
      this.$message({
        message: `Copy ${item.color} Success!`,
        type: 'success',
      })
    },
  },
}
</script>

<style lang="scss">
.page-brand-color {
  position: relative;
  text-align: left;

  p {
    margin: 5.6rem 0 8rem 0;
  }

  h2 {
    margin-bottom: 12px;
  }

  .tabs {
    height: 50px;
    .el-tabs__nav-wrap {
      background: #ebebeb;
    }
    .el-tabs__nav-wrap::after {
      height: 0;
    }
    .el-tabs__content {
      text-align: left;
    }
    .el-tabs__active-bar {
      height: 4px;
    }
    .el-tabs__item {
      font-size: 2rem;
      height: 50px;
      line-height: 50px;
      &.is-active {
        font-weight: bold;
      }
    }
  }

  .color-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    li {
      margin-bottom: 35px;

      .main {
        position: relative;
        height: 11.4rem;
        width: 19.1rem;

        &:hover {
          transform: scale(1.05, 1.02);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
          z-index: 1;

          .copy {
            display: block;
            color: #000000;
          }
        }

        .copy {
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .name {
        margin-top: 20px;
        color: #000000;
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }

  .img-wrap {
    box-sizing: border-box;
    margin-top: 20px;
    padding: 3rem 1rem 2.6rem 1rem;
    background: #f4f4f4;
    text-align: center;

    img {
      max-width: 100%;
    }
  }

  .content {
    padding-bottom: 15rem;
  }

  .download {
    display: none;
    position: absolute;
    top: 2.2rem;
    right: 18.5rem;
    cursor: pointer;
  }
}
</style>
