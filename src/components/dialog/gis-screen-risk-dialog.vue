<template>
  <el-dialog
    :visible.sync="modelBind"
    :close-on-click-modal="false"
    append-to-body
    center
    v-bind="$attrs"
    custom-class="gis-screen-dialog"
    v-on="$listeners"
  >
    <div class="gis-screen-container">
      <div class="flex text-sm-vw pl-sm-vw items-center gis-title-container">
        <img :src="require('./assets/jinggao.png')" class="mr-xs-vw" style="height: 40%;"></img>

        {{ title }}
        
      </div>

      <!-- Content -->
      <div class="gis-screen-content w-full">
        <img :src="require('./assets/risk-close-bg.png')" class="icon-close el-icon-close cursor-pointer" @click="handleClose"></img>
        <slot></slot>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { modelMixins } from '@/utils/mixinsUtils'

export default {
  mixins: [modelMixins],

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      modelBind: false
    }
  },

  methods: {
    handleClose(){
      this._changeModel(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.gis-screen-container {
  // Title
  .gis-title-container {
    height: px2vw(54);
    line-height: px2vw(54);
    background-image: url('./assets/risk-header-bg.png');
    background-repeat: no-repeat;
    background-size: 60% 100%;
    color: #ffff;
    font-weight: bold;

    
  }

  // Content
  & > .gis-screen-content {
    background-image: url('./assets/risk-content-bg.png');
    background-size: 100% 100%;
    position: relative;

    .icon-close {
      width: px2vw(35);
      height: px2vw(34);
      position: absolute;
      top: px2vw(3);
      right: px2vw(7);
    }
  }
}
</style>

<style lang="scss">
.gis-screen-dialog {
  background-color: transparent!important;
  box-shadow: none!important;
  .el-dialog__header {
    display: none!important;
  }
  .el-dialog__body {
    padding: 0!important;

    // .dialog-banner {
    //   width: 740px;
    //   height: 648px;
    // }
  }
}
</style>
