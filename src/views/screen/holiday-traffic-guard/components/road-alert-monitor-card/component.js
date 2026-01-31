export default {
  props: {
    // 数据类型
    type: {
      type: String,
      default: () => '严重拥堵'
    },
    datetime: {
      type: String,
      default: () => ' 2026-01-06 12:59:23'
    },
    // 信息列表
    data: {
      type: Array,
      default: () => [
        {
          name: '路段名称：',
          value: 'K101-K105泉州南安水头路段'
        },
         {
          name: '所属高速：',
          value: 'G25沈海高速'
        },
         {
          name: '拥堵长度：',
          value: '6公里'
        },
        {
          name: '预计恢复时间：',
          value: '12时50分'
        }
      ]
    },
    // 原因
    reason: {
      type: String,
      default: () => '车流量大'
    },
    // 说明
    description: {
      type: String,
      default: () => '1月6日11时22分，因短时间车流密度极速提升，G25长深高速公路K41+400一K0+500深圳方向车流密度大，议去往深圳方向的车辆走行其他路线绕行，预计1月6日晚恢复正常。'
    }
  }
}
