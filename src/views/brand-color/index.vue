<template>
  <page
    class="page-brand-color"
    title="Brand Color">
    <el-tabs class="tabs">
      <el-tab-pane label="Neutral colors">
        <div class="content">
          <p>
            Alibaba.com is a global platform where buyers and suppliers engage in conducting business from around the world. Thus our design
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
            <img src="../../assets/Snip20180624_23.png" alt="">
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
            <img src="../../assets/Snip20180624_24.png" alt="">

            <br>

            <img src="../../assets/Snip20180624_24.png" alt="">
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Color 01">
        one
      </el-tab-pane>
      <el-tab-pane label="Color 01">
        two
      </el-tab-pane>
    </el-tabs>

    <div class="download">
      <img src="../../assets/sketch.png" alt="">
    </div>

    <back-top>
      <template slot="other">
        <div class="m-back-top-inner"
          :style="{
            marginTop: '5px'
          }">
          <i class="el-icon-tickets"
            :style="{
              fontSize: '20px',
              color: '#fff',
            }"/>
        </div>
      </template>
    </back-top>
  </page>
</template>

<script>
import clipboard from '@/utils/clipboard'
import BackTop from '@/components/back-top'

export default {
  components: {
    BackTop,
  },
  data() {
    return {
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
        message: `Copy ${item.name} Success!`,
        type: 'success',
      })
    },
  },
}
</script>

<style lang="scss">
.page-brand-color {
  position: relative;

  .tabs {
    .el-tabs__nav-wrap {
      margin: 0 -190px;
      padding-left: 190px;
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
      font-size: 20px;
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

    li {
      margin-bottom: 35px;

      .main {
        position: relative;
        height: 114px;
        width: 191px;

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

          &:hover {
          }
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
    margin-top: 20px;
    padding: 30px 10px 26px 10px;
    background: #f4f4f4;
    text-align: center;

    img {
      max-width: 100%;
    }
  }

  .download {
    position: absolute;
    top: 220px;
    right: 185px;
    cursor: pointer;
  }
}
</style>
