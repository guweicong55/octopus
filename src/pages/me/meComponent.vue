<template>
  <div>
    <div class="top_wrapper">
      <div class="me_photo">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="me_content_wrapper">
        <h3 class="me_name">Madonaa</h3>
        <p class="me_msg">
          <sub-btn>积分</sub-btn>
          <sub-btn>铜币</sub-btn>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import subBtn from '@/components/button/subCaseBtn.vue';
  export default {
    name: 'meComponent',
    components: {
      subBtn
    }
  }
</script>
<style scoped lang="less">
  .top_wrapper {
    width: 100%;
    padding: 40px 15px 0;
    border-bottom: 1px solid #ddd;
    min-height: 134px;
    .me_photo {
      height: 60px;
      width: 60px;
      position: absolute;
      left: 15px;
      top: 40px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid #ddd;
      overflow: hidden;
    }
    .me_content_wrapper {
      padding-left: 80px;
      .me_name {
        font-size: 18px;
      }
      .me_msg {
        padding-top: 8px;
      }
    }
  }
</style>
