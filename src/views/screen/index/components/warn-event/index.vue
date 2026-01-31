<template>
  <div class="warn-event-component">
    <!-- 数据列表 -->
    <div class="flex flex-col warn-event-container">
      <div class="warn-event-item">
        <div class="header-container flex justify-between">
          <div class="title">车速异常</div>
          <div class="text">沈海高速泉州南安水头路段</div>
        </div>

        <div class="flex items-center justify-between info-container">
          <div class="event-info flex items-center">
            <div class="tag">危运</div>
            <div class="text">闽J156Y7</div>
          </div>

          <div>
            2026-01-06  17:02:08
          </div>
        </div>
      </div>

      <div class="warn-event-item">
        <div class="header-container flex justify-between">
          <div class="title" :style="{
            color: 'rgba(255,95,95,1)'
          }">严重拥堵</div>
          <div class="text">沈海高速泉州南安水头路段 5公里</div>
        </div>

        <div class="flex items-center justify-between info-container">
          <div class="event-info flex items-center">
            <!-- <div class="tag">危运</div> -->
             <img :src="trafficIcon" alt="" class="icon">
            <div class="text">闽J156Y7</div>
          </div>

          <div>
            2026-01-06  17:02:08
          </div>
        </div>
      </div>


      <div class="warn-event-item">
        <div class="header-container flex justify-between">
          <div class="title" :style="{
            color: 'rgba(255,221,44,1)'
          }">山体滑坡</div>
          <div class="text">沈海高速泉州南安水头路段 5公里</div>
        </div>

        <div class="flex items-center justify-between info-container">
          <div class="event-info flex items-center">
             <img :src="roadIcon" alt="" class="icon">
            <div class="text">闽J156Y7</div>
          </div>

          <div>
            2026-01-06  17:02:08
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
