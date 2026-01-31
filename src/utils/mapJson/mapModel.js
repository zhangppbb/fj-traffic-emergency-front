import HttpResponse from '@/utils/common/httpResponse.js'
import MapApi from './mapApi.js'
const mapApi = new MapApi()
class MapModel {
  async provinceName(params) {
    const ret = HttpResponse.getResponse()
    try {
      const response = await mapApi.provinceName(params)
      if (response) {
        ret.isSuccess = true
        ret.data = response
        return ret
      }
      return ret
    } catch (e) {
      return ret
    }
  }

  async getCityBoundary(params) {
    const ret = HttpResponse.getResponse()
    try {
      const response = await mapApi.getCityBoundary(params)
      if (response) {
        ret.isSuccess = true
        ret.data = response
        return ret
      }
      return ret
    } catch (e) {
      return ret
    }
  }
}

export default MapModel
