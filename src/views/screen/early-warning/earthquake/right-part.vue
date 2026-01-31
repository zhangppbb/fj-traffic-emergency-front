
<template>
  <div class="right-part part-container">

    <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="高风险灾害点巡查任务跟踪">
        <div class="p-sm-vw w-full h-full">
          <!-- <EarthquakePoint /> -->
          <PatrolTaskTracking
            :total="9"
            :completed="5"
            :processing="4"
            :trackingPoints="[
              {
                date: '2025-03-20',
                name: '高风险灾害点巡查任务跟踪',
                province: 1,
                point: 2,
                feedback: 1,
                received: 2,
                points: [
                  {
                    province: '云南',
                    reason: '地震',
                    line: 'G352',
                    receive: 1, 
                    handle: 1,
                    count: 2,
                  }
                ]
              },
              {
                date: '2025-03-18',
                name: '高风险灾害点巡查任务跟踪',
                province: 2,
                point: 4,
                feedback: 2,
                received: 2,
                points: [
                  {
                    province: '四川',
                    reason: '中雨',
                    line: '银昆高速',
                    receive: 0, 
                    handle: 1,
                    count: 2,
                  },
                  {
                    province: '四川',
                    reason: '地震',
                    line: 'S213',
                    receive: 0, 
                    handle: 1,
                    count: 1,
                  },
                  {
                    province: '新疆',
                    reason: '地震',
                    line: 'G219',
                    receive: 0, 
                    handle: 2,
                    count: 1,
                  }
                ]
              },
              {
                date: '2025-03-17',
                name: '高风险灾害点巡查任务跟踪',
                province: 2,
                point: 3,
                feedback: 2,
                received: 1,
                points: [
                  {
                    province: '重庆',
                    reason: '地震',
                    line: 'G211',
                    receive: 1, 
                    handle: 1,
                    count: 2,
                  },
                  {
                    province: '四川',
                    reason: '地震',
                    line: '西丽高速',
                    receive: 1, 
                    handle: 2,
                    count: 1,
                  }
                ]
              }
            ]"
          />
        </div>
      </ChartWrapper>
    <!-- <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="异常气象预警">
      <div class="flex flex-col district-disaster-wrapper">
        <div class="flex-1 overflow-hidden pr-sm-vw pl-sm-vw">
          <DisasterPoint />
        </div>
      </div>
    </ChartWrapper> -->

    <!-- <ChartWrapper class="chart-wrapper-item mb-sm-vw" title="高风险灾害点">
      <div
        class="chart-wrapper-mini flex items-center pr-sm-vw pl-sm-vw pt-sm-vw"
      >
        <DisasterPoint2 />
      </div>
    </ChartWrapper> -->


    
    <ChartWrapper class="chart-wrapper-item" title="高风险灾害点分布">
      <div
        class="chart-wrapper-mini flex flex-col items-center justify-center pt-xs-vw pr-sm-vw pl-sm-vw"
      >
        <HighRiskPoint />
      </div>
    </ChartWrapper>
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