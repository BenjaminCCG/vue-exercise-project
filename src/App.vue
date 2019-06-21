<template>
  <div id="app">
    <mt-header fixed title="Vue2.0项目实战" class="head">
      <span slot="left">
        <mt-button icon="back" v-if="show" @click.native="back">返回</mt-button>
      </span>
    </mt-header>
    <transition>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-ccc" to="/home">
        <span class="mui-icon el-icon-s-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-ccc" to="/member">
        <span class="mui-icon el-icon-user-solid"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-ccc" to="/shopcar">
        <span class="mui-icon el-icon-shopping-cart-full">
          <span class="mui-badge" id="car">{{$store.getters.getSum.num}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-ccc" to="/search">
        <span class="mui-icon el-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false
    };
  },
  created() {
    console.log(this.$route.path);
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  watch: {
    "$route.path"() {
      //  this.show=this.$route.path!='/home'
      //  ?this.$route.path!='/home'
      //  :this.$route.path=='/home'

      if (this.$route.path != "/home") {
        this.show = true;
      } else if (this.$route.path == "/home") {
        this.show = false;
      }
    }
  }
};
</script>

<style lang='less' scoped>
* {
  touch-action: pan-y;
}
#app {
  padding-top: 40px;
  padding-bottom: 50px;
  .head{
	  z-index: 9;
  }
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item-ccc.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-ccc {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-ccc .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-ccc .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
