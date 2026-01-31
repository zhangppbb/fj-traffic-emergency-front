import { Pie } from '..'
import roadIcon from './assets/images/road-icon.png'
import directionIcon from './assets/images/direction-icon.png'
import sideslipIcon from './assets/images/sideslip-icon.png'

export default {
  components: {
    Pie
  },

  data() {
    return {
      // 数据列表
      dataList: [
        {
          type: '交通事故',
          typeStyle: {
            color: 'rgba(220,23,23,1)',
          },
          datetime: '2026-01-06 17:02:08',
          name: '沈海高速泉州南安水头路段',
          icon: sideslipIcon,
          tag: '危运',
          code: '闽J156Y7侧翻',
          reason: '拥堵 5 公里'
        },
        {
          type: '交通事故',
          typeStyle: {
            color: 'rgba(220,23,23,1)',
          },
          datetime: '2026-01-06 17:02:08',
          name: '沈海高速泉州南安水头路段',
          icon: sideslipIcon,
          code: '道路结冰',
          reason: '拥堵 5 公里'
        },
         {
          type: '道路封闭',
          typeStyle: {
            color: 'rgba(255,228,125,1)',
          },
          datetime: '2026-01-06 17:02:08',
          name: '国道 353 线外屯稠岭路段',
          icon: roadIcon,
          type: '山体滑坡',
          reason: '车辆绕行'
        },
        {
          type: '航道堵塞',
          typeStyle: {
            color: 'rgba(126,214,255,1)',
          },
          datetime: '2026-01-06 17:02:08',
          name: '福州港闽江通海航道外沙航段',
          icon: directionIcon,
          code: '船舶碰撞',
          reason: '堵塞 8 公里'
        },
        {
          type: '交通事故',
          typeStyle: {
            color: 'rgba(220,23,23,1)',
          },
          datetime: '2026-01-06 17:02:08',
          name: '沈海高速泉州南安水头路段',
          icon: sideslipIcon,
          tag: '危运',
          code: '闽J156Y7侧翻',
          reason: '拥堵 5 公里'
        },
         {
          type: '交通事故',
          typeStyle: {
            color: 'rgba(220,23,23,1)',
          },
          datetime: '2026-01-06 17:02:08',
          name: '沈海高速泉州南安水头路段',
          icon: sideslipIcon,
          tag: '危运',
          code: '闽J156Y7侧翻',
          reason: '拥堵 5 公里'
        },
      ],


      // 表格数据
      tableData: [
        {
          status: '旅客',
          color: '',
          type: '疲劳驾驶',
          code: '闽J12C34',
          datetime: '2026.01.06  12:59:34'
        },
      ]
    }
  }
}
