<template>
  <div class="search_history_container">
    <p class="title">搜索历史</p>
    <ul>
      <li class="history_item" v-for="(item, index) in list" :key="index">
        <router-link :to="{ path: '/sr/' + encodeURI(item) }">
          <span>{{ item }}</span>
          <span class="del_item" @click.prevent="delOne(index)">×</span>
        </router-link>
      </li>
    </ul>
    <span class="del_all" @click="cleanAll" v-show="list.length > 0">清除搜索历史</span>
  </div>
</template>
<script>
  export default {
    name: 'historyList',
    props: ['list', 'clean', 'delItem'],
    methods: {
      cleanAll () {
        this.$emit('clean');
      },
      delOne (index) {
        this.$emit('delItem', index);
      }
    }
  }
</script>
<style scoped lang="less">
  .search_history_container {
    padding-top: 30px;
    .title {
      font-size: 30px;
      font-weight: bold;
      color: #333;
    }
    .history_item {
      padding: 10px 0;
      font-size: 18px;
      border-bottom: 1px solid #eee;
      .del_item {
        float: right;
        font-weight: bolder;
        color: #ccc;
        font-size: 24px;
      }
    }
    .del_all {
      padding: 10px 0;
      display: block;
      border-bottom: 1px solid #eee;
      color: #999;
      font-weight: bolder;
      font-size: 18px;
    }
  }
</style>
