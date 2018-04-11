<template>
  <nav id="foot_bar">
    <ul class="foot_bar_wrapper">
      <li class="foot_bar_items">
        <router-link to="/home" active-class="foot_bar_link_active">
          <svg t="1523427378511" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26736" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M425.984 854.016l-212.010667 0 0-342.016-128 0 425.984-384 425.984 384-128 0 0 342.016-212.010667 0 0-256-171.989333 0 0 256z" p-id="26737"></path></svg>
        </router-link>
      </li>
      <li class="foot_bar_items">
        <router-link to="/msg" active-class="foot_bar_link_active">
          <svg t="1523428778986" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="52745" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M768 681.984l86.016 86.016 0 41.984-683.989333 0 0-41.984 86.016-86.016 0-212.010667q0-100.010667 50.986667-173.994667t141.013333-96l0-29.994667q0-25.984 18.005333-45.013333t45.994667-18.986667 45.994667 18.986667 18.005333 45.013333l0 29.994667q89.984 22.016 141.013333 96t50.986667 173.994667l0 212.010667zM512 937.984q-36.010667 0-61.013333-25.002667t-25.002667-59.008l171.989333 0q0 34.005333-25.984 59.008t-59.989333 25.002667z" p-id="52746"></path></svg>
        </router-link>
      </li>
      <li class="foot_bar_items">
        <router-link to="/me" active-class="foot_bar_link_active">
          <svg t="1523429833208" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="52858" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M512 820.010667q162.005333 0 256-137.984-2.005333-56.021333-89.984-93.994667t-166.016-38.016-166.016 36.992-89.984 95.018667q93.994667 137.984 256 137.984zM512 214.016q-52.010667 0-89.984 38.016t-38.016 89.984 38.016 89.984 89.984 38.016 89.984-38.016 38.016-89.984-38.016-89.984-89.984-38.016zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333z" p-id="52859"></path></svg>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'footBar',
    data () {
      return {

      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../style/common.less";
  #foot_bar {
    position: fixed;
    z-index: 99;
    bottom: 0;
    width: 100vw;
    height: 57px;;
    background: #feffff;
    border-top: 1px solid #e2e2e2;
    .foot_bar_wrapper {
      display: block;
      height: 100%;
      width: 100%;
    }
    .foot_bar_items {
      width: 33.3%;
      float: left;
      height: 100%;
      text-align: center;
      .icon {
        height: 32px;
        margin-top: 12px;
      }
    }
  }
  .foot_bar_link_active {
    fill: @baseColor;
  }
</style>
