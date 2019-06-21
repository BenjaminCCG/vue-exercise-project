<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key='item.id'>
					<router-link :to="'/home/news/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h2>{{item.title}}</h2>
							<p class='mui-ellipsis'>
                                <span>时间:{{item.add_time|dataFormat}}</span>
                                <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>				
			</ul>
         <mt-button plain type='primary' size='large' @click.native='add'>加载更多</mt-button>   
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            this.axios.get('/api/getnewslist').then(res=>{
                console.log(res)
                this.newsList=res.data.message
            })
        },
        add(){
            this.newsList=this.newsList.concat(this.newsList)
        }
    },
}
</script>

<style lang='less' scoped>
    .mui-media-body{
        h2{
            font-size: 14px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #26a2ff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
