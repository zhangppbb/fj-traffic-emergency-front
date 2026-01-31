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
  color: '#FFA7A3'
}
const areaStyle1 = {
  origin: 'start',
  opacity: 0.8,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(231, 44, 73, 0.5)'
    },
    {
      offset: 1,
      color: 'rgba(77, 12, 12, 0)'
    }
  ])
}
const chart = {
  xAxis: ['00:00', '4:00', '8:00', '12:00', '16:00', '20:00', '24:00'],
  series: [
    {
      data: [-165,-167,-166,-169,-160,-163,-164],
      areaStyle: areaStyle1
    }
  ]
}
const option = {
  backgroundColor: 'transparent',
  color: ['#FFA7A3'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid:{
    top:'20%',
    left:0,
    bottom:0,
    right:0,
    containLabel:true
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      color: '#CBF0FF'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#728095'
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
    axisLabel: {
      color: '#CBF0FF'
    },
    max:-155,
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