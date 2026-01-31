<template>
  <div> 
    <div class="flex flex-col pt-md-vw pb-xl-vw pl-lg-vw pr-lg-vw" v-if="step == 1 || step == 2">
      <div class="alert-content">
        <div class="items-center pb-5"> 
          <div class="flex flex-1 gis-ys-font alert-text">G15沈海高速（福建段）发生山体滑坡，</div>
          <div class="flex flex-1 gis-ys-font alert-text">已造成双向交通中断，有车辆被困，需紧急处置！</div>
        </div>
        
        <div class="flex mt-sm-vw pb-4" style="color: #FFF7F5;">
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">所属路段：</span>G15沈海高速（福建段）
          </div>
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">预警等级</span>红色预警（一级）
          </div>
        </div>
        <div class="flex mt-sm-vw pb-10" style="color: #FFF7F5;">
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">预警原因</span>山体滑坡
          </div>
          <div class="flex-1 overflow-hidden">
            <span class="font-bold">发生时间：</span>2025-03-14  12:00
          </div>
        </div>
      </div>
      <div class="button-center">
        <div class="button active" @click="goToStep(2)">立即核验</div>
        <div class="button inactive" @click="$emit('confirm')">暂不处理</div>
      </div>
    </div>

  <!-- 步骤2：加载中弹窗 -->
    <div v-if="step === 2" class="mask-layer">
      <div class="loading-popup">
        <div class="loading">
          <div class="loading-spinner"></div>
          <p>正在接入数据及算法进行智能核验</p>
          <p>请稍后...</p>
        </div>
      </div>
    </div>


    <div class="flex flex-col pt-md-vw pb-xl-vw pl-lg-vw pr-lg-vw" v-if="step == 3">
      <div
        class="mt-sm-vw gis-ys-font alarmTitle items-center"
      >G15沈海高速（福建段）山体滑坡</div>

      <div class="flex mt-sm-vw" style="color: #FFF7F5;">
        <div class="flex-1 overflow-hidden">
          <span class="font-bold">所属路段：</span>G15沈海高速（福建段）
        </div>
        <div class="flex-1 overflow-hidden">
          <span class="font-bold">发生时间：</span>2025-03-14  12:00
        </div>
      </div>


      <div class="flex mt-sm-vw" style="color: #FFF7F5;">
        <div class="flex-1 overflow-hidden">
          <span class="font-bold">预警原因</span>山体滑坡
        </div>
        <div class="flex-1 overflow-hidden">
          <span class="font-bold">预警等级</span>红色预警（一级）
        </div>
      </div>

      <div
        class="name-container mt-sm-vw gis-ys-font"
      >实时影像接入</div>

      <div class="flex justify-between gap-md-vw">
        <div class="video-container mini">
          <div class="video-text">事件点位</div>
          <img style="height: 12vh"  @click="previewPic($event)" src="https://img2.baidu.com/it/u=1553277782,3907014256&fm=253&fmt=auto&app=120&f=JPEG?w=666&h=500" class="w-full" alt="灾害点图片" />
          <div class="video-time">2025-3-14 13:03:09</div>
        </div>
        <div class="video-container mini">
          <div class="video-text">实时影像1</div>
          <img style="height: 12vh"  @click="previewPic($event)" src="https://img2.baidu.com/it/u=2801743387,511800748&fm=253&fmt=auto&app=138&f=JPEG?w=1066&h=800" class="w-full" alt="灾害点图片" />
          <div class="video-time">2025-3-14 13:03:09</div>
        </div>
        <div class="video-container mini">
          <div class="video-text">实时影像2</div>
          <img style="height: 12vh"  @click="previewPic($event)" src="https://img2.baidu.com/it/u=2801743387,511800748&fm=253&fmt=auto&app=138&f=JPEG?w=1066&h=800" class="w-full" alt="灾害点图片" />
          <div class="video-time">2025-3-14 13:03:09</div>
        </div>
      </div>

      <div
        class="name-container mt-sm-vw gis-ys-font"
      >事件分级</div>

      <div class="flex mt-sm-vw items-center" style="color: #FFF7F5;">
        <div class="flex flex-1 overflow-hidden">
          <span class="font-bold">响应等级</span>
          <div class="select-wrapper">
            <select class="red-select">
              <option value="">请选择</option>
              <option value="1">一级</option>
              <option value="2">二级</option>
              <option value="3">三级</option>
              <option value="4">其他突发事件</option>
            </select>
          </div>
        </div>
        <div class="flex flex-1 overflow-hidden items-center">
          <img style="height: 2vh" src="./assets/select.png" class="pr-1" alt="" />
          <span class="font-bold">真实事件，推荐为一级响应</span>
        </div>
      </div>

      <div class="flex flex-1 button-center">
        <div class="button active" @click="$emit('emergencyClassification')">事件分级</div>
        <div class="button inactive"  @click="$emit('confirm')">暂不处理</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmergencyAlert',
  data() {
    return {
      step: 1 // 1: 初始弹窗, 2: 加载中, 3: 详情页面
    }
  },
  methods: {
    // 切换步骤
    goToStep(targetStep) {
      this.step = targetStep;
      if (targetStep === 2) {
        setTimeout(() => {
          this.step = 3;
        }, 2000); // 3秒后自动跳转
      }
    },
    // 事件分级确认
    handleConfirm() {
      console.log('事件分级确认');
    },
    // 暂不处理
    handleCancel() {
      console.log('暂不处理');
      this.step = 1; // 返回初始弹窗，也可改为隐藏整个组件
    },
    // 图片预览
    previewPic(e) {
      console.log('预览图片', e);
      // 可添加图片预览的业务逻辑
    }
  }
}
</script>


