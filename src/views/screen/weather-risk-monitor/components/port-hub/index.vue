<template>
  <div class="highway-corridor-container">
    <div class="highway-corridor-content-container">
      <div class="highway-corridor-header">
        福州港
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
              指标类别
            </div>
            <div class="cell-group flex flex-1 w-full overflow-hidden">
              <div class="cell value truncate overflow-hidden whitespace-nowrap">
                具体指标
              </div>
              <div class="cell current truncate overflow-hidden whitespace-nowrap">
                实时值
              </div>
              <div class="cell status truncate overflow-hidden whitespace-nowrap">
                状态
              </div>
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
                class="td-body flex w-full  items-center"
              >

              <div
                  class="truncate cell index whitespace-nowrap overflow-hidden"
                >
                {{ item.index }}
                </div>

                <div class="cell-group flex-1 w-full overflow-hidden">
                  <div class="cell-item flex" v-for="o in item.data" :key="item.value">
                     <div
                      class="truncate cell value whitespace-nowrap overflow-hidden"
                      :title="o.value"
                    >
                    {{ o.value }}
                    </div>
                    <div
                      class="truncate cell current whitespace-nowrap overflow-hidden"
                      :title="o.current"
                    >
                      {{ o.current }}
                    </div>

                    <div
                      class="truncate cell status whitespace-nowrap overflow-hidden"
                      :title="o.status"
                    >
                      {{ o.status }}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>


      <!-- Table -->
      <div class="index-table highway-corridor-item">
        <div class="title">核心港区实时风力：</div>

         <!-- 表格数据 -->
      <div class="table-container">
        <div>
          <div class="w-full overflow-hidden waring-point-table">
          <div class="flex w-full table-header">
            <div class="cell area truncate overflow-hidden whitespace-nowrap">
              港区
            </div>
            <div class="cell wind-speed truncate overflow-hidden whitespace-nowrap">
              实时风力
            </div>
            <div class="cell real-time truncate overflow-hidden whitespace-nowrap">
              实时阵风
            </div>
            <div class="cell visibility truncate overflow-hidden whitespace-nowrap">
              能见度
            </div>
             <div class="cell weather truncate overflow-hidden whitespace-nowrap">
              天气
            </div>
             <div class="cell warn truncate overflow-hidden whitespace-nowrap">
              预警
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
                v-for="(item, index) in windPowerTable"
                :key="index"
                class="td-body flex w-full  items-center"
              >

              <div
                  class="truncate cell area whitespace-nowrap overflow-hidden"
                >
                {{ item.area }}
                </div>


                    <div
                    class="truncate cell windSpeed whitespace-nowrap overflow-hidden"
                    :title="item.windSpeed"
                  >
                  {{ item.windSpeed }}
                  </div>
                  <div
                    class="truncate cell realTime whitespace-nowrap overflow-hidden"
                    :title="item.realTime"
                  >
                    {{ item.realTime }}
                  </div>

                  <div
                    class="truncate cell visibility whitespace-nowrap overflow-hidden"
                    :title="item.visibility"
                  >
                    {{ item.visibility }}
                  </div>
                  <div
                    class="truncate cell weather whitespace-nowrap overflow-hidden"
                    :title="item.weather"
                  >
                    {{ item.weather }}
                  </div>

                  <div
                    class="truncate cell warn whitespace-nowrap overflow-hidden"
                    :title="item.warn"
                  >
                    {{ item.warn }}
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>


      <!-- Table -->
      <div class="index-table highway-corridor-item">
        <div class="title">在港待泊船舶数量：</div>

         <!-- 表格数据 -->
      <div class="table-container">
        <div>
          <div class="w-full overflow-hidden waring-point-table">
          <div class="flex w-full table-header">
            <div class="cell type truncate overflow-hidden whitespace-nowrap">
              类别
            </div>
            <div class="cell number truncate overflow-hidden whitespace-nowrap">
              数量（艘）
            </div>
            <div class="cell distribution truncate overflow-hidden whitespace-nowrap">
              船舶类型分布
            </div>
            <div class="cell region truncate overflow-hidden whitespace-nowrap">
              核心集中区域
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
                v-for="(item, index) in shipsTable"
                :key="index"
                class="td-body flex w-full  items-center"
              >

              <div
                  class="truncate cell type whitespace-nowrap overflow-hidden"
                >
                {{ item.type }}
                </div>


                    <div
                    class="truncate cell number whitespace-nowrap overflow-hidden"
                    :title="item.number"
                  >
                  {{ item.number }}
                  </div>
                  <div
                    class="truncate cell distribution whitespace-nowrap overflow-hidden"
                    :title="item.distribution"
                  >
                    {{ item.distribution }}
                  </div>

                  <div
                    class="truncate cell region whitespace-nowrap overflow-hidden"
                    :title="item.region"
                  >
                    {{ item.region }}
                  </div>
              </div>
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
