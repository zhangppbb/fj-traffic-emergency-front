import request from '@/utils/request'

// 查询统计数据
export function getStatisticsList() {
  return request({
    url: `/social-svc-team/techMissionStats/list`,
    method: 'get'
  })
}

// 检查是否有用户在编辑
export function checkStatisticsHasEdit() {
  return request({
    url: `/social-svc-team/techMissionStats/selectIsEdit`,
    method: 'get'
  })
}

// 用户进入编辑状态-数据锁
export function setStatisticsEdited() {
  return request({
    url: `/social-svc-team/techMissionStats/setEdited`,
    method: 'put'
  })
}

// 用户退出编辑状态-删除数据锁
export function quitStatisticsEditing() {
  return request({
    url: `/social-svc-team/techMissionStats/setNotEdit`,
    method: 'put'
  })
}

// 编辑统计数据
export function editStatisticsList(data) {
  return request({
    url: `/social-svc-team/techMissionStats/batch-update`,
    method: 'put',
    data
  })
}
