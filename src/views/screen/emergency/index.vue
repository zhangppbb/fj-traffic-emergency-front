<template>
  <div class="screen-page">
    <PictureScreenRiskDialog
      title="灾害实时预览"
      v-model="showPicScreen"
      width="90vw"
      center
      custom-class="gis-screen-dialog"
    >
    <img style="height: 50vw;padding: 0 10px;"  :src="picSrc" class="w-full" alt="灾害点图片" />
    </PictureScreenRiskDialog>
    <GisScreenRiskDialog
      title="灾害点实时数据"
      v-model="dialogVisible"
      width="44vw"
      center
      custom-class="gis-screen-dialog"
    >
       <div class="flex flex-col pt-md-vw pb-xl-vw pl-md-vw pr-md-vw">
        <div
          class="name-container mt-xl-vw gis-ys-font"
        >K119+010灾害点-滑坡</div>

        <div class="flex mt-sm-vw" style="color: #FFF7F5;">
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">所属公路段：</span>G4218雅叶段
          </div>
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">发生时间：</span>2025-03-14  12:00
          </div>
        </div>


        <div class="flex mt-sm-vw" style="color: #FFF7F5;">
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">发生原因：</span>强降雨导致位移加速
          </div>
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">周围设施损毁情况：</span>围栏、路面受损严重
          </div>
        </div>

        <div class="flex items-center mt-xl-vw">
          <div
              class="name-container gis-ys-font"
            >
            治理方案智能推荐
          </div>

          <div class="flex mr-sm-vw items-center justify-between washout-footer">
            <span class="download"><i class="el-icon-bottom"></i>下载</span>
          </div>
        </div>

        <div
          class="name-container mt-xl-vw gis-ys-font"
        >实时影像数据</div>

        <div class="flex justify-between">
          <div class="video-container mini">
            <div class="video-text">点位1</div>
            <img style="height: 19vh"  @click="previewPic($event)" src="https://img2.baidu.com/it/u=1553277782,3907014256&fm=253&fmt=auto&app=120&f=JPEG?w=666&h=500" class="w-full" alt="灾害点图片" />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div>
          <div class="video-container mini">
            <div class="video-text">点位2</div>
            <img style="height: 19vh"  @click="previewPic($event)" src="https://img2.baidu.com/it/u=2801743387,511800748&fm=253&fmt=auto&app=138&f=JPEG?w=1066&h=800" class="w-full" alt="灾害点图片" />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div>
        </div>
      </div>
    </GisScreenRiskDialog>

    <div class="h-full flex box-border">
      <!-- <Left /> -->
      <div class="left-part part-container">
        <ChartWrapper class="chart-wrapper-item" title="灾害情况">
          <div
            class="chart-wrapper-mini flex flex-col items-center pr-sm-vw pl-sm-vw"
          >
            <div class="flex flex-col w-full pr-sm-vw">
              <div style="margin-top: 2vh;height: 4vh;">
                <DisasterPublicity
                  :icon="require('./assets/gaosu.png')"
                  name="所属区域"
                  nameColor="#00D8FF"
                >四川成都雅叶高速</DisasterPublicity>
              </div>
              <div style="margin-top: 2vh;height: 4vh;">
                <DisasterPublicity
                  :icon="require('./assets/fengxian.png')"
                  name="灾害名称"
                  nameColor="#00D8FF"
                >G65-K12+89滑坡</DisasterPublicity>
              </div>
              <div style="margin-top: 2vh;height: 4vh;">
                <DisasterPublicity
                  :icon="require('./assets/shijian.png')"
                  name="灾害时间"
                  nameColor="#00D8FF"
                >2025年3月14日13:00</DisasterPublicity>
              </div>
              <div style="margin-top: 2vh;height: 4vh;">
                <DisasterPublicity
                  :icon="require('./assets/dengji.png')"
                  name="灾害等级"
                  nameColor="#00D8FF"
                >
                  <div class="font-bold warning-text pr-xs-vw pl-xs-vw" style="color: #FF3F3F;">Ⅰ级</div>
                </DisasterPublicity>
              </div>
              <div style="margin-top: 2vh;height: 4vh;">
                <DisasterPublicity
                  :icon="require('./assets/huidaqingkuang.png')"
                  name="道路通行情况"
                  nameColor="#00D8FF"
                >双向阻塞</DisasterPublicity>
              </div>
              <div style="margin-top: 2vh;height: 4vh;">
                <DisasterPublicity
                  :icon="require('./assets/shujujiegou.png')"
                  name="涉及结构物"
                  nameColor="#00D8FF"
                >路面、桥梁</DisasterPublicity>
              </div>
              <div style="margin-top: 2vh;height: 4vh;">
                <DisasterPublicity
                  :icon="require('./assets/yujing.png')"
                  name="灾害原因"
                  nameColor="#00D8FF"
                >强降雨导致滑坡</DisasterPublicity>
              </div>
            </div>

            <div class="video-container" >
              <div class="video-text">实时遥感数据</div>
              <img style="height:20vh" src="https://img2.baidu.com/it/u=1553277782,3907014256&fm=253&fmt=auto&app=120&f=JPEG?w=666&h=500" class="w-full object-cover" alt="灾害点图片" />

              <!-- 底部时间 -->
              <div class="video-time">2025-3-14 13:03:09</div>

              <!-- 放大图标 -->
              <!-- <div
          class="absolute bottom-[8px] right-[8px] cursor-pointer"
          @click="handleFullscreen"
        >
          <img src="@/assets/expand-icon.svg" class="w-[24px] h-[24px]" alt="放大" />
              </div>-->
            </div>

             <div class="video-container" >
              <div class="video-text">实时遥感数据</div>
              <img style="height:20vh" src="https://img2.baidu.com/it/u=2801743387,511800748&fm=253&fmt=auto&app=138&f=JPEG?w=1066&h=800" class="w-full object-cover" alt="灾害点图片" />

              <!-- 底部时间 -->
              <div class="video-time">2025-3-14 13:03:09</div>

              <!-- 放大图标 -->
              <!-- <div
          class="absolute bottom-[8px] right-[8px] cursor-pointer"
          @click="handleFullscreen"
        >
          <img src="@/assets/expand-icon.svg" class="w-[24px] h-[24px]" alt="放大" />
              </div>-->
            </div>
          </div>
        </ChartWrapper>
      </div>

      <div class="middle-part">
        <!-- <Map /> -->
        <div id="map" style=" width: 100%; height: 100%;"></div>
        <!-- <div id="cesiumContainer" style=" width: 100%; height: 100%"></div> -->

        <!-- <div class="flex-1 overflow-hidden">
          <Model title="乡村振兴工作简述">
            <div class="h-full overflow-y-auto py-2 px-6 box-border text-white">
              <div v-for="(item,index) in gloryArr" :key="index" class="gloryItem">{{ item }}</div>
            </div>
          </Model>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {
  DisasterWarnChart,
  DistrictDisaster,
  DisasterType,
  DisasterPreview,
  RectificationProgress,
  DisasterPublicity,
  DisasterRiskChart
} from './components'
import BIAN_PO from '@/assets/images/app/bianpo.png'
import GAO_SU from '@/assets/images/app/gaosu.png'
import WARN_ICON from '@/assets/images/app/warn-icon.gif'
import map from './map'

