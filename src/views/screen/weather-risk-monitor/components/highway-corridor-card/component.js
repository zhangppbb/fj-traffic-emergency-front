import { px2 } from '@/utils/viewport';

const TIME_LIST = [
  '00:00','01:00','02:00','03:00','04:00','05:00','06:00',
  '07:00','08:00','09:00','10:00','11:00','12:00',
  '13:00','14:00','15:00','16:00','17:00','18:00','19:00',
  '20:00','21:00','22:00','23:00'
]

const SECTION_LIST = ['断面A','断面B','断面C','断面D']

// 热力值固定，每小时 × 断面
// 早高峰 7-9 点 8,9,8 / 晚高峰 17-19 点 9,10,9 / 平峰 3,4,3
const HEAT_DATA = []

// 基础值模板（按你给的规则）
const BASE_MAP = {
  morning: [8, 9, 8],   // 7-9
  evening: [9, 10, 9],  // 17-19
  normal: [3, 4, 3]
}

const SECTION_COUNT = SECTION_LIST.length

for (let t = 0; t < TIME_LIST.length; t++) {
  const hour = Math.floor(t / 4)

  // 判断时段
  let baseArr
  if (hour >= 7 && hour <= 9) {
    baseArr = BASE_MAP.morning
  } else if (hour >= 17 && hour <= 19) {
    baseArr = BASE_MAP.evening
  } else {
    baseArr = BASE_MAP.normal
  }

  for (let s = 0; s < SECTION_COUNT; s++) {
    const base = baseArr[s % baseArr.length]

    // 小幅随机扰动：-1 / 0 / +1
    const randomOffset = Math.floor(Math.random() * 3) - 1

    // 强制限制在 0 ~ 10
    const value = Math.min(10, Math.max(0, base + randomOffset))

    HEAT_DATA.push([t, s, value])
  }
}

export default {
  props: {
    // 地区名称
    name: {
      type: String,
      default: () => '21世纪海上丝绸之路核心区'
    },
    // 表格数据
    tableData: {
      type: Array,
      default: () => [
        {
          index: '全程旅行时间',
          value: '2小时',
          current: '2小时',
          jd: '0小时',
          xd: '0%',
          levelName: '🟡维持不变',
        },
          {
          index: '平均车速下降率',
          value: '0%',
          current: '35%',
          jd: '+35%',
          xd: '35%',
          levelName: '🔴严重恶化',
        },
          {
          index: '拥堵点数量',
          value: '120个',
          current: '200个',
          jd: '+80个',
          xd: '67%',
          levelName: '🔴显著恶化',
        }
      ]
    },
  },

  data() {
    return {
      // 折线图
      lineOption: {
  backgroundColor: 'transparent',

  grid: {
    left: 40,
    right: 10,
    top: 60,
    bottom: 18
  },

  legend: {
    top: 0,
    right: 40,
    textStyle: {
      color: '#AEE7FF',
      fontSize: 12
    },
    itemWidth: 14,
    itemHeight: 3,
    data: ['历史车速', '当前车速']
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['断面1', '断面2', '断面3', '断面4', '断面5', '断面6', '断面7', '断面8'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      color: '#cfe8ff'
    }
  },

  yAxis: {
 type: 'value',
            axisTick: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
            },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          color: '#01CCFF'
        },
        splitLine: {
          show: false
        }
  },

  series: [
    {
      name: '历史车速',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      data: [70, 85, 55, 75, 80, 110, 60, 40],
      lineStyle: {
        width: 3,
        color: '#6EC6FF'
      },
      itemStyle: {
        color: '#FFFFFF',
        borderColor: '#6EC6FF',
        borderWidth: 2
      },
      areaStyle: {
        color: 'rgba(110,198,255,0.35)'
      }
    },

    {
      name: '当前车速',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      data: [90, 105, 80, 100, 85, 70, 75, 90],
      lineStyle: {
        width: 3,
        color: '#7CFFB2'
      },
      itemStyle: {
        color: '#FFFFFF',
        borderColor: '#7CFFB2',
        borderWidth: 2
      },
      areaStyle: {
        color: 'rgba(124,255,178,0.25)'
      },

      // 瓶颈点标注
      markLine: {
        symbol: 'none',
        data: [
          {
            xAxis: '断面6',
            lineStyle: {
              color: '#FF4D4F',
              width: 2
            },
            label: {
              show: true,
              formatter: '瓶颈点',
              backgroundColor: '#FF4D4F',
              color: '#fff',
              padding: [6, 10],
              borderRadius: 4,
              position: 'end'
            }
          }
        ]
      }
    }
  ]
},

      // 热力图
      heatmapOption: {
         backgroundColor: 'transparent',

  grid: {
    left: px2(40),
    right: px2(10),
    top: px2(30),
    bottom: px2(40)
  },

  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return `
        时间：${TIME_LIST[params.data[0]]}<br/>
        断面：${SECTION_LIST[params.data[1]]}<br/>
        拥堵等级：${params.data[2]}
      `
    }
  },

  xAxis: {
    type: 'category',
    data: TIME_LIST,
    axisLine: {
      lineStyle: { color: '#3C6C8F' }
    },
    axisLabel: {
      color: '#9BD7FF',
      fontSize: 10
    },
    splitArea: { show: false }
  },

  yAxis: {
    type: 'category',
    data: SECTION_LIST,
    axisLine: {
      lineStyle: { color: '#3C6C8F' }
    },
    axisLabel: {
      color: '#9BD7FF',
      fontSize: 10
    }
  },

  visualMap: {
    min: 0,
    max: 8,
    orient: 'horizontal',
    top: 0,
    right: 0,
    itemWidth: px2(10),
    itemHeight: px2(80),
    text: ['拥堵', '畅通'],
    textStyle: {
      color: '#9BD7FF',
      fontSize: px2(12)
    },
    inRange: {
      color: [
        '#38E54D', // 绿
        '#FFE15D', // 黄
        '#FF9F45', // 橙
        '#FF4D4F'  // 红
      ]
    }
  },

  series: [
    {
      name: '时空演变',
      type: 'heatmap',
      data: HEAT_DATA,
      emphasis: {
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        }
      },
      progressive: 1000,
      animation: true,
      animationDuration: 1500
    }
  ]
      },
    }
  }
}
