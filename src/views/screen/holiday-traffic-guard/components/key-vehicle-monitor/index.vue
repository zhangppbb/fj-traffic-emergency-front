<template>
  <div class="road-network-container">
    <!-- 图表数据 -->
    <div class="flex justify-around items-center">
      <Pie v-for="item in dataList" :key="item.name"
      v-bind="item"
      ></Pie>
    </div>

    <!-- 表格数据 -->
    <div class="table-container">
      <div>
            <div class="w-full overflow-hidden waring-point-table">
        <div class="flex w-full table-header">
          <div class="cell index truncate overflow-hidden whitespace-nowrap">

          </div>
          <div class="cell type truncate overflow-hidden whitespace-nowrap">
            预警类型
          </div>
          <div class="cell code truncate overflow-hidden whitespace-nowrap">
            车牌号
          </div>
          <div class="cell datetime truncate overflow-hidden whitespace-nowrap">
            预警时间
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

              <div class="status-container" :style="item.statusStyle">
                {{ item.status }}
              </div>
              </div>

                  <div
                class="truncate cell type whitespace-nowrap overflow-hidden"
                :title="item.type"
              >
                {{ item.type }}
              </div>
              <div
                class="truncate cell code whitespace-nowrap overflow-hidden"
                :title="item.code"
              >
                {{ item.code }}
              </div>

              <div
                class="truncate cell datetime whitespace-nowrap overflow-hidden"
                :title="item.datetime"
              >
                {{ item.datetime }}
              </div>
            </div>
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
