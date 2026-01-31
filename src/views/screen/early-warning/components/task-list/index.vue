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
        <div class="cell receive truncate overflow-hidden whitespace-nowrap">
            接收状态
        </div>
        <div class="cell handle truncate overflow-hidden whitespace-nowrap">
            处理状态
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
              :class="[
                'truncate cell before receive whitespace-nowrap overflow-hidden',
                item.receive ? 'success-text' : 'warn-text'
              ]"
              :title="item.receive"
            >
              {{ receiveStatus[item.receive] }}
            </div>
            <div
              :class="['truncate before cell handle whitespace-nowrap overflow-hidden',
                item.handle ? 'success-text' : 'warn-text'
              ] "
              :title="item.handle"
            >
              {{ handleStatus[item.handle] }}
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
    </div>
  </template>
  
  <script>
  export default {
    props: {
      disasterList: {
        type: Array,
        default: () => [
          {
            province: "四川省",
            reason: "强降雨",
            line: "G65包茂高速铜川段",
            receive: 0, 
            handle: 1,
            count: 6,
          }
        ],
      },
      speed: {
        type: Number,
        default: 0.5, // 每帧滚动距离（px），可调节
      },
    },
    data() {
      return {
        receiveStatus: {
          0: '未接收',
          1: '已接收'
        },

        handleStatus: {
          0: '未处理',
          1: '处理中',
          2: '已处理',
        },
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
  
    .cell.receive {
      width: 10%;
    }
    .cell.handle {
      width: 10%;
    }
    .cell.province {
      width: 25%;
    }
    .cell.reason {
      width: 15%;
    }
    .cell.line {
      width: 20%;
    }
    .cell.count {
      width: 10%;
    }

    .cell.before {
      position: relative;
    }
    .cell.before::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: #{px2vw(10)};
      transform: translateY(-50%);
      width: px2vw(4);
      height: px2vw(4);
      border-radius: 50%;
    }
  }
  </style>
  