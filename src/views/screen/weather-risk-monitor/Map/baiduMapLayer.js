// src/components/baiduMapLayer.js
import markerData from './source/marker.json'
import custom_map_config from './source/custom_map_config.json'
import CDZ from './imgs/CDZ.png'
import icon from './imgs/icon.png'
import car from './imgs/car.png'

/**
 * 百度地图PointIconLayer公共组件
 * @param {Object} options 初始化配置
 * @param {HTMLElement} options.container 地图容器DOM元素
 * @param {Number} options.centerLng 地图中心经度（默认119.30347）
 * @param {Number} options.centerLat 地图中心纬度（默认26.080429）
 * @param {Number} options.zoom 初始缩放级别（默认10）
 * @param {Array} options.markerData 自定义点位数据（默认使用marker.json）
 */
export default class BaiduMapLayer {
  constructor(options = {}) {
    // 配置项默认值
    this.config = {
      container: null,
      centerLng: 119.30347,
      centerLat: 26.080429,
      zoom: 10,
      markerData: markerData
    }
    // 合并用户配置
    Object.assign(this.config, options)

    // 核心实例
    this.mapInstance = null // 地图实例
    this.mapView = null
    this.pointIconLayer = null // 图标图层
    this.bubbleLayer = null  //波浪圈图层
    this.bubbleIconLayer = null  //波浪圈中心图标图层
    this.drivingLayer = null  //驾车路线图层
    this.selectedPoint = null // 选中的点位

    // 初始化地图（如果传入了容器则自动初始化）
    if (this.config.container) {
      this.initMap()
    }
  }

  /**
   * 初始化地图
   */
  initMap() {
    if (!window.BMapGL) {
      console.error('百度地图BMapGL未加载，请先引入百度地图API！')
      return
    }

    try {
      this.createMapInstance()
    } catch (error) {
      console.error('地图初始化失败：', error)
    }
  }

  /**
   * 创建地图实例
   */
  createMapInstance() {
    // 创建地图实例
    this.mapInstance = new BMapGL.Map(this.config.container, {
      showVectorStreetLayer: true,
      showVectorLine: true
    })

   this.mapView  = new mapvgl.View({
        map: this.mapInstance
    });

    this.originalMapInstance = this.mapInstance;

    
    // 设置中心点和缩放级别
    const centerPoint = new BMapGL.Point(this.config.centerLng, this.config.centerLat)
    this.mapInstance.centerAndZoom(centerPoint, this.config.zoom)
    this.mapInstance.enableScrollWheelZoom(true)
    // 设置地图样式
    this.mapInstance.setMapStyleV2({ styleJson: custom_map_config })
    this.mapInstance.setMapType(BMAP_SATELLITE_MAP)

    // 地图加载完成后自动添加海量点图层
    this.mapInstance.addEventListener('tilesloaded', () => {
      this.addPointIconLayer()
      this.addBubbleLayer()
    })

    // 绑定地图点击事件
    this.mapInstance.addEventListener('click', (e) => this.handleMapClick(e))
  }

  /**
   * 处理地图点击事件
   * @param {Event} e 点击事件对象
   */
  handleMapClick(e) {
    this.selectedPoint = {
      lng: e.latlng.lng,
      lat: e.latlng.lat
    }
    // 清除旧标记（保留图层）
    this.mapInstance.clearOverlays(false)
    // 添加新标记
    const marker = new BMapGL.Marker(new BMapGL.Point(e.latlng.lng, e.latlng.lat))
    this.mapInstance.addOverlay(marker)
  }

  /**
   * 添加海量点图标图层
   * @param {Array} customData 自定义点位数据（可选，覆盖默认数据）
   */
  addPointIconLayer(customData) {
    // 清除已有图层
    this.clearPointIconLayer()

    // 点位数据（优先使用自定义数据）
    const pointsData = customData || this.config.markerData

    if (!this.mapInstance) {
      console.error('地图实例未初始化，无法添加图层！')
      return
    }

    try {
       if (pointsData) {
         var markerData = pointsData.features.map(item => ({
            type: 'Feature',
            geometry: item.geometry,
            properties: {
              icon: car,
              size: item.size || 15
            }
          }))
      }

      this.pointIconLayer = new mapvgl.IconLayer({
        width: 32,
        height: 32,
        opacity: 1,
        // icon: icon,
        // enablePicked: true, // 是否可以拾取
        // selectedIndex: -1, // 选中项
        // autoSelect: true, // 根据鼠标位置来自动设置选中项
        renderOrder:2,
        onClick: (e) => { // 点击事件
            console.log('click', e);
        },
        onDblClick: e => {
            console.log('double click', e);
        },
        onRightClick: e => {
            console.log('right click', e);
        }
      })

      // 添加到地图并设置数据
      this.mapView.addLayer(this.pointIconLayer);
      this.pointIconLayer.setData(markerData)
    } catch (error) {
      console.error('添加海量点图层失败：', error)
    }
  }

