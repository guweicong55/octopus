<template>
  <div>
    <head-component :backBtn="true" title="搜索结果" />
    <home-list :items="list" />
    <load-more>加载更多</load-more>
  </div>
</template>
<script>
  import headComponent from '@/components/header/headBar.vue';
  import homeList from '../home/homeList.vue';
  import loadMore from '@/components/button/loadMore.vue'
  export default {
    name: 'searchResult',
    data () {
      return {
        list: [
          {
            id: 1,
            title: '我们可以为组件的 prop 指定验证规则。如果传入的数据不符合要求，Vue 会发出警告。',
            describe: 'Google\'s free service instantly translates words, phrases, and web pages between English and over 100 other languages.',
            author: 'Madonna-Skoni'
          },
          {
            id: 2,
            title: '要指定验证规则，需要用对象的形式来定义 prop，而不能用字符串数组：',
            describe: 'Google\'s free service instantly translates words, phrases, and web pages between English and over 100 other languages.',
            author: '推塔呀呀呀'
          }
        ]
      }
    },
    components: {
      headComponent,
      homeList,
      loadMore
    }
  }
</script>
<style scoped lang="less">

</style>
