<template>
  <div>
    <head-component :searchShow="1" :logo="1" :menu="1"></head-component>
    <tab-switch :items="tabData"></tab-switch>
    <div class="bill_board">
      <div class="bill_board_wrapper">
        <img src="../../../static/madonna.png" alt="">
      </div>
    </div>
    <div class="topic_list_wrapper">
      <home-list :items="list"></home-list>
    </div>
  </div>
</template>
<script>
    import headComponent from '@/components/header/headBar.vue';
    import homeList from './homeList.vue';
    import tabSwitch from '@/components/tab/tabSwitch.vue';
    export default {
      name: 'homeComponent',
      components: {
        headComponent,
        homeList,
        tabSwitch
      },
      data () {
        return {
          tabData: [
            {
              name: '全部'
            },
            {
              name: '最新'
            },
            {
              name: '精华'
            }
          ],
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
      }
    }
</script>
<style scoped lang="less">
  @import "../../style/common";
  .topic_list_wrapper {
    width: 100vw;
  }
  .bill_board {
    padding: 15px;
    .bill_board_wrapper {
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      height: 160px;
      #cardShadow;
      img {
        width: 100%;
      }
    }
  }
</style>
