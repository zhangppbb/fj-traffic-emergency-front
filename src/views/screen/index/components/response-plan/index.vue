<template>
  <div class="response-plan-container">
    <div class="header-container flex items-center justify-between">
      <ChartTitle>当前状态</ChartTitle>

      <div class="button flex items-center justify-center">
        <img class="icon" src="./assets/images/search-icon.png" alt="">
        <div>检索预案</div>
      </div>
    </div>


    <!-- 卡片 -->
    <div class="card-list-container">
      <div class="card-item flex items-center">
          <img class="start-icon" src="./assets/images/start-icon.png" alt="">

        <div class="info-container">
          <div class="title">
          暂未启动应急预案
          </div>
          <div class="flex items-center description-container">
            <div class="description truncate">推荐预案：高速公路山体滑坡应急预案</div>

            <div class="button-container flex">
              <div class="button">查看预案</div>
              <div class="button">一键启动</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