  /**
   * 清除海量点图层
   */
  clearPointIconLayer() {
    if (this.pointIconLayer && this.mapInstance) {
      this.mapView.removeLayer(this.pointIconLayer);
      this.pointIconLayer = null
    }
  }
  /**
   * 清除点击产生的标记
   */
  clearSelection() {
    this.selectedPoint = null
    if (this.mapInstance) {
      this.mapInstance.clearOverlays(false)
    }
  }

  /**
   * 隐藏地图POI图标和文字
   */
  hideIcon() {
    if (this.mapInstance) {
      this.mapInstance.setDisplayOptions({
        poiIcon: false,
        poiText: false,
        indoor: false
      })
    }
  }

 // 叠加路况图层
  addRouteLayer() {
    this.mapInstance.setTrafficOn();
  }
 // 删除路况图层
  removeRouteLayer() {
    this.mapInstance.setTrafficOff();
  }


  addBubbleLayer(){
    // function createDOM(feature) {
    //     var img = document.createElement('img');
    //     img.style.height = '100px';
    //     img.style.width = '50px';
    //     img.src = 'https://bj.bcebos.com/v1/mapopen-pub-jsapigl/assets/images/fire.gif';
    //     img.draggable = false;
    //     return img;
    // }
    // // 自定义图层
    // var cusLayer = new BMapGL.CustomHtmlLayer(createDOM, {
    //     offsetX: 0,
    //     offsetY: 0,
    //     minZoom: 5,
    //     maxZoom: 17,
    //     enablePick: true
    // });

    // var data = { 
    //     "type": "FeatureCollection",
    //     "features": [
    //         { 
    //             "type": "Feature",
    //             "geometry": {
    //                 "type": "Point",
    //                 "coordinates": [119.35347,26.280429]
    //             },
    //             "properties": {"prop0": "value0"}
    //         },
    //         { 
    //             "type": "Feature",
    //             "geometry": {
    //                 "type": "Point",
    //                 "coordinates": [119.30347,26.180429]
    //             },
    //             "properties": {"prop0": "value0"}
    //         }
    //     ]
    // };
    // cusLayer.setData(data);
    // this.mapInstance.addCustomHtmlLayer(cusLayer);
    // cusLayer.show();

    // cusLayer.addEventListener('click', function (e) {
    //     var data = '经度：' + e.latLng.lat + ','+ '纬度：' + e.latLng.lng ;
    //     alert(data);
    // });

    this.bubbleIconLayer = new mapvgl.IconLayer({
        width: 22,
        height: 26,
        opacity: 1,
        // icon: icon,
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        renderOrder:2,
        onClick: (e) => { // 点击事件
            console.log('click', e);
        },
        onDblClick: e => {
            console.log('double click', e);
        },
        onRightClick: e => {
            console.log('right click', e);
        }
    });
    this.mapView.addLayer(this.bubbleIconLayer);

    this.bubbleLayer = new mapvgl.CircleLayer({
        // 绘制带泡泡的圆
        type: 'bubble',
        renderOrder:1,
        size: (size)=> 3 * size,
        // 扩散半径，支持直接设置和回调两种形式，size为点的大小
        radius(size) {
            return 3 * size;
        },
        // 扩散时间
        duration: 1,
        // 渐隐时间
        trail: 1
    });
    // this.mapInstance.addNormalLayer(this.bubbleLayer)
    this.mapView.addLayer(this.bubbleLayer);

    // 4. 准备好规范化坐标数据
    var data = [{
        geometry: {
            type: 'Point',
            coordinates:  [119.35347,26.080429],
        },
        properties: {
          icon: icon
        },
        color: '#56F9FD',
        size: 10
    }];
    this.bubbleLayer.setData(data)
    this.bubbleIconLayer.setData(data);
  }
  

  clearBubbleLayer(){
    if (this.bubbleLayer && this.bubbleIconLayer &&this.mapInstance) {
      this.mapView.removeLayer(this.bubbleLayer)
      this.mapView.removeLayer(this.bubbleIconLayer)
      this.bubbleLayer = null
      this.bubbleIconLayer = null
    }
  }


  
  // 叠加驾车路线图层
    addDrivingLayer() {
      if(this.mapInstance && this.drivingLayer){
        this.drivingLayer.showRoute()
      }else {
        this.drivingLayer = new BMapGL.DrivingRouteLine(this.mapInstance, { 
            renderOptions: { 
                map: this.mapInstance, 
                autoViewport: false,
                enableDragging: true,
                disableAutoViewport:true,
            }
        })

        var start = new BMapGL.Point(119.30347,26.080429);
        var end = new BMapGL.Point(119.40477,26.120429);

        this.drivingLayer.search(start, end, {});
      }
    }
  // 删除驾车路线图层
    removeDrivingLayer() {
      this.drivingLayer.hideRoute()
    }



  /**
   * 销毁地图实例（释放资源）
   */
  destroy() {
    this.clearPointIconLayer()
    this.clearBubbleLayer()
    if (this.mapInstance) {
      this.mapInstance.destroy()
      this.mapInstance = null
    }
    this.selectedPoint = null
    console.log('地图实例已销毁')
  }
}