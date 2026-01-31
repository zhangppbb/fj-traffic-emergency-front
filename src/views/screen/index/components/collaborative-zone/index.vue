<template>
  <div class="collaborative-zone-component">
    <ChartTitle>协同指挥区</ChartTitle>

    <div class="collaborative-zone-content-container">
      <!-- 指挥长 -->
      <div class="collaborative-zone-user header flex items-center" v-if="!isEmergencyCheck">
        <img class="avatar-icon" src="./assets/images/avatar.png" alt="">

        <!-- 用户信息 -->
        <div class="user-info-container">
          <div class="info-container flex items-center">
            <div class="name">
              张三
            </div>
            <div class="role">
              指挥长
            </div>
          </div>

          <div class="status-container flex items-center mt-xs-vw">
            <div class="status online"></div>
            <!-- 在线/离线/忙碌 -->
             <!-- Online/Offline/Busy -->
            <div class="type">在线</div>
          </div>
        </div>
      </div>


      <!-- 指挥员 -->
      <div class="user-list-container flex">
        <div v-for="item in userListData" :key="item.name" class="collaborative-zone-user collaborative-zone-user-item flex items-center flex-col">
          <img class="avatar-icon" :src="item.icon" alt="">

          <!-- 用户信息 -->
          <div class="user-info-container">
            <div class="info-container flex items-center">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="role">
                {{ item.role }}
              </div>
            </div>

            <div class="status-container flex items-center mt-xs-vw">
              <div :class="`status ${item.type}`"></div>
              <!-- 在线/离线/忙碌 -->
               <!-- Online/Offline/Busy -->
              <div class="type">{{ item.typeName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 指令 -->
    <div class="instruction-new">
      <ChartTitle>最新指令</ChartTitle>

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
            指令下达人员
          </div>
          <div class="cell upload truncate overflow-hidden whitespace-nowrap">
            事件描述
          </div>
          <div class="cell status truncate overflow-hidden whitespace-nowrap">
            状态
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
