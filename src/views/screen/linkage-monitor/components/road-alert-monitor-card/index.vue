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

    <!-- 原因 -->
    <div class="reason-container">
      <div class="reason-content">
        <div class="reason-text grey">
          原因：{{ reason }}
        </div>

        <div class="description-text">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
