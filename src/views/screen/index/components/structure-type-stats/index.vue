<template>
  <div class="structure-type-stats-container">
    <!-- 饼图 -->
    <div class="chart-container">
      <Chart :options="option" width="100%" height="100%"></Chart>
    </div>

    <div class="card-container flex flex-wrap justify-center">
      <div class="card-item flex items-center justify-center" v-for="(item, index) in data" :key="item.name">
        <img :src="icon" alt="" class="icon">

        <div class="info-container">
          <div class="name ff-ys">{{ item.name }}</div>

          <div class="value-container flex items-baseline">
            <div class="value">{{ item.value }}</div>
            <div class="unit">{{ item.unit }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="chart-container">
      <Chart :options="pieOptions[0]"></Chart>
    </div>
     <div class="chart-container">
      <Chart :options="pieOptions[1]"></Chart>
    </div>
     <div class="chart-container">
      <Chart :options="pieOptions[2]"></Chart>
    </div>
     <div class="chart-container">
      <Chart :options="pieOptions[3]"></Chart>
    </div> -->
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
