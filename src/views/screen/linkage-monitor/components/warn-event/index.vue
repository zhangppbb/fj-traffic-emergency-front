<template>
  <div class="warn-event-component">
    <!-- 数据列表 -->
    <div class="flex flex-col warn-event-container">
      <div class="warn-event-item" v-for="(item, index) in dataList" :key="index">
        <div class="header-container flex justify-between">
          <div class="title-container">
            <span class="type" :style="item.typeStyle">{{ item.type }}</span>
            <span class="time ff-ys">{{ item.datetime }}</span>
          </div>
          <div class="text">{{ item.name }}</div>
        </div>

        <div class="flex items-center justify-between info-container">
          <div class="flex items-center">
            <img :src="item.icon" class="icon" alt="">
            <div class="tag" v-if="item.tag">{{ item.tag }}</div>
            <div class="code">{{ item.code }}</div>
          </div>

          <div class="reason">{{ item.reason }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
