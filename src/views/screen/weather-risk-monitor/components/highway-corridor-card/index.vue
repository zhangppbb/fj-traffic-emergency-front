<template>
  <div class="highway-corridor-container">
    <div class="highway-corridor-content-container">

      <div class="highway-corridor-header" :style="{
         width: `${name.length + 3}em`
      }">
        {{ name }}
      </div>

      <!-- Table -->
      <div class="index-table highway-corridor-item">
        <div class="title">走廊关键指标：</div>

         <!-- 表格数据 -->
      <div class="table-container">
        <div>
          <div class="w-full overflow-hidden waring-point-table">
          <div class="flex w-full table-header">
            <div class="cell index truncate overflow-hidden whitespace-nowrap">
              指标
            </div>
            <div class="cell value truncate overflow-hidden whitespace-nowrap">
              常态值
            </div>
            <div class="cell current truncate overflow-hidden whitespace-nowrap">
              当前值
            </div>
            <div class="cell jd truncate overflow-hidden whitespace-nowrap">
              绝对变化
            </div>
            <div class="cell xd truncate overflow-hidden whitespace-nowrap">
              相对变化率
            </div>

             <div class="cell level truncate overflow-hidden whitespace-nowrap">
              状态评级
            </div>
          </div>

          <div
            class="td-body-container"
            :class-option="{
              step: 0.1,
            }"
          >
            <div class="scroll-content flex flex-col">
              <div
                v-for="(item, index) in tableData"
                :key="index"
                class="td-body flex w-full"
              >

              <div
                  class="truncate cell index whitespace-nowrap overflow-hidden"

                >
                {{ item.index }}
                </div>

                    <div
                  class="truncate cell value whitespace-nowrap overflow-hidden"
                  :title="item.value"
                >
                {{ item.value }}
                </div>
                <div
                  class="truncate cell current whitespace-nowrap overflow-hidden"
                  :title="item.current"
                >
                  {{ item.current }}
                </div>

                <div
                  class="truncate cell jd whitespace-nowrap overflow-hidden"
                  :title="item.jd"
                >
                  {{ item.jd }}
                </div>

                  <div
                  class="truncate cell xd whitespace-nowrap overflow-hidden"
                  :title="item.xd"
                >
                  {{ item.xd }}
                </div>
                   <div
                  class="truncate cell level whitespace-nowrap overflow-hidden flex justify-center"
                  :title="item.level"
                >
                 {{ item.levelName }}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      <!-- Line -->
      <div class="corridor-container highway-corridor-item">
        <div class="title">走廊流速剖面图：</div>

        <div class="line-chart-container">
          <Chart :options="lineOption"></Chart>
        </div>
      </div>

      <!-- heatmap -->
      <div class="time-space-container highway-corridor-item">
        <div class="title">时空演变图：</div>

        <div class="heatmap-chart-container">
          <Chart :options="heatmapOption"></Chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
