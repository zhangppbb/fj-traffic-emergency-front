<template>
  <div class="screen-page">

    <div class="h-full flex box-border">
      <!-- <Left /> -->
      <div class="left-part part-container">
        <ChartWrapper
        class="chart-wrapper-item"
        title="桥梁基本信息"
        >
        <BridgeProfile/>
        </ChartWrapper>

         <ChartWrapper
          class="chart-wrapper-item"
          title="桥梁技术参数"
        >
          <BeamTechnicalParams />
        </ChartWrapper>

         <ChartWrapper
          class="chart-wrapper-item"
          title="桥梁管理与状态"
        >
          <BridgeManageStatus />
        </ChartWrapper>
      </div>

      <div class="middle-part flex flex-col justify-between">

        <StructureComponent></StructureComponent>

        <OnlineVideo/>
      </div>

     <!-- <Right /> -->
      <div class="right-part part-container">
          <ChartWrapper
          class="chart-wrapper-item"
          title="桥梁管理与状态"
        >
          <GeoImage />
        </ChartWrapper>

         <ChartWrapper
          class="chart-wrapper-item"
          title="监测点统计"
        >
          <MonitorPoint :points="[
              {
                name: '位移监测点',
                value: '16'
              },
                {
                name: '应力监测点',
                value: '32'
              },
              {
                name: '振动监测点',
                value: '12'
              },
              {
                name: '视频监测点',
                value: '6'
              }
            ]" />
        </ChartWrapper>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BeamTechnicalParams,
  BridgeProfile,
  BridgeManageStatus,
  GeoImage,
  OnlineVideo,
  StructureComponent
} from "./components";
import { MonitorPoint } from '../../../components'
import mockData from './mockData'

export default {
  // mixins: [map],
  mixins: [mockData],

  components: {
    BeamTechnicalParams,
    BridgeProfile,
    BridgeManageStatus,
    GeoImage,
    MonitorPoint,
    OnlineVideo,
    StructureComponent
  },
};
</script>

<style lang="scss" scoped>
.screen-page {
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/images/bg.png');
  background-size: cover;
}


#map {
  background-color: #000;
  /* 纯蓝色背景 */
}

.right-part {
  right: 0;
  z-index: 10;
  margin-right: px2vw(30);
}

.part-container {
  width: px2vw(466);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  height: calc(100vh - #{px2vh(74)});
  margin-top: px2vh(74);
  padding-bottom: px2vh(30);
  // background: linear-gradient(
  //   90deg,
  //   rgba(9, 30, 55, 0.72) 0%,
  //   rgba(11, 31, 52, 0.2) 100%
  // );
  // border: 1px red solid;
  top: 0;

  .part-mini-container {
    width: calc(#{px2vw(455)}-#{px2vw(30)});
  }

  .part-max-container {
    width: calc(100vw - #{px2vw(510)});
  }

  .banner {
    height: 100%;
  }

  // background-color: rgba(255, 255, 255, 0.3);
}

// 地图
.middle-part {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - #{px2vh(74)});
  margin-top: px2vh(74);
  padding: 0 px2vw(20);
  padding-bottom: px2vh(30);
  box-sizing: border-box;
}

.left-part {
  left: 0;
  z-index: 10;
  margin-left: px2vw(30);
}
</style>
