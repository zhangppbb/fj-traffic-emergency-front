// src/components/baiduMapLayer.js
import allMarkerData from './source/mockData.js'
import custom_map_config from './source/custom_map_config.json'
import icon from './imgs/icon.png'
import closeIcon from './imgs/close.png'
import './style/style.scss'
import pologyData from "./source/pology.js";
import videoBrige from "./source/video.mp4";

export default class BaiduMapLayer {
  constructor(options = {}) {
    this.config = {
      container: null,
      centerLng: 119.302446,
      centerLat: 26.10634,
      zoom: 8,
      markerData: allMarkerData,
      vueInstance: null,
      defaultPopupStyle: {
        width: '24vh',
        padding: '1vh',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        border: 'none',
        enableAutoPan: true,
        closeOnClick: false
      },
      currentActive:null,
      changRoute: null,
      onDistrictLayerRemoved: null
    }
    Object.assign(this.config, options)

    // 核心实例
    this.mapInstance = null
    this.mapView = null
    this.pointIconLayer = null  // 点图层
    this.bubbleLayer = null // 冒泡圈图层
    this.bubbleIconLayer = null // 选中点
    this.drivingLayer = null // 路线规划图层
    this.selectedPoint = null  // 选中点
    this.infoBoxInstance = null // 弹窗图层
    this.polylineLayer = null // 路线图层

    this.layerMap = {
      bridge: null, // 桥梁
      slope: null,        // 边坡
      subgrade: null,// 路基
      tunnel: null, // 隧道
    };

    this.layerDataMap = {};
    this.zoomDebounceTimer = null;

    if (this.config.container) {
      this.initMap()
    }
  }

  initMap() {
    try {
      this.createMapInstance()
    } catch (error) {
      console.error('地图初始化失败：', error)
    }
  }

  createMapInstance() {
    this.mapInstance = new BMapGL.Map(this.config.container, {
      showVectorStreetLayer: true,
      showVectorLine: true,
      backgroundColor: [0, 0, 0, 0],
      enableMapClick: true // 必须启用点击交互
    })

    this.mapView = new mapvgl.View({ map: this.mapInstance })
    this.originalMapInstance = this.mapInstance

    const centerPoint = new BMapGL.Point(this.config.centerLng, this.config.centerLat)
    this.mapInstance.centerAndZoom(centerPoint, this.config.zoom)
    this.mapInstance.enableScrollWheelZoom(true)

    this.mapInstance.setMapType(BMAP_SATELLITE_MAP)
    this.onlyShowHighWay()
    this.mapInstance.addEventListener('tilesloaded', () => {
      // this.addPointIconLayer()
    })
  }

