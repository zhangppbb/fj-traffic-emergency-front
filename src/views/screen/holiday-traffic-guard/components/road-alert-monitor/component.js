import { RoadAlertMonitorCard } from '..'

export default {
  components: {
    RoadAlertMonitorCard
  },

  props: {
    // 当前数
    current: {
      type: String,
      default: () => 30
    },
    // 一小时之后
    next: {
      type: String,
      default: () => '+2'
    },
    // 颜色
    color: {
      type: String,
      default:() =>'#BF0000'
    },
    level: {
      type: String,
      default: () => '红色'
    },
    levelName: {
      type: String,
      default: () => '最高预警等级'
    },
    infos: {
      type: Array,
      default: () => []
    },
  }
}
