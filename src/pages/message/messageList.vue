<template>
  <ul class="message_wrapper">
    <li class="message_item">
      <router-link to="/">
        <div class="msg_photo">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="msg_content">
          <p class="msg_content_details">
            <span class="creater">Maondddon: </span>用$nextTick呀，不管你是用v-if还
          </p>
          <p class="msg_date">
            2018年12月10日
          </p>
        </div>
      </router-link>
    </li>
    <li class="message_item">
      <router-link to="/">
        <div class="msg_photo">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="msg_content">
          <p class="msg_content_details">
            <span class="creater">阿福: </span>用$nextTick呀，不管你是用v-if还是v-show，dom要渲染之后才能focus，在本次dom渲染之后在nextTick里，dom一定可用，然后el.focus()就可以
            呀，不管你是用v-if还是v-show，dom要渲染之后才能focus，在本次dom渲染之后在nextTick里，dom一定可用，然后el.focus()就可以
          </p>
          <p class="msg_date">
            2018年12月10日
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "messageList"
  }
</script>

<style scoped lang="less">
  @import "../../style/common";

  .message_item {
    width: 100%;
    background: #fff;
    padding: 15px;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    min-height: 96px;
    display: flex;
    .msg_photo {
      position: absolute;
      left: 15px;
      top: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #ddd;
      overflow: hidden;
    }
    .msg_content {
      padding-left: 80px;
      .msg_content_details {
        color: #333;
        font-size: 16px;
        .creater {
          color: @baseColor;
          font-weight: bold;
        }
      }
      .msg_date {
        margin-top: 10px;
      }
    }
  }
</style>
