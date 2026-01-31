import { px2 } from '@/utils/viewport'
import displacementIcon from './assets/images/displacement-icon.png'
import stressIcon from './assets/images/stress-icon.png'
import vibrationIcon from './assets/images/vibration-icon.png'
import videoIcon from './assets/images/video-icon.png'

export default {
  props: {
    // 是否展示图表
    showChart: {
      type: Boolean,
      default: () => true
    },

    // 数据点位
    points: {
      type: Array,
      default: () => [
        {
          icon: displacementIcon,
          name: '位移监测点',
          value: '34,322'
        },
          {
          icon: stressIcon,
          name: '应力监测点',
          value: '65,476'
        },
        {
          icon: vibrationIcon,
          name: '振动监测点',
          value: '23,319'
        },
        {
          icon: videoIcon,
          name: '视频监测点',
          value: '92,934'
        }
      ]
    },

    // 图片列表
    pictures: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      icons: [displacementIcon, stressIcon, vibrationIcon, videoIcon],

      option: {
  backgroundColor: 'transparent',

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },

  legend: {
    top: px2(10),
    right: 0,
    itemWidth: px2(10),
    itemHeight: px2(10),
    textStyle: {
      color: '#fff',
      fontSize: px2(12)
    },
    data: ['位移', '应力', '振动', '视频']
  },

  grid: {
    left: px2(40),
    right: px2(20),
    top: px2(50),
    bottom: px2(20)
  },

  xAxis: {
    type: 'value',
    min: 0,
    max: 5000,
    interval: 1000,
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.3)'
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: px2(12)
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.15)'
      }
    }
  },

  yAxis: {
    type: 'category',
    name: '单位：个',
    nameTextStyle: {
      color: '#fff',
      fontSize: px2(14)
    },
    data: ['桥梁', '边坡', '隧道', '路基'],
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.3)'
      }
    },
    axisTick: { show: false },
    axisLabel: {
      color: '#fff',
      fontSize: px2(14)
    }
  },

  series: [
    {
      name: '位移',
      type: 'bar',
      stack: 'total',
      barWidth: px2(16),
      data: [1500, 1200, 1400, 1600],
      itemStyle: {
        color: '#00BAFF'
      }
    },
    {
      name: '应力',
      type: 'bar',
      stack: 'total',
      barWidth: px2(16),
      data: [700, 1300, 900, 1500],
      itemStyle: {
        color: '#FFC600'
      }
    },
    {
      name: '振动',
      type: 'bar',
      stack: 'total',
      barWidth: px2(16),
      data: [800, 700, 500, 600],
      itemStyle: {
        color: '#2ED573'
      }
    },
    {
      name: '视频',
      type: 'bar',
      stack: 'total',
      barWidth: px2(16),
      data: [2000, 1800, 1700, 1300],
      itemStyle: {
        color: '#6AD6EE'
      }
    }
  ]
}

    }
  }
}
