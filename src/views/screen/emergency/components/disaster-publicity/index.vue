<template>
  <!-- 主容器：垂直排列，居中对齐，文字为白色 -->
  <div class="flex w-full h-full items-center pt-xs-vw pb-xs-vw rectification-progress-container">
    <!-- 图标容器：固定大小，居中图标 -->
    <div class="banner flex items-center justify-center h-full" v-if="icon">
      <!-- 图标图片：由 props 传入，保持比例缩放 -->
      <img :src="icon" alt="icon" class="h-full object-contain" />
    </div>

    <!-- 区域名称文本 -->
    <div class="name-container ml-xs-vw mr-xs-vw">{{ name }}</div>

    <!-- 数值文本：颜色类名由外部传入，默认蓝色 -->
    <div class="text-white h-full flex items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaStat',
  props: {
    // 图标路径，必填
    icon: {
      type: String
    },
    // 图标路径，必填
    textIcon: {
      type: String
    },
    // 区域名称，可选
    name: {
      type: String,
      default: ''
    },
    // 区域名称颜色
    nameColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.rectification-progress-container {
  background: url('../../assets/text-rectification-icon.png') no-repeat;
  background-size: 100% 100%;

  // Name
  & > .name-container {
    font-family: YouSheBiaoTiHei;
    font-size: px2vw(18);
    background-image: -webkit-linear-gradient(top, #E1F0F9 40%, #00D8FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
