<template>
  <div class="predict-container flex justify-center flex-col">
    <div class="predict-item" v-for="item in data" :key="item.title">
      <div class="name">{{ item.title }}</div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
