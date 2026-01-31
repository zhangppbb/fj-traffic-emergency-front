import request from '@/utils/request'

// 查询生成人员数据
export function getTableData(data) {
  return request({
    url: '/rural-revitalization/demonstrationVillagePoint/list',
    method: 'post',
    data
  })
}

// 新增人员数据
export function addTableItem(data) {
  return request({
    url: '/rural-revitalization/demonstrationVillagePoint',
    method: 'post',
    data
  })
}

// 移动数据排位
export function moveItem(data) {
  return request({
    url: '/rural-revitalization/demonstrationVillagePoint/move',
    method: 'put',
    data
  })
}

// 修改人员数据
export function editTableItem(data) {
  return request({
    url: '/rural-revitalization/demonstrationVillagePoint',
    method: 'put',
    data
  })
}

// 删除人员数据
export function delTableItem(id) {
  return request({
    url: `/rural-revitalization/demonstrationVillagePoint/${id}`,
    method: 'delete'
  })
}

// 人员详情
export function getDetail(id) {
  return request({
    url: `/rural-revitalization/demonstrationVillagePoint/${id}`,
    method: 'get'
  })
}

// 检查是否有用户在编辑
export function checkTableHasEdit(id) {
  return request({
    url: `/rural-revitalization/demonstrationVillagePoint/selectIsEdit/${id}`,
    method: 'get'
  })
}

// 用户进入编辑状态-数据锁
export function setTableEdited(id) {
  return request({
    url: `/rural-revitalization/demonstrationVillagePoint/setEdited/${id}`,
    method: 'put'
  })
}

// 用户退出编辑状态-删除数据锁
export function quitTableEditing(id) {
  return request({
    url: `/rural-revitalization/demonstrationVillagePoint/setNotEdit/${id}`,
    method: 'put'
  })
}
