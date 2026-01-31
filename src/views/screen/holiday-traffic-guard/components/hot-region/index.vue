<template>
  <div class="hot-region-container">
    <!-- 图表数据 -->
    <div class="flex justify-around items-center">
      <Pie v-for="item in dataList" :key="item.name"
      v-bind="item"
      ></Pie>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
