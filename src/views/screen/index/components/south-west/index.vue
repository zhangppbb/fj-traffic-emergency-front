<template>
  <div
    class="chart-wrapper-mini flex flex-col items-center justify-center pr-sm-vw pl-sm-vw"
  >
    <div class="flex w-full justify-between southwest">
      <img
        class="southwest-icon"
        :src="require('../../assets/southwest.png')"
        alt=""
      />
      <div class="flex flex-col justify-center items-center text-white">
        <div class="data-item" v-for="(item, index) in dataList" :key="index">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-number">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SouthWest",
  components: {},
  props: {},
  data() {
    return {
      dataList: [
        {
          name: "四川",
          value: 45,
        },
        {
          name: "贵州",
          value: 32,
        },
        {
          name: "西藏",
          value: 23,
        },
        {
          name: "青海",
          value: 45,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.southwest {
  .southwest-icon {
    margin-left: px2vw(40);
    width: px2vw(97);
    height: px2vw(245);
  }
  .data-item {
    width: px2vw(259);
    height: px2vw(42);
    background: url('../../assets/grade1-bg.png') no-repeat;
    background-size: 100% 100%;
    margin: 10px 0;
    text-align: center;
    &:first-child,&:last-child {
      margin-left: px2vw(-60);
    }
    .item-name {
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      font-size: 20px;
      color: #ffffff;
      margin-right: px2vw(18);
    }
    .item-number {
      font-family: D-DIN;
      font-weight: bold;
      font-size: 24px;
      color: #ffffff;
    }
  }
}
</style>
