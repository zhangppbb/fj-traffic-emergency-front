import totalIcon from './assets/images/total-icon.png'
import onlineIcon from './assets/images/online-icon.png'
import offlineIcon from './assets/images/offline-icon.png'
import { px2 } from '@/utils/viewport'

const VALUE = 12

const getOption = (value) => {
  const option = {
        backgroundColor: 'transparent',

        tooltip: {
          formatter: '{a}<br/>{c}%'
        },

        title: [
          {
            text: `{title|设备在线率}\n{value|${value}%}`,
            top: 'center',
            left: "center",
            textStyle: {
              rich: {
                title: {
                  fontSize: px2(14),
                  padding: [px2(10), 0],
                  color: '#fff',
                },
                value: {
                  fontSize: px2(18),
                  fontWeight: 'bold',
                  color: '#ffffff',
                }
              },
            },
            triggerEvent: true,
          },
        ],

        series: [
          // 主仪表
          {
            name: '设备在线率',
            type: 'gauge',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            splitNumber: 50,

            radius: '85%',

            axisLine: {
              lineStyle: {
                width: px2(10),
                color: [
                  [0.45, '#ff4d2d'], // 红色 45%
                  [0.75, '#4d88ff'], // 蓝色 30%
                  [1,    '#3cd17d']  // 绿色 25%
                ]
              }
            },

            axisTick: {
              show: false,
            },

            splitLine: {
              show: false
            },

            axisLabel: {
              show: false
            },

            pointer: {
              icon: 'path://M511.997952 268.025732 146.975708 755.974268l730.048584 0L511.997952 268.025732',
              length: '10%',
              width: 10,
              offsetCenter: [0, '110%'],
              itemStyle: {
                // color: '#5BA6F9'
                color: 'yellow'
              }
            },

            detail: {
              show: false
              // valueAnimation: true,
              // offsetCenter: [0, px2(20)],
              // formatter: (val) => `{title|设备在线率}\n{value|${val}%}`,
              // rich: {
              //   title: {
              //     fontSize: px2(14),
              //     color: '#cfd8dc',
              //   },
              //   value: {
              //     fontSize: px2(18),
              //     fontWeight: 'bold',
              //     color: '#ffffff',
              //   }
              // }
            },

            data: [
              {
                value: 0
              }
            ]
          },

          // 内层刻度环（装饰）
          {
            type: 'gauge',
            startAngle: 225,
            endAngle: -45,
            radius: '90%',
            min: 0,
            max: 100,
            splitNumber: 50,

            axisLine: {
              show: false
            },
            axisTick: {
              show: true,
              length: 8,
              lineStyle: {
                color: 'rgba(255,255,255,0.25)'
              }
            },
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            detail: { show: false },
            data: [{ value: 100 }]
          }
        ]
  }
return option
}

export default {
  props: {
    // 设备列表
    devices: {
      type: Array,
      default: () => []
    },

    // 数据量
    value: {
      type: String,
      default: () => ''
    },
  },
  data() {
    return {
      icons: [totalIcon, onlineIcon, offlineIcon],
      colors: ['#fff', '#24E1A9', '#C7BB33'],
      // 设备列表
      // devices: [
      //   {
      //     name: '设备总数',
      //     value: '72123',
      //     icon: totalIcon
      //   },
      //    {
      //     name: '设备在线数',
      //     value: '32531',
      //     icon: onlineIcon
      //   },
      //    {
      //     name: '设备离线数',
      //     value: '13325',
      //     icon: offlineIcon
      //   }
      // ],

      // 图例数据
      legends: [
        {
          color: '#FF0505',
          name: '在线率90%以下'
        },
         {
          color: '#2391FF',
          name: '在线率90-95%'
        },
         {
          color: '#00E66A',
          name: '在线率95-100%'
        }
      ],

    }


  },

  computed: {
    option() {
      return getOption(this.value)
    }
  }
}
