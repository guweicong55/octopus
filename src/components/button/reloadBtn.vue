<template>
  <span class="reload_btn" @click="reload">
    <svg t="1524808513423" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="52392" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M512 214.016q141.994667 0 242.005333 100.010667t100.010667 240q0 141.994667-100.992 242.005333t-240.981333 100.010667-240.981333-100.010667-100.992-242.005333l86.016 0q0 105.984 75.008 180.992t180.992 75.008 180.992-75.008 75.008-180.992-75.008-180.992-180.992-75.008l0 171.989333-214.016-214.016 214.016-214.016 0 171.989333z" p-id="52393"></path></svg>
  </span>
</template>
<script>
  export default {
    name: 'reloadBtn',
    methods: {
      reload () {
        this.$emit('click');
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../style/common";

  .reload_btn {
    display: block;
    height: 40px;
    width: 40px;
    position: fixed;
    background: #fff;
    border-radius: 50%;
    z-index: 99;
    #cardShadow;
    .icon {
      fill: @baseColor;
      height: 30px;
      width: 30px;
      margin-top: 5px;
      margin-left: 5px;
    }
  }
</style>
