<template>
  <div class="screen-page">
    <!-- 预警元素 -->
    <div class="alert-side alert-left"></div>
    <div class="alert-side alert-right"></div>

    <div class="fixed flex btn-changeType">
      <div
        class="menu-item"
        :class="{ active: selectDistrictType === 'weather' }"
        @click="selectDistrictType = 'weather'"
      >
        <span
          class="item-name"
          :class="{ active: selectDistrictType === 'weather' }"
          >异常天气</span
        >
      </div>
      <div
        class="menu-item"
        :class="{ active: selectDistrictType === 'earthquake' }"
        @click="selectDistrictType = 'earthquake'"
      >
        <span
          class="item-name"
          :class="{ active: selectDistrictType === 'earthquake' }"
          >地震灾害</span
        >
      </div>
    </div>
    <GisScreenRiskDialog
      title="高风险灾害点预警"
      v-model="riskdialogVisible2"
      width="44vw"
      center
      custom-class="gis-screen-dialog"
    >
      <div class="flex flex-col pt-xl-vw pb-xl-vw pl-md-vw pr-xl-vw">
        <div
          class="name-container gis-ys-font"
        >
          K1222+333灾害点-滑坡
        </div>
        <div class="flex mt-xs-vw justify-between" style="color: #fff7f5">
          <div><span class="font-bold">所属公路段：</span>G4218雅叶高速段</div>
          <div>
            <span class="font-bold">灾害等级：</span>
            <span style="color: #df7f44">一级</span>
          </div>
          <div><span class="font-bold">预警原因：</span>强降雨导致位移加速</div>
        </div>

        <div
          class="name-container mt-xs-vw gis-ys-font"
          style="
            padding-top: 10px;
          "
        >
          实时影像数据
        </div>

        <div class="flex justify-between">
          <div class="video-container mini">
            <div class="video-text">点位1</div>
            <img
              style="height: 20vh"
              @click="previewPic($event)"
              src="https://image.sciencenet.cn/home/202405/18/065709ghcogoqjzzkfksfa.jpg"
              class="w-full"
              alt="灾害点图片"
            />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div>
          <div class="video-container mini">
            <div class="video-text">点位2</div>
            <img
              style="height: 20vh"
              @click="previewPic($event)"
              src="https://img2.baidu.com/it/u=905168064,2018927940&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=449"
              class="w-full"
              alt="灾害点图片"
            />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div>
          <!-- <div class="video-container mini">
            <div class="video-text">点位3</div>
            <img
              style="height: 14vh"
              src="https://p6.itc.cn/images01/20210717/5034b96ceba04ec2bac9ce38c7970036.png"
              class="w-full"
              alt="灾害点图片"
            />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div> -->
        </div>

        <div
          class="name-container  gis-ys-font mt-sm-vw"
        >
          风险防控策略
        </div>

        <div class="flex mt-xs-vw justify-between" style="color: #fff7f5">
          <div>
            <span class="font-bold">管养单位：</span
            >四川雅康高速公路有限责任公司
          </div>
          <div><span class="font-bold">防灾任务下达状态：</span>已下达</div>

          <div><span class="font-bold">管养单位采取的措施：</span>道路封闭</div>
        </div>
        <div
          class="name-container gis-ys-font mt-xs-vw"
        ></div>
        <!-- <div style="height: 14vh;"> -->
        <!-- <DisasterRiskChart /> -->
        <!-- </div> -->
      </div>
    </GisScreenRiskDialog>

    <div class="h-full flex p-6 box-border">
      <!-- 左侧图表 -->
      <WeatherLeftPart v-if="selectDistrictType === 'weather'" />
      <EarthquakeLeftPart v-else></EarthquakeLeftPart>

      <div class="middle-part">
        <DisasterWeather
          v-if="selectDistrictType == 'weather'"
        ></DisasterWeather>
        <DisasterEarthquake
          v-if="selectDistrictType == 'earthquake'"
        ></DisasterEarthquake>

        <!-- <Map /> -->
        <!-- <div id="map" style=" width: 100%; height: 100%;"></div> -->
        <div id="cesiumContainer" style="width: 100%; height: 100%"></div>

        <!-- <div class="flex-1 overflow-hidden">
          <Model title="乡村振兴工作简述">
            <div class="h-full overflow-y-auto py-2 px-6 box-border text-white">
              <div v-for="(item,index) in gloryArr" :key="index" class="gloryItem">{{ item }}</div>
            </div>
          </Model>
        </div>-->
      </div>

      <!-- 右侧图表 -->
      <WeatherRightPart v-if="selectDistrictType === 'weather'" />
      <EarthquakeRightPart v-else></EarthquakeRightPart>
    </div>
  </div>