  addMaskLayer(){
    var polygon = [{
        geometry: {
            type: 'Polygon',
            coordinates: pologyData.pology
        }
    }];

    this.maskLayer = new mapvgl.MaskLayer({
        color: 'rgba(0, 26, 90, 0.6)',
    });
    this.mapView.addLayer(this.maskLayer);
    this.maskLayer.setData(polygon);
  }
  /**
 * 新增：按类型添加指定图层（支持单独显示某类点位）
 * @param {String} type 要显示的类型：bridge/slope/subgrade/tunnel
 * @param {Object} customData 自定义数据（可选）
 */
  addLayerByType(type, alertLevel, subType, customData) {
    // 清除该类型原有图层
    // this.clearLayerByType(type);

    if(this.districtLayer){
      return 
    }
    
    const pointsData = customData || this.config.markerData;
    if (!this.mapInstance || !pointsData || !pointsData.features) {
      console.error('数据或地图实例未初始化！');
      return;
    }

    // 多条件组合筛选：type(必选) + alertLevel(可选) + subType(可选)
    const filteredData = pointsData.features.filter(item => {
      const props = item.properties;
      // 基础条件：匹配type
      let isMatch = props.type === type;
      
      // 可选条件1：如果传入了alertLevel，则匹配预警等级
      if (alertLevel && isMatch) {
        isMatch = props.alertLevel === alertLevel;
      }
      
      // 可选条件2：如果传入了subType，则匹配子类型
      if (subType && isMatch) {
        isMatch = props.subType === subType;
      }
      
      return isMatch;
    });

    if (filteredData.length === 0) {
      // 优化提示信息，显示具体的筛选条件
      const filterTips = [
        `类型: ${type}`,
        alertLevel ? `预警等级: ${alertLevel}` : '',
        subType ? `子类型: ${subType}` : ''
      ].filter(Boolean).join('，');
      console.warn(`暂无${filterTips}的点位数据`);
      return;
    }
    

    try {
      // 构建带颜色的Marker数据
      const markerData = filteredData.map(item => ({
        type: 'Feature',
        geometry: item.geometry,
        properties: {
          icon: item.icon, // 基础图标（可根据type替换不同图标）
          size: item.properties.size || 15,
          color: item.properties.alertColor || '#00CC00', // 预警颜色
          ...item.properties
        }
      }));

      // 保存图层数据（缩放时复用）
      this.layerDataMap[type] = markerData;

      // 核心修复2：优化IconLayer配置，增加稳定渲染参数
      this.layerMap[type] = new mapvgl.IconLayer({
        width: 24,
        height: 28,
        opacity: 1,
        enablePicked: true,
        selectedIndex: -1, // 初始无选中项
        selectedColor: 'rgba(255, 255, 255, 0.4)', 
        selectedStrokeColor: '#FF0000',
        selectedStrokeWidth: 3,
        selectedScale: 1.2,
        autoSelect: true, // 点击自动选中
        renderOrder: 10, // 提高渲染优先级（避免被其他图层覆盖）
        persistent: true, // 持久化渲染（关键：防止缩放时被销毁）
        enableHighlight: false, // 关闭高亮（避免冲突）
        // 核心修复3：样式函数增加空值保护，避免缩放时报错
        style: (feature, index) => {
          // 空值保护：防止layerMap[type]为null时访问options
          const layerOptions = this.layerMap[type]?.options || {};
          const isSelected = index === layerOptions.selectedIndex;
          
          return {
            color: feature.properties.color || '#00CC00',
            strokeColor: isSelected ? '#FF0000' : '#fff', 
            strokeWidth: isSelected ? 3 : 2, 
            opacity: isSelected ? 1 : 0.9,
            width: isSelected ? 24 * 1.2 : 24,
            height: isSelected ? 28 * 1.2 : 28,
            anchor: 'center' // 固定锚点（关键：防止缩放时图标偏移/消失）
          };
        },
        onClick: (e) => {
          // 空值保护：防止图层已销毁时操作
          if (!this.layerMap[type]) return;
          
          this.layerMap[type].setOptions({
            selectedIndex: e.index
          });
          this.handleMarkerClick(e); 
        }
      });
      
      // 确保图层只添加一次
      const isLayerExist = this.mapView.layerManager.layers.some(layer => layer === this.layerMap[type]);
      if (!isLayerExist) {
        this.mapView.addLayer(this.layerMap[type]);
      }
      // 强制设置数据（确保图层有数据渲染）
      this.layerMap[type].setData(markerData);
    } catch (error) {
      console.error(`添加${type}图层失败：`, error);
    }
  }

  /**
   * 新增：清除指定类型的图层
   * @param {String} type 要清除的类型
   */
  clearLayerByType(type) {
    // 清除数据缓存（避免缩放时重绘已删除的图层）
    if (this.layerDataMap[type]) {
      delete this.layerDataMap[type];
    }
    
    if (this.layerMap[type]) {
      this.mapView.removeLayer(this.layerMap[type]);
      this.layerMap[type] = null;
    }
  }

  /**
   * 新增：添加所有类型的图层（一次性显示所有点位）
   */
  addAllLayers() {
    // 依次添加所有类型图层
    ['bridge', 'slope', 'subgrade', 'tunnel'].forEach(type => {
      this.addLayerByType(type);
    });

    // const centerPoint = new BMapGL.Point(this.config.centerLng, this.config.centerLat)
    // this.mapInstance.centerAndZoom(centerPoint, this.config.zoom);
  }

  

  /**
   * 删除：添加所有类型的图层（一次性显示所有点位）
   */
  clearAllLayers() {
    // 依次添加所有类型图层
    ['bridge', 'slope', 'subgrade', 'tunnel'].forEach(type => {
      this.clearLayerByType(type);
    });
    this.removeDrivingLayer()
    this.clearInfoBox()
    // 清空数据缓存
    this.layerDataMap = {};
  }

