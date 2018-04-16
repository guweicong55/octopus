<template>
  <div>
    <head-component :searchShow="1"></head-component>
    <div class="article_list_wrapper">
      <home-list></home-list>
    </div>
  </div>
</template>
<script>
    import headComponent from '@/components/header/headBar.vue';
    import homeList from './homeList.vue';
    export default {
      name: 'homeComponent',
      components: {
        headComponent,
        homeList
      }
    }
</script>
<style scoped lang="less">
  .article_list_wrapper {
    width: 100vw;
  }
</style>
