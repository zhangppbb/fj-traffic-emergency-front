export default {
  props: {
    // 数据
    value: {
      type: String | Number,
      data: () => 0
    },
    // 名称
    name: {
      type: String,
      default: () => ' '
    },
    // 颜色
    color: {
      type: String,
      default: () => ' '
    }
  }
}
