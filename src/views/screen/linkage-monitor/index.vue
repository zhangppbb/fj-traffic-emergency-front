<template>
  <div class="screen-page">
    <GisScreenRiskDialog
      title="高风险突发事件预警"
      v-model="emergencyDialogVisible"
      width="44vw"
      center
      custom-class="gis-screen-dialog"
    >
      <emergencyDialog v-if="emergencyDialogVisible"
          @confirm="emergencyDialogVisible = false"
          @emergencyClassification="emergencyClassification"
      ></emergencyDialog>
    </GisScreenRiskDialog>
    <GisScreenDialog
      title="联动协同"
      v-model="dialogVisible"
      width="640px"
      center
      custom-class="gis-screen-dialog"
    >
      <div>
        <div class="flex pt-xl-vw pb-xl-vw items-center justify-center">
          <img style="height: 8vh;width:12vh" src="./assets/user.png" class="" alt="" />
          <div class="items-center">
            <div class="call-phone">正在呼叫手机...</div>
            <div class="call-name">现场指挥 张三</div>
          </div>
        </div>

        <!-- 功能按钮区域 -->
        <div class="flex items-center justify-center pb-16">
          <div class="btn-item">
            <img style="height: 5vh;width:5vh" src="./assets/audio.png" class="" alt="" />
            <span>音频</span>
          </div>
          <div class="btn-item">
            <img style="height: 5vh;width:5vh" src="./assets/mute.png" class="" alt="" />
            <span>静音</span>
          </div>
          <div class="btn-item hangup">
            <img style="height: 5vh;width:5vh" src="./assets/hangup.png" class="" alt="" />
            <span>挂断</span>
          </div>
          <div class="btn-item">
            <img style="height: 5vh;width:5vh" src="./assets/video.png" class="" alt="" />
            <span>视频</span>
          </div>
          <div class="btn-item">
            <img style="height: 5vh;width:5vh" src="./assets/mail.png" class="" alt="" />
            <span>邮件</span>
          </div>
          <div class="btn-item">
            <img style="height: 5vh;width:5vh" src="./assets/sms.png" class="" alt="" />
            <span>短信</span>
          </div>
        </div>
      </div>
    </GisScreenDialog>
    <GisScreenDialog
      title="现场视频接入"
      v-model="dialogVideoVisible"
      width="640px"
      center
      custom-class="gis-screen-dialog"
    >
      <img src="./assets/video-pic.png" class="w-full" alt="" />
    </GisScreenDialog>
    <GisScreenDialog
      title="应急预案"
      v-model="emergencyPlanDialogVisible"
      width="640px"
      center
      custom-class="gis-screen-dialog"
    >
      <div class="flex pt-xl-vw pb-xl-vw items-center justify-center">
        <div class="items-center">
          <div class="plan-title text-center">山体滑坡和泥石流应急救援预案</div>
          <div class="plan-content pl-10 pr-10">为有效应对山体滑坡和泥石流等自然灾害，确保人员的生命安全和财产安全，制定本应急救援预案。预案旨在通过科学合理的组织安排和明确的应急处置流程，提高应急响应的快速性和有效性。</div>
        </div>
      </div>

        <div class="flex flex-1 button-center">
          <div class="button active" @click="openResourceMatching">一键启动</div>
          <div class="button inactive"  @click="emergencyPlanDialogVisible = false">暂不启动</div>
        </div>

    </GisScreenDialog>
    <GisScreenDialog
      title="资源匹配"
      v-model="resourceMatchingDialogVisible"
      width="640px"
      center
      custom-class="gis-screen-dialog"
    >
      <resourceMatching v-if="resourceMatchingDialogVisible"></resourceMatching>
    </GisScreenDialog>
    <GisScreenDialog
      title="公路数据"
      v-model="dialogVisibleHightWay"
      width="740px"
      center
      custom-class="gis-screen-dialog"
    >
      <div class="flex flex-col p-sm-vw pr-xl-vw" style="padding: 20px 30px;">
        <div class="mt-sm-vw flex" style="color: #00deff">
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

        <div class="mt-sm-vw flex" style="color: #00deff">
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

    <div class="h-full flex box-border">
      <!-- <Left /> -->
      <div class="left-part part-container">
        <ChartWrapper
          class="chart-wrapper-item"
          title="突发事件分布"
        >
          <EventDistribution />
        </ChartWrapper>

        <ChartWrapper
          class="chart-wrapper-item"
          title="突发预警事件"
        >
          <WarnEvent />
        </ChartWrapper>
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
        <Map
          style="width: 100%; height: 100%"
          :isTrafficNetworkSituation="isTrafficNetworkSituation"
          :isEmergencyForceDistribution="isEmergencyForceDistribution"
          :isEmergencyEventMarker="isEmergencyEventMarker"
        ></Map>


        <!-- 现场视频画面 -->
        <!-- <div class="online-video-container" v-if="isEmergencyCheck">
          <ChartWrapper
           title="现场视频画面"
         >
           <OnlineVideo />
         </ChartWrapper>
        </div> -->

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
        <LiveBroadcast />
        <ChartWrapper
           title="高速公路预警动态监测"
         >
           <RoadAlertMonitor v-bind="highwayMonitor" />
        </ChartWrapper>


        <ChartWrapper
           title="普通公路预警动态监测"
         >
           <RoadAlertMonitor v-bind="roadMonitor" />
        </ChartWrapper>

         <ChartWrapper
           title="水运港口预警动态监测"
         >
           <RoadAlertMonitor v-bind="portMonitor" />
        </ChartWrapper>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DisasterHighwayDialog,
  emergencyDialog,
  resourceMatching,
  RoadNetwork,
  EventDistribution,
  WarnEvent,
  LiveBroadcast,
  RoadAlertMonitor
} from "./components";
import BIAN_PO from "@/assets/images/app/bianpo.png";
import GAO_SU from "@/assets/images/app/gaosu.png";
import { calcRatioNP, toWan, formatNum } from "@/utils/number";
import Map from "./Map/index.vue";
import mockData from './mockData'

