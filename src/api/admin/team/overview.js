import request from '@/utils/request'

// 查询概览数据
export function getOverview(id) {
  return request({
    url: `/social-svc-team/interface-summarization/backend-summary`,
    method: 'get'
  })
}
