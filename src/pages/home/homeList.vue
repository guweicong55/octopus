<template>
  <ul>
    <li class="home_list_item" v-for="item in items" :key="item.id">
      <p class="article_title">
        {{ item.title }}
      </p>
      <div class="article_msg_wrapper">
        <span class="photo_img">
          <img src="../../assets/logo.png" alt="">
        </span>
        <span class="article_author">
           {{ item.author }}
        </span>
      </div>
    </li>
  </ul>
</template>
<script>
    export default {
      name: 'homeList',
      props: {
        items: {
          type: Array
        }
      }
    }
</script>
<style scoped lang="less">
  .home_list_item {
    width: 100%;
    background: #fff;
    margin-bottom: 15px;
    padding: 5vw;
    .article_title {
      font-size: 14px;
      line-height: 1.5;
      color: #444;
      font-weight: bold;
    }
    .article_msg_wrapper {
      margin-top: 15px;
    }
    .photo_img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      display: block;
      border: 1px solid #ececec;
      float: left;
      img {
        width: 30px;
      }
    }
    .article_author {
      line-height: 30px;
      font-size: 12px;
      color: #6c6c6c;
      padding-left: 15px;
    }
  }
</style>
