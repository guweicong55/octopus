<template>
  <div id="header_bar">
    <div class="search_wrapper" v-if="searchShow">
      <search-component></search-component>
    </div>
  </div>
</template>
<script>
    import searchComponent from './search.vue';
    export default {
      name: 'headBar',
      props: ['searchShow'],
      components: {
        searchComponent
      }
    }
</script>
<style scoped lang="less">
  #header_bar {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100vw;
    height: 51px;
    background: #feffff;
    border-bottom: 1px solid #ddd;
    .search_wrapper {
      float: left;
      height: 100%;
      width: 50px;
    }
  }
</style>
