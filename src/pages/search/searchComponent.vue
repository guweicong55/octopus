<template>
  <div>
    <head-bar :backBtn="1" />
    <div id="search">
      <div>
        <form id="my_form" action="" @submit.prevent>
          <input type="search" id="search_inp" placeholder="主题标题的关键字" @keypress="searchHandler" v-model="searchValue" />
        </form>
      </div>
      <history-list :list="list" @clean="clean" @delItem="deleteByIndex" />
    </div>
  </div>
</template>

<script>
  import headBar from '@/components/header/headBar.vue';
  import historyList from './historyList.vue';
	export default {
		name: "searchComponent",
    components: {
      headBar,
      historyList
    },
    data () {
		  return {
		    searchValue: '',
        list: localStorage.getItem('historyList') ? JSON.parse(localStorage.getItem('historyList')) : [],
      }
    },
    methods: {
      //删除单个历史
		  deleteByIndex (index) {
		    this.list.splice(index, 1);
        localStorage.setItem('historyList', JSON.stringify(this.list));
      },
      //清空历史
		  clean () {
		    this.list = [];
        localStorage.setItem('historyList', '[]');
      },
      //添加历史
		  addNew (name) {
        let hl = localStorage.getItem('historyList');
        let arr = hl ? JSON.parse(hl) : [];
        arr.push(name);
        localStorage.setItem('historyList', JSON.stringify(arr));
        this.list.push(name);
        return arr;
      },
		  searchHandler (e) {
        let keycode = e.keyCode;
        let searchName = this.searchValue;
        if(keycode=='13') {
          e.preventDefault();
          this.addNew(searchName);
          this.$router.push('/sr/' + encodeURI(searchName));
        }
      }
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
    }
  }
</style>
