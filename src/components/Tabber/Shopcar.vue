<template>
  <div>
    <div class="mui-card" v-for='(item,i) in list' :key='item.id'>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch v-model='$store.getters.getSelect[item.id]' @change='open(item.id,$store.getters.getSelect[item.id])'></mt-switch>
          <img
            :src="item.thumb_path"
        
          >
          <div class="box-right">
            <h3>{{item.title}}</h3>
            <car-box :id='item.id' :value='$store.state.car[i].count'></car-box>
            <div class="line">
                <span>￥ {{item.sell_price}}</span>
            <a @click.prevent='remove(item.id,i)' class="remove">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <div>
                <p>总计(不含运费)</p>
                <p class="red">已勾选 <span>{{$store.getters.getSum.num}}</span> 件，总价<span>￥{{$store.getters.getSum.res}}</span></p>
            </div>
            <mt-button type='danger' size='small' @click='remind'>去结账</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import CarBox from "../common/CarBox";
export default {
  components: {
    CarBox
  },
  data() {
      return {
          list:[],
      }
  },
  methods:{
      getInfo(){
          let arr=this.$store.state.car.map(item=>item.id)
          this.axios.get('api/goods/getshopcarlist/'+arr.join(',')).then(res=>{
            //   console.log(res);
              this.list=res.data.message
          })
      },
      open(id,status){
        // console.log(111);
        this.$store.commit('updata',{id:id,select:status})
      },
      remove(id,i){
          this.list.splice(i,1);
          this.$store.commit('removeArr',id)
      },
      remind(){
          Toast('还未开放此功能')
      }
  },
  created() {
      this.getInfo()
  },
};
</script>

<style lang='less' scoped>
.mui-card-content-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
.red{
    span{
color:#dd0000;
    font-size: 15px;
    }
    
}
  .remove{
    cursor: pointer;
}
  img {
    width: 80px;
    height: 80px;
  }
  .box-right{
      h3{
          font-size: 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
      }
      .line{
          margin-top: 5px;
          span{
              color: #dd0000;
              font-size: 16px;
              margin-right: 10px;
          }
      }
  }
}

</style>
