<template>
  <div class="screen-page">
    <GisScreenDialog
      title="灾害点数据"
      v-model="dialogVisible"
      width="740px"
      center
      custom-class="gis-screen-dialog"
    >
      <div class="flex flex-col p-sm-vw pr-xl-vw"  style="padding: 20px 30px;">
        <div class="mt-sm-vw mb-sm-vw flex" style="color: #00deff">
          <div
            style="width: 0.2vw; height: 2vh; background-color: #28fdf9"
            class="mr-xs-vw"
          ></div>
          灾害点信息
        </div>
        <div class="text-white mt-xs-vw">
          <div style="width: 100%;" class="flex">
            <div class="point-situation">
              <span style="color: #00deff">灾害点编号：</span>
              {{ dialogVisibleModel.灾害编号 || "-" }}
            </div>

            <div class="point-situation">
              <span style="color: #00deff">名称：</span>
              {{ dialogVisibleModel.灾害名称 || "-" }}
            </div>
          </div>
          <div style="width: 100%;" class="flex">
            <div class="point-situation">
              <span style="color: #00deff">上报时间：</span>
              {{ dialogVisibleModel.最近发生时间 || "-" }}
            </div>

            <div class="point-situation">
              <span style="color: #00deff">位置：</span>
              {{ dialogVisibleModel.经度  || "-" }}{{ dialogVisibleModel.纬度  || "-" }}
            </div>
          </div>
          <div style="width: 100%;" class="flex">
            <div class="point-situation">
              <span style="color: #00deff">类型：</span>
              {{ dialogVisibleModel.灾害类型 || "-" }}
            </div>

            <div class="point-situation">
              <span style="color: #00deff">等级：</span>
              {{ dialogVisibleModel.灾害等级 || "-" }}
            </div>
            </div>
          <div style="width: 100%;" class="flex">
            <div class="point-situation">
              <span style="color: #00deff">所属道路：</span>
              {{ dialogVisibleModel.线路名称 || "-" }}
            </div>

            <div class="point-situation">
              <span style="color: #00deff">管养单位：</span>
              {{ dialogVisibleModel.管养单位 || "-" }}
            </div>
          </div>
        </div>

        <!-- <div class="mt-sm-vw mb-sm-vw flex" style="color: #00deff">
          <div
            style="width: 0.2vw; height: 2vh; background-color: #28fdf9"
            class="mr-xs-vw"
          ></div>
          历史灾害数据
        </div> -->
        <!-- <DisasterPointDialog :name="dialogVisibleModel.ROAD_CATEGORY" /> -->
      </div>
    </GisScreenDialog>
    <GisScreenDialog
      title="公路数据"
      v-model="dialogVisibleHightWay"
      width="740px"
      center
      custom-class="gis-screen-dialog"
    >
      <div class="flex flex-col p-sm-vw pr-xl-vw" style="padding: 20px 30px;">
        <div class="mt-sm-vw mb-sm-vw flex" style="color: #00deff">
          <div
            style="width: 0.2vw; height: 2vh; background-color: #28fdf9"
            class="mr-xs-vw"
          ></div>
          公路详情
        </div>
        <div class="text-white mt-xs-vw">
          <div style="width: 100%;" class="flex">
            <div class="highWay-situation">
              <span style="color: #00deff">公路名称：</span>
              {{ dialogVisibleHightWayModel.F03 || "-" }}
            </div>

            <div class="highWay-situation">
              <span style="color: #00deff">公路编号：</span>
              {{ dialogVisibleHightWayModel.F01 || "-" }}
            </div>
          </div>
          <div style="width: 100%;" class="flex">
            <div class="highWay-situation" v-if="dialogVisibleHightWayModel.F01 && dialogVisibleHightWayModel.F01.length != 0">
              <span style="color: #00deff">公路等级：</span>
              {{ dialogVisibleHightWayModel.F01[0] == 'G' ? '国道' : '省道' }}
            </div>

            <div class="highWay-situation">
              <span style="color: #00deff">技术等级：</span>
              {{ dialogVisibleHightWayModel.F10 || "-" }}
            </div>
          </div>
          <div style="width: 100%;" class="flex">
            <div class="highWay-situation">
              <span style="color: #00deff">所属行政区域：</span>
              {{ "-" }}
            </div>

            <div class="highWay-situation">
              <span style="color: #00deff">管养单位：</span>
              {{ dialogVisibleHightWayModel.F35 || "-" }}
            </div>
          </div>
          <!-- <div>
            <span style="color: #00deff">道路等级：</span>
            {{ dialogVisibleHightWayModel.F01[0] == 'G' ? '国道' : '省道' }}
          </div>
          <div>
            <span style="color: #00deff">技术等级：</span>
            {{ dialogVisibleHightWayModel.F10 || "-" }}
          </div>
          <div>
            <span style="color: #00deff">所属行政区域：</span>
            {{ dialogVisibleHightWayModel.F35 || "-" }}
          </div>
          <div>
            <span style="color: #00deff">管养单位：</span>
            {{ dialogVisibleHightWayModel.F35 || "-" }}
          </div> -->
        </div>

        <div class="mt-sm-vw mb-sm-vw flex" style="color: #00deff">
          <div
            style="width: 0.2vw; height: 2vh; background-color: #28fdf9"
            class="mr-xs-vw"
          ></div>
          灾害点列表
        </div>
        <DisasterHighwayDialog :name="dialogVisibleModel.ROAD_CATEGORY" />
      </div>
    </GisScreenDialog>
        <!-- <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="740px"
      center
      custom-class="gis-screen-dialog"
    >
      <img
        @click.stop="dialogVisible = false"
        class="dialog-banner"
        :src="dialogIcon"
        alt=""
        srcset=""
      />
    </el-dialog> -->

    <div class="h-full flex p-6 box-border">
      <!-- <Left /> -->
      <div class="left-part part-container" @click="emergencyDialog">
        <!-- 区划地质灾害 -->
        <ChartWrapper
          class="chart-wrapper-item mb-sm-vw"
          title="实时预警"
        >
          <!-- 等级选择 -->
          <RealTime />
        </ChartWrapper>
        <ChartWrapper
          class="chart-wrapper-item mb-sm-vw"
          title="应急力量"
        >
          <ResponseForce/>
        </ChartWrapper>
        <ChartWrapper class="chart-wrapper-item" title="风险等级统计(万)">
          <DisasterType
            :data="disasterTypeOption"
            :total="disasterTypeCount"
            number-color="#00FFFF"
          />
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
      <!-- 地区选择 -->
      <!-- <div class="select-city-container">
        <el-select
          class="select-city-disaster"
          v-model="form.city"
          placeholder="请选择"
        >
          <el-option label="四川" value="四川"> </el-option>
          <el-option label="安徽" value="安徽"> </el-option>
          <el-option label="贵州" value="贵州"> </el-option>
        </el-select>
      </div> -->

      <div class="middle-part">
        <Map style="width: 100%; height: 100%"></Map>
        <!-- <div id="map" style="width: 100%; height: 100%"></div> -->
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
        <ChartWrapper
          class="chart-wrapper-item mb-sm-vw"
          title="灾害点动态信息"
        >
          <DynamicInfo :disasterPointInfo="disasterPointInfo" />
        </ChartWrapper>
        <!-- 区划地质灾害 -->
        <ChartWrapper
          class="chart-wrapper-item mb-sm-vw"
          title="重点区域一级灾害点(个)"
        >
          <SouthWest />
        </ChartWrapper>

        <ChartWrapper class="chart-wrapper-item" title="高风险灾害点">
          <div
            class="chart-wrapper-mini flex items-center pr-sm-vw pl-sm-vw pt-sm-vw"
          >
            <DisasterPoint />
          </div>
        </ChartWrapper>
        <!-- <img class="banner" src="@/assets/images/app/right-banner.png" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  DisasterPointDialog,
  DynamicInfo,
  SouthWest,
  DisasterPoint,
  DisasterWarnChart,
  DistrictDisaster,
  DisasterType,
  DisasterPreview,
  RectificationProgress,
  DisasterHighwayDialog,
  RealTime,
  ResponseForce
} from "./components";
import BIAN_PO from "@/assets/images/app/bianpo.png";
import GAO_SU from "@/assets/images/app/gaosu.png";
import { calcRatioNP, toWan, formatNum } from "@/utils/number";

