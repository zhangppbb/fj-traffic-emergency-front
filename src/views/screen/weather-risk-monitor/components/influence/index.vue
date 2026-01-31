<template>
  <div class="influence-container flex justify-around">
    <div class="influence-item flex flex-col justify-center items-center w-full" v-for="item in data" :key="item.name">
      <div class="value-container flex justify-center ff-ys">
        <img class="icon" :src="item.icon" v-if="item.icon" />
        <span class="value">{{ item.value }}</span>
        <span class="unit">{{ item.unit }}</span>
      </div>

      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
