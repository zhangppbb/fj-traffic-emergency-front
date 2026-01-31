import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'
import right from './assets/images/right.jpg'
import left from './assets/images/left.png'

export default {
  data() {
    return {
      // 视频列表
      videos: [
        {
          name: '鼓山大桥-桥墩右侧监控',
          datetime: ' 2026年1月16日 11:12:15',
          url: right
        },
          {
          name: '鼓山大桥-桥墩左侧监控',
          datetime: ' 2026年1月16日 11:12:15',
          url: left
        }
      ]
    }
  }
}
