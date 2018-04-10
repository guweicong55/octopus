<template>
  <div id="foot_bar">
    <h1>foot bar</h1>
  </div>
</template>
<script>
  export default {
    name: 'footBar'
  }
</script>
<style scoped lang="less">
  #foot_bar {
    position: fixed;
    z-index: 99;
    bottom: 0;
    width: 100vw;
    height: 56px;
    background: #333;
  }
</style>
