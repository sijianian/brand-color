<template>
  <div class="layout-header">
    <ul>
      <li v-for="(item, index) of navList"
        :key="index">{{ item.name }}</li>
    </ul>

    <span class="locale">
      <a class="active">En</a> /
      <a>中文</a>
    </span>
  </div>
</template>

<script>
const NAV_LIST = [
  {
    name: 'HOME',
  },
  {
    name: 'BRAND PERSONALITY',
  },
  {
    name: 'BRAND PERSONALITY',
  },
  {
    name: 'BRAND PERSONALITY',
  },
  {
    name: 'BRAND PERSONALITY',
  },
  {
    name: 'BRAND PERSONALITY',
  },
]

export default {
  data() {
    return {
      navList: NAV_LIST,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/config.scss';

.layout-header {
  display: flex;
  width: 100%;
  height: $layoutHeaderHeight;
  background: #fff;
  box-shadow: 0 1px 1px #dcdcdc;
  z-index: 1;

  justify-content: flex-end;
  align-items: center;

  ul {
    flex: 1;
    justify-content: space-around;
    display: flex;
    li {
      cursor: pointer;
      font-size: 12px;
      color: #000000;
      font-weight: 600;
    }
  }

  .locale {
    min-width: 50px;
    height: 20px;
    margin-right: 60px;
    padding-left: 20px;
    border-left: 1px solid #979797;
    color: #333;
    font-size: 1.2rem;
    line-height: 20px;

    a {
      color: #999;
      cursor: pointer;

      &.active {
        color: #333;
      }
    }
  }
}
</style>
