<template>
  <div class="w-full overflow-hidden disaster-point-table pb-sm-vw disaster-point-table-pointer">
    <div class="flex w-full table-header mb-xs-vw">
      <div class="cell name truncate overflow-hidden whitespace-nowrap">公路名称</div>
      <div class="cell no truncate overflow-hidden whitespace-nowrap">灾害点数量</div>
      <div class="cell point truncate overflow-hidden whitespace-nowrap">一级灾害点</div>
      <div class="cell level truncate overflow-hidden whitespace-nowrap">二级灾害点</div>
    </div>

    <div class="td-body-container">
      <div class="scroll-content flex flex-col">
        <div
          v-for="(item, index) in disasterList"
          :key="index"
          class="td-body flex mb-xs-vw w-full"
        >
          <div
            class="truncate cell name whitespace-nowrap overflow-hidden"
            :title="item.roadName"
          >{{ item.roadName }}</div>
          <div
            class="truncate cell no whitespace-nowrap overflow-hidden"
            :title="item.code"
            :style="{color:item.code==='警示级'?'rgba(255, 63, 63, 1)':'rgba(252, 215, 44, 1)'}"
          >{{ item.code }}</div>
          <div
            class="truncate cell point whitespace-nowrap overflow-hidden"
            :title="item.name"
          >{{ item.name }}</div>
          <div
            class="truncate cell point whitespace-nowrap overflow-hidden"
            :title="item.level"
          >{{ item.level }}</div>
        </div>
      </div>
    </div>

    <!-- 下达任务 -->
    <div class="issue-button-container mt-sm-vw text-md-vw" @click="$emit('confirm')">
      <img src="./assets/icon.png" class="icon mr-xs-vw" alt="">
      巡查任务下发
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisasterTable',

  props: {
    disasterList: {
      type: Array,
      default: () => [
        { roadName: '呼北线', code: 201, name: 25, level: 176 },
        { roadName: '东山-泸水', code: 150, name: 24, level: 126 },
        { roadName: '台小线', code: 53, name: 21, level: 32 },
        { roadName: '苏北线', code: 198, name: 21, level: 177 },
        { roadName: '沪霍线', code: 41, name: 20, level: 21 },
        ]
    },
    speed: {
      type: Number,
      default: 0.5 // 每帧滚动距离（px），可调节
    }
  },
  data() {
    return {
      scrollHeight: 0, // 半个内容区高度（用于判断何时重置滚动）
      translateY: 0, // 当前滚动的距离
      isScrolling: true, // 是否正在滚动（用于悬停暂停）
      animationFrame: null // RAF 动画句柄
      // disasterList: [
      //   { roadName: "遂义绥城高速", code: "070G42155", name: "K100+555崩塌", level: "I级" },
      //   { roadName: "安顺绥城高速", code: "072G42143", name: "K33+000崩塌", level: "I级" },
      //   { roadName: "印习高速", code: "070G42165", name: "K58+332崩塌", level: "I级" },
      //   { roadName: "松从高速松从高速松从高速", code: "070G42155", name: "K169+346崩塌", level: "I级" },
      //   { roadName: "毕威高速", code: "070G42165", name: "K144+355崩塌", level: "I级" },
      // ],
    }
  },

  mounted() {},

  watch: {
    // 监听 disasterList 数据变化（新增/删除/替换等）
    disasterList: {
      handler() {
        this.$nextTick(() => {
          this.resetScroll() // 数据变化后重新计算滚动
        })
      },
      deep: true
    }
  },

  methods: {
    // 初始化滚动：计算内容高度 + 启动动画
    initScroll() {
      console.log(this.$refs.content, '1---1')
      const content = this.$refs.content
      this.scrollHeight = content.scrollHeight / 2 // 只需要滚动原始内容高度

      // 重置 transform 和位置
      this.translateY = 0
      content.style.transform = `translateY(0)`

      console.log(content, scrollHeight, '')

      // 内容超出容器才滚动
      if (this.scrollHeight > this.height) {
        this.startScroll()
      }
    },

    // 重设滚动（用于 disasterList 更新时）
    resetScroll() {
      this.cancelScroll() // 清除旧动画
      this.initScroll() // 重新初始化
    },

    // 开始滚动（requestAnimationFrame 实现更平滑）
    startScroll() {
      // const content = this.$refs.content

      // const step = () => {
      //   if (this.isScrolling) {
      //     this.translateY += this.speed

      //     // 如果滚完一轮内容，重置到起始位置
      //     if (this.translateY >= this.scrollHeight) {
      //       this.translateY = 0
      //     }

      //     // 高性能方式：直接操作 DOM，不触发 Vue 响应式系统
      //     content.style.transform = `translateY(-${this.translateY}px)`
      //   }

      //   // 下一帧继续滚动
      //   this.animationFrame = requestAnimationFrame(step)
      // }

      // // 启动动画
      // this.animationFrame = requestAnimationFrame(step)
    },

    // 清除动画帧
    cancelScroll() {
      cancelAnimationFrame(this.animationFrame)
      this.animationFrame = null
    },

    // 鼠标悬停 → 暂停滚动
    pauseScroll() {
      this.isScrolling = false
    },

    // 鼠标移出 → 继续滚动
    resumeScroll() {
      this.isScrolling = true
    }
  }
}
</script>

<style lang="scss" scoped>
.disaster-point-table {
  .cell.name {
    width: 25%;
  }
  .cell.no {
    width: 25%;
  }
  .cell.point {
    width: 25%;
  }
  .cell.level {
    width: 25%;
  }
}
.issue-button-container {
  font-size: px2vw(16);
  color: #fff;
}

</style>

