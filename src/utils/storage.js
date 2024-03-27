// 约定一个通用的键名
const INFO_KEY = 'pf_s_shopping_info'
const HISTORY_KEY = 'pf_s_history_list'
// 获取个人信息token
export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}

// 存储个人信息token
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 移除个人信息token
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取搜索记录
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
// 设置搜索记录
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
