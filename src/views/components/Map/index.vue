<template>
  <div class="map-container">
    <!-- 地图容器 -->
    <div id="map-container-content" ref="mapContainer" style="width: 100%; height: 100%;"></div>
    <img class="search-icon" src="./imgs/search.png" alt="" />
    <img class="select-icon" src="./imgs/select.png" alt="" />
  </div>
</template>

<script>
// 引入封装的地图组件
import BaiduMapLayer from './baiduMapLayer.js'

export default {
  name: 'MapPage',
  
  props: {
    currentActive: {
      type: Number,
      default: 0
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
      },
      activeToLayerMap: {
        0: 'all',      // 0-概览（显示所有图层）
        1: 'bridge',   // 1-桥梁
        2: 'tunnel',   // 2-隧道
        3: 'slope',    // 3-边坡
        4: 'subgrade'  // 4-路基
      },
      layerSwitchTimer: null
    }
  },

  // 监听Props变化
  watch: {
    currentActive: {
      immediate: true, 
      handler(newVal, oldVal) {
        clearTimeout(this.layerSwitchTimer);
        this.layerSwitchTimer = setTimeout(() => {
          this.switchLayerByActive(newVal);
        }, 300);
      }
    }
  },

  mounted() {
    // 1. 先加载百度地图API
    this.loadBMapGL(() => {
      // 2. 初始化地图组件
      this.mapInstance = new BaiduMapLayer({
        container: this.$refs.mapContainer,
        centerLng: 118.271426,
        centerLat: 25.966440,
        zoom: 8,
        currentActive:this.activeToLayerMap[String(this.currentActive)],
        // vueInstance: this,
        changRoute: () => {
          this.$router.push('/bridge/details');
        },
        onDistrictLayerRemoved: (value) => {
          this.$emit('districtLayerRemoved', value);
        }
      })

      this.$nextTick(() => {
        // 验证地图原生实例是否存在
        if (this.mapInstance?.originalMapInstance) {
          // this.addAllLayers()
          this.mapInstance.addMaskLayer()
          this.mapInstance.addDistrictLayer()
        } else {
          setTimeout(() => {
            this.mapInstance.addDistrictLayer()
            // this.mapInstance.addAllLayers();
          }, 3000);
        }
      })
    })
  },

  beforeDestroy() {
    clearTimeout(this.layerSwitchTimer);
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

    switchLayerByActive(activeVal) {
      // 空值保护：地图实例未初始化时不执行
      if (!this.mapInstance) {
        console.warn('地图实例未初始化，暂不切换图层');
        return;
      }

      // 1. 清除所有旧图层（避免图层叠加）
      this.mapInstance.clearAllLayers();

      // 2. 根据active值获取要加载的图层类型
      const layerType = this.activeToLayerMap[String(activeVal)];
      if (!layerType) {
        console.warn(`无匹配的图层类型：${activeVal}`);
        return;
      }

      // 3. 加载对应图层
      try {
        if (layerType === 'all') {
          // 0-概览：加载所有图层
          this.mapInstance.addAllLayers();
          console.log('切换到概览：加载所有图层');
        } else {
          // 1-4：加载指定类型图层（桥梁/隧道/边坡/路基）
          this.mapInstance.addLayerByType(layerType);
          console.log(`切换到${layerType}：加载${layerType}图层`);
        }
      } catch (error) {
        console.error(`切换${layerType}图层失败：`, error);
      }
    },
    /**
     * 销毁所有图层（页面销毁时调用）
     */
    destroyAllLayers() {
      // 销毁路况图层
      // this.mapInstance.removeRouteLayer()
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

<style scoped lang="scss">
.map-container{
  width: 100%;
  height: 100vh;
  background-image: url('./imgs/bg.png');
  background-size: cover;
  }
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
.search-icon{
  height: px2vw(50);
  width: px2vw(220);  
  position: fixed;
  top: px2vh(94);
  right: px2vh(506);
}
.select-icon{
  height: px2vw(50);
  width: px2vw(200);
  position: fixed;
  top: px2vh(94);
  left: px2vh(506);
}
</style>