<template>
  <div class="road-alert-monitor-card">
    <div class="road-alert-monitor-header flex justify-between items-center">
      <div class="type flex items-center">
        {{ type }}
      </div>
      <div class="time grey">{{ datetime }}</div>
    </div>


    <!-- 信息 -->
    <div class="info-container">
      <div class="w-full" v-for="item in data" :key="item.name">
        <span class="title grey">{{ item.name }}</span>
        <span class="value">{{ item.value }}</span>
      </div>
    </div>

    <!-- 指标 -->
    <div class="index-container">
      <div class="title grey">关键运行指标：</div>
      <div class="index-text" v-html="reason"></div>
    </div>

     <!-- 预测与建议： -->
    <div class="index-container">
      <div class="title grey">预测与建议：</div>
      <div class="index-text" v-html="description"></div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
