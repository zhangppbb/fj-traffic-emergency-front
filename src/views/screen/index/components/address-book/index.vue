<template>
  <div class="address-book-container">
      <div>
        <div class="w-full overflow-hidden waring-point-table">
      <div class="flex w-full table-header">

        <div class="cell name truncate overflow-hidden whitespace-nowrap">
          姓名
        </div>
        <div class="cell type truncate overflow-hidden whitespace-nowrap">
          类型
        </div>
        <div class="cell upload truncate overflow-hidden whitespace-nowrap">
          融合通信
        </div>
      </div>

      <div
        class="td-body-container"
      >
        <div class="scroll-content flex flex-col">
          <div
            v-for="(item, index) in warningList"
            :key="index"
            class="td-body flex w-full"
          >

            <div
              class="truncate cell name whitespace-nowrap overflow-hidden"
              :title="item.name"
            >
              {{ item.name }}
            </div>

            <div
              class="truncate cell type whitespace-nowrap overflow-hidden"
              :title="item.type"
            >
              {{ item.type }}
            </div>

              <div
              class="truncate cell upload whitespace-nowrap overflow-hidden flex justify-between items-center"
              :title="item.upload"
            >

              <img :src="phoneIcon" alt="">
              <img :src="videoIcon" alt="">
              <img :src="stubIcon" alt="">
              <img :src="emailIcon" alt="">
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
