<template>
    <span class="add_argument_btn">
      <svg @click="typeSwitch" t="1523974973686" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26905" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><<path d="M726.016 553.984l0-84.010667-171.989333 0 0-171.989333-84.010667 0 0 171.989333-171.989333 0 0 84.010667 171.989333 0 0 171.989333 84.010667 0 0-171.989333 171.989333 0zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333z" p-id="26906"></path></svg>
      <div class="cell" v-show="isShow" @touchmove.prevent @click="isShow = false;"></div>
      <div class="type_container" v-show="isShow">
        <div class="type_wrapper">
          <p class="top">选择发在哪个板块</p>
          <ul>
            <li class="item" v-for="item in items">{{ item.name }}</li>
          </ul>
        </div>
      </div>
    </span>
</template>

<script>
	export default {
		name: "publishBtn",
    methods: {
		  typeSwitch () {
        this.isShow = !this.isShow;
        console.log(this.isShow);
      }
    },
    data () {
		  return {
		    isShow: false,
		    items: [
          { name: '往事杂谈', id: '1' },
          { name: '萌萌宠物', id: '2' },
          { name: '影音讨论区', id: '3' },
          { name: '汽车俱乐部', id: '4' },
          { name: '游戏综合讨论', id: '5' },
          { name: '消费电子', id: '6' },
          { name: '生命之杯', id: '7' },
        ]
      }
    }
	}
</script>

<style scoped lang="less">
  @import "../../style/common";
  .add_argument_btn {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 5vw;
    bottom: 5vw;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    .icon {
      width: 50px;
      height: 50px;
      fill: @baseColor;
      margin-top: -5px;
      margin-left: -5px;
    }
    .cell {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: rgba(0,0,0,0);
    }
    .type_container {
      position: absolute;
      height: 200px;
      width: 120px;
      background: rgba(255,255,255,.9);
      border-radius: 8px;
      bottom: 55px;
      right: 0;
      z-index: 2;
      #cardShadow;
      &:after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        border-top: 8px solid rgba(255,255,255,.9);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        bottom: -7px;
        right: 10px;
      }
      .type_wrapper {
        height: 100%;
        width: 100%;
        overflow-y: auto;
      }
      .top {
        text-align: center;
        line-height: 30px;
        color: #999;
        border-bottom: 1px solid #eee;
      }
      .item {
        text-align: center;
        line-height: 36px;
        color: #333;
        font-size: 16px;
        border-bottom: 1px solid #eee;
      }
    }
  }
</style>
