<template>
  <div>
    <head-component :searchShow="1"></head-component>
    <h1>Home</h1>
  </div>
</template>
<script>
    import headComponent from '@/components/header/headBar.vue';
    export default {
      name: 'homeComponent',
      components: {
        headComponent
      }
    }
</script>
<style scoped lang="less">

</style>
