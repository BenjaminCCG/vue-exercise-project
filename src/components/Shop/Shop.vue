<template>
    <div>
        <div class="shopList">
            <div class="shopItem" v-for='item in shop' :key='item.id' @click='toGoods(item.id)'>
                <div class="shopPic">
                    <img :src="item.img_url">
                </div>
                <p class="title">{{item.title}}</p>
                <div class="shopTxt">
                    <p class="price">
                        <span>￥{{item.sell_price}}</span>
                        <span>{{item.market_price}}</span>
                    </p>
                    <p class="state">
                        <span>运输中</span>
                        <span>库存</span>
                    </p>
                </div>
            </div>           
            
        </div>
        <mt-button type='primary' size='large' plain @click.native='add'>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            shop:[],
            pageIndex:1,
        }
    },
    mounted() {
        this.getShop()
    },
    methods: {
        getShop(){
            this.axios.get('/api/getgoods?pageindex='+this.pageIndex).then(res=>{
                // console.log(res);
                this.shop=this.shop.concat(res.data.message)
            })
        },
        add(){
            this.pageIndex++;
            this.getShop()
        },
        toGoods(id){
            this.$router.push({path:'/home/shop/'+id})
        }
    },

}
</script>

<style lang='less' scoped>
    .shopList{
        display: flex;        
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
       
        .shopItem{
            width: 49%;
            box-shadow: 0 1px 8px #666;
             margin-bottom: 8px;
             border-radius: 5px;
             padding: 2px;
            img{
                width: 100%;
                 border-radius: 5px;
            }
            .title{
                color:#000;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin: 0;
            }
            .shopTxt{
                background-color: #f0f0f0;
                p{
                    margin: 0;
                }
                .price>span:first-child{
                    color:#dd0000;
                    font-size: 16px;
                    margin-right: 10px;
                }
                .price>span:last-child{
                    color:#000;
                    text-decoration: line-through;
                }
                .state{
                    color: #000;
                    font-size: 12px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
