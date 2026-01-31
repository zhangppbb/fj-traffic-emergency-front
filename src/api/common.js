import request from '@/utils/request'

// 查询地区
export function getAreaList() {
  return request({
    url: '/system/area/areaTree',
    method: 'get'
  })
}

// 上传图片
export function uploadFile(data) {
  return request({
    url: '/common/upload',
    method: 'post',
    data
  })
}
