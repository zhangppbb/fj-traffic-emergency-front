<template>
  <div class="pie-container">
    <div class="pie flex justify-center items-center ff-ys" :style="{
      borderColor: color
    }">
      {{ value }}
    </div>

    <div class="name">
      {{ name }}
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
