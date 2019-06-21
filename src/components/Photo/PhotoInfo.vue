<template>
    <div>
        <div class="body">
            <div class="header">
            <h3>{{photo.title}}</h3>
            <p>
                <span>时间:{{photo.add_time|dataFormat}}</span>
                <span>点击{{photo.click}}次</span>
            </p>
        </div>
        <vue-preview :slides="slide1" class="view"></vue-preview>
        <div class="content" v-html='photo.content'></div>
        </div>
        <discuss :id='id'></discuss>
    </div>
</template>

<script>
import Discuss from '../common/Discuss'
export default {
    data() {
        return {
            id:this.$route.params.id,
            photo:{},
            slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
        }
    },
    components:{
        Discuss
    },
    mounted() {
        this.getPhotoInfo()
    },
    methods: {
        getPhotoInfo(){
            this.axios.get('/api/getimageInfo/'+this.id).then(res=>{
                console.log(res);
                this.photo=res.data.message[0]
            })
        },
         handleClose () {
        console.log('close event')
      }
    },
}
</script>

<style lang='less' scoped>
.body{
    padding: 0 4px;
    .content{
        font-size: 12px;
        line-height: 2em;
    }
}
    .header{
        h3{
            font-size: 14px;
            text-align: center;
        }
        p{
            display: flex;
            justify-content: space-between;
            color: #26a2ff;
        }
    }
    .view figure{
     
    }
</style>
