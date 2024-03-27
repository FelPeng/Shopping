import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      // 个人权证相关
      userInfo: getInfo()
    }
  },
  mutations: {
    // 所有的mutations第一个参数都是state
    setUserInfo (state, obj) {
      state.userInfo = obj
      // 持久化个人信息token
      setInfo(obj)
    }
  },
  actions: {
    logout (context) {
      context.commit('setUserInfo', {})
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {

  }
}
