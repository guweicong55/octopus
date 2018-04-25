<template>
  <div id="main_nav">
    <svg t="1524551627586" @click="navWrapperControll(true);" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26239" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M128 553.984l0-84.010667 512 0 0 84.010667-512 0zM128 256l768 0 0 86.016-768 0 0-86.016zM128 768l0-86.016 256 0 0 86.016-256 0z" p-id="26240"></path></svg>
    <div class="nav_wrapper" :class="{ nav_wrapper_show: navWrapperShow }">
      <nav>
        <ul class="nav_bar_wrapper">
          <li class="nav_bar_items">
            <span active-class="nav_bar_link_active" @click="navGo('home');">
              <svg t="1523427378511" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26736" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M425.984 854.016l-212.010667 0 0-342.016-128 0 425.984-384 425.984 384-128 0 0 342.016-212.010667 0 0-256-171.989333 0 0 256z" p-id="26737"></path></svg>
              <span class="name">Home</span>
            </span>
          </li>
          <li class="nav_bar_items">
            <span active-class="nav_bar_link_active" @click="navGo('msg');">
              <svg t="1523428778986" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="52745" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M768 681.984l86.016 86.016 0 41.984-683.989333 0 0-41.984 86.016-86.016 0-212.010667q0-100.010667 50.986667-173.994667t141.013333-96l0-29.994667q0-25.984 18.005333-45.013333t45.994667-18.986667 45.994667 18.986667 18.005333 45.013333l0 29.994667q89.984 22.016 141.013333 96t50.986667 173.994667l0 212.010667zM512 937.984q-36.010667 0-61.013333-25.002667t-25.002667-59.008l171.989333 0q0 34.005333-25.984 59.008t-59.989333 25.002667z" p-id="52746"></path></svg>
              <span class="name">Message</span>
            </span>
          </li>
          <li class="nav_bar_items">
            <span active-class="nav_bar_link_active" @click="navGo('me');">
              <svg t="1523429833208" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="52858" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M512 820.010667q162.005333 0 256-137.984-2.005333-56.021333-89.984-93.994667t-166.016-38.016-166.016 36.992-89.984 95.018667q93.994667 137.984 256 137.984zM512 214.016q-52.010667 0-89.984 38.016t-38.016 89.984 38.016 89.984 89.984 38.016 89.984-38.016 38.016-89.984-38.016-89.984-89.984-38.016zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333z" p-id="52859"></path></svg>
              <span class="name">Me</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="nav_cell" :class="{ nav_cell_show: navCellShow }" @click="navWrapperControll(false);"></div>
  </div>
</template>
<script>
  export default {
    name: 'mainNav',
    data () {
      return {
        navWrapperShow: false,
        navCellShow: false
      }
    },
    methods: {
      navWrapperControll (flag) {
        this.navWrapperShow = flag;
        this.navCellShow = flag;
      },
      //解决移动端左右滑动返回前进导航显示的问题
      navGo (path) {
        this.$router.lazyGo(path, () => {
          this.navWrapperShow = false;
          this.navCellShow = false;
        });
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../style/common";
  #main_nav {
    float: left;
    height: 100%;
    width: 50px;
    position: relative;
    z-index: 0;
    text-align: center;
    > .icon {
      height: 28px;
      width: 28px;
      margin-top: 11px;
      fill: @baseColor;
    }
    .nav_wrapper {
      background: rgba(0,0,0,.9);
      height: 100vh;
      width: 75vw;
      position: fixed;
      top: 0;
      left: -100vw;
      z-index: 1;
      padding-top: 40px;
      #baseTransition();
    }
    .nav_cell {
      background: rgba(0,0,0,.1);
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      #baseTransition();
    }
    .nav_wrapper_show {
      left: 0;
    }
    .nav_cell_show {
      display: block;
    }
    .nav_bar_items {
      text-align: left;
      padding-left: 15px;
      height: 30px;
      margin-bottom: 20px;
      .icon {
        height: 28px;
        width: 28px;
        fill: #eee;
        float: left;
      }
      .name {
        line-height: 30px;
        padding-left: 15px;
        font-size: 14px;
      }
    }
  }
</style>
