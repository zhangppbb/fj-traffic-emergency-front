import { px2 } from '@/utils/viewport'

const getPieOption = (name, unit, value,  data) => {
  const option = {
    tooltip: {
      show: false
    },
    series: [
      {
        name: name,
        type: 'pie',
        radius: ['60%', '100%'], // 原 55% / 75% 按像素换算
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'inner',
          color: '#fff',
          fontSize: px2(12),
          formatter: '{val|{d}%}',
          rich: {
            val: {
              color: '#fff',
              fontSize: px2(12),
            }
          }
        },
        labelLine: {
          length: px2(10),
          length2: px2(10),
          lineStyle: {
            color: '#fff',
            width: px2(1)
          }
        },
        data
      },
      {
        name: name,
        type: 'pie',
        radius: ['60%', '70%'], // 原 55% / 75% 按像素换算
        center: ['50%', '50%'],
        avoidLabelOverlap: false,

        label: {
        show: false
        },

        labelLine: {
          show: false,
        },
        data
      }
    ],
    graphic: [
      {
        type: 'group',
        left: 'center',
        top: 'center',
        children: [
          {
            type: 'text',
            top: px2(-20),
            style: {
              text: name,
              fill: '#ffffff',
              fontSize: px2(14),
              textAlign: 'center'
            }
          },
          {
            type: 'text',
            top: px2(0),
            style: {
              text: unit,
              fill: '#ffffff',
              fontSize: px2(12),
              textAlign: 'center'
            }
          },
          {
            type: 'text',
            top: px2(16),
            style: {
              text: value,
              fill: '#ffffff',
              fontSize: px2(16),
              fontWeight: 'bold',
              textAlign: 'center'
            }
          }
        ]
      }
    ]
  }

  return option
}

export default {
  props: {
    // 图表数据
    data: {
      type: Array,
      default: () => []
    },
  },

  computed: {
    pieOptions() {
      const source = this.data

      return source.map(item =>
        getPieOption(
          item.name,
          item.unit,
          item.value,
          item.data
        )
      )
    }
  },

  methods: {
  }
}
