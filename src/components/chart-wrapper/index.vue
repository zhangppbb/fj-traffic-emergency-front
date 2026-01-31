<template>
  <div class="chart-wrapper">
    <div class="chart-header flex items-center justify-between">
      <div class="chart-header-title flex items-center">
        <div class="left-container flex items-center">
          <img src="./assets/title-icon2.png" class="icon" alt="">
          <!-- <img src="./assets/header-icon.png" class="icon" alt=""> -->
          <div class="text ff-ys text-#fff ml-xs-vw">{{ title }}</div>
        </div>

        <slot name="right">
          <img src="./assets/zoom-icon.svg" class="icon-zoom" v-if="showZoom" alt="">
        </slot>
      </div>


      <img class="line-icon" src="./assets/line-icon.png" alt="">
    </div>

    <div class="chart-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 标题
    title: {
      type: String,
      default: () => '标题'
    },

    // 缩放图表
    showZoom: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  // background-image: url('./assets/bg.svg');
  // background-size: 100% 100%;
  // background-repeat: no-repeat;

  & > .chart-header {
    color: #fff;
    height: px2vh(48);
    // background-image: url('./assets/header-bg.png');
    background-size: 100% 100%;
    background: radial-gradient( 70.71% 70.71% at 0% 50%, rgba(9,28,51,0.41) 0%, rgba(7,51,92,0.59) 100%);
    box-shadow: inset 0px 10px 40px 10px rgba(0,109,210,0.3);
    border: 1px solid rgba(0,134,255,1);
    padding: 0 px2vw(16);
    position: relative;

    & > .line-icon  {
      width: 80%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }


    & > .chart-header-title {
      width: 100%;
      justify-content: space-between;
      padding-right: px2vw(20);
      & > .left-container {
        & > .icon {
          height: px2vh(24);
        }

        & > .text {
          font-size: px2vw(20);
          color: #FFFFFF;
          -webkit-background-clip: text;
          // text-shadow: 0px 3px 0px rgba(0,9,17,0.64);
          -webkit-text-fill-color: transparent; /* 设置文字颜色为透明，显示背景 */
          background-image: linear-gradient(0deg, #00EAFF 0%, #F0FDFF 53.564453125%, #FFFFFF 100%);
        }
      }

      .icon-zoom {
        width: px2vh(20);
        height: px2vh(20);
      }
    }
  }

  // // Title
  // & > .title-container {
  //   height: px2vw(27);
  //   background-image: url('./assets/bg-title.png');
  //   background-size: 100% 100%;
  //   // ba-size
  //   .icon {
  //     width: px2vw(21);
  //     height: px2vw(29);
  //     margin-right: px2vw(5);
  //   }
  //   .text {
  //     font-size: px2vw(22);
  //     color: #FFFFFF;
  //     -webkit-background-clip: text;
  //     // text-shadow: 0px 3px 0px rgba(0,9,17,0.64);
  //     -webkit-text-fill-color: transparent; /* 设置文字颜色为透明，显示背景 */
  //     background-image: linear-gradient(0deg, #00EAFF 0%, #F0FDFF 53.564453125%, #FFFFFF 100%);
  //   }
  // }

  & > .chart-content {
     border: 1px solid rgba(0,134,255,1);
    background: radial-gradient( 70.71% 70.71% at 0% 50%, rgba(9,28,51,0.41) 0%, rgba(7,51,92,0.59) 100%);
    box-shadow: inset 0px 10px 40px 10px rgba(0,109,210,0.3);
    // background-image: url('./assets/content-bg.png');
    // background-size: 100% 100%;
  }
}
</style>
