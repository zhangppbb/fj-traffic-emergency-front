import request from '@/utils/request'

// 获取工作总结详细信息
export function getInfoList() {
  return request({
    url: `/educational-assistance/summarize`,
    method: 'get'
  })
}

// 检查是否有用户在编辑
export function checkInfoHasEdit() {
  return request({
    url: `/educational-assistance/summarize/selectIsEdit`,
    method: 'get'
  })
}

// 用户进入编辑状态-数据锁
export function setInfoEdited() {
  return request({
    url: `/educational-assistance/summarize/setEdited`,
    method: 'put'
  })
}

// 用户退出编辑状态-删除数据锁
export function quitInfoEditing() {
  return request({
    url: `/educational-assistance/summarize/setNotEdit`,
    method: 'put'
  })
}

// 编辑工作总结数据
export function editInfoList(data) {
  return request({
    url: `/educational-assistance/summarize`,
    method: 'put',
    data
  })
}
