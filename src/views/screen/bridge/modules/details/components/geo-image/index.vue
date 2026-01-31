<template>
  <div class="geo-image-container">
    <div class="info-container">
      <div class="value">中心经度：119.4812°E</div>
      <div class="value">中心纬度：26.0845°N</div>
      <!-- <div class="text">立面照 / 正面照 桥梁照片</div> -->
    </div>

    <!-- Imgs -->
    <div class="imgs-container flex">
      <div class="img" v-for="item in geoImages" :key="item.url" :style="{
        backgroundImage: `url(${item.url})`
      }">
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
