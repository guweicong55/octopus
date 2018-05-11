<template>
  <span id="subCaseBtn" @click="clickHandler">
      <slot></slot>
  </span>
</template>

<script>
  export default {
    name: "subCaseBtn",
    methods: {
      clickHandler (e) {
        this.$emit('click', e);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../style/common";

  #subCaseBtn {
    height: 55px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    text-align: center;
    padding: 0 10px;
    font-size: 20px;
    font-weight: bolder;
    color: #aaa;
    display: block;
  }
</style>
