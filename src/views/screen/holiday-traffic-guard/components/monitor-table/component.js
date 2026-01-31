
/**
 * 计算 5 个小人的填充状态
 * @param {number} value 传入的数值（整数 / 小数）
 * @returns {Array} 每个小人的状态
 */
function calculatePeopleFill(value) {
 const TOTAL = 5
  const RESULT = []

  // 完整填充数量
  const FULL_COUNT = Math.floor(value)
  // 是否有小数
  const HAS_DECIMAL = value % 1 !== 0
  // 是否小于等于 3
  const IS_LOW_LEVEL = value <= 3

  for (let i = 0; i < TOTAL; i++) {
    if (i < FULL_COUNT) {
      RESULT.push({
        status: 'full',
        // ≤3 使用特殊颜色
        color: IS_LOW_LEVEL ? '#DC8D17' : '#DC1717' // 橙色示例
      })
    } else if (i === FULL_COUNT && HAS_DECIMAL) {
      RESULT.push({
        status: 'partial',
        // 小数部分也遵循 ≤3 规则
        color: IS_LOW_LEVEL ? '#FFFFFF' : '#DF5C5C'
      })
    } else {
      RESULT.push({
        status: 'empty',
        color: '#fff'
      })
    }
  }

  return RESULT
}


export default {

  data() {
    return {
      // 表格数据
      tableData: [
        {
          name: '湄洲岛',
          city: '莆田市',
          land: '国道G228',
          index: 7.811,
          value: 4
        },
        {
          name: '鼓浪屿',
          city: '厦门市',
          land: '国道G228',
          index: 7.210,
          value: 3.5
        },
        {
          name: '半月湾',
          city: '泉州市',
          land: '国道G228',
          index: 6.522,
          value: 3.5
        },
        {
          name: '火山岛',
          city: '漳州市',
          land: '国道G228',
          index: 5.786,
          value: 3
        },
         {
          name: '平海湾',
          city: '莆田市',
          land: '国道G228',
          index: 4.708,
          value: 3
        },
      ]
    }
  },

  computed: {
    tableList() {
      const data = []
      this.tableData.forEach(o => {
        data.push({
          ...o,
          ratio: calculatePeopleFill(o.value)
        })
      })

      return data
    }
  },

  // created() {
  //   // 初始化
  //   this.dataList = this.DATA_LISTS[0]

  //   // 启动定时器
  //   this.startTimer()
  // },

  //  beforeDestroy() {
  //   // 清理定时器
  //   this.clearTimer()
  // },

  methods: {
    // /**
    //  * 启动定时切换
    //  */
    // startTimer() {
    //   this.timer = setInterval(() => {
    //     this.currentIndex =
    //       (this.currentIndex + 1) % this.DATA_LISTS.length

    //     // 切换数据（用新引用，确保视图更新）
    //     this.dataList = [...this.DATA_LISTS[this.currentIndex]]
    //   }, 1000)
    // },

    // /**
    //  * 清除定时器
    //  */
    // clearTimer() {
    //   if (this.timer) {
    //     clearInterval(this.timer)
    //     this.timer = null
    //   }
    // }
  }
}
