<template>
  <div class="highway-corridor-carousel">
      <el-carousel :interval="5000" style="height: 100%;" height="100%" arrow="hover" indicator-position="none">
      <el-carousel-item v-for="(item, index) in tableData" :key="index">
          <HighwayCorridorCard v-bind="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
