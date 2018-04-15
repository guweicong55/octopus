<template>
  <div>
    <head-component :searchShow="1"></head-component>
    <div class="article_list_wrapper">
      <home-list :items="list"></home-list>
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
      },
      data () {
        return {
          list: [
            {
              id: 1,
              title: '我们可以为组件的 prop 指定验证规则。如果传入的数据不符合要求，Vue 会发出警告。',
              author: 'Madonna-Skoni'
            },
            {
              id: 2,
              title: '要指定验证规则，需要用对象的形式来定义 prop，而不能用字符串数组：',
              author: '推塔呀呀呀'
            }
          ]
        }
      }
    }
</script>
<style scoped lang="less">
  .article_list_wrapper {
    position: absolute;
    top: 51px;
    bottom: 57px;
    width: 100vw;
  }
</style>
