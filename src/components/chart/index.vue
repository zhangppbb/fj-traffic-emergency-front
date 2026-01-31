<template>
  <!-- echarts 容器 -->
  <div
    ref="chartRef"
    :class="className"
    :style="{ width, height }"
    v-show="visible"
  />
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'BaseEChart',

  /**
   * Props 说明
   */
  props: {
    // ECharts 的配置项（option）
    options: { type: Object, required: true },

    // 图表宽度，默认 100%
    width: { type: String, default: '100%' },

    // 图表高度，默认 100%
    height: { type: String, default: '100%' },

    // 自定义容器 class，可配合 Tailwind 使用
    className: { type: String, default: '' },

    // 主题名称（可为自定义注册主题）
    theme: { type: String, default: '' },

    // 是否可见（支持懒加载）
    visible: { type: Boolean, default: true }
  },

  data() {
    return {
      // echarts 实例
      chartInstance: null,

      // 初始化图表的延时器
      initTimer: null,

      // 更新配置项的防抖定时器
      updateTimer: null
    }
  },

  /**
   * 监听配置项和可见性变化
   */
  watch: {
    // 监听 options 变化，更新图表（防抖处理）
    options: {
      deep: true,
      handler() {
        clearTimeout(this.updateTimer)
        this.updateTimer = setTimeout(() => {
          this.setOptions()
        }, 300)
      }
    },

    // 监听 visible 控制懒加载
    visible(val) {
      if (val) this.lazyInitChart()
    }
  },

  mounted() {
    // 首次挂载时初始化图表（如 visible 为 true）
    if (this.visible) {
      this.lazyInitChart()
    }
    // 监听窗口 resize
    window.addEventListener('resize', this.handleResize)
  },

  methods: {
    /**
     * 初始化图表实例（懒加载）
     */
    lazyInitChart() {
      if (this.chartInstance) return
      this.$nextTick(() => {
        const dom = this.$refs.chartRef
        if (!dom) return
        this.chartInstance = echarts.init(dom, this.theme, {
          renderer: 'canvas' // 使用 canvas 渲染以提升性能
        })
        this.setOptions()
      })
    },

    /**
     * 设置图表配置项
     */
    setOptions() {
      if (!this.chartInstance || !this.options) return
      this.chartInstance.setOption(this.options, {
        notMerge: false,   // 合并配置项
        lazyUpdate: true   // 延迟更新
      })
    },

    /**
     * 刷新图表（重新设置配置项）
     * 可供外部通过 $refs 访问
     */
    refreshChart() {
      if (this.chartInstance) {
        this.chartInstance.clear()
        this.setOptions()
      }
    },

    /**
     * 图表 resize，响应式布局支持
     * 可供外部通过 $refs 调用
     */
    handleResize() {
      if (this.chartInstance) {
        this.chartInstance.resize()
      }
    },

    /**
     * 销毁图表实例
     */
    destroyChart() {
      if (this.chartInstance) {
        this.chartInstance.dispose()
        this.chartInstance = null
      }
    }
  },

  beforeDestroy() {
    // 组件销毁前移除监听并释放资源
    window.removeEventListener('resize', this.handleResize)
    this.destroyChart()
  }
}
</script>
