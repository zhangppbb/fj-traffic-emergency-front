import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'

export default {
  data() {
    return {
      // 视频列表
      videos: [
        {
          name: '现场视频 1',
          url: img1
        },
          {
          name: '现场视频 2',
          url: img2
        },
          {
          name: '现场视频 3',
          url: img3
        }
      ]
    }
  }
}
