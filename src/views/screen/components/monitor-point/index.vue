<template>
  <div class="monitor-point-container">
    <div class="monitor-point flex">
      <div class="monitor-point-item flex items-center" v-for="(item, index) in points" :key="item.name">
        <img :src="item.icon || icons[index]" alt="" class="icon">

        <div class="info-container">
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </div>
      </div>
    </div>

    <!-- Chart -->
    <div class="chart-container" v-if="showChart">
      <Chart :options="option" width="100%" height="100%"></Chart>
    </div>

     <!-- imgs -->
    <div class="imgs-container" v-if="pictures.length">
      <seamless-scroll
        :data="pictures"
        class="imgs-scroll-container"
        :class-option="{
          step: 0.1,
        }"
      >
      <div class="img-item" v-for="item in pictures" :key="item.name" :style="{
        backgroundImage: `url(${item.img})`
      }">
        <div class="header-container">{{ item.name }}</div>
      </div>
    </seamless-scroll>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
