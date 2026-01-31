import request from '@/utils/request'

// 查询生成表数据
export function getTableData(data) {
  return request({
    url: '/achievement-transformation/companies/list',
    method: 'post',
    data
  })
}

// 新增表格数据
export function addTableItem(data) {
  return request({
    url: '/achievement-transformation/companies',
    method: 'post',
    data
  })
}

// 移动数据排位
export function moveItem(data) {
  return request({
    url: '/achievement-transformation/companies/move',
    method: 'put',
    data
  })
}

// 修改表格数据
export function editTableItem(data) {
  return request({
    url: '/achievement-transformation/companies',
    method: 'put',
    data
  })
}

// 修改表格数据状态
export function changeStatus(data) {
  return request({
    url: '/achievement-transformation/companies/changeStatus',
    method: 'put',
    data
  })
}

// 删除表格数据
export function delTableItem(id) {
  return request({
    url: `/achievement-transformation/companies/${id}`,
    method: 'delete'
  })
}

// 表格详情
export function getDetail(id) {
  return request({
    url: `/achievement-transformation/companies/${id}`,
    method: 'get'
  })
}

// 检查是否有用户在编辑
export function checkTableHasEdit(id) {
  return request({
    url: `/achievement-transformation/companies/selectIsEdit/${id}`,
    method: 'get'
  })
}

// 用户进入编辑状态-数据锁
export function setTableEdited(id) {
  return request({
    url: `/achievement-transformation/companies/setEdited/${id}`,
    method: 'put'
  })
}

// 用户退出编辑状态-删除数据锁
export function quitTableEditing(id) {
  return request({
    url: `/achievement-transformation/companies/setNotEdit/${id}`,
    method: 'put'
  })
}
