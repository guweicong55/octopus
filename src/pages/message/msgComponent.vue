<template>
  <div>
    <head-component title="消息"></head-component>
    <message-list></message-list>
  </div>
</template>
<script>
  import headComponent from '@/components/header/headBar.vue';
  import messageList from './messageList';
  export default {
    name: 'msgComponent',
    components: {
      headComponent,
      messageList
    }
  }
</script>
<style scoped lang="less">

</style>
