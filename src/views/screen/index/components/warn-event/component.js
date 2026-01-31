import { Pie } from '..'
import roadIcon from './assets/images/road-icon.png'
import trafficIcon from './assets/images/traffic-icon.png'

export default {
  components: {
    Pie
  },

  data() {
    return {
      roadIcon,
      trafficIcon,
      // 数据列表
      dataList: [
        {
          name: '高速（条）',
          color: 'rgba(255,201,0,1)',
          value: 332
        },
         {
          name: '普通公路（条）',
          color: 'rgba(101,132,226,1)',
          value: 450
        },
         {
          name: '水运港口（个）',
          color: 'rgba(186,101,226,1)',
          value: 56
        }
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
