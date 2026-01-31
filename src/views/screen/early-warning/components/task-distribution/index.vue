<template>
    <div class="w-full overflow-hidden disaster-point-table">
      <div class="flex w-full table-header mb-xs-vw">
        <div class="cell order truncate overflow-hidden whitespace-nowrap">
          序号
        </div>
        <div class="cell province truncate overflow-hidden whitespace-nowrap">
        省份
        </div>
        <div class="cell reason truncate overflow-hidden whitespace-nowrap">
            预警原因
        </div>
        <div class="cell line truncate overflow-hidden whitespace-nowrap">
            涉及路段
        </div>
        <div class="cell count truncate overflow-hidden whitespace-nowrap">
            灾害点数量
        </div>
      </div>
  
      <seamless-scroll
        :data="disasterList"
        class="td-body-container"
        :class-option="{
          step: 0.1,
        }"
      >
        <div class="scroll-content flex flex-col">
          <div
            v-for="(item, index) in disasterList"
            :key="index"
            class="td-body flex mb-xs-vw w-full"
          >
            <div
              class="truncate cell order whitespace-nowrap overflow-hidden"
            >
              0{{ index + 1 }}
            </div>
            <div
              class="truncate cell province whitespace-nowrap overflow-hidden"
              :title="item.province"
            >
              {{ item.province }}
            </div>
            <div
              class="truncate cell reason whitespace-nowrap overflow-hidden"
              :title="item.reason"
            >
              {{ item.reason }}
            </div>
            <div
              class="truncate cell point whitespace-nowrap overflow-hidden"
              :title="item.name"
            >
              {{ item.name }}
            </div>
            <div
              class="truncate cell line whitespace-nowrap overflow-hidden"
              :title="item.line"
            >
              {{ item.line }}
            </div>

            <div
              class="truncate cell warn-text count whitespace-nowrap overflow-hidden"
              :title="item.count"
            >
              {{ item.count }}
            </div>
          </div>
        </div>
      </seamless-scroll>

      <!-- 下达任务 -->
      <div class="button-container mt-sm-vw text-sm-vw" @click="$emit('confirm')">确认下发</div>
    </div>
  </template>
<script>

// 云南
// 地震
// G352
// 2
// 1 （处理中）
// 已接收
  export default {
    props: {
      disasterList: {
        type: Array,
        default: () => [],
      },
      speed: {
        type: Number,
        default: 0.5, // 每帧滚动距离（px），可调节
      },
    },
    data() {
      return {
      };
    },
  
    methods: {}
  };
  </script>
  
  <style lang="scss" scoped>
  .disaster-point-table {
    color: #c4e5ff;
    font-size: px2vw(12);
  
    .td-body-container {
      height: px2vw(200);
      overflow: hidden;
    }
  
    .td-body {
    }
  
    .cell.order {
      width: 10%;
    }
    .cell.province {
      width: 25%;
    }
    .cell.reason {
      width: 25%;
    }
    .cell.line {
      width: 30%;
    }
    .cell.count {
      width: 10%;
    }
  }

  // 下发任务
  .button-container {
    margin: 0 auto;
    width: px2vw(153);
    height: px2vw(34);
    line-height: px2vw(34);
    text-align: center;
    background-image: url('./assets/button-bg.png');
    background-size: 100% 100%;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  