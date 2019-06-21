<template>
    <div>
        <div class="txt">
            <h3>发表评论</h3>
        <textarea maxlength="120" placeholder="请输入最多120字" v-model='text'></textarea>
        </div>
        <mt-button size='large' type='primary' @click.native='send'>发送</mt-button>
        <div class="disList">
            <div class="item" v-for='(item,index) in disList' :key='index'>
                <div class="title">
                    <span>第{{index+1}}楼&nbsp;&nbsp;{{item.user_name}}</span>
                    <span>时间:{{item.add_time|dataFormat}}</span>
                </div>
                <div class="content">{{item.content||'该用户很懒，什么都没有说'}}</div>
            </div>
        </div>
        <mt-button size='large' type='danger' plain @click.native='add'>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
            pageIndex:1,
            disList:[],
            text:''
        }
    },
    created() {
        this.getDiscuss();
        
    },
    methods: {
        getDiscuss(){
            this.axios.get('/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(res=>{
                // console.log(res);
                this.disList=this.disList.concat(res.data.message)
            })
        },
        add(){
            this.pageIndex++;
            this.getDiscuss();
        },
        send(){
            if(this.text.trim()==='')return 
            
            this.disList.unshift({
                add_time:new Date(),
                content:this.text,
                user_name:'我'
            })
            this.text=''
        }
    },
}
</script>

<style lang='less' scoped>
.txt{
    padding: 0 5px;
}
textarea{
    margin: 0;
}
.disList{
    font-size: 12px;
    .title{
        background-color: #ccc;
        padding: 2px 5px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        padding: 2px 0;
        text-indent: 2em;
    }
}
</style>