export default {
  // mixins: [map],
  mixins: [mockData],

  components: {
    RoadNetwork,
    EventDistribution,
    WarnEvent,
    RoadAlertMonitor,
    LiveBroadcast
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
      emergencyDialogVisible:false,
      emergencyDialogVisibleModel:{

      },
      // 监测模式 日常/紧急
      isEmergencyCheck: false, // 是否为紧急监测模式

      // 是否显示交通路网态势
    isTrafficNetworkSituation: true,

// 是否显示应急力量分布
    isEmergencyForceDistribution: true,

// 是否显示应急事件标注
    isEmergencyEventMarker: true,

       // 是否为预警
       isBianPo: false,
      // 弹窗
      dialogVisible: false,
      emergencyPlanDialogVisible:false,
      resourceMatchingDialogVisible:false,

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

    /**
     * 切换监测模式
     */
    changeEmergencyStatus() {
      this.isEmergencyCheck = !this.isEmergencyCheck
    },
    emergencyClassification(){
      this.isEmergencyCheck = true
      this.emergencyDialogVisible = false
    },
    openVideo(){
      this.dialogVisible = true
      setTimeout(() => {
        this.dialogVisible = false
        this.dialogVideoVisible = true
      }, 2000); // 3秒后自动跳转
    },
    openResourceMatching(){
      this.emergencyPlanDialogVisible = false
      this.resourceMatchingDialogVisible = true
    }
  },
};
</script>

<style lang="scss" scoped>
// 一键匹配
.response-force-button {
  width: px2vw(80);
  height: px2vh(24);
  line-height: px2vh(24);
  border-radius: px2vw(4);
  background-color: rgba(45,116,178,0.5);
  color: rgba(255,255,255,1);
  font-size: px2vw(12);
  text-align: center;
  cursor: pointer;
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
  margin-right: px2vw(30);
}

.part-container {
  position: fixed;
  width: px2vw(470);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: px2vh(74);
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
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 1;


  // 控制台
  & > .controls-container {
    left: 50%;
    transform: translateX(-50%);
    top: px2vh(100);
    position: absolute;
    width: px2vw(160);
    height: px2vh(56);
    background-image: url('./assets/controls-button.png');
    background-size: 100% 100%;
    color: #fff;
    font-size: px2vw(18);
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    z-index: 10;
  }
}

.left-part {
  left: 0;
  z-index: 10;
  margin-left: px2vw(30);
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
.call-phone{
  color: #ffff;
  font-size: px2vw(16);
  padding-bottom: px2vw(12);
}
.call-name{
  color: #ffff;
  font-size: px2vw(24);
}
.btn-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: px2vw(100);
  height: px2vw(100);
  transition: all 0.2s;

  span {
    color: #fff;
    font-size: px2vw(16);
    padding-top: px2vw(10);
  }
}
.plan-title{
  color: #ffff;
  font-size: px2vw(24);
  padding-bottom: px2vw(12);
}
.plan-content{
  color: #ffff;
  font-size: px2vw(16);
  padding-bottom: px2vw(12);
}


.button-center {
  justify-content: center;
  padding: px2vw(10);
  display: flex;
  gap: px2vw(10);
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
