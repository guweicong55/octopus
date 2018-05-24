<template>
  <div>
    <head-component :searchShow="1" :logo="1" :menu="1" />
    <tab-switch :items="tabData" />
    <div class="bill_board">
      <div class="bill_board_wrapper">
        <img src="../../../static/madonna.png" alt="">
      </div>
    </div>
    <home-list :items="list" />
    <load-more>加载更多</load-more>
    <publish-btn />
    <reload-btn :style="{ bottom: '5vw', left: '5vw' }" @click="reload" />
  </div>
</template>
<script>
    import headComponent from '@/components/header/headBar.vue';
    import homeList from './homeList.vue';
    import tabSwitch from '@/components/tab/tabSwitch.vue';
    import publishBtn from './publishBtn';
    import reloadBtn from '@/components/button/reloadBtn.vue';
    import loadMore from '@/components/button/loadMore.vue';
    import Requester from '@/config/requester';
    export default {
      name: 'homeComponent',
      components: {
        headComponent,
        homeList,
        tabSwitch,
        publishBtn,
        reloadBtn,
        loadMore
      },
      created () {
        Requester('/topic/all', {}).then(res => {
          if (res.status === 1) {
            this.list = this.list.concat(res.data.list);
          }
        });
      },
      methods: {
        reload () {

        }
      },
      data () {
        return {
          tabData: [
            {
              name: '推荐'
            },
            {
              name: '关注'
            },
            {
              name: '精华'
            }
          ],
          list: [
            /*{
              id: 1,
              title: '为什么容易晕车？？？？',
              describe: 'Google\'s free service instantly translates words, phrases, and web pages between English and over 100 other languages.',
              author: 'Madonna-Skoni',
              plate: '[汽车俱乐部]'
            },
            {
              id: 2,
              title: '🔥🔥🔥要指定验证规则，需要用对象的形式来定义 prop，而不能用字符串数组：',
              describe: 'Google\'s free service instantly translates words, phrases, and web pages between English and over 100 other languages.',
              author: '推塔呀呀呀',
              plate: '[影音讨论区]'
            }*/
          ]
        }
      }
    }
</script>
<style scoped lang="less">
  @import "../../style/common";

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
