<template>
  <div>
    <head-component title="Message" menu="1" />
    <tab-switch :items="tabData" />
    <message-list />
  </div>
</template>
<script>
  import headComponent from '@/components/header/headBar.vue';
  import messageList from './messageList';
  import tabSwitch from '@/components/tab/tabSwitch.vue';
  export default {
    name: 'msgComponent',
    components: {
      headComponent,
      messageList,
      tabSwitch
    },
    data () {
      return {
        tabData: [
          { name: '回复我的' },
          { name: '收到的赞' },
          { name: '系统通知' }
        ]
      }
    }
  }
</script>
<style scoped lang="less">

</style>
