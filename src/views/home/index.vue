<template>
  <page class="home">
    <banner-com slot="header"/>

    <div class="content">
      <div class="item item-01">
        <div class="left">
          <h2>BRAND OVERVIEW</h2>
          <div class="item-nav-wrap">
            <ul class="item-nav">
              <li class="item-nav-title">Brand Color</li>
              <li>Our Mission</li>
              <li>Target Customer</li>
              <li>Brand Personality</li>
              <li>Keywords </li>
              <li>Design Principle</li>
            </ul>
            <ul class="item-nav">
              <li class="item-nav-title">Brand Color</li>
              <li>Our Mission</li>
              <li>Target Customer</li>
              <li>Brand Personality</li>
              <li>Keywords </li>
              <li>Design Principle</li>
            </ul>
            <ul class="item-nav">
              <li class="item-nav-title">Brand Color</li>
              <li>Our Mission</li>
              <li>Target Customer</li>
              <li>Brand Personality</li>
              <li>Keywords </li>
              <li>Design Principle</li>
            </ul>
          </div>
          <img class="see-more" src="@/assets/images/see_more.png" alt="">
        </div>
        <div class="right">
          <div class="intro">to make it easy to do business anywhere</div>
          <div class="img-box">
            <img src="./Bitmap.png" alt="">
            <div class="count count-left">01</div>
          </div>
        </div>
      </div>

      <div class="item item-02">
        <div class="left">
          <h2>BRAND VOICE</h2>
          <div class="item-nav-wrap">
            <ul class="item-nav">
              <li>UX</li>
              <li>EDM</li>
              <li>Relationship</li>
            </ul>
          </div>
          <img class="see-more" src="@/assets/images/see_more.png" alt="">
        </div>
        <div class="right">
          <div class="intro">
            <img src="./Bitmap2.png" alt="">
          </div>
          <div class="img-box">
            <img src="./Bitmap.png" alt="">
            <div class="count count-right">02</div>
          </div>
        </div>
      </div>

      <div class="item item-03">
        <div class="left">
          <h2>VISUAL GUIDELINES</h2>
          <div class="item-nav-wrap">
            <ul class="item-nav">
              <li>Photograph</li>
              <li>Illustration</li>
              <li>Icon</li>
              <li>Font</li>
              <li>Color</li>
              <li>Grid</li>
              <li>Unit</li>
            </ul>
          </div>
          <img class="see-more" src="@/assets/images/see_more.png" alt="">
        </div>
        <div class="right">
          <div class="img-box">
            <div class="count count-left">03</div>
          </div>
        </div>
      </div>

      <div class="item item-04">
        <div class="left">
          <h2>MULTIMEDIA GUIDELINES</h2>
          <div class="item-nav-wrap">
            <ul class="item-nav">
              <li>Our Mission</li>
              <li>Target Customer 3D</li>
              <li>Brand Personality</li>
            </ul>
          </div>
          <img class="see-more" src="@/assets/images/see_more.png" alt="">
        </div>
        <div class="right">
          <div class="img-box">
            <div class="count count-right">04</div>
          </div>
        </div>
      </div>

      <div class="item item-05">
        <div class="left">
          <h2>Design partten Lirbrary</h2>
          <div class="item-nav-wrap">
            <ul class="item-nav">
              <li>UX</li>
              <li>EDM</li>
              <li>Relationship</li>
              <li>UX</li>
              <li>EDM</li>
              <li>Relationship</li>
              <li>UX</li>
            </ul>
          </div>
          <img class="see-more" src="@/assets/images/see_more.png" alt="">
        </div>
        <div class="right">
          <div class="img-box">
            <div class="count count-left">05</div>
          </div>
        </div>
      </div>

      <div class="item item-06">
        <div class="left">
          <h2>BRAND OVERVIEW</h2>
          <div class="item-nav-wrap">
            <ul class="item-nav">
              <li class="item-nav-title">Brand Color</li>
              <li>Our Mission</li>
              <li>Target Customer</li>
              <li>Brand Personality</li>
              <li>Keywords </li>
              <li>Design Principle</li>
            </ul>
            <ul class="item-nav">
              <li class="item-nav-title">Brand Color</li>
              <li>Our Mission</li>
              <li>Target Customer</li>
              <li>Brand Personality</li>
              <li>Keywords </li>
              <li>Design Principle</li>
            </ul>
            <ul class="item-nav">
              <li class="item-nav-title">Brand Color</li>
              <li>Our Mission</li>
              <li>Target Customer</li>
              <li>Brand Personality</li>
              <li>Keywords </li>
              <li>Design Principle</li>
            </ul>
          </div>
          <img class="see-more" src="@/assets/images/see_more.png" alt="">
        </div>
        <div class="right">
          <div class="intro">to make it easy to do business anywhere</div>
          <div class="img-box">
            <img src="@/assets/images/jkmzrwge.png" alt="">
            <div class="count count-right">06</div>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import BannerCom from './banner'
import ItemCom from './item'

export default {
  components: {
    BannerCom,
    ItemCom,
  },
}
</script>

<style lang="scss">
.home {
  color: #000000;

  main {
    padding: 0;
  }
  .content {
    padding: 100px 50px;
    .item {
      text-align: left;
      display: flex;

      &:not(:last-child) {
        margin-bottom: 180px;
      }

      &.item-03 {
        .right {
          .img-box {
            width: 100%;
            height: 300px;
            background: #ffcb4d;
          }
          .count {
            color: #333333;
          }
        }
      }

      &.item-04 {
        .right {
          .count {
            color: #ff6600;
          }
        }
      }

      &.item-05,
      &.item-04 {
        .right {
          .img-box {
            width: 100%;
            height: 300px;
            background: #000000;
          }
        }
      }
    }
    .item-nav-wrap {
      display: flex;
      ul:not(:last-child) {
        margin-right: 5px;
      }
      .item-nav {
        .item-nav-title {
          font-size: 18px;
          font-weight: bold;
        }
        li {
          font-size: 14px;
        }
      }
    }
    .left {
      width: 40%;
      h2 {
        font-size: 80px;
        line-height: 1;
        color: #000000;
      }
      .see-more {
        margin-top: 160px;
      }
    }
    .right {
      width: 60%;
      padding-top: 180px;
      .intro {
        font-size: 44px;
        line-height: 1;
        color: #000000;
        margin-bottom: 64px;
        img {
          width: 100%;
        }
      }
      .img-box {
        width: 100%;
        position: relative;
        img {
          width: 100%;
        }
        .count {
          position: absolute;
          font-size: 120px;
          color: #ffcb4d;
          text-decoration: underline;
          bottom: -14px;
          &.count-left {
            left: 0;
          }
          &.count-right {
            right: 0;
          }
        }
      }
    }
  }
}
</style>
