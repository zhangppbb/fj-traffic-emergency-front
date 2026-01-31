<template>
  <div class="data-collection-status-container flex items-center">
    <div class="data-collection-status">
      <div class="chart-view-container">
        <div class="chart-container">
          <Chart :options="option"></Chart>
        </div>
        <div class="text">区域整体表现</div>
      </div>

      <div class="legend-container flex">
          <div class="legend-item flex items-center" v-for="item in legends" :key="item.name">
            <div class="icon" :style="{
              backgroundColor: item.color
            }"></div>
            <div class="text">{{ item.name }}</div>
          </div>
      </div>
    </div>

    <div class="table-container">
      <div>
        <div class="w-full overflow-hidden waring-point-table">
        <div class="flex w-full table-header">
          <div class="cell name truncate overflow-hidden whitespace-nowrap">
            设施名称
          </div>
          <div class="cell type truncate overflow-hidden whitespace-nowrap">
            设施类型
          </div>
           <div class="cell level truncate overflow-hidden whitespace-nowrap">
            预警等级
          </div>
          <div class="cell info truncate overflow-hidden whitespace-nowrap">
            预警详情
          </div>
        </div>

        <seamless-scroll
          :data="tableData"
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
                class="truncate cell name whitespace-nowrap overflow-hidden"
              >
                {{ item.name }}
              </div>

               <div
                class="truncate cell type whitespace-nowrap overflow-hidden"
              >
                {{ item.type }}
              </div>

              <div
                class="truncate cell level whitespace-nowrap overflow-hidden"
              >
                {{ item.level }}
              </div>

              <div
                class="truncate cell info whitespace-nowrap overflow-hidden"
              >
                {{ item.info }}
              </div>
            </div>
          </div>
        </seamless-scroll>
      </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
