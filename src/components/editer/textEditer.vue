<template>
    <div id="editer" :class="{ editer_show: show }">
      <div class="head">
        <span class="close_btn" @click="hide">关闭</span>
        <span class="update_btn" @click="hide">发送</span>
        <p class="title">回复主题</p>
      </div>
      <textarea class="editer_area" name="" id="" cols="30" placeholder="内容" rows="10"></textarea>
    </div>
</template>

<script>
  export default {
    name: "textEditer",
    props: ['show', 'hide'],
  }
</script>

<style scoped lang="less">
  @import "../../style/common";
  #editer {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 99;
    background: #fff;
    transform: translateY(100%);
    opacity: 0;
    #baseTransition;
    .head {
      height: 51px;
      border-bottom: 1px solid #ddd;
      width: 100vw;
      position: relative;
      .title {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        font-weight: bold;
        color: #666;
      }
      .close_btn {
        position: relative;
        z-index: 99;
        line-height: 50px;
        font-size: 16px;
        padding: 0 20px;
        color: @baseColor;
      }
      .update_btn {
        position: relative;
        z-index: 99;
        line-height: 50px;
        font-size: 16px;
        padding: 0 20px;
        color: @baseColor;
        float: right;
      }
    }
    .editer_area {
      border: none;
      width: 100%;
      padding: 5vw;
      outline: none;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  .editer_show {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
</style>
