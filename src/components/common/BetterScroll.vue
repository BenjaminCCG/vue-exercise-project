<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    let bscroll = new BScroll('.wrapper');
  }
};
</script>

<style lang='less' scoped>
.wrapper {
  position: absolute;
  top: 40px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
