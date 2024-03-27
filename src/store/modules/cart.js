import { changeCount, getCartList, delSelect } from '@/api/cart'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    // 提供一个设置cartList 的mutation
    setCartList (state, newList) {
      state.cartList = newList
    },
    // 点击选中/取消购物车商品
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.ischecked = !goods.ischecked
    },
    // 全选|反选
    toggleAllCheck (state, flag) {
      state.cartList.forEach(item => {
        item.ischecked = flag
      })
    },
    // 修改本地购物车数量
    changeCount (state, { goodsId, value }) {
      const obj = state.cartList.find(item => item.goods_id === goodsId)
      obj.goods_num = value
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      //   后台返回的数据中,不包含复选框选中状态,为了实现将来的功能
      // 后台手动维护数据,给每一项,添加一个isChencked转态
      data.list.forEach(item => {
        item.ischecked = true
      })
      context.commit('setCartList', data.list)
    },
    // 修改购物车数量
    async changeCountAction (context, obj) {
      const { goodsId, value, skuId } = obj
      context.commit('changeCount', {
        goodsId,
        value
      })
      await changeCount(goodsId, value, skuId)
    },
    // 删除购物车数据
    async delSelect (context) {
      const selCartList = context.getters.selCartList
      const cartIds = selCartList.map(item => item.id)
      await delSelect(cartIds)
      Toast('删除成功')

      // 重新拉取最新的购物车数据 (重新渲染)
      context.dispatch('getCartAction')
    }

  },
  getters: {
    // 获取商品总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => {
        sum += item.goods_num
        return sum
      }, 0)
    },
    // 选中商品的列表
    selCartList (state) {
      return state.cartList.filter(item => item.ischecked)
    },
    // 选中的商品总数
    // 如果想要使用 getters中的其它数据可以在函数的形参位置使用getters,然后在语句中使用getters.XXX就能获取到数据.
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 选中商品总价
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    },
    // 当商品全部选中时，底部全选按钮选中
    isAllChecked (state) {
      return state.cartList.every(item => item.ischecked)
    }
  }
}
