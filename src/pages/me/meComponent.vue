<template>
  <div>
    <head-component title="Me" menu="1"></head-component>
    <div class="top_wrapper">
      <div class="me_photo">
        <img src="../../../static/john.png" alt="">
      </div>
      <div class="me_content_wrapper">
        <p class="me_name">Madona Skino</p>
        <div class="me_action">
          <ul>
            <li class="me_action_item">
              <p class="count">185</p>
              <p class="type">我的主题</p>
            </li>
            <li class="me_action_item">
              <p class="count">3</p>
              <p class="type">关注</p>
            </li>
            <li class="me_action_item">
              <p class="count">2234</p>
              <p class="type">最近浏览</p>
            </li>
          </ul>
        </div>
       <!-- <p class="me_msg">
          <sub-btn @click="print">积分</sub-btn>
          <sub-btn>铜币</sub-btn>
        </p>-->
      </div>
    </div>
  </div>
</template>
<script>
  import headComponent from '@/components/header/headBar.vue';
  export default {
    name: 'meComponent',
    components: {
      headComponent
    },
    methods: {
      print () {
        console.log(123123)
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../style/common";
  .top_wrapper {
    width: 100%;
    padding: 28px 15px 28px;
    min-height: 134px;
    .me_photo {
      height: 80px;
      width: 80px;
      background: #fff;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
    }
    .me_content_wrapper {
      text-align: center;
      .me_name {
        font-size: 20px;
        margin-top: 10px;
        font-weight: bolder;
        color: #333;
      }
      .me_msg {
        padding-top: 8px;
      }
    }
    .me_action {
      overflow: hidden;
      padding: 15px 0;
      margin-top: 10px;
      border-radius: 10px;
      background: #fff;
      #cardShadow;
      .me_action_item {
        width: 33.3%;
        border-right: 1px solid #ddddde;
        float: left;
        .count {
          font-size: 18px;
          color: #333;
          font-weight: bolder;
        }
        .type {
          font-size: 14px;
          color: #999;
        }
      }
      .me_action_item:last-child {
        border: none;
      }
    }
  }
</style>
