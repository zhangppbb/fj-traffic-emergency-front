import request from '@/utils/request'

// 查询统计数据
export function getStatisticsList() {
  return request({
    url: `/screen/rural-revitalization/list`,
    method: 'get'
  })
}

// 检查是否有用户在编辑
export function checkStatisticsHasEdit() {
  return request({
    url: `/screen/rural-revitalization/selectIsEdit`,
    method: 'get'
  })
}

// 用户进入编辑状态-数据锁
export function setStatisticsEdited() {
  return request({
    url: `/screen/rural-revitalization/setEdited`,
    method: 'put'
  })
}

// 用户退出编辑状态-删除数据锁
export function quitStatisticsEditing() {
  return request({
    url: `/screen/rural-revitalization/setNotEdit`,
    method: 'put'
  })
}

// 编辑统计数据
export function editStatisticsList(data) {
  return request({
    url: `/screen/rural-revitalization/batch-update`,
    method: 'put',
    data
  })
}