export default {
  // mixins: [map],

  components: {
    RealTime,
    DisasterPointDialog,
    DisasterPoint,
    DisasterWarnChart,
    RectificationProgress,
    DisasterType,
    DistrictDisaster,
    DisasterPreview,
    SouthWest,
    DynamicInfo,
    DisasterHighwayDialog,
    ResponseForce,
  },

  data() {
    const disasterNum = {
      grade1: {
        southern: 24, // 高速
        central: 988, // 普通
        northern: 200, // 乡村
      },
      grade2: {
        southern: 394,
        central: 10295,
        northern: 4173,
      },
      grade3: {
        southern: 3320,
        central: 57209,
        northern: 27191,
      },
      grade4: {
        southern: 923,
        central: 26064,
        northern: 84717,
      },
    };

    return {
      // 弹窗
       dialogVisible: false,
       dialogVisibleModel: {
          title: '',
       },
       dialogVisibleHightWay: false,
       dialogVisibleHightWayModel: {
          title: ''
       },

       // 是否为预警
       isBianPo: false,
      // 弹窗
      dialogVisible: false,

      // 是否为预警
      isBianPo: false,

      // 地图边界数据
      resultBoundsLayer: null,

      // 表单
      form: {
        city: ''
      },

      // 区划灾害数量
      districtDisasterModel: {
        // 南部
        southern: 0,
        // 中部
        central: 0,
        // 北部
        northern: 0
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
        sh: 0
      },

      // 灾害整改
      rectificationProgressModel: {
        total: 0,
        already: 0,
        deal: 0
      },
      // 表单
      form: {
        disasterNumGrade: "all",
        disasterTypeGrade: "all",
      },

      // 灾害点统计
      districtDisasterModel: {
        all: {
          southern:
            disasterNum.grade1.southern +
            disasterNum.grade2.southern +
            disasterNum.grade3.southern,
          central:
            disasterNum.grade1.central +
            disasterNum.grade2.central +
            disasterNum.grade3.central,
          northern:
            disasterNum.grade1.northern +
            disasterNum.grade2.northern +
            disasterNum.grade3.northern,
        },
        ...disasterNum,
      },
      // 灾害点动态信息
      disasterPointInfo: {
        red: 34,
        orange: 45,
        yellow: 45,
        total: 124,
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
      return toWan(count)
      // return toWan(215511);
    },

    // 灾害类型图表配置
    disasterTypeOption() {
      const { bt, tx, hp, nsl, sh } = this.disasterTypeModel;
      const count = this.disasterTypeCount;

      return [
        {
          name: "一级",
          value: toWan(1215),
          // percent: calcRatioNP(toWan(bt), count),
          percent: calcRatioNP(toWan(1215), count),
          color: "rgba(0,108,255,1)",
        },
        {
          name: "二级",
          value: toWan(14862),
          percent: calcRatioNP(toWan(14862), count),
          color: "rgba(33,252,255,1)",
        },
        {
          name: "三级",
          value: toWan(87720),
          percent: calcRatioNP(toWan(87720), count),
          color: "rgba(212,204,79,1)",
        },
        {
          name: "四级",
          value: toWan(111704),
          percent: calcRatioNP(toWan(111704), count),
          color: "#8587E0",
        },
        // { name: '泥石流', value: nsl, percent: calcRatioNP(nsl, count), color: '#3EFF99' },
        // { name: '水毁', value: sh, percent: calcRatioNP(sh, count), color: '#FFD84A' }
      ];
    },
  },
  methods: {
    formatNum,
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
  align-items: center;

  .disaster-total-container {
    width: px2vw(225);
    height: px2vw(160);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("./assets/disaster-total.png");
    background-size: 100% 100%;

    .disaster-total-img {
      position: absolute;
    }
    .disaster-total-number {
      margin-top: px2vh(32);
      font-size: 24px;
      font-weight: 1000;
      font-family: YouSheBiaoTiHei;
      color: #f0a125;
    }
    .disaster-total-text {
      font-size: 16px;
      color: white;
    }
  }
  .disaster-total-header{
    height: px2vw(160);
  }
  .header {
    width: 100%;
    height: 33%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: 16px;
      color: #c4e5ff;
      margin: 0 px2vw(10);
    }

    &__value {
      display: flex;
      flex-direction: row;
      font-size: px2vw(28);
      font-weight: bold;
      color: #ffffff;
    }
  }
}

.screen-page {
  width: 100vw;
  height: 100vh;
  background: #f000;
}

// 等级选择
.select-grade-container {
  position: absolute;
  top: 28px;
  right: 12px;
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
  background-color: #000;
  /* 纯蓝色背景 */
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
    position: relative;
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
.select-disaster {
  .el-input__inner {
    width: px2vw(100);
    height: 24px;
    background: linear-gradient(
      0deg,
      rgba(0, 14, 30, 0.35),
      rgba(14, 68, 133, 0.18)
    );
    border: none;
    color: #c0dcea;
    font-size: px2vw(14);
    overflow: hidden;
    // border-image: radial-gradient(circle, #00C3FF, #4CB5C7, #010404, #4CB5C7, #00C3FF) px2vw(4) round;
  }

  .el-input__suffix {
    color: #c0dceb;

    .el-input__icon {
      line-height: 24px !important;
    }
  }
}

.name-container {
  font-family: YouSheBiaoTiHei;
  font-size: px2vw(18);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.highWay-situation{
  width: 50%;
  padding-bottom: 15px;
}
.point-situation{
  width: 50%;
  padding-bottom: 15px;
}
</style>
