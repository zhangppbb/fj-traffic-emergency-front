<template>
  <div class="real-time-component p-xs-vw">
    <!-- 预警信息 -->
    <div class="flex justify-around card-container">
      <div v-for="item in warningData" :key="item.name" class="flex flex-col items-center w-full">
        <div class="text-container flex items-center flex-col text-white">
          <div class="value">{{ item.value }}</div>
          <div class="name">{{ item.name }}</div>
        </div>
        <img class="icon mt-xs-vw" :src="item.icon" alt="">
      </div>
    </div>

    <!-- 信息列表 -->
    <div class="mt-sm-xs table-container">
      <ChartTitle>
       信息列表
      </ChartTitle>

      <div>
         <div class="w-full overflow-hidden waring-point-table">
        <div class="flex w-full table-header">
          <div class="cell index truncate overflow-hidden whitespace-nowrap">
            序号
          </div>
          <div class="cell datetime truncate overflow-hidden whitespace-nowrap">
            时间
          </div>
          <div class="cell type truncate overflow-hidden whitespace-nowrap">
            类型
          </div>
          <div class="cell upload truncate overflow-hidden whitespace-nowrap">
            上报方式
          </div>
          <!-- <div class="cell desc truncate overflow-hidden whitespace-nowrap">
            事件描述
          </div> -->
          <div class="cell status truncate overflow-hidden whitespace-nowrap">
            状态
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
                {{ index + 1 }}
              </div>
              <div
                class="truncate cell datetime whitespace-nowrap overflow-hidden"
                :title="item.datetime"
              >
                {{ item.datetime }}
              </div>

              <div
                class="truncate cell type whitespace-nowrap overflow-hidden"
                :title="item.type"
              >
                {{ item.type }}
              </div>

               <div
                class="truncate cell upload whitespace-nowrap overflow-hidden"
                :title="item.upload"
              >
                {{ item.upload }}
              </div>
              <!-- <div
                class="truncate cell desc whitespace-nowrap overflow-hidden"
                :title="item.desc"
              >
                {{ item.desc }}
              </div> -->
              <div
                class="truncate cell status whitespace-nowrap overflow-hidden"
                :title="item.status"
              >
                {{ item.status }}
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
