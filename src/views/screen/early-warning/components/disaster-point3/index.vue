<template>
  <div class="w-full overflow-hidden disaster-point-table">
  

 <div
    class="flex justify-between district-disaster-wrapper p-sm-vw pt-md-vw"
  >
  <div v-for="(item, index) in pointList" :key="index">
    <div class="banner flex items-center justify-center">
        <img :src="item.iconSrc" alt="icon" class="w-full h-full object-contain" ></img>
    </div>
    <div class="text-sm mt-sm-vw" :style="{
      backgroundImage: `url(${item.backgroundImageUrl})`,
      backgroundSize: '100% 100%'
    }">
      <span class="text-name" :style="{
         ...item.nameStyle,
      }">{{item.name}}</span>
    </div>
    <div class="text-lg" :style="{color: item.textColor}">
        {{item.value}}
    </div>
  </div>
</div>
  


   <!-- <div class="w-full overflow-hidden disaster-point-table">
    <div class="flex w-full table-header mb-xs-vw">
      <div class="cell name truncate overflow-hidden whitespace-nowrap">公路名称</div>
      <div class="cell no truncate overflow-hidden whitespace-nowrap">灾害点名称</div>
      <div class="cell point truncate overflow-hidden whitespace-nowrap">灾害等级</div>
      <div class="cell level truncate overflow-hidden whitespace-nowrap">灾害类型</div>
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
          >{{ item.code }}</div>
          <div
            class="truncate cell point whitespace-nowrap overflow-hidden"
            :title="item.name"
            :style="{color:item.name==='Ⅰ级'?'#FF3F3F':item.name==='Ⅱ级'?'#FF8023':'#FCD72C'}"
          >{{ item.name }}</div>
          <div
            class="truncate cell point whitespace-nowrap overflow-hidden"
            :title="item.level"
          >{{ item.level }}</div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'DisasterTable',

  props: {
    disasterList: {
      type: Array,
      default: () => [
        { roadName: '遵义绕城高速', code: 'K1696-崩塌', name: 'Ⅰ级', level: '崩塌' },
        { roadName: '安顺绕城高速', code: 'K95+300-水毁', name: 'Ⅰ级', level: '水毁' },
        { roadName: '印习高速', code: 'K93+600-水毁', name: 'Ⅱ级', level: '水毁' },
        { roadName: '成乐高速公路', code: 'K119+010滑坡', name: 'Ⅱ级', level: '滑坡' },
        { roadName: '雅叶高速', code: 'K1634+484-滑坡', name: 'Ⅱ级', level: '滑坡' },
      ]
    },

    // 总数
    total: {
      type: Number,
      default: () => 0
    },

    // 省份 
    province: {
      type: Number,
      default: () => 0
    },

    // 公路
    highway: {
      type: Number,
      default: () => 0
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

  computed: {
    pointList() {
      return [
        {
          iconSrc: require('./assets/icon-1@2x.png'),
          name: '涉及省份',
          textColor:'#00D8FF',
          backgroundImageUrl: require('./assets/di1@2x.png'),
          value:  this.province,
          nameStyle:{
            backgroundImage: `linear-gradient(0deg, #E1F0F9 0%, #00D8FF 100%)`
          },
        },{
          iconSrc: require('./assets/icon-2@2x.png'),
          name: '涉及公路',
          textColor:'#00FFD5',
          backgroundImageUrl: require('./assets/di2@2x.png'),
          value: this.highway,
          nameStyle:{
            backgroundImage: `linear-gradient(0deg, #E1F0F9 0%, #18FAD3 100%)`
          },
        },{
          iconSrc: require('./assets/icon-3@2x.png'),
          name: '灾害点统计',
          textColor:'#B7DF2C',
          backgroundImageUrl: require('./assets/di3@2x.png'),
          value: this.total,
          nameStyle:{
            backgroundImage: `linear-gradient(0deg, #F4F9E1 0%, #BDFA18 100%)`
          },
        }
      ]
    } 
  },

  mounted() {},

  // watch: {
  //   // 监听 disasterList 数据变化（新增/删除/替换等）
  //   disasterList: {
  //     handler() {
  //       this.$nextTick(() => {
  //         this.resetScroll() // 数据变化后重新计算滚动
  //       })
  //     },
  //     deep: true
  //   }
  // },

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
.contentPic{
  height:100%;
  width:100%
}
.banner{
   width: px2vw(72);
   height: px2vw(72);
}
.text-lg{
  text-align:center;
  font-size: 28px;
  font-weight: bold;
}
.text-sm{
  text-align:center;
  //margin-bottom:10px;
}
.text-name{
  -webkit-background-clip: text;
  color: '#F3D957';
  -webkit-text-fill-color: transparent;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  font-size: px2vw(18);
}
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
</style>

