// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/mui.min.css'
import BetterScroll from "@/components/common/BetterScroll";
import FastClick from 'fastclick'
import axios from 'axios'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'
import Store from 'store'
Vue.use(Vuex)

Vue.use(VuePreview)

Vue.filter('dataFormat', function (data, pattern = 'YYYY-MM-DD') {
  return moment(data).format(pattern)
})
Vue.filter('getTime', data => {
  let times = new Date(data)
  return times.getTime()
})

let store = new Vuex.Store({
  state: {
    car: Store.get('car') || []
  },
  mutations: {
    addCar(state, obj) {
      let bool = false;
      state.car.some(item => {
        if (item.id === obj.id) {
          item.count += obj.count
          bool = true
        }
      })

      if (bool == false) {
        state.car.push(obj)
      }

      Store.set('car', state.car)
    },
    change(state, o) {
      state.car.forEach(item => {
        if (item.id == o.id) {
          //  console.log(o.value);
          item.count = parseInt(o.value)
        }
      })
      Store.set('car', state.car)
    },
    updata(state,obj){
      state.car.forEach(item=>{
        if(item.id==obj.id){
          item.select=obj.select
        }
      })
      Store.set('car', state.car)
    },
    removeArr(state,id){
      state.car.forEach((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
        }
      })
      Store.set('car', state.car)
    }
  },
  getters: {
    allCounts(state) {
      let sum = 0;
      state.car.forEach(item => {
        sum += item.count
      })
      return sum
    },
    getSelect(state){
      let o={};
      state.car.forEach(item=>{
        o[item.id]=item.select
      })
      return o
    },
    getSum(state){
      let o={}
      o.num=0;
      o.res=0;
      state.car.forEach(item=>{
        if(item.select===true){
          o.num+=item.count;
        o.res+=item.count*item.price
        }
      })
      return o
    }
  }
})



Vue.prototype.axios = axios
Vue.use(MintUI)
Vue.use(ElementUI);
Vue.component('BetterScroll', BetterScroll)
Vue.config.productionTip = false
// FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
