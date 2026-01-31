<template>
   <div class="meteorological-container">
        <div>
         <div class="w-full overflow-hidden waring-point-table">
        <div class="flex w-full table-header">
          <div class="cell region truncate overflow-hidden whitespace-nowrap">
            地区
          </div>
          <div class="cell name truncate overflow-hidden whitespace-nowrap">
            实时气象环境
          </div>
          <div class="cell predict truncate overflow-hidden whitespace-nowrap">
            未来3h预报
          </div>
        </div>

        <div
          class="td-body-container"
        >
          <div class="scroll-content flex flex-col">
            <div
              v-for="(item, index) in tableData"
              :key="index"
              class="td-body flex w-full"
            >
              <div
                class="truncate cell region whitespace-nowrap overflow-hidden"
                :title="item.region"
              >
                {{ item.region }}
              </div>

              <div
                class="truncate cell name flex items-center justify-center whitespace-nowrap overflow-hidden"
                :title="item.name"
              >
              <img class="mr-xs-vw" :src="item.icon" alt="">
              <div>
                  {{ item.name }}
                </div>
              </div>

               <div
                class="truncate cell flex items-center justify-center predict whitespace-nowrap overflow-hidden"
                :title="item.predict"
              >

                <img class="mr-xs-vw" :src="item.predictIcon" alt="">
              <div>
                  {{ item.predict }}
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

<style lang="scss" src="./style.scss" sscoped>
</style>
