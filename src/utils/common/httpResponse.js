/**
 * 响应基类
 *  data：响应数据
 *  message：描述
 *  isSuccess：true or false
 *  code ：根据业务需求返回不同值，可空
 */
class HttpResponse {
  static getResponse() {
    return {
      data: {},
      message: '',
      isSuccess: false,
      code: ''
    }
  }

  static async pollingRequest(cb, params, times = 3, timeout = 10000) {
    let res = {
      Status: 299,
      Message: '接口超时'
    }

    try {
      for (let i = 0; i < times; i++) {
        // console.log(`请求${i+1}`)
        const obj = await cb(params)
        if (obj.Status === 200 || obj.Status === 201) {
          res = obj
          break
        }
      }
    } catch (e) {}
    return res
  }
}

export default HttpResponse
