<template>
  <div class="screen-page">
    <!-- 预警元素 -->
    <div class="alert-side alert-left"></div>
    <div class="alert-side alert-right"></div>

    <PictureScreenRiskDialog
      title="灾害实时预览"
      v-model="showPicScreen"
      width="64vw"
      center
      custom-class="gis-screen-dialog"
    >
      <img
        style="height: 37.6vw; padding: 0 7px"
        :src="picSrc"
        class="w-full"
        alt="灾害点图片"
      />
    </PictureScreenRiskDialog>

    <!-- DI Zhen -->
    <GisScreenRiskDialog
      title="地震点"
      v-model="riskdialogVisible1"
      width="44vw"
      center
      custom-class="gis-screen-dialog"
      v-if="earthquakePoint.time"
    >
      <div class="flex flex-col pt-xl-vw pb-xl-vw pl-md-vw pr-xl-vw">
        <div
          class="name-container gis-ys-font"
        >
          发震时刻(UTC+8)：{{ earthquakePoint.time }}
        </div>
        <div
          class="flex flex-wrap mt-xs-vw justify-between"
          style="color: #fff7f5"
        >
          <div>
            <span class="font-bold">震中位置：</span
            >{{ earthquakePoint.location }}
          </div>

          <div>
            <span class="font-bold">震源深度(千米)：</span
            >{{ earthquakePoint.depth_km }}
          </div>

          <div>
            <span class="font-bold">震级(M) ：</span>{{ earthquakePoint.magnitude }}
          </div>
        </div>

        <div
          class="name-container mt-xs-vw gis-ys-font"
          style="
            margin-top: 30px;
          "
        >
          实时影像数据
        </div>

        <div class="flex justify-between">
          <div
            class="video-container mini"
            v-for="(item, index) in earthquakePoint.images"
            :key="item"
            >
            <div class="video-text">点位{{ index + 1 }}</div>
            <img
              style="height: 20vh"
              @click="previewPic($event)"
              :src="item"
              class="w-full"
              alt="灾害点图片"
            />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div>
          <!-- <div class="video-container mini">
            <div class="video-text">点位2</div>
            <img
              style="height: 20vh"
              @click="previewPic($event)"
              src="https://img1.baidu.com/it/u=1666098585,1292812837&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=760"
              class="w-full"
              alt="灾害点图片"
            />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div> -->
          <!-- <div class="video-container mini">
            <div class="video-text">点位3</div>
            <img style="height: 14vh" src="https://q3.itc.cn/q_70/images01/20241018/4b20eec933c54dcda1a964da6d43206f.jpeg" class="w-full" alt="灾害点图片" />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div> -->
        </div>

        <div
          class="name-container gis-ys-font mt-xs-vw"
        ></div>
        <!-- <div style="height: 20vh;"> -->
        <!-- <DisasterRiskChart /> -->
        <!-- </div> -->
      </div>
    </GisScreenRiskDialog>

    <div class="h-full flex p-6 box-border">
      <div class="middle-part">
        <div id="map" style="width: 100%; height: 100%"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { earthquakeData } from "../../data/earthquake-mock";
import map from "./map";

export default {
  mixins: [map],

  components: {},
};
</script>

<style lang="scss" scoped>
#map {
  background-color: #000; /* 纯蓝色背景 */
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
  z-index: 10;
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
</style>
