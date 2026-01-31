<template>
  <div class="online-video-container flex justify-between">
    <div class="video-item" v-for="item in videos" :key="item.name" :style="{
      backgroundImage: `url(${item.url})`
    }">
      <div class="header">{{ item.name }}</div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
