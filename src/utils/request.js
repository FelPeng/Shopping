import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
// 创建axios实例，将来对创建出来的实例，进行自定义配置
const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

//   请求，响应拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // config.headers['content-Security-Policy'] = 'upgrade-insecure-requests'
  // 在发送请求之前做些什么
  // 开启loading，禁止背景点击（节流处理）
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 是否禁用背景点击
    loadingType: 'spinner', // 图标样式
    duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
  })
  // 添加请求头配置
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(默认axios会包装一层data，需要响应拦截器中处理一下)
  const res = response.data
  if (res.status !== 200) {
    // 给个提示
    // toast默认是单例模式，后面的toast调用会覆盖前一个toast效果
    Toast(`${res.message}`)
    // 抛出一个错误
    return res.reject(res.message)
  } else {
    // 正确情况，直接走业务核心逻辑，关闭loading效果
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 导出配置好的实例
export default instance