</template>

<script>
import {
  DisasterPoint,
  DisasterWarnChart,
  DistrictDisaster,
  DisasterType,
  DisasterPreview,
  RectificationProgress,
  DisasterPublicity,
  DisasterPoint2,
  DisasterPoint3,
  DisasterRiskChart,
  DisasterWeather,
  DisasterEarthquake,
  EarthquakePoint,
  EarthquakeRoad,
  HighRiskPoint,
} from "./components";
import WeatherLeftPart from "./weather/left-part.vue";
import WeatherRightPart from "./weather/right-part.vue";
import EarthquakeLeftPart from "./earthquake/left-part.vue";
import EarthquakeRightPart from "./earthquake/right-part.vue";
import map from "./map";

export default {
  mixins: [map],

  components: {
    DisasterPoint,
    DisasterWarnChart,
    RectificationProgress,
    DisasterType,
    DistrictDisaster,
    DisasterPreview,
    DisasterPublicity,
    DisasterPoint2,
    DisasterPoint3,
    DisasterRiskChart,
    DisasterWeather,
    DisasterEarthquake,
    EarthquakePoint,
    EarthquakeRoad,
    HighRiskPoint,
    WeatherLeftPart,
    WeatherRightPart,
    EarthquakeLeftPart,
    EarthquakeRightPart,
  },
  data() {
    return {
      showPicScreen: false,
      picSrc: "",
      selectDistrictType: "weather",
      btnList: [
        {
          name: "气象",
          defaultPic: require("@/assets/images/menu/menu1.png"),
          activePic: require("@/assets/images/menu/menu1_1.png"),
          path: "/disasterWeather",
        },
        {
          name: "地震",
          defaultPic: require("@/assets/images/menu/menu2.png"),
          activePic: require("@/assets/images/menu/menu2_1.png"),
          path: "/disasterEarthquake",
        },
      ],
    };
  },

  methods: {
    previewPic(event) {
      this.showPicScreen = true;
      if (event.target.src) {
        this.picSrc = event.target.src;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.screen-page {
  .level-tag {
    font-size: px2vw(16);
    padding: px2vh(2) px2vw(14);
  }
}
.btn-changeType {
  width: 100vw;
  font-size: px2vw(20);
  padding-top: px2vh(80);
  display: flex;
  justify-content: center;

  .menu-item {
    width: px2vw(153);
    height: px2vw(42);
    line-height: px2vw(42);
    position: relative;
    text-align: center;
    margin-right: px2vw(20);
    cursor: pointer;
    background-image: url("./assets/select-tab.png");
    background-size: 100% 100%;
    &.active {
      background-image: url("./assets/select-tab-active.png");
    }

    .item-name {
      bottom: px2vw(40);
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: px2vw(18);
      color: #c6e6ff;
    }
    .active {
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-size: px2vw(18);
      color: #ffffff;
      text-shadow: #00c0ff 1px 0 10px;
    }
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

.video-container {
  margin-top: 2vh;
  position: relative;
  width: 49%;
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
  max-height: px2vw(272);
  box-sizing: border-box;
}

.district-disaster-wrapper {
  height: px2vw(280);
  padding: px2vh(20);
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

.btn-changeType {
  z-index: 20;
}

.right-part {
  right: 0;
  z-index: 10;
  padding-bottom: 10vh !important;
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
        flex: 1;
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

.left-part {
  left: 0;
  padding-bottom: 10vh;
  z-index: 10;
}
</style>

<style lang="scss">
.select-city-disaster {
  .el-input__inner {
    width: px2vw(180);
    height: px2vw(38);
    background: linear-gradient(
      0deg,
      rgba(0, 14, 30, 0.35),
      rgba(14, 68, 133, 0.18)
    );
    border: px2vw(2) solid;
    color: #c0dcea;
    font-size: px2vw(14);
    overflow: hidden;
    // border-image: radial-gradient(circle, #00C3FF, #4CB5C7, #010404, #4CB5C7, #00C3FF) px2vw(4) round;
  }

  .el-input__suffix {
    color: #c0dceb;
  }
}
</style>