<style lang="scss" scoped>
  .alert-text {
    font-size: px2vw(26);
    margin: px2vw(20) 0;
    justify-content: center;
  }
  .alarmTitle{
    font-family: YouSheBiaoTiHei;
    font-size: px2vw(24);
    text-align: center;
  }
  .red-select {
      width: px2vw(200);
      height: px2vw(24);
      margin-left: px2vw(20);
      padding: 0 px2vw(12);
      /* 红色背景 + 白色文字 */
      background-color: rgba(169, 57, 49,0.6);
      color: #ffffff;
      border: none;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      /* 字体与对齐 */
      font-size: px2vw(18);
      text-align: left;
      /* 圆角与阴影（可选，提升美观度） */
      border-radius: px2vw(4);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      /* 光标样式 */
      cursor: pointer;
      position: relative;
    }

    /* 自定义下拉箭头（解决清除默认样式后无箭头的问题） */
    .select-wrapper {
      position: relative;
      display: inline-block;
    }
    .select-wrapper::after {
      content: "▼";
      position: absolute;
      right: px2vw(12);
      top: 50%;
      transform: translateY(-50%);
      color: #ffffff;
      font-size: 10px;
      pointer-events: none; /* 点击箭头不触发事件，只触发select */
    }

    /* 下拉选项样式优化（部分浏览器可自定义） */
    .red-select option {
      background-color: rgba(169, 57, 49,0.6);
      color: #fff; /* 选项文字为红色 */
      font-size: px2vw(14);
      padding: px2vw(8) px2vw(12);
    }

    /* 选中选项的样式 */
    .red-select option:checked {
      background-color: rgba(169, 57, 49,0.6);
      color: #ffffff;
    }

    /* hover/聚焦样式（提升交互体验） */
    .red-select:hover {
      background-color: rgba(169, 57, 49,0.6);
    }
    .red-select:focus {
      box-shadow: 0 0 0 2px rgba(217, 37, 37, 0.3); /* 聚焦时的外发光 */
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
      background-color: rgba(169, 57, 49,0.9);
      color: #FFFFFF; /* 白色文字 */
      border-color: #B72424;
    }

    .button.inactive {
      background-color: #B8B8B8;
      color: #333333; /* 黑色文字 */
      border-color: #B8B8B8;
    }

    // 遮罩层样式
    .mask-layer {
      position: fixed; // 固定定位，覆盖整个屏幕
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7); // 半透明黑色遮罩
      z-index: 9999; // 确保在最上层
      display: flex;
      justify-content: center;
      align-items: center; // 加载弹窗居中显示
    }

    // 加载弹窗样式
    .loading-popup {
      background-color: rgba(26, 26, 26, 0.95);
      // border: 1px solid #b72424;
      border-radius: px2vw(8);
      padding: px2vw(30);
      color: #fff7f5;
      text-align: center;
      min-width: px2vw(400); // 弹窗最小宽度
    }

    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: px2vw(15) 0;
    }

    .loading-spinner {
      width: px2vw(40);
      height: px2vw(40);
      border: px2vw(3) solid rgba(183, 36, 36, 0.3);
      border-top: px2vw(3) solid #b72424;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: px2vw(10);
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
</style>