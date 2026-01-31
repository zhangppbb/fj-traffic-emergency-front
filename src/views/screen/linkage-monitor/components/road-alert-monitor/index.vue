<template>
  <div class="road-alert-monitor-container flex items-center">
    <!-- 左侧元素 -->
    <div class="left-container flex flex-col">
      <div class="pie-container flex flex-col justify-center items-center">
         <div class="value">
          {{ current }}
        </div>
        <div class="text">当前数</div>
      </div>


      <div class="pie-container flex flex-col justify-center items-center">
         <div class="value">
          {{ next }}
        </div>
        <div class="text">1h后</div>
      </div>

      <div class="level-container flex justify-center items-center flex-col">
        <div class="text" :style="{
          color: color
        }">{{ level }}</div>
        <div class="name">{{ levelName }}</div>
      </div>
    </div>

    <!-- 右侧元素 -->
    <div class="right-container flex-1">
    <el-carousel :interval="5000" style="height: 100%;" height="100%" arrow="hover" indicator-position="none">
      <el-carousel-item v-for="item in infos" :key="item">
          <RoadAlertMonitorCard v-bind="item" />
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
