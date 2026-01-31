<template>
  <div class="washout">
    <div class="flex">
      <img class="washout-pic" src="../../assets/washout-icon.png" alt="" />
      <div class="washout-text">
        <div>四川凉山州木里县-强降雨泥石流</div>
        <div>灾害时间：2024-05-27</div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="administer-box">
        <div class="box-title title-befor">治理前</div>
        <img src="../../assets/washout-befor.png" alt="" />
      </div>
      <div class="administer-box">
        <div class="box-title title-after">治理后</div>
        <img src="../../assets/washout-after.png" alt="" />
      </div>
    </div>
    <div class="flex justify-between washout-footer">
      <span>治理方案：木里县成功避让泥石流报告</span>
      <span class="download"><i class="el-icon-bottom"></i>下载</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Washout",
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.washout {
  padding: px2vh(12) px2vw(16);
  .washout-pic {
    width: px2vw(52);
    height: px2vw(52);
    margin-right: px2vw(10);
  }
  .washout-text {
    width: px2vw(330);
    height: px2vw(56);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: YouSheBiaoTiHei;
    font-weight: 400;
    font-size: 14px;
    color: #f6f9ff;
    background: url("../../assets/text-bg.png") no-repeat;
    background-size: 100% 100%;
  }
  .administer-box {
    position: relative;
    width: px2vw(178);
    height: px2vw(130);
    margin: px2vh(16);
    .box-title {
      position: absolute;
      width: 100%;
      height: px2vw(20);
      text-align: center;
      line-height: px2vw(20);
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: 12px;
      color: #ffffff;
    }
    .title-befor {
      top: 0;
      background: url("../../assets/befor-bg.png") no-repeat;
      background-size: 100% 100%;
    }
    .title-after {
      top: 0;
      background: url("../../assets/after-bg.png") no-repeat;
      background-size: 100% 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .washout-footer {
    font-family: Microsoft YaHei;
    font-weight: 400;
    font-size: 14px;
    color: #f6f9ff;
    padding: 0 px2vw(16);

    .download {
      font-family: Microsoft YaHei;
      font-weight: 400;
      font-size: 12px;
      color: #c4e5ff;
      cursor: pointer;
      i {
        font-size: 14px;
        color: #00E4FF;
      }
    }
  }
}
</style>
