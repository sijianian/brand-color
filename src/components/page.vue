<template>
  <div class="layout-page">
    <header>
      <span class="title">{{ title }}</span>

      <span class="locale">
        <a class="active">En</a> /
        <a>中文</a>
      </span>
    </header>

    <main>
      <slot/>
    </main>
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
    padding-left: 190px;
    background: #ebebeb;
    .title {
      display: inline-block;
      margin: 135px 0 35px 0;
      line-height: 75px;
      font-size: 64px;
      color: #333333;
      text-align: left;
    }

    .locale {
      position: absolute;
      top: 67px;
      right: 185px;
      font-size: 12px;
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
    padding: 0 190px;
  }
}
</style>
