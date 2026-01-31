import { Pie } from '..'

export default {
  components: {
    Pie
  },

  data() {
    return {
      currentIndex: 0, // 当前数据索引

      // 两套固定数据
      DATA_LISTS: [
        [
          { name: '高速（条）', color: 'rgba(255,201,0,1)', value: 332 },
          { name: '普通公路（条）', color: 'rgba(101,132,226,1)', value: 450 },
          { name: '水运港口（个）', color: 'rgba(186,101,226,1)', value: 56 }
        ],
        [
          { name: '高速（条）', color: 'rgba(255,201,0,1)', value: 410 },
          { name: '普通公路（条）', color: 'rgba(101,132,226,1)', value: 380 },
          { name: '水运港口（个）', color: 'rgba(186,101,226,1)', value: 72 }
        ]
      ],

      // 当前展示的数据
      dataList: [],

      // 表格数据
      tableData: [
        {
          status: '旅客',
          statusStyle: {

            background:  `linear-gradient(90deg, rgba(130,209,246,1) 0%,rgba(41,182,244,1) 50%,rgba(0,137,205,1) 99%)`
          },
          type: '疲劳驾驶',
          code: '闽J12C34',
          datetime: '2026.01.06  12:59:34'
        },
         {
          status: '班客',
          statusStyle: {
            background: `linear-gradient(90deg, rgba(173,202,170,1) 0%,rgba(132,175,127,1) 50%,rgba(91,148,84,1) 100%)`,
          },
          type: '偏离轨道',
          code: '闽J12C34',
          datetime: '2026.01.06  12:59:34'
        },
        {
          status: '危运',
          statusStyle: {
           background: `linear-gradient(90deg, rgba(255,185,185,1) 19%,rgba(254,158,159,1) 44%,rgba(255,143,142,1) 64%,rgba(255,115,115,1) 84%)`,
          },
          type: '车速异常',
          code: '闽J12C34',
          datetime: '2026.01.06  12:59:34'
        },
      ]
    }
  },

  created() {
    // 初始化
    this.dataList = this.DATA_LISTS[0]

    // 启动定时器
    this.startTimer()
  },

   beforeDestroy() {
    // 清理定时器
    this.clearTimer()
  },

  methods: {
    /**
     * 启动定时切换
     */
    startTimer() {
      this.timer = setInterval(() => {
        this.currentIndex =
          (this.currentIndex + 1) % this.DATA_LISTS.length

        // 切换数据（用新引用，确保视图更新）
        this.dataList = [...this.DATA_LISTS[this.currentIndex]]
      }, 1000)
    },

    /**
     * 清除定时器
     */
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
}
