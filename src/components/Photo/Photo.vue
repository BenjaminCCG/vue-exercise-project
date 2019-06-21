<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a  v-for='item in titleList' :key='item.id' @click='getPhoto(item.id)'
            :class="['mui-control-item', item.id===0?' mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
	<ul>
  		<router-link tag='li' v-for="item in pohotList" class="lazy" :key='item.id' :to='"/home/photoinfo/"+item.id'>
    	<img v-lazy="item.img_url">
		<div class="content">
			<h3>{{item.title}}</h3>
			<p>{{item.zhaiyao}}</p>
		</div>
  </router-link>
</ul>
  </div>
</template>

<script>
import mui from "@/assets/js/mui.min.js";
export default {
	data(){
		return {
			titleList:[],
			pohotList:[]
		}
	},
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	this.getTopTitle();
	this.getPhoto(0)
  },
	methods:{
		getTopTitle(){
			this.axios.get('/api/getimgcategory').then(res=>{
				// console.log(res);
				res.data.message.unshift({title:'全部',id:0})
				this.titleList=res.data.message
			})
		},
		getPhoto(id){
			this.axios.get('/api/getimages/'+id).then(res=>{
				// console.log(res);
				this.pohotList=res.data.message;
			})
		}
	}	
};
</script>

<style lang='less' scoped>
* {
  touch-action: pan-y;
}
ul{
	list-style: none;
	margin: 0;
	padding: 10px;;
	.lazy{
	background-color: #ccc;
	text-align: center;
	margin-bottom: 10px;
	border-radius: 8px;
	box-shadow: 0 1px 8px #666;
	position: relative;
	.content{
		position: absolute;
		bottom: 0;
		background-color: rgba(0, 0, 0, .4);
		color: #ccc;
		max-height: 80px;
		text-align: left;		
		h3{
			font-size: 12px;
		}
		p{
			text-overflow: hidden;
			color: #ccc;
			font-size: 10px;
		}
	}
	// font-size: 0;
	img{
		vertical-align: top;
		border-radius: 8px;
	}
	img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
 
}
}
}
</style>
