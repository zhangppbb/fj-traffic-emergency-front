<template>
  <div class="prediction-container">
    <div class="header-container flex items-center justify-between">
      <div class="title">全省高速出入口流量（万辆）</div>
      <div class="tab-container flex items-center">
        <div class="text active">今日</div>
        <div class="text">明日</div>
        <div class="text">明日</div>
      </div>
    </div>
    <div class="chart-container">
      <Chart :options="option" width="100%" height="100%"></Chart>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>

