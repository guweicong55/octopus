<template>
  <div>
    <head-bar :backBtn="1" />
    <div id="search">
      <div>
        <form id="my_form" action="" @submit.prevent>
          <input type="search" id="search_inp" placeholder="主题标题的关键字" />
        </form>
      </div>
      <div class="search_history_container">
        <p class="title">搜索历史</p>
      </div>
    </div>

  </div>
</template>

<script>
  import headBar from '@/components/header/headBar.vue';
	export default {
		name: "searchComponent",
    components: {
      headBar
    }
	}
</script>

<style scoped lang="less">
  #search {
    padding: 0 15px;
    #search_inp {
      height: 40px;
      width: 100%;
      background: #eee;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 18px;
      line-height: 40px;
      color: #333;
      border: 1px solid #ddd;
    }
    .search_history_container {
      padding-top: 30px;
      .title {
        font-size: 20px;
        font-weight: bold;
        color: #333;
      }
    }
  }
</style>
