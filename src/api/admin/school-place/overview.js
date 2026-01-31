import request from '@/utils/request'

// 查询概览数据
export function getOverview(id) {
  return request({
    url: `/school-local-cooperation/interface-summarization/backend-summary`,
    method: 'get'
  })
}
