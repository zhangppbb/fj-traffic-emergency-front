import request from '@/utils/request'

// 查询概览数据
export function getOverview(id) {
  return request({
    url: `/achievement-transformation/interface-summarization/backend-summary`,
    method: 'get'
  })
}
