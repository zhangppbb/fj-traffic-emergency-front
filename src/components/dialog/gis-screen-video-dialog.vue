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
    
      <!-- Content -->
      <div class="gis-screen-content w-full">
        <div class="flex text-sm-vw justify-center gis-title-container">
          {{ title }}
          <div class="icon-close el-icon-close cursor-pointer" @click="handleClose"></div>
        </div>

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

  // Content
  & > .gis-screen-content {
    background-image: url('./assets/content-video.png');
    background-size: 100% 100%;
    position: relative;
    top: -#{px2vw(10)};
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
