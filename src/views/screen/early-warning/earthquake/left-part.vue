<template>
    <div class="left-part part-container">
      <GisScreenDialog
        title="地震影响的路段预警任务下发"
        v-model="dialogVisible"
        width="740px"
        center
        custom-class="gis-screen-dialog"
      >
      <div class="task-distribution-container">
        <TaskDistribution
          :disasterList="[
            {
              province: '云南',
              reason: '地震',
              line: 'G352',
              count: 3,
            }
          ]"
          @confirm="dialogVisible = false"
        />
      </div>
    </GisScreenDialog>

      <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="最新地震信息">
        <div class="chart-wrapper-mini p-sm-vw w-full h-full">
          <EarthquakePoint />
        </div>
      </ChartWrapper>

      <ChartWrapper
        class="chart-wrapper-item mb-sm-vw"
        title="地震影响的路段预警"
      >
        <div class="chart-wrapper-mini p-sm-vw w-full h-full">
          <EarthquakeRoad @confirm="dialogVisible = true" />
        </div>
      </ChartWrapper>

      <ChartWrapper class="chart-wrapper-item" title="高风险灾害点处理进展">
        <div
          class="chart-wrapper-mini flex items-center pr-sm-vw pl-sm-vw pt-sm-vw"
        >
          <DisasterPoint3
            :total="2"
            :highway="8"
            :province="23"
          />
        </div>
      </ChartWrapper>

      <!-- <img class="banner" src="@/assets/images/app/right-banner.png" alt=""> -->
    </div>
  </template>

  <script lang="js">
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
    TaskDistribution
  } from "../components";

  export default {
    components: {
      TaskDistribution,
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
    },

    data() {
      return {
        // 任务下达
        dialogVisible: false
      }
    }
  }
</script>


<style lang="scss" scoped>
// 任务下达弹窗
.task-distribution-container {
  padding: 0 px2vw(35);
  padding-top: px2vh(24);
  padding-bottom: px2vh(20);
}
</style>

