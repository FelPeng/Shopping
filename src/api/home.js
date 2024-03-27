import request from '@/utils/request'

// 获取主页数据
export const getHomeInfo = () => {
  return request.get('/page/detail',
    {
      params: {
        pageId: 0
      }
    })
}
