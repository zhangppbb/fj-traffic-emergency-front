import axios from 'axios'
// 安装qs，序列化字符串，处理发送请求的参数；转换post参数的格式，因为axios与ajax的请求不同，具体可查看相关axios中post相关文档
import qs from 'qs'
import Utils from '@/utils/common/utils'
import Interceptors from './interceptors.js'
Interceptors.request(axios)
Interceptors.response(axios)
/**
 * 基础 Api
 * @params virtualPath 虚拟目录
 */
class BaseApi {
  /**
   * @params {string} virtualPath虚拟目录
   */
  constructor(virtualPath) {
    const env = Utils.getEnv() // 获取环境变量
    const baseUrlInfo = this.getBaseUrlInfo()
    this.protocol = baseUrlInfo.protocol // 协议头
    virtualPath = virtualPath || ''
    if (env === 'development') {
      this.baseUrl =
        baseUrlInfo.protocol +
        '://' +
        baseUrlInfo.domain +
        ':' +
        location.port +
        '/' +
        virtualPath // 请求baseurls
    } else {
      this.baseUrl = '/' + virtualPath
    }
  }

  /**
   * 构建baseurl
   */
  getBaseUrlInfo() {
    const protocol = location.protocol.replace(':', '')
    const domain = 'localhost' // 域名
    // if (__DEV__) {
    //   domain = 'localhost'
    // } else if (__SIT__) {
    //   domain = '172.16.100.111'
    // } else if (__BUILD__) {
    //   domain = 'yuntu.qichacha.com'
    // }
    return {
      protocol: protocol,
      domain: domain
    }
  }

  /**
   * 统一post请求
   * @param params {Object} 请求参数
   */
  post(params) {
    this.setRequestParams(params)
    if (params.headers['Content-Type'] === 'application/json') {
      return axios.post(params.baseUrl + params.url, params.data, {
        headers: {
          source: this.getSource(),
          bigScreenToken: sessionStorage.getItem('bigScreenToken')
            ? sessionStorage.getItem('bigScreenToken')
            : '',
          ...params.headers
        }
      })
    } else {
      return axios.post(
        params.baseUrl + params.url,
        qs.stringify(params.data),
        {
          // headers:params.headers
        }
      )
    }
    // return axios.post(params.baseUrl + params.url, qs.stringify(params.data), {
    //   headers:params.headers
    // });
  }

  /**
   * 统一get请求
   * @param params {Object} 请求参数
   */
  get(params) {
    this.setRequestParams(params)
    return axios.get(params.baseUrl + params.url, {
      params: params.data,
      headers: {
        source: this.getSource(),
        bigScreenToken: sessionStorage.getItem('bigScreenToken')
          ? sessionStorage.getItem('bigScreenToken')
          : '',
        ...this.headers
      }
    })
  }

  baseGet(params) {
    this.setRequestParams(params)
    return axios.get(params.url, {
      params: params.data
    })
  }

  /**
   * 统一jsonp请求
   */
  jsonp(params) {
    return new Promise((resolve, reject) => {
      try {
        var cbFunc = 'openapi' + new Date().getTime()
        window[cbFunc] = function(data) {
          resolve(data)
          document.body.removeChild(script)
        }
        this.setRequestParams(params)
        params.url += params.url.indexOf('?') === -1 ? '?' : '&'
        params.url += Utils.objectToQString(params.data)
        params.url += 'callback=' + cbFunc
        // 创建script标签
        var script = document.createElement('script')
        script.src = params.url
        script.type = 'text/javascript'
        document.body.appendChild(script)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 设置请求参数
   * @param {Object} params 请求参数
   */
  setRequestParams(params) {
    if (params.baseUrl === null) {
      // 当baseUrl 等于 null 的时候，设置为空（一般用户请求本地服务）
      params.baseUrl = ''
    } else {
      params.baseUrl = params.baseUrl || this.baseUrl
    }
    if (!params.data) {
      params.data = {}
    }
    if (!params.headers) {
      params.headers = {}
    }
  }

  getSource() {
    const nUrl = window.location.hash
    if (nUrl.indexOf('YTFullScreen') === -1) {
      return 'plugin'
    } else {
      return 'bigscreen'
    }
  }
}

export default BaseApi
