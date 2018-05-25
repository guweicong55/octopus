<template>
  <ul>
    <li class="home_list_item" v-for="item in items" :key="item.id">
      <router-link :to="{ path: '/topic/' + item.id }">
        <p class="topic_title">
          {{ item.title.length > 30 ? item.title.substr(0, 30) + '...' : item.title }}
          <span class="topic_plate" v-if="item.sectionName">[{{ item.sectionName }}]</span>
        </p>
        <p class="topic_describe">
          {{ item.content }}
        </p>
        <div class="topic_msg_wrapper">
          <span class="photo_img">
            <img src="../../assets/logo.png" alt="">
          </span>
          <span class="topic_author">
             {{ item.username }}
          </span>
          <span class="topic_briefly">
             {{ item.replyCount }} 条回复
          </span>
        </div>
      </router-link>
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
      },
      methods: {

      },
      created () {
        //console.log(this.$store);
      }
    }
</script>
<style scoped lang="less">
  @import "../../style/common";
  .home_list_item {
    width: 100%;
    background: #fff;
    margin-bottom: 15px;
    padding:15px;
    #cardShadow;
    .topic_title {
      font-size: 18px;
      color: #444;
      /*font-weight: bold;*/
      .topic_plate {
        color: #999;
      }
    }
    .topic_describe {
      margin-top: 15px;
      font-size: 14px;
    }
    .topic_msg_wrapper {
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
    .topic_author {
      line-height: 30px;
      font-size: 12px;
      color: #6c6c6c;
      padding-left: 15px;
      font-weight: bold;
    }
    .topic_briefly {
      float: right;
      line-height: 30px;
      font-size: 14px;
    }
  }
</style>
