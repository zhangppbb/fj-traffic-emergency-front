import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.timeout = 3 * 60 * 1000 // 超时时间 180s

/**
 * 拦截器
 */
class Interceptors {
  /**
   * 对请求信息进行拦截器
   */
  static request(axios) {
    axios.interceptors.request.use(
      function(config) {
        // element ui Loading方法
        if (config.isLoading !== false) {
          // 如果配置了isLoading: false，则不显示loading
          // showFullScreenLoading()
        }
        return config
      },
      function(error) {
        //   hideFullScreenLoading()
        return Promise.reject(error)
      }
    )
  }

  /**
   * 对响应信息进行拦截器
   */
  static response(axios) {
    axios.interceptors.response.use(
      function(response) {
        /**
         * 这里可以添加一些接口公共返回值处理，例如: 登陆态判断等
         */
        const resStauts = response.data.Status
        var result = response.data.result
        if (parseInt(resStauts) === 200 || status) {
          if (
            result &&
            Object.prototype.hasOwnProperty.call(result, 'Status')
          ) {
            return response.data.result
          } else {
            return response.data
          }
        } else {
          return response.data
        }
      },
      function(error) {
        //   hideFullScreenLoading(); //隐藏loading
        return Promise.reject(error)
      }
    )
  }
}
export default Interceptors
