
const PIE_COLORS = ['#0376FF', '#03FCFF', '#87FF06', '#E78708', '#FF6203']
 const px2 = (px) => {
  const innerWidth = window.innerWidth
  return (px * innerWidth) / 1920
}

export default {
  props: {
    // 数据
    value: {
      type: String | Number,
      data: () => 0
    },
    // 名称
    name: {
      type: String,
      default: () => ' '
    },
    // 颜色
    color: {
      type: String,
      default: () => ' '
    }
  },

  data() {
    const data = [
      {
        name: '交通事故',
        value: 10
      },
      {
        name: '道路坍塌',
        value: 1
      },
      {
        name: '船舶事故',
        value: 1
      },
      {
        name: '大面积拥堵',
        value: 1
      },
      {
        name: '危险品泄漏',
        value: 1
      }
    ]

    return {
      // 饼图数据
      pieData: [
        {
          name: '高速公路',
          unit: '件',
          value: '8',
          color: '#82D1F6'
        },
        {
          name: '普通公路',
          unit: '件',
          value: '4',
          color: '#5DB7FC'
        },
        {
          name: '水运港口',
          unit: '件',
          value: '2',
          color: '#879DFF'
        }
      ],
      // Option
      option: {
        color: PIE_COLORS,
        legend: {
          data: data.map((o) => String(o.name)),
          width: 'auto',
          // orient: 'vertical',
          // formatter(name) {
          //   // return `${name.length < 4 ? name.padEnd(4, '\u3000') : name}\u3000${data.find((o) => o.name === name)?.value || 0}${data.find((o) => o.name === name)?.unit || 'kW'}`
          // },
          icon: 'roundRect',
          left: '0%',
          bottom: 0,
          itemGap: 15,
          itemWidth: 12, // 图例图标宽度
          itemHeight: 6, // 图例图标高度
          textStyle: {
            width: 74,
            color: '#FFFFFF'
            // overflow: 'truncate' // 超出部分显示省略号
          }
        },
        label: {
          show: true,
          formatter: '{name|{b}}\n\n{d|{d}%}',
          position: 'center',
          rich: {
            name: {
              color: '#fff',
              fontSize: px2(16),
              align: 'center',
              padding: [0, 0, 5, 0]
            },
            value: {
              color: '#000',
              fontSize: 16,
              align: 'center',
              padding: [0, 0, 5, 0]
            },
            d: {
              color: '#fff',
              fontSize: px2(20),
              align: 'center',
              padding: [0, 0, 5, 0]
            }
          }
        },
        grid: {
          bottom: 0,
          top: 0,
          left: 0,
          right: 0
        },
        series: [
          {
            type: 'pie',
            padAngle: 2,
            radius: ['60%', '70%'],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              formatter: '{name|{b}}\n\n{d|{d}%}',
              position: 'center',
              rich: {
                name: {
                  color: '#fff',
                  fontSize: px2(16),
                  align: 'center',
                  padding: [0, 0, 5, 0]
                },
                value: {
                  color: '#000',
                  fontSize: 16,
                  align: 'center',
                  padding: [0, 0, 5, 0]
                },
                d: {
                  color: '#fff',
                  fontSize: px2(20),
                  align: 'center',
                  padding: [0, 0, 5, 0]
                }
              }
            },
            emphasis: {
              label: {
                show: true
                // formatter: '{b}\n{c} ({d}%)', // 悬停时的标签内容：名称 + 数值 + 百分比
                // position: 'outside', // 悬停时标签位置
                // color: '#ff0', // 悬停时标签颜色
                // fontSize: px2(16) // 悬停时标签字体大小
              }
            },
            data: data
          },
          {
            type: 'pie',
            padAngle: 2,
            radius: ['40%', '50%'],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            emphasis: {
              scale: false,
              label: {
                show: false
              }
            },
            data: data.map((item) => ({
              ...item,
              itemStyle: {
                opacity: 0.3 // 设置颜色和透明度:cite[1]:cite[3]
              }
            }))
          }
        ],
      }
    }
  }
}
