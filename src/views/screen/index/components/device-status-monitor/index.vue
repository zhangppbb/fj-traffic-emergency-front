<template>
  <div class="device-status-monitor-container">

    <!-- 仪表盘图 -->
    <div class="gauge-container flex items-center justify-center">
      <div class="chart-container">
        <Chart :options="option"></Chart>
      </div>
      <div class="legend-container">
        <div class="legend-item flex items-center" v-for="item in legends" :key="item.name">
          <div class="icon" :style="{
            backgroundColor: item.color
          }"></div>
          <div class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- 数据列表 -->
    <div class="device-status-monitor flex justify-center">
      <div class="device-status-monitor-item flex items-center" v-for="(item, index) in devices" :key="item.name">
        <div class="icon-container flex items-center justify-center">
          <img :src="item.icon || icons[index]" alt="" class="icon">
        </div>
        <div class="value-container">
          <div class="name" :style="{
            color: colors[index]
          }">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
