<template>
  <div class="online-video-container flex">
    <div class="video-item" v-for="item in videos" :key="item.name" :style="{
      backgroundImage: `url(${item.url})`
    }">
      <div class="header-container flex justify-between items-center">
        <div class="name">{{ item.name }}</div>
        <div class="datetime">{{ item.datetime }}</div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
