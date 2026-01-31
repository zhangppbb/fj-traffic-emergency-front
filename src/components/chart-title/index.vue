<template>
  <div class="flex items-center mb-xs-vw chart-title">
    <img class="icon" src="@/assets/images/rect-icon.png" alt="">
    <div class="ml-xs-vw text-white text"><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
.chart-title {
  & > .icon {
    width: px2vw(5);
    height: px2vw(12);
  }
  & > .text {
    font-size: px2vw(14);
  }
}
</style>
