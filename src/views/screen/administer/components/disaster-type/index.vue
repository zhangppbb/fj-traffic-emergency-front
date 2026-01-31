<template>
  <div class="disaster-type-container relative text-white">
    <div class="chart-container">
      <!-- 图表容器 -->
      <Chart :options="option" ref="chartRef" class="w-full h-full" height="100%"></Chart>
    </div>

    <!-- 中心文字 -->
    <div class="chart-tip-container flex flex-col justify-center items-center absolute">
      <div class="title text-lg-vw">灾害点总数</div>
      <div class="value mt-xs-vw ff-ys">{{ total }}</div>
    </div>
  </div>
</template>

<script>
import { px2 } from '@/utils/viewport'

export default {
  props: {
    // 传入数据
    data: {
      type: Array,
      required: true
    },
    // 总数
    total: {
      type: Number,
      default: 0
    }
  },


  /**
   * 监听配置项和可见性变化
   */
  watch: {
    // 监听 options 变化，更新图表（防抖处理）
    data: {
      deep: true,
      handler() {
        this.$nextTick(() => {
          this.$refs?.chartRef.refreshChart()
        })
      }
    },
  },

  
  data() {
    return {
      chart: null,
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{b} {c} ({d}%)'
        },
        legend: {
          show: true,
          orient: 'vertical',
          right: 0,
          top: 'center',
          textStyle: {
            color: '#fff'
          },
          formatter: name => {
            const item = this.data.find(i => i.name === name)
            return `${name}  ${item.value}  ${item.percent}%`
          }
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        series: [
          {
            itemStyle: {
              borderColor: '#2B3D52',  // 设置边框颜色
              borderWidth: px2(4)      // 设置边框宽度
            },
            name: '灾害类型',
            type: 'pie',
            left: px2(10),
            center: [px2(109), px2(135)],
            radius: [px2(109), px2(85)],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: this.data.map(item => ({
              name: item.name,
              value: item.value,
              itemStyle: { color: item.color }
            }))
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.disaster-type-container  {
  height: px2vw(272);
  border: 1px solid red;
  position: relative;
  & > .chart-container {
    height: px2vw(272);
  }
  .chart-tip-container {
    width: px2vw(142);
    height: px2vw(142);
    border-radius: 50%;
    background: rgba(0,114,255,0.3);
    top: 50%;
    left: px2vw(49);
    transform: translateY(-50%);

    .title {
      font-size: px2vw(20);
      color: #FFFFFF;
      -webkit-background-clip: text;
      // text-shadow: 0px 3px 0px rgba(0,9,17,0.64);
      -webkit-text-fill-color: transparent; /* 设置文字颜色为透明，显示背景 */
      background-image: linear-gradient(0deg, #00EAFF 0%, #F0FDFF 53.564453125%, #FFFFFF 100%);
    }

    .value {
      font-size: px2vw(34);
      color: #FFFFFF;
      text-shadow: 0px 3px 0px rgba(0,9,17,0.64);
    }
  }
}
</style>
