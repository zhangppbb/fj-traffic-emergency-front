<template>
  <div class="screen-page">
    <!-- 预警元素 -->
    <div class="alert-side alert-left"></div>
    <div class="alert-side alert-right"></div>

    <PictureScreenRiskDialog
      title="高风险点灾害预览"
      v-model="showPicScreen"
      width="90vw"
      center
      custom-class="gis-screen-dialog"
    >
    <img style="height: 50vw;padding: 0 10px;"  :src="picSrc" class="w-full" alt="灾害点图片" />
    </PictureScreenRiskDialog>
    <GisScreenRiskDialog
      title="高风险点灾害预警"
      v-model="riskdialogVisible2"
      width="44vw"
      center
      custom-class="gis-screen-dialog"
    >
    <div class="flex flex-col pt-xl-vw pb-xl-vw pl-md-vw pr-xl-vw">
        <div
          class="name-container gis-ys-font"
        >
          {{ weatherPoint.name }}-{{ weatherPoint.disaster_type }}
        </div>
        <div class="flex mt-xs-vw justify-between" style="color: #fff7f5">
          <div><span class="font-bold">所属公路段：</span>{{ weatherPoint.road_name }}</div>
          <div>
            <span class="font-bold">灾害等级：</span>
            <span style="color: #df7f44">{{ weatherPoint.design_level }}</span>
          </div>
          <!-- <div><span class="font-bold">预警原因：</span>强降雨导致位移加速</div> -->
        </div>

        <!-- <div
          class="name-container mt-xs-vw"
          style="
            background-image: -webkit-linear-gradient(top, #fdffff, #ffd1b0);
          "
        >
          24小时位移监测图
        </div> -->
        <!-- <div style="height: 20vh">
          <DisasterRiskChart />
        </div> -->

        <div
          class="name-container mt-md-vw gis-ys-font"
        >
          实时影像数据
        </div>

        <div class="flex justify-between" v-if="weatherPoint.images">
          <div class="video-container mini"  v-for="(item, index) in weatherPoint.images" :key="item">
            <div class="video-text">点位{{ index + 1 }}</div>
            <img
              style="height: 14vh"
              :src="item"
              class="w-full"
              alt="灾害点图片"
              @click="previewPic($event)"
            />
            <div class="video-time">2025-3-14 13:03:0{{ index + 3 }}</div>
          </div>
          <!-- <div class="video-container mini">
            <div class="video-text">点位2</div>
            <img
              style="height: 14vh"
              src="https://img2.baidu.com/it/u=905168064,2018927940&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=449"
              class="w-full"
              alt="灾害点图片"
            />
            <div class="video-time">2025-3-14 13:03:09</div>
          </div>
          <div class="video-container mini">
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
      </div>
    </GisScreenRiskDialog>

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
</template>

<script>
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
  width: 30%;
}

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
</style>