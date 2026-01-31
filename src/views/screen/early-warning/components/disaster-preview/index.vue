<template>
  <div class="disaster-preview-container flex flex-col">
    <!-- 左侧列表 -->
    <div class="left-container flex mb-xs-vw">
      <div
        v-for="(item, index) in data"
        :key="item.id"
        :class="[
          'disaster-item flex items-center cursor-pointer ml-xs-vw mr-xs-vw',
          activeIndex === index ? 'active': ''
        ]"
        @click="handleClick(index)"
      >
        <img
          class="icon mr-xs-vw"
          :src="activeIndex === index ? VideoActive : VideoIcon"
          alt
          srcset
        />
        <span class="text">{{ item.name }}</span>
      </div>
    </div>

    <!-- 右侧内容区域 -->
    <div class="video-container">
      <div class="video-text">{{ activeItem.name }}</div>
      <img
        v-if="activeItem.type === 'image'"
        :src="activeItem.url"
        class="w-full h-full object-cover"
        alt="灾害点图片"
      />

      <!-- 媒体显示 -->
      <!-- <div class="relative w-full h-[320px]">
        <video
        v-else
        :src="activeItem.url"
        class="w-full h-full object-cover"
        controls
      ></video>-->

      <!-- 底部时间 -->
      <div class="video-time">{{ activeItem.time }}</div>

      <!-- 放大图标 -->
      <!-- <div
          class="absolute bottom-[8px] right-[8px] cursor-pointer"
          @click="handleFullscreen"
        >
          <img src="@/assets/expand-icon.svg" class="w-[24px] h-[24px]" alt="放大" />
      </div>-->
    </div>
  </div>
</template>

<script>
import VideoIcon from './assets/video.png'
import VideoActive from './assets/video-icon.png'

export default {
  name: 'DisasterPreview',
  props: {
    data: {
      type: Array,
      required: true
      // 数据格式见上方说明
    }
  },
  data() {
    return {
      VideoIcon,
      VideoActive,
      activeIndex: 0 // 当前选中的灾害点索引
    }
  },
  computed: {
    activeItem() {
      return this.data[this.activeIndex] || {}
    }
  },
  methods: {
    /**
     * 切换选中项
     * @param {number} index - 选中的索引
     */
    handleClick(index) {
      this.activeIndex = index
    },

    /**
     * 触发放大查看
     * 当前实现使用浏览器全屏 API
     */
    handleFullscreen() {
      const mediaEl = this.$el.querySelector('img, video')
      if (mediaEl && mediaEl.requestFullscreen) {
        mediaEl.requestFullscreen()
      } else {
        this.$message && this.$message.warning('当前浏览器不支持全屏')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.disaster-preview-container {
  width: 100%;
  & > .left-container {
    // width: px2vw(109);
    // height: px2vw(220);
    justify-content: center;
    .disaster-item {
      height: px2vw(23);
      line-height: px2vw(23);
      .icon {
        width: px2vw(12);
        height: px2vw(14);
      }

      .text {
        color: #c7e5ff;
        font-size: px2vw(14);
      }
    }
    // active
    .disaster-item.active {
      // background: rgba(0, 0, 0, 0.25);

      .text {
        color: #00fafd;
      }
    }
  }

  // video-container
  & > .video-container {
    position: relative;
    width: 100%;
    height: px2vw(225);

    .video-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba($color: #000000, $alpha: 0.6);
      color: #fff;
      padding: px2vh(2) px2vw(8);
    }

    .video-time{
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      padding: px2vh(2) px2vw(8);
    }
  }
}
</style>
