<template>
  <div class="monitor-table-container">
    <!-- 表格数据 -->
    <div class="table-container">
      <div>
        <div class="w-full overflow-hidden waring-point-table">
        <div class="flex w-full table-header">
          <div class="cell rank truncate overflow-hidden whitespace-nowrap">
            排行
          </div>
          <div class="cell name truncate overflow-hidden whitespace-nowrap">
            商圈
          </div>
           <div class="cell city truncate overflow-hidden whitespace-nowrap">
            城市/区域
          </div>
          <div class="cell land truncate overflow-hidden whitespace-nowrap">
            所属路段
          </div>

          <div class="cell index truncate overflow-hidden whitespace-nowrap">
            拥堵指数
          </div>
          <div class="cell value truncate overflow-hidden whitespace-nowrap">
             路网流量
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
              v-for="(item, index) in tableList"
              :key="index"
              class="td-body flex w-full"
            >

              <div
                class="truncate cell rank whitespace-nowrap overflow-hidden"
              >
                {{ index + 1 }}
              </div>
              <div
                class="truncate cell name whitespace-nowrap overflow-hidden"
                :title="item.name"
              >
                {{ item.name }}
              </div>

              <div
                class="truncate cell city whitespace-nowrap overflow-hidden"
                :title="item.city"
              >
                {{ item.city }}
              </div>

              <div
                class="truncate cell land whitespace-nowrap overflow-hidden"
                :title="item.land"
              >
                {{ item.land }}
              </div>


               <div
                class="truncate cell index whitespace-nowrap overflow-hidden"
                :title="item.index"
              >
                {{ item.index }}
              </div>


              <div
                class="truncate cell value whitespace-nowrap overflow-hidden"
                :title="item.value"
              >
                <!-- {{ item.value }} -->
                <div class="flex items-center index-container w-full justify-center">
                  <div v-for="(o, index) in item.ratio" class="icon iconfont icon-xiaoren" :style="{
                    color: o.color
                  }" :key="index">
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
