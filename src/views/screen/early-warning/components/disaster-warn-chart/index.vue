<template>
  <div class="h-full w-full">
    <Chart :options="options"></Chart>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { px2 } from '../../../../../utils/viewport'

const axisLabel = {
  fontSize: px2(12),
  color: '#CBF0FF'
}
const areaStyle1 = {
  origin: 'start',
  opacity: 0.8,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(20, 219, 255, 0.4)'
    },
    {
      offset: 1,
      color: 'rgba(255,223,0,0)'
    }
  ])
}
const chart = {
  xAxis: ['11:50', '15:00', '19:00', '23:00', '00:10'],
  series: [
    {
      data: [-165, -167, -166, -169, -160],
      areaStyle: areaStyle1
    }
  ]
}
const option = {
  backgroundColor: 'transparent',
  color: ['#14DBFF'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '20%',
    left: 0,
    bottom: 0,
    right: 0,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      color: '#CBF0FF'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#166995'
      }
    },
    axisTick: {
      show: false
    },
    data: chart.xAxis
  },
  yAxis: {
    type: 'value',
    alignTicks: true,
    max: -155,
    axisLabel: {
      color: '#CBF0FF'
    },
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#384C57',
        type: 'dashed'
      }
    }
  },
  series: chart.series.map(item => {
    return {
      type: 'line',
      smooth: true,
      data: item.data,
      areaStyle: item.areaStyle
    }
  })
}

export default {
  data() {
    return {
      options: option
    }
  }
}
</script>


<style lang="scss" scoped>
</style>