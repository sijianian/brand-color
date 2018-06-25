<template>
  <div class="layout-page">
    <header>
      <span class="title">{{ title }}</span>

      <span class="locale">
        <a class="active">En</a> /
        <a>中文</a>
      </span>

      <slot name="header-other"/>
    </header>

    <main>
      <slot/>
    </main>

    <footer>
      <slot name="footer"/>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
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
      padding: 13rem 0 3rem 0;
      line-height: 7.5rem;
      font-size: 6.4rem;
      color: #333333;
      text-align: left;
    }

    .locale {
      position: absolute;
      top: 6.7rem;
      right: 18.5rem;
      font-size: 1.2rem;
      color: #333333;

      a {
        cursor: pointer;
        color: #999999;

        &.active {
          color: #333333;
        }
      }
    }
  }

  main {
    padding: 0 16rem;
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

      .locale {
        top: 3rem;
        right: 3rem;
      }
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
    &.un-hover-expand {
      width: 60px;
    }
  }

  .page-container {
    padding-left: 60px !important;
  }
}

// narrow mobile
@media (max-width: $MQMobileNarrow) {
  .layout-page {
    header {
      padding: 0 1rem;

      .locale {
        top: 3rem;
        right: 3rem;
      }
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
    &.un-hover-expand {
      width: 60px;
    }
  }

  .page-container {
    padding-left: 60px !important;
  }
}
</style>
