import phoneIcon from './assets/images/phone-icon.png'
import videoIcon from './assets/images/video-icon.png'
import stubIcon from './assets/images/stub-icon.png'
import emailIcon from './assets/images/email-icon.png'

export default {
  data() {
    return {
      phoneIcon,
      videoIcon,
      stubIcon,
      emailIcon,

      // 警告数据列表
      warningList: [
        {
          name: '张三',
          type: '现场指挥'
        },
        {
          name: '李四',
          type: '医疗指挥'
        },
        {
          name: '王五',
          type: '应急车辆司机'
        },
        {
          name: '赵六',
          type: '应急车辆司机'
        },
      ]
    }
  }
}