  /**
   * Marker点击事件处理
   * @param {Object} e 点击事件对象
   */
  handleMarkerClick(e) {
    try {
      // 1. 获取点击点位数据
      const clickedFeature = e.feature || e.target || e.record || e.dataItem
      console.log('点击点位数据：', clickedFeature)
      if (!clickedFeature || !clickedFeature.geometry) {
        console.warn('未获取到点击点位的坐标数据')
        return
      }

      // 2. 获取点位经纬度
      const [lng, lat] = clickedFeature.geometry.coordinates || []
      if (!lng || !lat) {
        console.warn('点位经纬度为空')
        return
      }
      const point = new BMapGL.Point(lng, lat)
      // this.mapInstance.panTo(point); 
      // this.mapInstance.centerAndZoom(point, 13);

      // 3. 调用公共弹窗方法
      this.openCustomInfoBox(point, clickedFeature.properties)

    } catch (error) {
      console.error('InfoBox弹窗创建失败：', error)
    }
  }

  /**
   * 【公共方法】打开自定义InfoBox弹窗
   * @param {BMapGL.Point} point 弹窗定位点
   * @param {Object} props Marker属性（包含弹窗配置和内容数据）
   * @param {Object} customStyle 自定义弹窗样式（可选，优先级高于Marker自带配置）
   */
  openCustomInfoBox(point, props = {}, customStyle = {}) {
    // 1. 清除旧弹窗
    this.clearInfoBox()

    // 2. 合并样式配置：自定义样式 > Marker自带配置 > 默认样式
    const popupStyle = {
      ...this.config.defaultPopupStyle,
      ...customStyle,
    }

    // 3. 获取弹窗内容：优先使用自定义内容，无则使用默认模板
    const popupContent = props.popupConfig?.content 
      ? this.getCustomPopupContent(props) 
      : this.getDefalutPopupContent(props)

    // 4. 创建并显示InfoBox
    this.infoBoxInstance = new BMapGLLib.InfoBox(this.mapInstance, popupContent, {
      boxStyle: {
        // width: popupStyle.width,
        // height: popupStyle.height,
        // padding: popupStyle.padding,
        borderRadius: popupStyle.borderRadius,
        boxShadow: popupStyle.boxShadow,
        // border: popupStyle.border
      },
      closeIconUrl: closeIcon,
      offset: popupStyle.offset,
      enableAutoPan: popupStyle.enableAutoPan,
      closeOnClick: popupStyle.closeOnClick
    })

    this.infoBoxInstance.open(point)

    this.bindDetailBtnToDom(props);
  }

