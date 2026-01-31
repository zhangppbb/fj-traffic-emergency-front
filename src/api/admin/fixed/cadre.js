import request from '@/utils/request'

// 查询生成表数据
export function getTableData(data) {
  return request({
    url: '/targeted-assistance/officer/list',
    method: 'post',
    data
  })
}

// 新增表格数据
export function addTableItem(data) {
  return request({
    url: '/targeted-assistance/officer',
    method: 'post',
    data
  })
}

// 移动数据排位
export function moveItem(data) {
  return request({
    url: '/targeted-assistance/officer/move',
    method: 'put',
    data
  })
}

// 修改表格数据
export function editTableItem(data) {
  return request({
    url: '/targeted-assistance/officer',
    method: 'put',
    data
  })
}

// 修改表格数据状态
export function changeStatus(data) {
  return request({
    url: '/targeted-assistance/officer/changeStatus',
    method: 'put',
    data
  })
}

// 删除表格数据
export function delTableItem(id) {
  return request({
    url: `/targeted-assistance/officer/${id}`,
    method: 'delete'
  })
}

// 表格详情
export function getDetail(id) {
  return request({
    url: `/targeted-assistance/officer/${id}`,
    method: 'get'
  })
}

// 检查是否有用户在编辑
export function checkTableHasEdit(id) {
  return request({
    url: `/targeted-assistance/officer/selectIsEdit/${id}`,
    method: 'get'
  })
}

// 用户进入编辑状态-数据锁
export function setTableEdited(id) {
  return request({
    url: `/targeted-assistance/officer/setEdited/${id}`,
    method: 'put'
  })
}

// 用户退出编辑状态-删除数据锁
export function quitTableEditing(id) {
  return request({
    url: `/targeted-assistance/officer/setNotEdit/${id}`,
    method: 'put'
  })
}
