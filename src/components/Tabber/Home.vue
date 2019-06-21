<template>
  <div>
    <!-- <better-scroll> -->
    <div>
      <swiper :imgList="imgList" :show='show'></swiper>

      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/news">
            <img src="../../images/menu1.png" alt>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photo">
            <img src="../../images/menu2.png" alt>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link href="#" to="/home/shop">
            <img src="../../images/menu3.png" alt>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu4.png" alt>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu5.png" alt>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu6.png" alt>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
    <!-- </better-scroll> -->
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Swiper from "../common/Swiper";
export default {
  data() {
    return {
      imgList: [],
      show:true
    };
  },
  components: {
    Swiper
  },
  created() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      this.axios
        .get("/api/getlunbo")
        .then(res => {
          this.imgList = res.data.message;
        })
        .catch(err => {
          Toast("获取数据失败");
        });
    }
  }
};
</script>

<style lang='less' scoped>
.mui-table-view {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: none;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
