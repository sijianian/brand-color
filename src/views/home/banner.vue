<template>
  <div class="home-banner">
    <div class="left">
      <div class="subtitle">Hello, welcome to alibaba.com</div>
      <div class="title">
        BRAND GUIDELINES
      </div>
      <a class="internal">FOR INTERNAL</a>
      <img class="see-more" src="@/assets/images/see_more.png" alt="">
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
  padding: 100px 50px;
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
  }
  .right {
    width: 60%;
    img {
      display: inline-block;
      height: auto;
      max-width: 100%;
    }
  }
}
</style>
