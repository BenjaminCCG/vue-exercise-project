<template>
  <div class="newsDetail">
    <div v-for="item in detail" :key="item.id">
      <h2>{{item.title}}</h2>
      <p class="subtitle">
        <span>时间:{{item.add_time|dataFormat}}</span>
        <span>点击:{{item.click}}次</span>
      </p>
      <hr>
      <div v-html="item.content" class="content"></div>
    </div>
    <discuss :id='id'></discuss>
  </div>
</template>

<script>
import Discuss from '../common/Discuss'
export default {
  data() {
    return {
      id: this.$route.params.id,
      detail: null
    };
  },
  components:{
      Discuss
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.axios.get("/api/getnew/" + this.id).then(res => {
        // console.log(res);
        this.detail = res.data.message;
      });
    }
  }
};
</script>

<style lang='less' scoped>
.newsDetail {
    // padding: 0 5px;
  h2 {
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
  }
  .subtitle{
      display: flex;
      padding: 0 5px;
      justify-content: space-between;
      color: #26a2ff;
  }
  .content{
      padding: 0 3px;
  }
}
</style>
