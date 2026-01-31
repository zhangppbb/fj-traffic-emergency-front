<template>
  <div class="weather-monitor-container flex justify-around">
    <div class="weather-monitor-item flex flex-col justify-center items-center w-full" v-for="item in tableData" :key="item.name">
        <img :src="item.icon" alt="" class="icon">
      <div class="value-container flex flex-col items-center justify-center">
        <span class="region">{{ item.region }}</span>
        <span class="type">{{ item.type }}</span>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
