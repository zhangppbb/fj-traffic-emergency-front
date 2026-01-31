<template>
  <!-- 主容器：垂直排列，居中对齐，文字为白色 -->
  <div class="flex flex-col items-center text-white rectification-progress-container">
    <!-- 图标容器：固定大小，居中图标 -->
    <div class="banner flex items-center justify-center">
      <!-- 图标图片：由 props 传入，保持比例缩放 -->
      <img :src="icon" alt="icon" class="w-full h-full object-contain" />
    </div>

    <!-- 区域名称文本 -->
    <div class="flex items-center justify-center mt-sm-vw ff-ys name-container" :style="{
      backgroundImage: `url(${textIcon})`,
      backgroundSize: '100% 100%'
    }">
      <span class="text" :style="{
         ...nameStyle,
      }">{{ name }}</span>
    </div>

    <!-- 数值文本：颜色类名由外部传入，默认蓝色 -->
    <div :class="['text-lg-vw font-bold mt-xs-vw ff-ys']" :style="{
      color: valueColor
    }">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaStat',
  props: {
    // 图标路径，必填
    icon: {
      type: String,
      required: true
    },
    // 图标路径，必填
    textIcon: {
      type: String,
      required: true
    },
    // 区域名称，可选
    name: {
      type: String,
      default: ''
    },
    // 区域名称颜色
    nameStyle: {
      type: Object,
      default: () => ({})
    },
    // 数值，可为字符串或数字
    value: {
      type: [String, Number],
      default: ''
    },
    // 数值颜色类名（Tailwind），可选，默认蓝色
    valueColor: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.rectification-progress-container {
  & > .banner {
    width: px2vw(72);
    height: px2vw(72);
  }

  // Name
  & > .name-container {
    width: px2vw(120);
    height: px2vw(35);

    .text {
      font-size: px2vw(18);
      -webkit-text-fill-color: transparent; /* 设置文字颜色为透明，显示背景 */
      -webkit-background-clip: text;
    }
  }
}
</style>
