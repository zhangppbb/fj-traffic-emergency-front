<template>
  <div class="right-part part-container">
    <ChartWrapper
      class="chart-wrapper-item mb-sm-vw"
      title="高风险灾害点巡查任务跟踪"
    >
      <div class="p-sm-vw w-full h-full">
        <!-- <EarthquakePoint /> -->
        <PatrolTaskTracking
          :total="11"
          :completed="5"
          :processing="6"
          :trackingPoints="[
            {
              date: '2025-03-21',
              name: '高风险灾害点巡查任务跟踪',
              province: 1,
              point: 3,
              feedback: 2,
              received: 1,
              points: [
                {
                  province: '云南',
                  reason: '小雨',
                  line: 'G348',
                  receive: 0,
                  handle: 1,
                  count: 3,
                },
              ],
            },
            {
              date: '2025-03-20',
              name: '高风险灾害点巡查任务跟踪',
              province: 3,
              point: 5,
              feedback: 1,
              received: 4,
              points: [
                {
                  province: '西藏',
                  reason: '中雨',
                  line: 'G214滇藏线',
                  receive: 0,
                  handle: 1,
                  count: 3,
                },
                {
                  province: '四川',
                  reason: '小雨',
                  line: 'G348',
                  receive: 0,
                  handle: 1,
                  count: 1,
                },
                {
                  province: '云南',
                  reason: '小雨',
                  line: 'G214',
                  receive: 0,
                  handle: 1,
                  count: 1,
                },
              ],
            },
            {
              date: '2025-03-19',
              name: '高风险灾害点巡查任务跟踪',
              province: 2,
              point: 3,
              feedback: 2,
              received: 1,
              points: [
                {
                  province: '四川',
                  reason: '中雨',
                  line: '京昆高速',
                  receive: 0,
                  handle: 1,
                  count: 2,
                },
                {
                  province: '云南',
                  reason: '小雨',
                  line: 'G245',
                  receive: 0,
                  handle: 1,
                  count: 1,
                },
              ],
            },
          ]"
        />
      </div>
    </ChartWrapper>

    <!-- <ChartWrapper
        class="chart-wrapper-item mb-sm-vw"
        title="地震影响的路段预警"
      >
        <div class="chart-wrapper-mini p-sm-vw w-full h-full">
          <EarthquakeRoad />
        </div>
      </ChartWrapper> -->

    <ChartWrapper class="chart-wrapper-item" title="高风险灾害点分布">
      <div
        class="chart-wrapper-mini flex flex-col items-center justify-center pt-xs-vw pr-sm-vw pl-sm-vw"
      >
        <HighRiskPoint />
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
  PatrolTaskTracking
} from "../components";

export default {
  components: {
    PatrolTaskTracking,
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
}
</script>