  bindDetailBtnToDom(props) {
    // 延迟100ms，确保DOM已渲染（InfoBox渲染有延迟）
    setTimeout(() => {
      // 查找弹窗内的详情按钮（直接通过类名查找）
      const detailBtn = document.querySelector('.baidu-map-popup .popup-detail-btn');
      if (!detailBtn) {
        console.warn('未找到详情按钮DOM');
        return;
      }
      // 先移除旧事件，避免重复绑定
      detailBtn.removeEventListener('click', this.handleDetailBtnClick);
      // 直接绑定事件（this已在构造函数中bind）
      detailBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡到地图，避免关闭弹窗
        this.handleDetailBtnClick(e, props); // 传入props，直接获取点位数据
      });

      // 给按钮加CSS，强制可点击、防遮挡
      detailBtn.style.cursor = 'pointer';
      detailBtn.style.zIndex = '9999999';
      detailBtn.style.pointerEvents = 'auto'; // 强制开启点击事件
    }, 100);
  }

  /**
   * 获取默认弹窗内容（拥堵预警模板）
   * @param {Object} props Marker属性
   * @returns {String} HTML内容
   */
  getDefalutPopupContent(props) {
    const {
      name = "未知设施",
      facilityCode = "未知编号",
      maintenanceUnit = "未知单位",
      maintenanceWork = "未知工作",
      basicInfo = "未知信息",
      desc = "无预警摘要",
      alertLevel = "未知预警",
      videoImgs = [],
      videoTitles = [],
      videoTimes = []
    } = props;

    return `
      <div class="baidu-map-popup">
        <div class="popup-header">
          ${name}
          <span style="font-size:10px;background:${props.alertColor}; color:#fff; padding:2px 5px; border-radius:4px;">${alertLevel}</span>
        </div>
        <div class="popup-content">
          <div class="popup-info-list">
            <div><span class="popup-info-label">基础设施编号:</span>${facilityCode}</div>
            <div><span class="popup-info-label">管养单位：</span>${maintenanceUnit}</div>
            <div><span class="popup-info-label">具体养护工作：</span>${maintenanceWork}</div>
            <div><span class="popup-info-label">基本信息：</span>${basicInfo}</div>
            <div><span class="popup-info-label">预警摘要：</span>${desc}</div>
          </div>

          ${videoImgs.length > 0 ? `
            <div class="popup-video-title">实时监控：</div>
            <div class="popup-video-list">
                <div class="popup-video-item">
                   <video
                    src=${videoBrige}
                    class="w-full video-content"
                    ref="videoPlayer"
                    muted
                    loop
                    autoplay
                  ></video>
                  <div class="popup-video-tag">${videoTimes || '未知时间'}</div>
                </div>
            </div>
          ` : ''}
          <div class="flex w-full justify-end">
            <button class="popup-detail-btn"}>查看详情</button>
          </div>
        </div>
      </div>
    `;
  }

  handleDetailBtnClick() {
    this.config.changRoute();
  }

  /**
   * 获取自定义弹窗内容
   * @param {Object} props Marker属性
   * @returns {String} HTML内容
   */
  getCustomPopupContent(props) {
    // 支持两种自定义方式：
    // 1. 直接传入HTML字符串
    if (typeof props.popupConfig.content === 'string') {
      return props.popupConfig.content
    }
    // 2. 传入自定义渲染函数
    if (typeof props.popupConfig.content === 'function') {
      return props.popupConfig.content(props)
    }
    // 默认返回空内容（使用CSS类名）
    return '<div class="popup-custom-default">暂无内容</div>'
  }

  /**
   * 清除InfoBox弹窗
   */
  clearInfoBox() {
    if (this.infoBoxInstance) {
      this.infoBoxInstance.close()
      this.infoBoxInstance = null
    }
  }

  /**
   * 清除海量点图层（同时关闭InfoBox）
   */
  clearPointIconLayer() {
    this.clearInfoBox()
    if (this.pointIconLayer) {
      this.mapView.removeLayer(this.pointIconLayer)
      this.pointIconLayer = null
    }
  }

  // 以下方法保持不变
  addRouteLayer() { this.mapInstance.setTrafficOn() }
  removeRouteLayer() { this.mapInstance.setTrafficOff() }

  addBubbleLayer(lng,lat) {
    this.bubbleIconLayer = new mapvgl.IconLayer({
      width: 22, height: 26, opacity: 1, enablePicked: true,
      selectedIndex: -1, autoSelect: true, renderOrder: 2,
      onClick: (e) => console.log('click', e)
    })
    this.mapView.addLayer(this.bubbleIconLayer)

    this.bubbleLayer = new mapvgl.CircleLayer({
      type: 'bubble', renderOrder: 1,
      size: (size) => 3 * size,
      radius: (size) => 3 * size,
      duration: 1, trail: 1
    })
    this.mapView.addLayer(this.bubbleLayer)

    const data = [{
      geometry: { type: 'Point', coordinates: [lng,lat] },
      properties: { icon: icon },
      color: '#56F9FD', size: 10
    }]
    this.bubbleLayer.setData(data)
    this.bubbleIconLayer.setData(data)
  }

  clearBubbleLayer() {
    if (this.bubbleLayer && this.bubbleIconLayer && this.mapInstance) {
      this.mapView.removeLayer(this.bubbleLayer)
      this.mapView.removeLayer(this.bubbleIconLayer)
      this.bubbleLayer = null
      this.bubbleIconLayer = null
    }
  }

  addDrivingLayer(routeParams) {
      // 1. 参数校验
      if (!this.mapInstance) {
        console.warn('地图实例未初始化，无法规划路线');
        return;
      }
      const { start, end, waypoints = [] } = routeParams;
      if (!start || !end || start.length < 2 || end.length < 2) {
        console.warn('起点和终点坐标不能为空（格式：[lng, lat]）');
        return;
      }

      // 2. 清除旧路线（避免重叠）
      this.removeDrivingLayer();

      // 3. 转换坐标为百度地图 Point 对象
      const startPoint = new BMapGL.Point(start[0], start[1]);
      const endPoint = new BMapGL.Point(end[0], end[1]);
      // 途经点转换
      const wayPointList = waypoints.map(coord => new BMapGL.Point(coord[0], coord[1]));

      this.drivingLayer = new BMapGL.DrivingRoute(this.mapInstance, {
        renderOptions: {
          map: this.mapInstance,    // 路线渲染到当前地图
          autoViewport: true,       // 自动适配地图视野
          strokeColor: '#e41212', // 路线颜色（和你原有样式一致）
          strokeWeight: 6,          // 路线宽度
          strokeOpacity: 0.9,       // 透明度
          strokeLineCap: 'round',   // 圆角端点
          strokeLineJoin: 'round'   // 圆角拐角
        },
        // onSearchComplete: (results) => {
        //   // 路线规划结果回调
        //   if (this.drivingLayer.getStatus() !== BMAP_STATUS_SUCCESS) {
        //     console.warn('驾车路线规划失败，请检查坐标是否合法');
        //     return;
        //   }
        //   console.log('路线规划成功，共', results.getPlan(0).getNumRoutes(), '条路线');
        // },
        onPolylinesSet: () => {
          const allOverlays = this.mapInstance.getOverlays();
          allOverlays.forEach(overlay => {
            // 筛选出驾车路线的折线（判断类型为 Polyline）
            if (overlay instanceof BMapGL.Polyline) {
              overlay.setStrokeColor('#e41212ff');
              overlay.setStrokeLineCap('round');
              overlay.setStrokeLineJoin('round');
              overlay.setZIndex(100);
            }
          });
        }
      });

      // 5. 发起路线搜索（支持途经点）
      this.drivingLayer.search(startPoint, endPoint, {
        waypoints: wayPointList
      });
    }

  removeDrivingLayer() {
    if (this.drivingLayer) {
      this.drivingLayer.clearResults(); // 清除路线渲染
      this.drivingLayer = null;         // 清空实例
    }
  }

  onlyShowHighWay(type) {
    const styleJson = type === 'highWay' ? hightWay : custom_map_config
    this.mapInstance.setMapStyleV2({ styleJson })
  }


  addDistrictLayer() {
    // 先移除已存在的行政区划图层（避免重复添加）
    if (this.districtLayer) {
      this.mapInstance.removeDistrictLayer(this.districtLayer);
    }

    this.districtLayer = new BMapGL.DistrictLayer({
      name: '(福建省)',
      kind: 1, // 1代表省级，2代表市级，可根据需求调整
      fillColor: '#0e3241',
      fillOpacity: 0.2,
      strokeColor: '#00E4FF',
      viewport: false
    });
    this.mapInstance.addDistrictLayer(this.districtLayer);

    // 鼠标悬浮变色
    this.districtLayer.addEventListener('mouseover', function (e) {
      e.currentTarget.setFillColor('#0e3241');
    });

    // 鼠标离开恢复原颜色（修复原代码中获取默认颜色的错误）
    this.districtLayer.addEventListener('mouseout', function (e) {
      e.currentTarget.setFillColor('#0e3241'); // 恢复初始填充色
    });

    // 点击事件：定位到点击区域中心点 + 缩放 + 删除行政区划图层
    this.districtLayer.addEventListener('click', (e) => {
      try {

        // 3. 删除行政区划图层（移除后不再显示）
        this.mapInstance.removeDistrictLayer(this.districtLayer);
        this.districtLayer = null; // 清空图层引用

        let that = this
        setTimeout(() => {
          const centerPoint = new BMapGL.Point(119.30347, 26.080429);
          // 建议调整缩放级别为更合理的数值（比如8，和初始化一致）
          that.mapInstance.centerAndZoom(centerPoint, 10); 
          that.mapInstance.enableScrollWheelZoom(true);
          
          if(that.config.currentActive == 'all' || that.config.currentActive == null || that.config.currentActive == 0){
            that.addAllLayers();
          }else {
            that.addLayerByType(that.config.currentActive);
          }

          // that.districtLayer = new BMapGL.DistrictLayer({
          //   name: '(福州市)',
          //   kind: 0, // 保持省级
          //   fillColor: '#0e3241',
          //   fillOpacity: 0,
          //   strokeColor: '#00E4FF',
          //   viewport: false,
          //   strokeWeight: 2,
          // });
          // that.mapInstance.addDistrictLayer(that.districtLayer);

          // that.addAllLayers();
        }, 100);

      } catch (error) {
        console.error('定位或移除图层失败：', error);
      }
    });
  }

  // 核心修复4：销毁时移除事件监听，避免内存泄漏
  destroy() {
    document.removeEventListener('click', this.handleDetailBtnClick);
    // 移除缩放/移动事件监听
    // if (this.mapInstance) {
    //   this.mapInstance.removeEventListener('zoomend', this.handleMapZoom.bind(this));
    //   this.mapInstance.removeEventListener('moveend', this.handleMapZoom.bind(this));
    // }

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