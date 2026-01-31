<template>
  <div class="screen-page">

    <div class="h-full flex box-border screen-page-content">
      <!-- <Left /> -->
      <div class="left-part part-container">
        <ChartWrapper
        class="chart-wrapper-item domestic-card"
        title="边坡概况"
        >
        <DomesticCard v-bind="cardData" />
        </ChartWrapper>

        <ChartWrapper
          class="chart-wrapper-item monitor-point"
          title="监测点统计"
        >
          <MonitorPoint
            :showChart="false"
            :points="[
              {
                name: '位移监测点',
                value: '753'
              },
                {
                name: '沉降监测点',
                value: '1,219'
              },
              {
                name: '变形监测点',
                value: '1,829'
              },
              {
                name: '视频监测点',
                value: '2,181'
              }
          ]"
            :pictures="[
            {
              name: '图片1',
              img: 'https://axure-file.lanhuapp.com/md5__49d9645498aa1f17093d9a8efe1c51e4.png',
            },
            {
              name: '图片2',
              img: 'https://axure-file.lanhuapp.com/md5__49d9645498aa1f17093d9a8efe1c51e4.png',
            },
            {
              name: '图片3',
              img: 'https://axure-file.lanhuapp.com/md5__49d9645498aa1f17093d9a8efe1c51e4.png',
            },
            {
              name: '图片4',
              img: 'https://axure-file.lanhuapp.com/md5__49d9645498aa1f17093d9a8efe1c51e4.png',
            },
            {
              name: '图片5',
              img: 'https://axure-file.lanhuapp.com/md5__49d9645498aa1f17093d9a8efe1c51e4.png',
            }
          ]" />
        </ChartWrapper>
      </div>

      <div class="middle-part">
        <!-- <Map
          style="width: 100%; height: 100%"
          :isTrafficNetworkSituation="isTrafficNetworkSituation"
          :isEmergencyForceDistribution="isEmergencyForceDistribution"
          :isEmergencyEventMarker="isEmergencyEventMarker"
        ></Map> -->
      </div>
      <div class="right-part part-container justify-between">
      </div>
    </div>
  </div>
</template>

<script>
import {
  MonitorPoint,
  DomesticCard,
} from "../components";
import mockData from './mockData'

export default {
  // mixins: [map],
  mixins: [mockData],

  components: {
    MonitorPoint,
    DomesticCard,
  },
};
</script>

<style lang="scss" src="@/views/screen/bridge/style.scss" scoped>
</style>
