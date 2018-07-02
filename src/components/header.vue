<template>
  <div class="layout-header">
    <div class="logo" v-if="hasLogo">
      <img src="@/assets/images/alibaba-logo.png" alt="">
    </div>

    <ul>
      <li v-for="(item, index) of navList"
        :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
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
    path: '/',
  },
  {
    name: 'BRAND COLOR',
    path: '/brandColor',
  },
  {
    name: 'BRAND PERSONALITY',
    path: '/',
  },
  {
    name: 'BRAND PERSONALITY',
    path: '/',
  },
  {
    name: 'BRAND PERSONALITY',
    path: '/',
  },
  {
    name: 'BRAND PERSONALITY',
    path: '/',
  },
]

export default {
  props: {
    hasLogo: {
      type: Boolean,
      default: true,
    },
  },
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
  background: #1c1c1c;
  box-shadow: 0 1px 1px #dcdcdc;
  z-index: 1;

  justify-content: flex-end;
  align-items: center;

  .logo {
    margin: 0 50px;
    img {
      max-width: 100%;
    }
  }

  ul {
    flex: 1;
    justify-content: space-around;
    display: flex;
    li {
      position: relative;
      cursor: pointer;
      font-size: 12px;
      color: #fff;
      font-weight: 600;
      transition: all 0.2s;
      &:not(:first-child):before {
        content: '';
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border: 2px solid #fff;
      }
      &:nth-child(even) {
        &::before {
          border-radius: 50%;
          border: none;
          width: 7px;
          height: 7px;
          background: #fff;
        }
      }
      &:nth-child(odd) {
      }
      a {
        color: #fff;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .locale {
    min-width: 50px;
    height: 20px;
    margin-right: 60px;
    padding-left: 20px;
    border-left: 1px solid #979797;
    color: #fff;
    font-size: 1.2rem;
    line-height: 20px;

    a {
      color: #999;
      cursor: pointer;

      &.active {
        color: #fff;
      }
    }
  }
}
</style>
