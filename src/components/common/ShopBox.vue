<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change='change' ref='num'>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '@/assets/js/mui.min.js'
export default {
    mounted(){
        mui('.mui-numbox').numbox()        
        this.$emit('changeNum',this.$refs.num.value)
    },
    props:['max'],
    watch:{
        max(val){
            mui('.mui-numbox').numbox().setOption('max',val)
        }
    },
    methods:{
      change(){        
        this.$emit('changeNum',this.$refs.num.value)
        // console.log(this.$refs.num.value);
        
      }
    }
};
</script>

<style>
</style>
