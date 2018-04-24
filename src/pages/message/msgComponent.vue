<template>
  <div>
    <head-component title="Message" menu="1"></head-component>
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
