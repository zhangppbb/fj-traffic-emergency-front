<template>
  <div class="info-box">
    <div class="header">
      <div class="header__title">今日上报</div>
      <div class="header__value">
        <div
          v-for="(it, idx) in disasterPointInfo['total'].toString() || '0'"
          :key="idx"
          style="height: 100%; display: flex; align-items: end"
        >
          <div class="day-bg">{{ it }}</div>
        </div>
      </div>
      <div class="header__title">条</div>
    </div>

    <div class="flex justify-center">
      <DistrictDisaster
        :icon="require('../../assets/red-icon.png')"
        name="红色预警"
        :value="disasterPointInfo.red"
        nameColor="#FF5B5A"
        valueColor="#ffffff"
      />
      <DistrictDisaster
        :icon="require('../../assets/orange-icon.png')"
        name="橙色预警"
        :value="disasterPointInfo.orange"
        nameColor="#F69920"
        valueColor="#ffffff "
      />
      <DistrictDisaster
        :icon="require('../../assets/yellow-icon.png')"
        name="黄色预警"
        :value="disasterPointInfo.yellow"
        nameColor="#C8D028"
        valueColor="#ffffff"
      />
    </div>
  </div>
</template>
<script>
import { DistrictDisaster } from "../../components";
export default {
  name: "DynamicInfo",
  components: {
    DistrictDisaster,
  },
  props: {
    disasterPointInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.info-box {
  padding-top: px2vh(30);
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
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

      .day-bg {
        text-align: center;
        width: px2vw(28);
        height: px2vw(34);
        margin-right: px2vw(4);
        line-height: px2vw(34);
        font-size: px2vw(24);
        font-family: D-DIN;
        font-weight: bold;
        color: #ffffff;
        background-image: url("../../assets/num-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
  ::v-deep .mt-sm-vw {
    margin-top: 0;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-size: 16px;
  }
  ::v-deep .ff-ys {
    font-family: D-DIN;
    font-weight: bold;
    font-size: 28px;
    color: #ffffff;
  }
  ::v-deep .object-contain {

    width: px2vw(136);
    height: px2vw(86);
  }
}
</style>
