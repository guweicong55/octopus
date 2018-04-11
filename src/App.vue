<template>
  <div>
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import footBar from '@/components/footer/footBar.vue';
  export default {
    name: 'App',
    components: {
      footBar
    }
  }
</script>

<style lang="less">
  @import 'style/common.less';
  h1 {

  }
</style>
