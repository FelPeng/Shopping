<template>
  <!-- 标签栏支持路由模式，用于搭配 vue-router 使用。路由模式下会匹配页面路径和标签的 to 属性，并自动选中对应的标签。 -->
  <div>
    <!-- 二级路由出口 -->
   <router-view></router-view>

  <van-tabbar active-color="#ee0a24" inactive-color="#000" route>
  <van-tabbar-item to="/home" icon="shop-collect-o">首页</van-tabbar-item>
  <van-tabbar-item to="/category"
  icon="hot-sale-o">分类页</van-tabbar-item>
  <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item to="/user" icon="contact-o">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style>

</style>
