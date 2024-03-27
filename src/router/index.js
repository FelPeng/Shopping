import Vue from 'vue'
import VueRouter from 'vue-router'

// 二级路由
import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

import store from '@/store'

const Login = () => import('@/views/login')
const MyOrder = () => import('@/views/myorder')
const Pay = () => import('@/views/pay')
const ProdeTail = () => import('@/views/prodetail')
const Search = () => import('@/views/search/index.vue')
const SearchList = () => import('@/views/search/list.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/Login', component: Login },
    { path: '/myorder', component: MyOrder },
    { path: '/pay', component: Pay },
    // 动态路由传参，传递商品id
    { path: '/prodetail/:id', component: ProdeTail },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList }

  ]
})
// 所有的路由在被真正访问之前(解析渲染到对用组件页面之前),都会经过全局路由前置守卫,只有前置守卫放行了,才会到达对应页面
// 全局前置导航守卫
// to : 到哪里去,到哪去的完整路由信息对象(路径,参数)
// from: 从哪里来,从哪里来的完整路由信息对象(路径,参数)
// next: 是否放行
// 1.next() 直接放行,放行到to要去的路径.
// 2.next(路径) 进行拦截，拦截到next里面配置的路径
const authUrls = ['/pay', '.myorder']
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // 看to.path是否在authUrls中出现过
  if (!authUrls.includes(to.path)) {
    // 非权限页面,直接放行
    next()
    return
  }
  const token = store.state.user.userInfo.token
  // 权限页面，需要判断token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
