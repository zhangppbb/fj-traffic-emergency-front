import request from '@/utils/request'

// 查询概览数据
export function getOverview(id) {
  return request({
    url: `/screen/interface-summarization/backend-home-page`,
    method: 'get'
  })
}
