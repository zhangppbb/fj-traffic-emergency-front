<template>
  <div class="screen-page">
    <div class="h-full flex p-6 box-border">
      <!-- <Left /> -->
      <div class="left-part part-container">
        <!-- 区划地质灾害 -->
        <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="泥石流灾害治理案例">
          <Washout />
        </ChartWrapper>
        <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="崩塌灾害治理案例">
          <Washout />
        </ChartWrapper>
        <ChartWrapper class="chart-wrapper-item" title="灾害治理相关政策标准">
          <div class="pr-sm-vw pl-sm-vw pt-sm-vw">
            <Policy />
          </div>
        </ChartWrapper>

        <!-- <ChartWrapper class="chart-wrapper-item" title="灾害影像">
          <div
            class="chart-wrapper-mini flex flex-col items-center justify-center pr-sm-vw pl-sm-vw"
          >
            <DisasterPreview
              :data="[
                {
                  id: 1,
                  name: '害点1',
                  type: 'mage',
                  url: 'https://example.com/disaster1.jpg',
                  time: '2025-02-27 16:03:09',
                },
                {
                  id: 2,
                  name: '害点2',
                  type: 'mage',
                  url: 'https://example.com/disaster1.jpg',
                  time: '2025-02-27 16:03:09',
                },
              ]"
            />
          </div>
        </ChartWrapper> -->
      </div>

      <div class="middle-part">
        <!-- <Map /> -->
        <div id="map" style="width: 100%; height: 100%"></div>
        <!-- <div id="cesiumContainer" style=" width: 100%; height: 100%"></div> -->

        <!-- <div class="flex-1 overflow-hidden">
          <Model title="乡村振兴工作简述">
            <div class="h-full overflow-y-auto py-2 px-6 box-border text-white">
              <div v-for="(item,index) in gloryArr" :key="index" class="gloryItem">{{ item }}</div>
            </div>
          </Model>
        </div> -->
      </div>
      <div class="right-part part-container">
        <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="滑坡灾害治理案例">
          <Washout />
        </ChartWrapper>
        <!-- 区划地质灾害 -->
        <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="水毁及水毁灾害治理案例">
          <Washout />
        </ChartWrapper>

        <ChartWrapper class="chart-wrapper-item" title="灾害治理方案推文">
          <div class="pr-sm-vw pl-sm-vw pt-sm-vw">
            <Solution/>
          </div>
        </ChartWrapper>
        <!-- <img class="banner" src="@/assets/images/app/right-banner.png" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Solution, Washout, Policy } from "./components";
import BIAN_PO from "@/assets/images/app/bianpo.png";
import GAO_SU from "@/assets/images/app/gaosu.png";
import WARN_ICON from "@/assets/images/app/warn-icon.gif";
import { calcRatioNP } from "@/utils/number";
// import map from './map.js'

export default {
  mixins: [map],

  components: {
    Solution,
    Washout,
    Policy,
  },

  data() {
    return {
      // 弹窗
      dialogVisible: false,

      // 是否为预警
      isBianPo: false,

      // 地图边界数据
      resultBoundsLayer: null,

      // 表单
      form: {
        city: "",
      },

      // 区划灾害数量
      districtDisasterModel: {
        // 南部
        southern: 0,
        // 中部
        central: 0,
        // 北部
        northern: 0,
      },
      // 灾害点动态信息
      disasterPointInfo: {
        red: 34,
        orange: 45,
        yellow: 45,
        total: 148,
      },

      // 灾害类型
      disasterTypeModel: {
        // 崩塌
        bt: 0,
        // 塌陷
        tx: 0,
        // 滑坡
        hp: 0,
        // 泥石流
        nsl: 0,
        // 水毁
        sh: 0,
      },

      // 灾害整改
      rectificationProgressModel: {
        total: 0,
        already: 0,
        deal: 0,
      },
    };
  },

  computed: {
    // 图标
    dialogIcon() {
      return this.isBianPo ? BIAN_PO : GAO_SU;
    },

    // 总数
    disasterTypeCount() {
      const { bt, tx, hp, nsl, sh } = this.disasterTypeModel;
      const count = bt + tx + hp + nsl + sh;
      return count;
    },

    // 灾害类型图表配置
    disasterTypeOption() {
      const { bt, tx, hp, nsl, sh } = this.disasterTypeModel;
      const count = this.disasterTypeCount;

      return [
        {
          name: "一级",
          value: bt,
          percent: calcRatioNP(bt, count),
          color: "#006CFF",
        },
        {
          name: "二级",
          value: tx,
          percent: calcRatioNP(tx, count),
          color: "#21FCFF",
        },
        {
          name: "三级",
          value: hp,
          percent: calcRatioNP(hp, count),
          color: "#D4CC4F",
        },
        // {
        //   name: "泥石流",
        //   value: nsl,
        //   percent: calcRatioNP(nsl, count),
        //   color: "#3EFF99",
        // },
        // {
        //   name: "水毁",
        //   value: sh,
        //   percent: calcRatioNP(sh, count),
        //   color: "#FFD84A",
        // },
      ];
    },
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.chart-wrapper-mini {
  // flex: 1;
  max-height: px2vw(272);
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
  z-index: 10;
}
</style>

<style lang="scss">
.gis-screen-dialog {
  background-color: transparent !important;
  box-shadow: none !important;
  .el-dialog__header {
    display: none !important;
  }
  .el-dialog__body {
    padding: 0 !important;

    .dialog-banner {
      width: 740px;
      height: 648px;
    }
  }
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
