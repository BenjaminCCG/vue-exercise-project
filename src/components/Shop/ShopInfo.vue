<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :imgList="imgList" :show="show"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            <span>市场价:</span>
            <del>{{info.market_price}}</del>
            <span>销售价:</span>
            <span class="now">{{info.sell_price}}</span>
          </div>
          <div class="count">
            <span>购买数量</span>
            <shop-box :max="info.stock_quantity" @changeNum="resNum"></shop-box>
          </div>
          <div class="btn">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addObj" >加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
      <div class="ball" v-show="ball" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{info.goods_no}}</p>
          <p>上架日期:{{info.add_time|dataFormat}}</p>
          <p>库存情况:{{info.stock_quantity}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain class="but" @click.native="toPic">图文详情</mt-button>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <discuss :id="id"></discuss>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../common/Swiper";
import ShopBox from "../common/ShopBox";
import Discuss from "../common/Discuss";
export default {
  components: {
    Swiper,
    ShopBox,
    Discuss
  },
  data() {
    return {
      imgList: [],
      id: this.$route.params.id,
      show: false,
      info: {},
      ball: false,
      num: null
    };
  },
  created() {
    // console.log(this.id);
    
    this.getImg();
    this.getInfo();
  },
  methods: {
    getImg() {
      this.axios.get("/api/getthumimages/" + this.id).then(res => {
        // console.log(res);
        res.data.message.forEach(item => {
          item.img = item.src;
        });
        this.imgList = res.data.message;
      });
    },
    getInfo() {
      this.axios.get("/api/goods/getinfo/" + this.id).then(res => {
        // console.log(res);
        this.info = res.data.message[0];
      });
    },
    toPic() {
      this.$router.push({ name: "shopPic", params: { id: this.id } });
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      let ball = this.$refs.ball.getBoundingClientRect();
      let car = document.getElementById("car").getBoundingClientRect();
      let left = car.left - ball.left;
      let top = car.top - ball.top;
      el.style.transform = `translate(${left}px,${top}px)`;
      el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter() {
      this.ball = !this.ball;
    },
    resNum(val) {
      this.num = val;
    },
    addObj(){
      this.ball=!this.ball;
      let obj={
        id:this.id,
        price:this.info.sell_price,
        count:parseInt(this.num),
        select:true
      }
      this.$store.commit('addCar',obj)
    }
  }
};
</script>

<style lang='less' scoped>
.ball {
  width: 10px;
  height: 10px;
  background-color: #dd0000;
  border-radius: 50%;
  position: absolute;
  left: 144px;
  top: 408px;
  z-index: 99;
}
.price {
  color: #666;
  .now {
    font-size: 16px;
    color: #dd0000;
  }
}
.count {
  display: flex;
  align-items: center;
  margin: 10px 0;
  span {
    margin-right: 10px;
  }
}
.but {
  margin-top: 10px;
}
</style>
