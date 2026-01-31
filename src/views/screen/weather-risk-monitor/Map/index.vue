<template>
  <div class="map-container" style="width: 100%; height: 100vh;">
    <!-- 地图容器 -->
    <div id="map-container" ref="mapContainer" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script>
// 引入封装的地图组件
import BaiduMapLayer from './baiduMapLayer.js'

export default {
  name: 'MapPage',
  
  props: {
    // 交通网况图层显示状态
    isTrafficNetworkSituation: {
      type: Boolean,
      default: false
    },
    // 应急力量分布图层显示状态
    isEmergencyForceDistribution: {
      type: Boolean,
      default: false
    },
    // 应急事件标记图层显示状态
    isEmergencyEventMarker: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      mapInstance: null, // 存储地图组件实例
      isIconLayerShow: false, // 海量图标图层显示状态
      trafficLayer: null, // 路况图层实例
      // 新增：存储各业务图层实例，便于管理
      businessLayers: {
        trafficNetwork: null, // 交通网况图层
        emergencyForce: null, // 应急力量分布图层
        emergencyEvent: null  // 应急事件标记图层
      }
    }
  },

  // 监听Props变化
  watch: {
    // 监听交通网况图层状态
    isTrafficNetworkSituation: {
      immediate: true, // 初始化时立即执行
      handler(newVal) {
        this.handleTrafficNetworkLayer(newVal)
      }
    },
    // 监听应急力量分布图层状态
    isEmergencyForceDistribution: {
      immediate: true,
      handler(newVal) {
        this.handleEmergencyForceLayer(newVal)
      }
    },
    // 监听应急事件标记图层状态
    isEmergencyEventMarker: {
      immediate: true,
      handler(newVal) {
        this.handleEmergencyEventLayer(newVal)
      }
    },
  },

  mounted() {
    // 1. 先加载百度地图API
    this.loadBMapGL(() => {
      // 2. 初始化地图组件
      this.mapInstance = new BaiduMapLayer({
        container: this.$refs.mapContainer,
        centerLng: 119.302446,
        centerLat: 26.10634,
        zoom: 12
      })
    })
  },

  beforeDestroy() {
    // 销毁所有图层
    this.destroyAllLayers()
    // 销毁地图实例
    if (this.mapInstance) {
      this.mapInstance.destroy()
    }
  },

  methods: {
    /**
     * 动态加载百度地图GL API
     * @param {Function} callback 加载完成回调
     */
    loadBMapGL(callback) {
      if (window.BMapGL) {
        callback()
        return
      }

      const script = document.createElement('script')
      script.src = `https://api.map.baidu.com/api?v=3.0&ak=0DOo5j9CT8wHFFaHrWwqA2IRe5nTSo3x`
      script.defer = true
      script.onload = callback
      script.onerror = () => console.error('百度地图API加载失败！')
      document.head.appendChild(script)
    },


    /**
     * 交通网况图层控制
     * @param {Boolean} isShow 是否显示
     */
    handleTrafficNetworkLayer(isShow) {
      if (!this.mapInstance?.originalMapInstance) return

      if (isShow) {
        this.mapInstance.addRouteLayer()
      } else {
        this.mapInstance.removeRouteLayer()
      }
    },

    /**
     * 应急力量分布图层控制
     * @param {Boolean} isShow 是否显示
     */
    handleEmergencyForceLayer(isShow) {
      if (!this.mapInstance?.originalMapInstance) return

      if (isShow) {
        this.mapInstance.addPointIconLayer()
      } else {
        this.mapInstance.clearPointIconLayer()
      }
    },

    /**
     * 应急事件标记图层控制
     * @param {Boolean} isShow 是否显示
     */
    handleEmergencyEventLayer(isShow) {
      if (!this.mapInstance?.originalMapInstance) return

      if (isShow) {
        this.mapInstance.addBubbleLayer()
        // this.mapInstance.addDrivingLayer()
        
      } else {
        this.mapInstance.clearBubbleLayer()
        // this.mapInstance.removeDrivingLayer()
      }
    },

    /**
     * 销毁所有图层（页面销毁时调用）
     */
    destroyAllLayers() {
      // 销毁路况图层
      this.mapInstance.removeRouteLayer()
      // 销毁所有业务图层
      Object.keys(this.businessLayers).forEach(key => {
        const layer = this.businessLayers[key]
        if (layer && this.mapInstance?.originalMapInstance) {
          // 根据图层类型选择移除方式
          this.mapInstance.originalMapInstance.setTrafficOff()
          if (layer instanceof window.BMapGL.PointIconLayer) {
            this.mapInstance.originalMapInstance.removeNormalLayer(layer)
          }
          this.businessLayers[key] = null
        }
      })
    }
  }
}
</script>

<style scoped>
/* 控制面板样式 */
.control-panel {
  position: absolute;
  top: 200px;
  left: 300px;
  z-index: 9999999;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 勾选框项样式 */
.checkbox-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.checkbox-item:last-child {
  margin-bottom: 0;
}

.checkbox-item input {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
}

.checkbox-item label {
  font-size: 14px;
  color: #333;
  cursor: pointer;
  user-select: none;
}

/* 原有按钮样式（已替换，保留备用） */
.map-btn {
  padding: 2px 10px;
  background: #409eff;
  opacity: 1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.map-btn:hover {
  background: #66b1ff;
}

.map-btn:active {
  background: #337ecc;
}
</style>