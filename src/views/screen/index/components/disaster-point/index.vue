<template>
  <div class="w-full overflow-hidden disaster-point-table">
    <div class="flex w-full table-header mb-xs-vw">
      <div class="cell name truncate overflow-hidden whitespace-nowrap">
        公路名称
      </div>
      <div class="cell no truncate overflow-hidden whitespace-nowrap">
        灾害点编号
      </div>
      <div class="cell point truncate overflow-hidden whitespace-nowrap">
        灾害点名称
      </div>
      <div class="cell level truncate overflow-hidden whitespace-nowrap">
        灾害等级
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
            class="truncate cell name whitespace-nowrap overflow-hidden"
            :title="item.roadName"
          >
            {{ item.roadName }}
          </div>
          <div
            class="truncate cell no whitespace-nowrap overflow-hidden"
            :title="item.code"
          >
            {{ item.code }}
          </div>
          <div
            class="truncate cell point whitespace-nowrap overflow-hidden"
            :title="item.name"
          >
            {{ item.name }}
          </div>
          <div
            class="truncate cell level whitespace-nowrap overflow-hidden"
            :title="item.level"
          >
            {{ item.level }}
          </div>
        </div>
      </div>
    </seamless-scroll>
  </div>
</template>

<script>
export default {
  name: "DisasterTable",

  props: {
    disasterList: {
      type: Array,
      default: () => [
        {
          roadName: "成乐高速公路",
          code: "070G42155",
          name: "K100+555崩塌",
          level: "I级",
        },
        {
          roadName: "安顺绥城高速",
          code: "072G42143",
          name: "K33+000崩塌",
          level: "I级",
        },
        {
          roadName: "印习高速",
          code: "070G42165",
          name: "K58+332崩塌",
          level: "I级",
        },
        {
          roadName: "沪蓉高速",
          code: "070G42155",
          name: "K169+346崩塌",
          level: "I级",
        },
        {
          roadName: "蓉遵高速",
          code: "070G42165",
          name: "K144+355崩塌",
          level: "I级",
        },
        {
          roadName: "毕威高速",
          code: "070G42165",
          name: "K144+355崩塌",
          level: "I级",
        },
      ],
    },
    speed: {
      type: Number,
      default: 0.5, // 每帧滚动距离（px），可调节
    },
  },
  data() {
    return {
      scrollHeight: 0, // 半个内容区高度（用于判断何时重置滚动）
      translateY: 0, // 当前滚动的距离
      isScrolling: true, // 是否正在滚动（用于悬停暂停）
      animationFrame: null, // RAF 动画句柄
    };
  },

  mounted() {},

  watch: {
    // 监听 disasterList 数据变化（新增/删除/替换等）
    disasterList: {
      handler() {
        this.$nextTick(() => {
          this.resetScroll(); // 数据变化后重新计算滚动
        });
      },
      deep: true,
    },
  },

  methods: {
    // 初始化滚动：计算内容高度 + 启动动画
    initScroll() {
      const content = this.$refs.content;
      this.scrollHeight = content.scrollHeight / 2; // 只需要滚动原始内容高度

      // 重置 transform 和位置
      this.translateY = 0;
      content.style.transform = `translateY(0)`;

      // 内容超出容器才滚动
      if (this.scrollHeight > this.height) {
        this.startScroll();
      }
    },

    // 重设滚动（用于 disasterList 更新时）
    resetScroll() {
      this.cancelScroll(); // 清除旧动画
      this.initScroll(); // 重新初始化
    },

    // 开始滚动（requestAnimationFrame 实现更平滑）
    startScroll() {
      const content = this.$refs.content;

      const step = () => {
        if (this.isScrolling) {
          this.translateY += this.speed;

          // 如果滚完一轮内容，重置到起始位置
          if (this.translateY >= this.scrollHeight) {
            this.translateY = 0;
          }

          // 高性能方式：直接操作 DOM，不触发 Vue 响应式系统
          content.style.transform = `translateY(-${this.translateY}px)`;
        }

        // 下一帧继续滚动
        this.animationFrame = requestAnimationFrame(step);
      };

      // 启动动画
      this.animationFrame = requestAnimationFrame(step);
    },

    // 清除动画帧
    cancelScroll() {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    },

    // 鼠标悬停 → 暂停滚动
    pauseScroll() {
      this.isScrolling = false;
    },

    // 鼠标移出 → 继续滚动
    resumeScroll() {
      this.isScrolling = true;
    },
  },
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
    background: linear-gradient(90deg, #0d244b 0%, #1c4180 50%, #0d244b 100%);

    .cell.point {
      color: #dab552;
    }
    .cell.level {
      color: #da7f52;
    }
  }

  // 单元格
  .cell {
    height: px2vw(30);
    text-align: center;
    line-height: px2vw(30);
  }
  .cell.name {
    width: 25%;
  }
  .cell.no {
    width: 25%;
  }
  .cell.point {
    width: 30%;
  }
  .cell.level {
    width: 20%;
  }
  & > .table-header {
    position: relative;
    & > .cell {
      background-color: #12457e;
    }
  }

  & > .table-header::after,
  & > .table-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: px2vw(2); /* 上边框厚度 */
    width: 100%;
    background: linear-gradient(
      to right,
      #00c3ff,
      #4cb5c7,
      #010404,
      #4cb5c7,
      #00c3ff
    );
    z-index: 2;
  }

  // & > .table-header::after {
  //   bottom: 0!important;
  // }
}
</style>
