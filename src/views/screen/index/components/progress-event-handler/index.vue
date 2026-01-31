<template>
  <div class="progress-event-handler-container">
    <!-- 事件预警 -->
    <div class="progress-event-container flex justify-center items-center">
      <img class="icon" src="./assets/images/icon.svg" alt="">
      <div class="text">一级事件：G15沈海高速（福建段）山体滑坡</div>
    </div>

    <!-- 处理进度 -->
    <div class="progress-container flex items-center justify-between">
      <div class="report-time">上报时间：2026/01/15 14:23</div>

      <div class="flex items-center">
        <div>处置情况：</div>
        <div class="bar-container">
          <div class="progress-bar" style="width: 75%;"></div>
        </div>
        <div class="ml-xs-vw">75%</div>
      </div>
    </div>

    <!-- 事件处理流程 -->
    <div class="process-flow-container flex">
      <div class="process-flow-item">
        <div class="process-flow-item-point flex items-center justify-center">
          <div class="process-flow-point flex items-center justify-center">
            <div class="icon"></div>
            </div>
        </div>

        <div class="process-info-container flex flex-col mt-xs-vw">
          <div class="time">14:23</div>
          <div class="name mt-xs-vw">事件上报</div>
        </div>
      </div>


      <div class="process-flow-item">
        <div class="process-flow-item-point flex items-center justify-center">
          <div class="process-flow-point flex items-center justify-center">
            <div class="icon"></div>
            </div>
        </div>

        <div class="process-info-container flex flex-col mt-xs-vw">
          <div class="time">14:25</div>
          <div class="name mt-xs-vw">预案启动</div>
        </div>
      </div>


        <div class="process-flow-item">
        <div class="process-flow-item-point flex items-center justify-center">
          <div class="process-flow-point flex items-center justify-center">
            <div class="icon"></div>
            </div>
        </div>

        <div class="process-info-container flex flex-col mt-xs-vw">
          <div class="time">14:30</div>
          <div class="name mt-xs-vw">队伍出动</div>
        </div>
      </div>


        <div class="process-flow-item">
        <div class="process-flow-item-point flex items-center justify-center">
          <div class="process-flow-point flex items-center justify-center">
            <div class="icon"></div>
            </div>
        </div>

        <div class="process-info-container flex flex-col mt-xs-vw">
          <div class="time">14:45</div>
          <div class="name mt-xs-vw">到达现场</div>
        </div>
      </div>


        <div class="process-flow-item dashed">
        <div class="process-flow-item-point flex items-center justify-center">
          <div class="process-flow-point flex items-center justify-center">
            <div class="icon"></div>
            </div>
        </div>

        <div class="process-info-container flex flex-col mt-xs-vw">
          <div class="time">15:00</div>
          <div class="name mt-xs-vw">开始清障</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
