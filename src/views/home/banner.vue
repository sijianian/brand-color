<template>
  <div class="home-banner">
    <div class="left">
      <div class="subtitle">Hello, welcome to alibaba.com</div>
      <div class="title">
        BRAND GUIDELINES
      </div>
      <a class="internal">FOR INTERNAL</a>
      <img class="see-more" src="@/assets/images/see_more.png" alt="">
      <div class="download">
        <a class="hvr-sweep-to-top" href="#">
          <span>ALL</span>
          <span>
            <i class="el-icon-download"></i>
            <span class="download-tip">Download</span>
          </span>
        </a>
        <a class="hvr-sweep-to-top" href="#">
          <span>PDF</span>
          <span>
            <i class="el-icon-download"></i>
            <span class="download-tip">Download</span>
          </span>
        </a>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/jkmzrwge.png" alt="">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.home-banner {
  background: #1c1c1c;
  color: #fff;
  padding: 100px;
  text-align: left;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .left {
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 1;
    .subtitle {
      font-size: 24px;
      line-height: 30px;
      color: #929292;
    }
    .title {
      color: #fff;
      font-size: 80px;
      line-height: 1;
      font-weight: bold;
    }
    .internal {
      font-size: 56px;
      color: #ff6600;
      text-decoration: underline;
      cursor: pointer;
    }
    .see-more {
      padding-top: 95px;
      padding-bottom: 10px;
      width: 192px;
    }
    .download {
      display: flex;
      a {
        display: inline-block;
        width: 188px;
        height: 60px;
        line-height: 60px;
        font-size: 32px;
        box-sizing: border-box;
        border: 1px solid #999999;
        padding: 0px 20px;
        color: #999999;
        display: flex;
        justify-content: space-around;

        > span:last-child {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 20px;
        }

        i {
          font-size: 24px;
        }

        &:not(:last-child) {
          margin-right: 5px;
        }

        .download-tip {
          font-size: 12px;
        }
      }
    }
  }
  .right {
    width: 60%;
    max-width: 900px;
    img {
      display: inline-block;
      height: auto;
      max-width: 100%;
    }
  }

  .hvr-sweep-to-top {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-sweep-to-top:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffbd33;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-top:hover,
  .hvr-sweep-to-top:focus,
  .hvr-sweep-to-top:active {
    border-color: #ffbd33;
    color: #fff !important;
  }
  .hvr-sweep-to-top:hover:before,
  .hvr-sweep-to-top:focus:before,
  .hvr-sweep-to-top:active:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
</style>
