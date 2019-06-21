<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.img"  :class="{isWidth:show}">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
export default {
    props:['imgList','show']
}
</script>

<style lang='less' scoped>
    .mint-swipe {
  height: 200px;
  text-align: center;
  img {
    // width: 100%;
    height: 100%;
  }
}
.isWidth{
    width: 100%;
}
</style>
