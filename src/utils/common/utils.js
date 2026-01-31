/**
 * 项目公共代码
 */
import { DevelopmentEnvEnum } from './enum'
import VueCookie from 'vue-cookie'

export default {
  /**
   * 获取环境变量
   */
  getEnv() {
    var host = location.host
    //   判断接口，是属于什么环境下的接口。
    if (host.match(/localhost|10.10.12.251|127\.0|\.dev\.ly\.com/i)) {
      return DevelopmentEnvEnum.DEV
    }
    if (host.match(/172\.16\.100\.111/i)) {
      return DevelopmentEnvEnum.STAGE
    }
    return DevelopmentEnvEnum.PRODUCT
  },
  industryTypeHandle(type) {
    switch (parseInt(type)) {
      case 0:
        return '其他'
      case 1:
        return '第一产业'
      case 2:
        return '第二产业'
      case 3:
        return '第三产业'
    }
  },
  // 获取cookie
  getCookie(keyName) {
    return VueCookie.get(keyName)
  },
  //   指定清除cookie
  delCookie(name) {
    VueCookie.set(name, '', -1, '/')
  },
  /**
   * 设置cookie
   */
  setCookie: function(cname, cvalue, exdays) {
    VueCookie.set(cname, cvalue, {
      expires: exdays,
      path: '/'
    })
  },
  // 判断是否全屏
  isFullScreen() {
    const fullscreenElement =
      document.fullscreenElement ||
      document.msFullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement // 有前缀的f是大写，没前缀是小写
    if (fullscreenElement === null) {
      return false // 当前没有元素在全屏状态
    } else {
      return true // 有元素在全屏状态
    }
  },
  // 全屏操作
  requestFullscreen() {
    const element = document.documentElement
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen()
    } else {
      alert('不支持全屏API浏览器')
    }
  },
  // 判断是否存在
  in_array(stringToSearch, arrayToSearch) {
    let ret = false
    arrayToSearch.forEach((item, index) => {
      if (stringToSearch === item.functionTableId) {
        ret = true
      }
    })
    return ret
  },
  // 比较大小，排序使用
  compare(property) {
    return function(a, b) {
      var value1 = a[property]
      var value2 = b[property]
      return value1 - value2
    }
  },
  IEVersion() {
    var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
    var isIE =
      userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
    var isIE11 =
      userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1

    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
      reIE.test(userAgent)
      var fIEVersion = parseFloat(RegExp['$1'])
      if (fIEVersion === 7) {
        return 7
      } else if (fIEVersion === 8) {
        return 8
      } else if (fIEVersion === 9) {
        return 9
      } else if (fIEVersion === 10) {
        return 10
      } else {
        return 6 // IE版本<=7
      }
    } else if (isEdge) {
      return 'edge' // edge
    } else if (isIE11) {
      return 11 // IE11
    } else {
      return -1 // 不是ie浏览器
    }
  },
  // 获取url参数
  getQueryVariable(name) {
    var url = document.location.toString()
    var arrObj = url.split('?')

    if (arrObj.length > 1) {
      var arrPara = arrObj[1].split('&')
      var arr

      for (var i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split('=')

        if (arr != null && arr[0] === name) {
          return arr[1]
        }
      }
      return ''
    } else {
      return ''
    }
  },
  /**
   * 诸葛
   */
  zhugeTrackOneLevel(typeName) {
    this.exeZhugeTrack(typeName)
  },
  zhugeTrackTwoLevel(typeName, pageName) {
    var obj = {}
    obj[typeName] = typeName
    this.exeZhugeTrack(pageName, obj)
  },
  /**
   *
   * @param {*} menuName  菜单类别（企业云图）
   * @param {*} typeName （类型模块，当前模块分类）
   * @param {*} pageName （模块下，具体内容）
   */
  zhugeTrackThreeoLevel(typeName, pageName) {
    var obj = {}
    const menuName = '企业云图'
    obj[`${typeName}-${pageName}`] = pageName
    this.exeZhugeTrack(menuName, obj)
  },
  exeZhugeTrack(menuName, obj) {
    if (!menuName || menuName === 'undefined') {
      return
    }
    if (window.location.href.indexOf('yuntu.qichacha.com') > -1) {
      if (obj) {
        window.zhuge.track(menuName, obj)
      } else {
        window.zhuge.track(menuName)
      }
    } else {
      if (obj) {
        window.zhuge.track('测试----' + menuName, obj)
      } else {
        window.zhuge.track('测试----' + menuName)
      }
    }
  },
  isDef(v) {
    return v !== undefined && v !== null
  },
  initAreaList(areaList) {
    for (let i = 0; i < areaList.length; i++) {
      if (!areaList[i].children.length) {
        delete areaList[i].children
      }
      if (areaList[i].children) {
        for (let j = 0; j < areaList[i].children.length; j++) {
          if (
            areaList[i].children[j].children &&
            !areaList[i].children[j].children.length
          ) {
            delete areaList[i].children[j].children
          }
        }
      }
    }
    return areaList
  }
}
