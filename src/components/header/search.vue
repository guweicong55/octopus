<template>
  <div id="search">
    <svg @click="searchContainerShow = true" t="1523434667326" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53202" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M406.016 598.016q80 0 136.021333-56.021333t56.021333-136.021333-56.021333-136.021333-136.021333-56.021333-136.021333 56.021333-56.021333 136.021333 56.021333 136.021333 136.021333 56.021333zM662.016 598.016l212.010667 212.010667-64 64-212.010667-212.010667 0-34.005333-11.989333-11.989333q-75.989333 66.005333-180.010667 66.005333-116.010667 0-196.992-80t-80.981333-196.010667 80.981333-196.992 196.992-80.981333 196.010667 80.981333 80 196.992q0 104.021333-66.005333 180.010667l11.989333 11.989333 34.005333 0z" p-id="53203"></path></svg>
    <div class="search_container" :class="{ search_container_show: searchContainerShow }">
      <button @click="searchContainerShow = false">关闭</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'search',
    data () {
      return {
        searchContainerShow: false
      }
    },
    methods: {

    }
  }
</script>
<style scoped lang="less">
  @import "../../style/common.less";
  #search {
    width: 50px;
    height: 100%;
    text-align: center;
    .search_container {
      background: rgba(0,0,0,.9);
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 100vh;
      left: 0;
      #baseTransition;
    }
    .search_container_show {
      top: 0;
    }
    .icon {
      height: 28px;
      width: 28px;
      margin-top: 11px;
    }
  }
</style>
