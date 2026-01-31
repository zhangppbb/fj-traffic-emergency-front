// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 设计稿宽度（如 iPhone 375）
      viewportHeight: 1080, // 可选，设计稿高度
      unitPrecision: 5, // 转换后保留的小数位
      viewportUnit: 'vw', // 转换成的单位
      selectorBlackList: ['ignore'], // 忽略转换的类名
      minPixelValue: 1, // 小于或等于 1px 不转换
      mediaQuery: false, // 是否允许媒体查询中转换
    }
  }
}
