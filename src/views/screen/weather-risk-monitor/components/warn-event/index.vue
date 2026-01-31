<template>
  <div class="warn-event-component">
    <RoadAlertMonitorCard class="card-item" v-for="(item, index) in cardList" :key="index" v-bind="item"></RoadAlertMonitorCard>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
