<template>
  <div class="type_switch_wrapper">
    <ul>
      <li class="tsw_item" :class="{ tsw_item_active: activeClass === index }" v-for="(item, index) in items" @click="activeClass = index; item.fn && item.fn(index);" :style="{ width: 100/items.length + '%' }">
        {{ item.name }}
      </li>
      <!--<li class="tsw_item" :class="[ activeClass === 1 ? 'tsw_item_active' : '' ]" @click="activeClass = 1;">
        最新
      </li>
      <li class="tsw_item" :class="[ activeClass === 2 ? 'tsw_item_active' : '' ]" @click="activeClass = 2;">
        精华
      </li>-->
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'tabSwitch',
    props: ['items'],
    data () {
      return {
        activeClass: 0
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../style/common";
  .type_switch_wrapper {
    height: 41px;
    border-bottom: 1px solid #eee;
    .tsw_item {
      float: left;
      height: 40px;
      font-size: 18px;
      text-align: center;
      width: 33.3%;
      line-height: 28px;
      position: relative;
    }
    .tsw_item_active {
      font-weight: bolder;
      color: #333;
      &:after {
        content: '';
        position: absolute;
        width: 30%;
        height: 3px;
        background: @baseColor;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
</style>
