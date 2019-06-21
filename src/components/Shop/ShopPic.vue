<template>
    <div>
        <div>
            <h3>{{pic.title}}</h3>
            <div v-html='pic.content' class="con"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            pic:{}
        }
    },
    mounted() {
        this.getPic()
    },
    methods: {
        getPic(){
            this.axios.get('/api/goods/getdesc/'+this.id).then(res=>{
                // console.log(res);
                this.pic=res.data.message[0]
            })
        }
    },
}
</script>

<style lang='less' scoped>
    h3{
        font-size: 14px;
        color:#26a2ff;
        text-align: center;
        line-height: 2em;
    }
    .con{
        padding: 0 5px;
       & /deep/ img{
           width: 100%;
       }
    }
</style>
