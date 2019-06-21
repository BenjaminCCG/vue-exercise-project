<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number" :value="value" readonly @change='change' ref='num' />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
    </div>
</template>

<script>
import mui from '@/assets/js/mui.min.js'
export default {
    mounted() {
        mui('.mui-numbox').numbox()         
    },
    props:['id','value'],
    methods:{
        change(){
            let o={}
            o.id=this.id;
            o.value=this.$refs.num.value
            // console.log(this.value);
            
            this.$store.commit('change',o)
        }
    }
}
</script>

<style>

</style>
