<template>
  <div id="topic_conatiner">
    <div class="topic_item">
      <h1 class="topic_title">在 mutation 中混合异步调用会导致你的程序很难调试。</h1>
      <div class="author_wrapper">
          <span class="photo_img">
            <img src="../../assets/logo.png" alt="">
          </span>
        <span class="author_msg">
            <p class="author_name">Nahett</p>
            <p class="author_autograph">Named Route 'App' has a default child route. When navigating to this named route (:to="{name: 'App'"),</p>
          </span>
      </div>
      <p class="topic_discuss">视+AR有着上百人的技术团队支撑.AR技术更加专业.视+AR前沿性的提出AR一站式解决方案,20分钟急速嵌入AR功能,满足企业的AR解决方案需求.视+提供技术和内容制作的完整AR方案</p>
      <div class="author_operation">
        <svg t="1523960076177" class="thumb_up" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26239" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M982.016 425.984l-2.005333 4.010667 2.005333 0 0 82.005333q0 16-6.016 32l-130.005333 299.989333q-20.010667 52.010667-77.994667 52.010667l-384 0q-34.005333 0-59.989333-25.984t-25.984-59.989333l0-425.984q0-34.005333 25.984-59.989333l280.021333-281.984 45.994667 45.994667q18.005333 18.005333 18.005333 43.989333l0 13.994667-41.984 196.010667 269.994667 0q34.005333 0 59.989333 25.002667t25.984 59.008zM41.984 896l0-512 171.989333 0 0 512-171.989333 0z" p-id="26240"></path></svg>
        <svg t="1523960085477" class="thumb_down" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26352" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M809.984 128l171.989333 0 0 512-171.989333 0 0-512zM640 128q34.005333 0 59.989333 25.984t25.984 59.989333l0 425.984q0 34.005333-25.984 59.989333l-280.021333 281.984-45.994667-45.994667q-18.005333-18.005333-18.005333-43.989333l0-13.994667 41.984-196.010667-269.994667 0q-34.005333 0-59.989333-25.002667t-25.984-59.008l2.005333-4.010667-2.005333 0 0-82.005333q0-16 6.016-32l130.005333-299.989333q20.010667-52.010667 77.994667-52.010667l384 0z" p-id="26353"></path></svg>
        <svg t="1523960659214" class="reply" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26465" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M726.016 470.016l0-86.016-86.016 0 0 86.016 86.016 0zM553.984 470.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM384 470.016l0-86.016-86.016 0 0 86.016 86.016 0zM854.016 86.016q34.005333 0 59.008 25.002667t25.002667 59.008l0 512q0 34.005333-25.002667 59.989333t-59.008 25.984l-598.016 0-169.984 169.984 0-768q0-34.005333 25.002667-59.008t59.008-25.002667l683.989333 0z" p-id="26466"></path></svg>
      </div>
    </div>
    <div class="topic_item">
      <div class="author_wrapper">
          <span class="photo_img">
            <img src="../../assets/logo.png" alt="">
          </span>
        <span class="author_msg">
            <p class="author_name">Nahett</p>
            <p class="author_autograph">Named Route 'App' has a default child route. When navigating to this named route (:to="{name: 'App'"),</p>
          </span>
      </div>
      <p class="topic_discuss">在 mutation 中混合异步调用会导致你的程序很难调试。</p>
      <div class="author_operation">
        <svg t="1523960076177" class="thumb_up" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26239" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M982.016 425.984l-2.005333 4.010667 2.005333 0 0 82.005333q0 16-6.016 32l-130.005333 299.989333q-20.010667 52.010667-77.994667 52.010667l-384 0q-34.005333 0-59.989333-25.984t-25.984-59.989333l0-425.984q0-34.005333 25.984-59.989333l280.021333-281.984 45.994667 45.994667q18.005333 18.005333 18.005333 43.989333l0 13.994667-41.984 196.010667 269.994667 0q34.005333 0 59.989333 25.002667t25.984 59.008zM41.984 896l0-512 171.989333 0 0 512-171.989333 0z" p-id="26240"></path></svg>
        <svg t="1523960085477" class="thumb_down" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26352" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M809.984 128l171.989333 0 0 512-171.989333 0 0-512zM640 128q34.005333 0 59.989333 25.984t25.984 59.989333l0 425.984q0 34.005333-25.984 59.989333l-280.021333 281.984-45.994667-45.994667q-18.005333-18.005333-18.005333-43.989333l0-13.994667 41.984-196.010667-269.994667 0q-34.005333 0-59.989333-25.002667t-25.984-59.008l2.005333-4.010667-2.005333 0 0-82.005333q0-16 6.016-32l130.005333-299.989333q20.010667-52.010667 77.994667-52.010667l384 0z" p-id="26353"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "topicList"
    }
</script>

<style scoped lang="less">
  #topic_conatiner {
    padding: 0 15px;
    min-height: 100%;
    /*background: #fff;
    border-bottom: 1px solid #dfdfe2;*/
    .topic_title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      padding-bottom: 16px;
    }
    .topic_discuss {
      font-size: 14px;
      font-weight: normal;
      color: #555;
    }
    .topic_item {
      padding: 15px 0;
      /*border-bottom: 1px solid #e3e4e5;*/
    }
    .author_wrapper {
      margin-bottom: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .author_msg {
      padding-left: 15px;
      width: 70%;
    }
    .photo_img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      overflow: hidden;
      display: block;
      border: 1px solid #ececec;
    }
    .author_name {
      font-size: 16px;
    }
    .author_autograph {
      font-size: 14px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .author_operation {
      height: 40px;
      width: 100%;
      background: #f4f9fa;
      margin-top: 15px;
      border-radius: 5px;
      border: 1px solid #e4e5ed;
    }
    .thumb_up, .thumb_down, .reply {
      height: 20px;
      width: 24px;
      margin-left: 10px;
      margin-top: 10px;
      fill: #a4a5aa;
    }
    .reply {
      float: right;
      margin-right: 10px;
    }
  }
</style>
