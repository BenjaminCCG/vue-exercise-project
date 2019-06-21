import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Tabber/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/member',component:()=>import('@/components/Tabber/Member')},
    {path:'/shopcar',component:()=>import('@/components/Tabber/Shopcar')},
    {path:'/search',component:()=>import('@/components/Tabber/Search')},
    {path:'/',redirect:'/home'},
    {path:'/home/news',component:()=>import('@/components/News/News')},
    {path:'/home/news/:id',component:()=>import('@/components/News/NewsDetail')},
    {path:'/home/photo',component:()=>import('@/components/Photo/Photo')},
    {path:'/home/photoinfo/:id',component:()=>import('@/components/Photo/PhotoInfo')},
    {path:'/home/shop',component:()=>import('@/components/Shop/Shop')},
    {path:'/home/shop/:id',component:()=>import('@/components/Shop/ShopInfo')},
    {path:'/home/shop/shopPic/:id',component:()=>import('@/components/Shop/ShopPic'),name:'shopPic'},
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  linkActiveClass:'mui-active'
})
