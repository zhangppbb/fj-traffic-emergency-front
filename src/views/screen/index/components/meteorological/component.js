import rainstormIcon from './assets/images/rainstorm-icon.png'
import cloudyIcon from './assets/images/cloudy-icon.png'
import thundershowerIcon from './assets/images/thundershower-icon.png'
import sunnyIcon from './assets/images/sunny-icon.png'
import cloudy2Icon from './assets/images/cloudy2-icon.png'
import heavyIcon from './assets/images/heavy-icon.png'
import rainIcon from './assets/images/rain-icon.png'
import snowIcon from './assets/images/snow-icon.png'

export default {
  props: {
    // 是否为应急模式
    isEmergencyCheck: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      // 数据列表
       warningList: [
         {
          icon: rainstormIcon,
          name: '暴雨',
          predict: '暴雨',
          predictIcon: rainstormIcon,
          region: '福州市',
        },
        {
          icon: cloudyIcon,
          name: '阴天',
          predict: '阴天',
          predictIcon: cloudyIcon,
          region: '厦门市',
        },
         {
          icon: thundershowerIcon,
          name: '雷阵雨',
          predict: '雷阵雨',
          predictIcon: thundershowerIcon,
          region: '漳州市',
        },
         {
          icon: sunnyIcon,
          name: '晴天',
          predict: '晴天',
          predictIcon: sunnyIcon,
          region: '泉州市',
        },
         {
          icon: cloudy2Icon,
          name: '多云',
          predict: '多云',
          predictIcon: cloudy2Icon,
          region: '三明市',
        },
         {
          icon: heavyIcon,
          name: '大雾',
          predict: '大雾',
          predictIcon: heavyIcon,
          region: '莆田市',
        },
         {
          icon: rainIcon,
          name: '大雨',
          predict: '大雨',
          predictIcon: rainIcon,
          region: '南平市',
        },
         {
          icon: snowIcon,
          name: '大雪',
          predict: '大雪',
          predictIcon: snowIcon,
          region: '龙岩市',
        }
      ],
      emergencyList: [
         {
          icon: rainstormIcon,
          name: '暴雨',
          predict: '暴雨',
          predictIcon: rainstormIcon,
          region: '福州市',
        },
        {
          icon: cloudyIcon,
          name: '阴天',
          predict: '阴天',
          predictIcon: cloudyIcon,
          region: '厦门市',
        },
         {
          icon: thundershowerIcon,
          name: '雷阵雨',
          predict: '雷阵雨',
          predictIcon: thundershowerIcon,
          region: '漳州市',
        },
         {
          icon: sunnyIcon,
          name: '晴天',
          predict: '晴天',
          predictIcon: sunnyIcon,
          region: '泉州市',
        },
      ]
    }
  },

  computed: {
    tableData() {
      return this.isEmergencyCheck ? this.emergencyList : this.warningList
    },
  }
}
