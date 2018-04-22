<template>
  <span id="subCaseBtn">
    <slot></slot>
  </span>
</template>

<script>
    export default {
        name: "subCaseBtn"
    }
</script>

<style scoped lang="less">
  @import "../../style/common";
  #subCaseBtn {
    height: 26px;
    line-height: 26px;
    border: 1px solid @baseColor;
    border-radius: 5px;
    text-align: center;
    color: @baseColor;
    display: inline-block;
    padding: 0 10px;
    margin-right: 10px;
  }
</style>
