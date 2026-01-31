<template>
  <div class="event-distribution flex items-center">
    <div class="info-container">
      <div class="info-item flex items-center" v-for="item in pieData" :key="item.name">
        <div class="name">{{ item.name }}</div>
        <div class="value-container flex items-center ff-ys" :style="{
          color: item.color
        }">
          <div class="value">{{ item.value }}</div>
          <div class="unit">{{ item.unit }}</div>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <Chart :options="option" height="100%" width="100%" ></Chart>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
