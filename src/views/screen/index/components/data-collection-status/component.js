import { px2 } from '@/utils/viewport'

const VALUE = 1212
var angle = [220, -40],
  splitNum = 10,
  alertVal = 70,
  targetVal = 69,
  curVal = 67.8;
export default {
  data() {
    return {
         // 图例数据
      legends: [
        {
          color: '#FF0505',
          name: '65%以下'
        },
         {
          color: '#2391FF',
          name: '75%以下'
        },
         {
          color: '#00E66A',
          name: '85%以下'
        },
         {
          color: '#00E66A',
          name: '90-100%'
        }
      ],

       option:  {
   backgroundColor: 'transparent',
  series: [
    {
      type: 'gauge',
      startAngle: 210,
      endAngle: -30,
      min: 0,
      max: 100,
      splitNumber: 5,

      // 进度条
      progress: {
        show: false,
      },

      // 轴线（彩色渐变）
      axisLine: {
        lineStyle: {
          width: px2(12),
          color: [
            [0.3, '#ff4d4f'], // 红
            [0.6, '#faad14'], // 黄
            [1, '#52c41a']    // 绿
          ]
        }
      },

      // 刻度线
      axisTick: {
        show: false
      },

      // 分隔线
      splitLine: {
        show: false
      },

      // 刻度文字
      axisLabel: {
        show: false
      },

      // 指针
      pointer: {
        show: true,
        length: '60%',
        width: 4,
        itemStyle: {
          color: '#ffffff'
        }
      },

      // 中心圆点
      anchor: {
        show: true,
        size: 8,
        itemStyle: {
          color: '#ffffff'
        }
      },

      // 数值
      detail: {
        show: true,
        offsetCenter: [0, '40%'],
        formatter: () => '优',
        color: '#52c41a',
        fontSize: px2(22),
        fontWeight: 'bold'
      },

      data: [
        {
          value: 85
        }
      ]
    }
  ]
},

      // 数据列表
      tableData: [
        {
          name: '青洲大桥',
          type: '桥梁',
          level: 'Ⅲ级预警（黄色）',
          info: '发现新增稳定裂缝'
        },
         {
          name: '牛岩山隧道',
          type: '隧道',
          level: 'Ⅲ级预警（黄色）',
          info: '衬砌有剥落、渗漏'
        },
         {
          name: 'G15沈海高速 K2035+800~K2036+200 左侧路堑高边坡',
          type: '边坡',
          level: 'Ⅲ级预警（黄色）',
          info: '坡面出现新裂缝或原有裂缝发展'
        },
         {
          name: '福银高速三明连接线畔溪枢纽匝道路基',
          type: '路基',
          level: 'Ⅱ级预警（橙色',
          info: '挡土墙严重变形、开裂'
        },
         {
          name: '下白石特大桥',
          type: '桥梁',
          level: 'Ⅳ级预警（蓝色）',
          info: '超重车辆通行'
        },
         {
          name: '泉州湾跨海大桥',
          type: '桥梁',
          level: 'Ⅲ级预警（黄色）',
          info: '发现新增稳定裂缝'
        },
         {
          name: '大坪山隧道',
          type: '隧道',
          level: 'Ⅲ级预警（黄色）',
          info: '照明与消防设施性能退化预警'
        },
         {
          name: 'S207省道南平段一处高边坡',
          type: '边坡',
          level: 'Ⅱ级预警（橙色）',
          info: '结构出现明确且持续发展的病害'
        },
         {
          name: 'G76厦蓉高速漳州段一段填方路堤',
          type: '边坡',
          level: 'Ⅱ级预警（橙色）',
          info: '结构出现明确且持续发展的病害'
        },
         {
          name: '乌龙江特大桥',
          type: '桥梁',
          level: 'Ⅲ级预警（黄色）',
          info: '支座位移接近限值预警'
        }
      ]
    }
  }
}
