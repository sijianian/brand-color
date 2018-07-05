<template>
  <div class="layout-page">
    <slot name="header">
      <header>
        <span class="title">{{ title }}</span>

        <slot name="header-other"/>
      </header>
    </slot>

    <main>
      <slot/>
    </main>

    <footer>
      <slot name="footer"/>
    </footer>

    <back-top
      :target="getBackTopTarget">
      <template slot="other">
        <div class="m-back-top-inner"
          :style="{
            marginTop: '5px'
          }">
          <i class="iconfont icon-help"
            :style="{
              fontSize: '20px',
              color: '#fff',
            }"/>
        </div>
      </template>
    </back-top>

  </div>
</template>

<script>
import BackTop from '@/components/back-top'

export default {
  components: {
    BackTop,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  mounted() {
    document.body.querySelector('.layout-container').scrollTop = 0
  },
  methods: {
    getBackTopTarget() {
      return document.body.querySelector('.layout-container')
    },
  },
}
</script>

<style lang="scss">
.layout-page {
  height: 100%;
  width: 100%;
  background: #fff;

  header {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 16rem;
    background: #ebebeb;
    .title {
      box-sizing: border-box;
      display: inline-block;
      padding: 7.5rem 0 3rem 0;
      line-height: 7.5rem;
      font-size: 6.4rem;
      color: #333333;
      text-align: left;
    }
  }

  main {
    padding: 0 16rem;
    background: #fff;
  }

  footer {
    padding: 4rem 16rem;
    background: #f7f7f7;
  }
}

$MQNarrow: 991px;
$MQMobile: 768px;
$MQMobileNarrow: 480px;

// narrow desktop / iPad
@media (max-width: $MQNarrow) {
  .layout-page {
    header {
      padding: 0 8rem;

      .locale {
        top: 3rem;
        right: 3rem;
      }
    }
    main {
      padding: 0 8rem;
    }
  }
}

// wide mobile
@media (max-width: $MQMobile) {
  .layout-page {
    header {
      padding: 0 1.5rem;
    }
    main {
      padding: 0 1.5rem;
    }
    footer {
      padding: 4rem 1.5rem;
      background: #f7f7f7;
    }
  }

  .layout-sidebar {
    &.un-expand {
      width: 60px !important;
    }
  }

  .page-container {
    margin-left: 60px !important;
  }
}

// narrow mobile
@media (max-width: $MQMobileNarrow) {
  .layout-page {
    header {
      padding: 0 1rem;
    }
    main {
      padding: 0 1rem;
    }
    footer {
      padding: 4rem 1rem;
      background: #f7f7f7;
    }
  }

  .layout-sidebar {
    &.un-expand {
      width: 60px !important;
    }
  }

  .page-container {
    margin-left: 60px !important;
  }
}
</style>
