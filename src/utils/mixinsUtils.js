import _ from 'lodash'

export const modelMixins = {
  //  自定义组件 实现v-model的时候使用该mixin
  data() {
    return {
      modelBind: ''
    }
  },
  props: ['_vModelProp'],
  model: {
    prop: '_vModelProp',
    event: '_changeModelEvent'
  },
  watch: {
    _vModelProp: {
      immediate: true,
      handler(val, old) {
        this._changeData(val, old)
        // if (!_.isEqual(val, old)) {
        //   this._changeModel(val)
        // }
      }
    }
  },

  methods: {
    _changeModel(data) {
      this.modelBind = data
      this.$emit('_changeModelEvent', data, this._vModelProp)
      this.$emit('change', data, this._vModelProp)
    },

    _change(data, old) {
      if (_.isEqual(data, old)) return false

      this._changeModel(data, this._vModelProp)
    },

    _changeData(data) {
      // if (_.isEqual(data, this.modelBind)) return false
      this.modelBind = data
      this.$emit('update', data, this._vModelProp)
    }
  },

  created() {
    this._changeData(this._vModelProp)
  }
}

export const loadingMixins = {
  data() {
    return {
      loadingProp: {
        show: false,
        lastShowTime: -1,
        taskId: -1
      }
    }
  },
  methods: {
    showLoadding() {
      if (this.loadingProp.show) {
        return
      }
      this.loadingProp.show = true
      this.loadingProp.lastShowTime = new Date().getTime()
    },
    hideLoadding(immediate = false) {
      if (!this.loadingProp.show) {
        return
      }
      if (immediate) {
        this.loadingProp.show = false
        return
      }
      var currentTime = new Date().getTime()
      var delay = currentTime - this.loadingProp.lastShowTime
      if (this.loadingProp.taskId !== -1) {
        clearTimeout(this.loadingProp.taskId)
      }
      this.loadingProp.taskId = setTimeout(
        () => {
          this.loadingProp.show = false
          clearTimeout(this.loadingProp.taskId)
        },
        delay > 600 ? 0 : 600 - delay
      )
    }
  }
}

export const windowResizeMixins = {
  watch: {
    '$store.state.appState.windowResizeState'(val) {
      if (this.onWindowSizeChange) {
        this.onWindowSizeChange()
      }
    }
  }
}
