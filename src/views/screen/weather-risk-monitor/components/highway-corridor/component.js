import HighwayCorridorCard from '../highway-corridor-card/index.vue'

export default {
  components: {
    HighwayCorridorCard
  },

  data() {
    return {
      tableData: [
        {
          // 地区名称
          name: '21世纪海上丝绸之路核心区',
          // 表格数据
          tableData: [
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
         {
          // 地区名称
          name: '国高沈海线（G15）',
          // 表格数据
          tableData: [
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
      ]
    }
  }
}
