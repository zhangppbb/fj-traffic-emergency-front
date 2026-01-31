<template>
  <div class="left-part part-container">
    <GisScreenDialog
      title="高风险灾害点巡查任务下发"
      v-model="dialogVisible"
      width="740px"
      center
      custom-class="gis-screen-dialog"
    >
      <div class="task-distribution-container">
        <TaskDistribution
          :disasterList="[
            {
              province: '西藏',
              reason: '中雨',
              line: 'G214滇藏线',
              count: 3,
            },
            {
              province: '四川',
              reason: '小雨',
              line: 'G348',
              count: 1,
            },
            {
              province: '云南',
              reason: '小雨',
              line: 'G214',
              count: 1,
            }
          ]"
          @confirm="dialogVisible = false"
        />
      </div>
    </GisScreenDialog>

    <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="异常气象预警">
      <div class="flex flex-col district-disaster-wrapper">
        <div class="flex-1 overflow-hidden pr-sm-vw pl-sm-vw">
          <DisasterPoint />
        </div>
      </div>
    </ChartWrapper>

    <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="高风险灾害点">
      <div
        class="chart-wrapper-mini flex items-center pr-sm-vw pl-sm-vw pt-sm-vw"
      >
        <DisasterPoint2 @confirm="dialogVisible = true" />
      </div>
    </ChartWrapper>

    <ChartWrapper class="chart-wrapper-item" title="异常天气区域及灾害点统计">
      <div
        class="chart-wrapper-mini flex items-center pr-sm-vw pl-sm-vw pt-sm-vw"
      >
        <DisasterPoint3
          :total="52"
          :highway="16"
          :province="3"
        />
      </div>
    </ChartWrapper>
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
  TaskDistribution,
  TaskList
} from "../components";

export default {
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
    TaskDistribution,
    TaskList
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
