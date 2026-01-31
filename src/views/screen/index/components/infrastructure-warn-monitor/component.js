import totalIcon from './assets/images/total-icon.svg'
import onlineIcon from './assets/images/offline-icon.svg'
import offlineIcon from './assets/images/offline-icon.svg'
import { px2 } from '../../../../../utils/viewport'
import * as echarts from 'echarts'

const VALUE = 12

export default {
  data() {
    return {
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
    right: px2(20),
    textStyle: {
      color: '#fff',
      fontSize: px2(12)
    },
    itemWidth: px2(10),
    itemHeight: px2(10),
    data: ['季度报告', '年度报告', '特殊事件报告']
  },

  grid: {
    left: px2(60),
    right: px2(40),
    top: px2(50),
    bottom: px2(24)
  },

  xAxis: {
    type: 'category',
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

  yAxis: {
    type: 'value',
    name: '单位：份',
    nameTextStyle: {
      color: '#cfd8dc',
      padding: [0, 0, px2(10), 0]
    },
    min: 0,
    max: 5000,
    interval: 1000,
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#cfd8dc',
      fontSize: px2(12)
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.15)'
      }
    }
  },

    series: [
  {
    name: '季度报告',
    type: 'bar',
    barWidth: px2(12),
    data: [4600, 3800, 2700, 3500],
    itemStyle: {
      borderRadius: [px2(6), px2(6), 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#00BAFF'
      },
      {
        offset: 1,
        color: 'rgba(19, 89, 169, 0.2)'
      }
    ])
    }
  },
  {
    name: '年度报告',
    type: 'bar',
    barWidth: px2(12),
    data: [3500, 2300, 2400, 2300],
   itemStyle: {
      borderRadius: [px2(6), px2(6), 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#FFC600'
      },
      {
        offset: 1,
        color: 'rgba(106,57,0,0.2)'
      }
    ])
    }
  },
  {
    name: '特殊事件报告',
    type: 'bar',
    barWidth: px2(12),
    data: [3500, 3800, 3500, 2800],
    itemStyle: {
      borderRadius: [px2(6), px2(6), 0, 0],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  { offset: 0, color: '#6AD6EE' },
  { offset: 1, color: 'rgba(16, 102, 60, 0.2)' }
])

    }
  }
]
}

  }
  }
}
