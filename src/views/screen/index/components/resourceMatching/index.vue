<template>
  <div class="w-full overflow-hidden disaster-point-table">
    <div class="resourceTitle text-center mt-4">福州市应急物资设备仓库</div>
    <div class="flex w-full">
      <div class="w-1/2 px-10 py-2">
        <div class="resourceTitle">物资清单</div>
        <div class="flex w-full table-header mb-xs-vw">
          <div class="cell index truncate overflow-hidden whitespace-nowrap">序号</div>
          <div class="cell name truncate overflow-hidden whitespace-nowrap">设备物资</div>
          <div class="cell no truncate overflow-hidden whitespace-nowrap">功能用途</div>
          <div class="cell code truncate overflow-hidden whitespace-nowrap">数量</div>
          <div class="cell point truncate overflow-hidden whitespace-nowrap">单位</div>
        </div>

        <seamless-scroll :data="disasterList" class="td-body-container">
          <div class="scroll-content flex flex-col">
            <div
              v-for="(item, index) in disasterList"
              :key="index"
              class="td-body flex mb-xs-vw w-full"
            >
              <div
                class="truncate cell index whitespace-nowrap overflow-hidden"
                :title="item.index"
              >{{ item.index }}</div>
              <div
                class="truncate cell name whitespace-nowrap overflow-hidden"
              >{{ item.name }}</div>
              <div
                class="truncate cell no whitespace-nowrap overflow-hidden"
                :title="item.no"
              >{{ item.no }}</div>
              <div
                class="truncate cell code whitespace-nowrap overflow-hidden"
                :title="item.code"
              >{{ item.num }}</div>
              <div
                class="truncate cell point whitespace-nowrap overflow-hidden"
                :title="item.point"
              >{{ item.unit }}</div>
            </div>
          </div>
        </seamless-scroll>
      </div>
      <div class="w-1/2 px-10 py-2">
        <div class="resourceTitle">路线规划</div>
        <!-- <Map class="w-full"></Map> -->
      </div>
    </div>
    
    <div class="flex flex-1 button-center mb-5">
      <div class="button active" @click="$emit('emergencyClassification')">下达指令</div>
      <div class="button inactive"  @click="$emit('confirm')">换一个</div>
    </div>
  </div>
</template>

<script>
// import Map from './Map.vue'

export default {
  name: 'DisasterTable',

  // components: {Map},
  props: {
    name: String,
    disasterList: {
      type: Array,
      default: () => [
        {
          index: '01',
          name: '应急车',
          no: '运输人员设备',
          num: '7',
          unit:'辆',
        },
        {
          index: '02',
          name: '担架',
          no: '转运伤员',
          num: '205',
          unit:'个',
        },
        {
          index: '03',
          name: '呼吸机',
          no: '保障呼吸供氧',
          num: '69',
          unit:'套',
        },
        {
          index: '04',
          name: '对讲机',
          no: '指挥调度',
          num: '8',
          unit:'部',
        },
        // {
        //   index: '05',
        //   name: '应急灯',
        //   no: '照明',
        //   num: '20',
        //   unit:'盏',
        // }
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

    startScroll() {
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
  .cell.index {
    width: 10%;
  }
  .cell.name {
    width: 20%;
  }
  .cell.no {
    width: 40%;
  }
  .cell.code {
    width: 20%;
  }
  .cell.point {
    width: 10%;
  }
}
.resourceTitle{
    font-size: px2vw(20);
    padding: px2vw(10) 0;
    color: #FFFFFF; /* 白色文字 */
}

.button {
  padding: px2vw(5) px2vw(10);
  border-radius: 0;
  font-size: px2vw(14);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #333;
}

.button.active {
  background-color: rgba(118, 142, 172,0.9);
  color: #FFFFFF; /* 白色文字 */
  border-color: #768EAC;
}

.button.inactive {
  background-color: #B8B8B8;
  color: #333333; /* 黑色文字 */
  border-color: #B8B8B8;
}
</style>