export default {
  mixins: [map],

  data() {
    return {
      picSrc:"",
      showPicScreen:false,
    };
  },
  components: {
    DisasterRiskChart,
    DisasterWarnChart,
    RectificationProgress,
    DisasterType,
    DistrictDisaster,
    DisasterPreview,
    DisasterPublicity
  },

  computed: {
    // 图标
    dialogIcon() {
      return this.isBianPo ? BIAN_PO : GAO_SU
    }
  },
  methods: {
    previewPic(event){
      this.showPicScreen = true
      if(event.target.src){
        this.picSrc = event.target.src
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.video-container.mini {
  width: 49%;
}
.video-container {
  margin-top: 2vh;
  position: relative;
  width: 100%;
  // height: px2vw(220);

  .video-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.6);
    color: #fff;
    padding: px2vh(2) px2vw(8);
  }

  .video-time {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    padding: px2vh(2) px2vw(8);
  }
}

.warning-text {
  font-size: px2vw(12);
  height: 100%;
  display: flex;
  font-weight: bold;
  align-items: center;
  border-radius: 0.2vw;
  border: 1px solid #ff3f3f;
  box-shadow: inset 0 0 px2vw(10) rgba(37, 4, 4, 1);
}

.alert-side {
  position: fixed;
  top: 0;
  width: px2vw(80);
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
  animation: glowFlash 1s infinite ease-in-out;
}

@keyframes glowFlash {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.3;
  }
}

.alert-left {
  left: 0;
  background: linear-gradient(to right, rgba(255, 0, 0, 0.5), transparent);
}

.alert-right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 0, 0, 0.5), transparent);
}

