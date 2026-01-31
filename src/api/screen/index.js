import request from '@/utils/request'

// 查询主屏数据
export function getHomeScreenData() {
  return request({
    url: `/screen/interface-summarization/screen-summary`,
    method: 'get'
  })
}

// 查询定点帮扶分屏数据
export function getFixedScreenData() {
  return request({
    url: `/targeted-assistance/interface-summarization/screen-summary`,
    method: 'get'
  })
}

// 查询教育帮扶分屏数据
export function getEducationScreenData() {
  return request({
    url: `/educational-assistance/interface-summarization/screen-summary`,
    method: 'get'
  })
}

