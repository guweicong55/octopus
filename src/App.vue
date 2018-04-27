<template>
  <router-view class="Router"></router-view>
</template>

<script>
  //import footBar from '@/components/footer/footBar.vue';
  export default {
    name: 'App',
    components: {
      //footBar
    },
    data () {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack; //监听路由变化时的状态为前进还是后退
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false;
      }
    }
  }
</script>

<style lang="less">
  @import 'style/common.less';
  #app {
    min-height: 100%;
  }
  .Router {
    position: absolute;
    width: 100%;
    transition: all .25s ease;
    top: 0;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
