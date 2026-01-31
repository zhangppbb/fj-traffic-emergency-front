import BaseApi from './base/baseApi.js'
var url = '/static/map/'
class MapApi extends BaseApi {
  // 省市地址
  provinceName(data) {
    return this.baseGet({
      url: url + data + '.json'
    })
  }

  // 获取城市边界线
  getCityBoundary(data) {
    return this.baseGet({
      url: '/static/cityBoundaryMap/' + data + '.json'
    })
  }
}
export default MapApi
