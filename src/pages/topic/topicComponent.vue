<template>
  <div style="min-height: 100vh; background: #fff">
    <head-component :backBtn="true"></head-component>
    <topic-list></topic-list>
    <span class="add_argument_btn">
      <svg t="1523974973686" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26905" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><<path d="M726.016 553.984l0-84.010667-171.989333 0 0-171.989333-84.010667 0 0 171.989333-171.989333 0 0 84.010667 171.989333 0 0 171.989333 84.010667 0 0-171.989333 171.989333 0zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333z" p-id="26906"></path></svg>
    </span>
  </div>
</template>
<script>
  import headComponent from '@/components/header/headBar.vue';
  import topicList from './topicList';
  export default {
    name: 'topicComponent',
    components: {
      headComponent,
      topicList
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
  }
</style>
