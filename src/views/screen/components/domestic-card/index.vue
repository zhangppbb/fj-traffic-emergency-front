<template>
  <div class="domestic-card-container">
    <div class="card-container flex items-center justify-center">
      <div class="name ff-ys">{{ name }}</div>
      <div class="legends-container flex flex-col justify-center">
        <div class="legend-item flex items-center" v-for="(item, index) in infoData" :key="item.name">
          <img :src="item.icon || icons[index]" alt="" class="icon">
          <div class="info-container">
            <div class="name">{{ item.name }}</div>
            <div class="value-container flex">
              <div class="value">{{ item.value }}</div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="table-container">
      <div>
        <div class="w-full overflow-hidden waring-point-table">
        <div class="flex w-full table-header">
          <div v-for="item in tableHeader" :title="item.label" :key="item.prop" class="cell name truncate overflow-hidden whitespace-nowrap" :style="{
            width: item.width
          }">
            {{ item.label }}
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
              v-for="(row, rowIndex) in tableData"
              :key="rowIndex"
              class="td-body flex w-full"
            >

              <div
                v-for="col in tableHeader"
                :key="col.prop"
                class="truncate cell whitespace-nowrap overflow-hidden"
                :class="col.prop"
                :style="{
                  width: col.width
                }"
                :title="row[col.prop]"
              >
                {{ row[col.prop] }}
              </div>
            </div>
          </div>
        </seamless-scroll>
      </div>
      </div>
    </div>

    <!-- imgs -->
     <!-- <div class="imgs-container">
       <seamless-scroll
          :data="pictures"
          class="imgs-scroll-container"
          :class-option="{
            step: 0.1,
          }"
        >
        <div class="img-item" v-for="item in pictures" :key="item.name" :style="{
          backgroundImage: `url(${item.img})`
        }">
          <div class="header-container">{{ item.name }}</div>
        </div>
      </seamless-scroll>
     </div> -->
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped>
</style>