.chart-wrapper-mini {
  // flex: 1;
  height: 100%;
  box-sizing: border-box;
}

.district-disaster-wrapper {
  height: px2vw(280);
}

// -=---------
.screen-page {
  width: 100vw;
  height: 100vh;
  background: #f000;
}

// 地区选择
.select-city-container {
  position: fixed;
  top: 12vh;
  left: 24vw;
  z-index: 10;
  height: 4vh;
  width: 10vw;
}

#map {
  background-color: #000; /* 纯蓝色背景 */
}

.right-part {
  right: 0;
  z-index: 10;
}

.part-container {
  position: fixed;
  width: px2vw(444);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: px2vh(80);
  padding-bottom: px2vh(20);
  z-index: 10;
  background: linear-gradient(
    90deg,
    rgba(9, 30, 55, 0.72) 0%,
    rgba(11, 31, 52, 0.2) 100%
  );
  // border: 1px red solid;
  top: 0;

  .banner {
    height: 100%;
  }

  & > .chart-wrapper-item {
    flex: 1;
    display: flex;
    flex-direction: column;

    ::v-deep {
      & > .chart-content {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
  // background-color: rgba(255, 255, 255, 0.3);
}

// 地图
.middle-part {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 1;
}

.washout-footer {
  font-family: Microsoft YaHei;
  font-weight: 400;
  font-size: 14px;
  color: #f6f9ff;
  padding: 0 px2vw(16);

  .download {
    font-family: Microsoft YaHei;
    font-weight: 400;
    font-size: 12px;
    color: #c4e5ff;
    cursor: pointer;
    i {
      font-size: 14px;
      color: #00E4FF;
    }
  }
}

</style>

<style lang="scss">
.radar-icon {
  position: relative;
}

/* 雷达大盒子 */
.gis-radar {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #ff0000;
  background: rgba($color: #ff0000, $alpha: 0.2);
  overflow: hidden;

  ul {
    list-style-type: none;
    padding-left: 0;  /* 可选：去掉左侧的内边距，确保列表项与其他元素对齐 */
  }

  .point {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: #ff0000;
    border-radius: 50%;
  }


/* 雷达线 */
.radar_line li {
            position: absolute;
            top: 0;
            left: 50%;
            background: transparent;
            width: 1px;
            height: 100%;
        }
        .radar_line>li:nth-child(1) {
            transform: rotate(45deg);
        }
        .radar_line>li:nth-child(2) {
            transform: rotate(90deg);
        }
        .radar_line>li:nth-child(3) {
            transform: rotate(135deg);
        }
/* 雷达圈 */
.radar_circle li {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid transparent;
            border-radius: 50%;
        }
        .radar_circle>li:nth-child(1) {
            width: 100px;
            height: 100px;
        }
        .radar_circle>li:nth-child(2) {
            width: 200px;
            height: 200px;
        }
        .radar_circle>li:nth-child(3) {
            width: 300px;
            height: 300px;
        }
        /* 扫描 */
        .scanning {
            position: absolute;
            top: 50%;
            left: 50%;
            width:200px;
            height: 200px;
            background: linear-gradient(45deg, #ff0000 20%, transparent 70%);
            animation: investigation  2s infinite linear;
            transform-origin: left top;
        }
 @keyframes investigation  {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
}


</style>
