
import RoadAlertMonitorCard from '../road-alert-monitor-card/index.vue'

export default {
  components: {
    RoadAlertMonitorCard
  },

  data() {
    return {
      // 数据列表
      cardList: [
        {
           type: '暴雨预警',
          datetime: '2026-01-06 12:59:23',
          // 信息列表
          data: [
            {
              name: '影响路段：',
              value: 'G4京港澳高速K101-K105'
            },
            {
              name: '预警等级：',
              value: '红色预警'
            },
          ],
          // 原因
          reason: '当前车速:25km/h(对比常态:85km/h)<br/>拥堵长度:5.2km(持续增加中)',
          // 说明
          description: '预计峰值:14:30，排队或达8km<br/>主要成因:短时强降水+事故<br/>关注建议:上游情报板提示减速，东侧分流'
        },
        {
           type: '台风预警',
          datetime: '2026-01-06 12:59:23',
          // 信息列表
          data: [
            {
              name: '影响港口：',
              value: '福州港'
            },
            {
              name: '预警等级：',
              value: '红色预警'
            },
          ],
          // 原因
          reason: '在港作业船只：18艘<br/>疏港高速平均速度:45km/h',
          // 说明
          description: '预计台风峰值:14:30，受影响集卡预估:150辆<br/>主要成因:台风<br/>关注建议:关闭港口停航截流'
        }
      ],
    }
  }
}
