<template>
  <div class="beam-technical-params">
    <div class="table-container">
      <div>
        <div class="w-full overflow-hidden waring-point-table">
        <div class="flex w-full table-header">
          <div class="cell name truncate overflow-hidden whitespace-nowrap">
            桥长
          </div>
          <div class="cell status truncate overflow-hidden whitespace-nowrap">
            运行状态
          </div>
        </div>

        <div
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
                class="truncate cell status whitespace-nowrap overflow-hidden"
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
