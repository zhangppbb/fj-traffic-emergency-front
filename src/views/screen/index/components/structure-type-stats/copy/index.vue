<template>
  <div class="structure-type-stats-container flex">
    <div class="chart-container">
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
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
