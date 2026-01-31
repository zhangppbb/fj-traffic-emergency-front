
// 地图数据源_灾害
const disasterDataset = 'http://10.23.17.229:8090/iserver/services/data-gis-disaster--3--2/rest/data'
const disasterDatasetName = 'allpoint-2@all_User'

// 每页条数
const PAGE_SIZE = 200;

import mapDynamicLoading from "./mapDynamicLoading";
export default {
  mixins: [mapDynamicLoading],
  data() {
    return {
       // 地图实例
       map: null,

       // 点图层
       pointLayer: null,
 
       // 线路图
       linesLayer: null,
 
       // 弹窗
       dialogVisible: false,
       dialogVisibleModel: {
          title: '',
       },
       dialogVisibleHightWay: false,
       dialogVisibleHightWayModel: {
          title: ''
       },
 
       // 是否为预警
       isBianPo: false,
 
       // 地图边界数据
       resultBoundsLayer: null,
       //地图动态加载防抖
       updateTimer:null,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initMap()

      this.refreshDataView()
    })
  },

  methods: {
    // 刷新地图点
    refreshMap() {
      const self = this
      const map = this.map
      var zoomLevel = map.getZoom()

      // if (zoomLevel >= 10) {
      //   self.renderVisiblePoints()
      // } else {
      //   // 1. 清空旧点
      //   self.clearPointLayerFeatures();
      // }

      // 省一级-展示边界
      if (zoomLevel >= 6) {
        // self.renderVisiblePoints()
        // self.loadLinesByBounds();
      }

      if (zoomLevel >= 9) {
        clearTimeout(self.updateTimer)
        self.updateTimer = setTimeout(() => {
          self.makeRequests(zoomLevel)
        }, 400)
      } else {
        // 1. 清空旧点
        self.clearLinesLayerFeatures();
        self.clearPointLayerFeatures();
      }
    },

    makeRequests(zoomLevel){
      this.loadLinesG()
      // self.loadLines()
      // if(zoomLevel = 9){
      //   setTimeout(() => {
      //     this.renderVisiblePointsAll()
      //   }, 2000)
      // }
      // if(zoomLevel = 10){
      //   setTimeout(() => {
      //     this.renderVisiblePointsAll()
      //   }, 1000)
      // }
      // if(zoomLevel = 11){
      //   setTimeout(() => {
      //     this.renderVisiblePointsAll()
      //   }, 1000)
      // }
      // else{
      //   this.renderVisiblePointsAll()
      // }
      
      // self.renderVisiblePoints()
    },
    // 清空标记
    clearLayersFeatures() {
      this.clearBoundsFeatures()
      this.clearPointLayerFeatures()
      this.clearLinesLayerFeatures()
    },

    // 初始化地图
    initMap() {
      const self = this

      // 104.1954, 35.8617
      var map = L.map('map', {
        center: [30.76, 103.76],
        zoom: 5,
        zoomSnap: 0.25,
        crs: L.supermap.CRS.TianDiTu_WGS84,
        zoomControl: false // 禁用放大缩小按钮
      });


      // 加载中国边界线（只线）
      // fetch('/json/china.json')
      //   .then(res => res.json())
      //   .then(geojson => {
      //     L.geoJSON(geojson, {
      //       style: {
      //         color: '#FF0000',
      //         weight: 2,
      //         fill: false // 透明背景
      //       },
      //       onEachFeature: function (feature, layer) {
      //         layer.on('click', function () {
      //           alert('你点击了边界线');
      //         });
      //       }
      //     }).addTo(map);
      //   });


      // 创建一个图层组用于管理点位
      // this.pointLayer = L.layerGroup().addTo(map);
      this.pointLayer = L.featureGroup().addTo(map).setZIndex(2);
    
      // 创建一个线图层来显示数据
      // this.linesLayer = new L.LayerGroup().addTo(map);
      this.linesLayer = L.featureGroup().addTo(map).setZIndex(1);
      

      // 缩放层级
      map.on("zoomstart", function () {
        self.clearLayersFeatures()
      });

      // 缩放层级
      map.on("movestart", function () {
        self.clearLayersFeatures()
      });

      // 缩放层级
      map.on("zoomend", function () {
        self.refreshMap()
      });

      // 缩放层级
      map.on("dragend", function () {
        self.refreshMap()
      });

      // 缩放层级
      map.on("moveend", function () {
        self.refreshMap()
      });

      const KEY = '1d109683f4d84198e37a38c442d68311'

      new L.supermap
        .TiandituTileLayer({
          key: KEY
        })
        .addTo(map);

      
      new L.supermap
        .TiandituTileLayer({
          layerType: 'img',
          key: KEY
        })
        .addTo(map);
      new L.supermap
        .TiandituTileLayer({
          layerType: 'img',
          isLabel: true,
          key: KEY
        })
        .addTo(map);



    // superMap 图层引入
    // 10.23.17.229:8090http://localhost:8090/iserver/services/map-gis-2/rest/maps/DiZhi%40DataSourceGIS
    // var overlayLayer = new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--2--3/rest/maps/AllLevelMap", {
    //       transparent: true,
    //       noWrap: true
    //       //opacity: 0.6
    //     }).addTo(map);

    var overlayLayer = new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--2--4/rest/maps/DataSourceGIS2-sichuan", {
      transparent: true,
      noWrap: true
      //opacity: 0.6
    }).addTo(map);
    
  // var overlayLayer = new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/DataSource%40disaster-provincial-highway", {
  //     transparent: true,
  //     noWrap: true
  //     //opacity: 0.6
  //   }).addTo(map);

    
  // new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/DataSource%40disaster-national-highway", {
  //   transparent: true,
  //   noWrap: true
  //   //opacity: 0.6
  // }).addTo(map);

  
      
  // var pologyLayer = new L.supermap.TiledMapLayer(
  //   "http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/mapPology",
  //   {
  //     transparent: true,
  //     noWrap: true,
  //     //opacity: 0.6
  //   }
  // ).addTo(map);

  
  // new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/heatMap", {
  //   transparent: true,
  //   noWrap: true
  //   //opacity: 0.6
  // }).addTo(map);
    //  new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/AllLevelMap", {
    //       transparent: true,
    //       noWrap: true
    //       //opacity: 0.6
    //     }).addTo(map);


       
      // new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--2-/rest/maps/AllLevelMap", {
      //     transparent: true,
      //     noWrap: true
      //     //opacity: 0.6
      //   }).addTo(map);

    // 监听地图点击事件，并查询要素
    
    // map.on("click", (event) => {
    //   self.isBianPo = false

    //   setTimeout(() => {
    //     self.dialogVisible = true
    //   }, 400)
    //   // var identifyParams = {
    //     //     geometry: event.latlng, // 点击的坐标
    //     //     tolerance: 5,           // 容差范围
    //     //     returnGeometry: true,   // 是否返回几何信息
    //     //     layers: "all"           // 查询所有图层
    //     // };

    //     // // 进行 identify 查询
    //     // overlayLayer.identify(identifyParams, function(result) {
    //     //     console.log("Identify 结果:", result);
    //     //     if (result && result.records && result.records.length > 0) {
    //     //         alert("你点击了要素：" + JSON.stringify(result.records[0].fieldValues, null, 2));
    //     //     } else {
    //     //         alert("未查询到任何要素");
    //     //     }
    //     // });
    //   });


      // gif 标记
      // 3. 创建 GIF 标记

      // 自定义 GIF 图标
      var points = [
          [39.9, 116.4],
          [39.92, 116.42],
          [39.94, 116.44]
      ];

      // { "lat": 26.735482, "lng": 106.721134 }
      // var gifIcon = L.icon({
      //     iconUrl: WARN_ICON, // GIF 图片地址
      //     iconSize: [24, 32],  // 设置图标大小
      //     iconAnchor: [25, 25] // 图标锚点（居中）
      // });

      // // 添加 GIF 标记点
      // const marker = L.marker([27.1142578125, 106.04003906250001], { icon: gifIcon, isCustom: true }).addTo(map);

      // marker.isCustom = true;  // 自定义标记

      // marker.on('click', function() {
      //   self.isBianPo = true

      //   setTimeout(() => {
      //     self.dialogVisible = true
      //   }, 400)
      // });

      this.map = map
      // 绑定点击事件，弹出信息窗口
      // marker.bindPopup("这是一个 GIF 动态标记点").openPopup();
    },

    polygonToGeoJSON(polygonGeometry) {
      // 获取 Polygon 的顶点（闭环）
      const vertices = polygonGeometry.getVertices(); // 返回的是 SuperMap.Geometry.Point 数组

      // 将 SuperMap 的 Point 对象转换为 GeoJSON 坐标数组
      const coordinates = vertices.map(point => [point.x, point.y]);

      // 构造 GeoJSON 对象
      const geojson = {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [coordinates]  // 包裹在一个数组中，符合 GeoJSON 的要求
        },
        properties: {}
      };

      return geojson;
    },

    boundsToGeometry(bounds) {
      let leftBottom = bounds.getSouthWest(); // 左下
      let rightTop = bounds.getNorthEast();   // 右上

      let points = [
        new SuperMap.Geometry.Point(leftBottom.lng, leftBottom.lat),
        new SuperMap.Geometry.Point(rightTop.lng, leftBottom.lat),
        new SuperMap.Geometry.Point(rightTop.lng, rightTop.lat),
        new SuperMap.Geometry.Point(leftBottom.lng, rightTop.lat),
        new SuperMap.Geometry.Point(leftBottom.lng, leftBottom.lat) // 闭合
      ];

      let linearRing = new SuperMap.Geometry.LinearRing(points);
      return new SuperMap.Geometry.Polygon([linearRing]);
    },

    // 清空地图边界数据
    clearBoundsFeatures() {
      const map = this.map
      if (this.resultBoundsLayer) {
        const resultLayer = this.resultBoundsLayer
        map.removeLayer(resultLayer);
      }
    },


    // 清空点地图边界数据
    clearPointLayerFeatures() {
      const map = this.map
      if (this.pointLayer) {
        const resultLayer = this.pointLayer
        // map.removeLayer(resultLayer);
        resultLayer.clearLayers()
      }
    },

    // 清空线条数据
    clearLinesLayerFeatures() {
      const map = this.map
      if (this.linesLayer) {
        const resultLayer = this.linesLayer
        // map.removeLayer(resultLayer);
        resultLayer.clearLayers()
      }
    },

    // 加载线路图
    loadLinesG() {
      this.clearLinesLayerFeatures()

      const map = this.map
      const self = this

      // 获取当前地图视图范围
      const bounds = map.getBounds();
      const smBounds = new SuperMap.Bounds(
        bounds.getWest(),
        bounds.getSouth(),
        bounds.getEast(),
        bounds.getNorth()
      );

      // linesLayer.clearLayers(); // 清空旧图层

      const colors = ['#0078FF', '#FF5733'];

      const nameArr = ["11","12","13","14","15","21","22","23","31","32","33","34","35","36","37","41","42","43","44","45","46","50","51","52","53","54","61","62","63","64","65","66"]

      const datasets = []
      nameArr.forEach((item) => {
        datasets.push('highway:L21_'+item+'_G')
        datasets.push('highway-S:L21_'+item+'_S')
      });
      
      // const datasets = [
      //   'DataSourceGIS2:gz_L21_52_G',
      //   'DataSourceGIS2:gz_L21_52_S',

      //   'DataSourceGIS2:L21_34_G',
      //   'DataSourceGIS2:L21_34_S',

      //   'DataSourceGIS2:sc_L21_51_G',
      //   'DataSourceGIS2:sc_L21_51_S',
      // ]

      // const loadByPage = (datasetName, bounds, pageIndex, collectedFeatures, color) => {
      //   const fromIndex = pageIndex * PAGE_SIZE;
      //   const toIndex = fromIndex + PAGE_SIZE;

      //   const params = new SuperMap.GetFeaturesByBoundsParameters({
      //     datasetNames: [datasetName],
      //     bounds: bounds,
      //     returnContent: true,
      //     fromIndex,
      //     toIndex
      //   });

      //   const service = new SuperMap.GetFeaturesByBoundsService(disasterDataset);

      //   service.processAsync(params, (serviceResult) => {
      //     if (serviceResult.result && serviceResult.result.features) {
      //        // 所有分页加载完成，统一添加到地图
      //        const layer = L.geoJSON(serviceResult.result.features, {
      //         style: {
      //           color: color,
      //           weight: 5
      //         },
      //         onEachFeature: (feature, layer) => {
      //           // 点击事件
      //           layer.on('click', (feature) => {
      //             // console.log(feature, '1----1')
      //             const data = feature.target.feature.properties || {}
      //             const title = `${data.F03 || ''}`
      //             // const data
      //             // console.log(title, '111')
                  
      //             self.dialogVisibleHightWayModel = {
      //               title,
      //               ...data
      //             }
  
      //             setTimeout(() => {
      //               self.dialogVisibleHightWay = true
      //             }, 300)
      //           });
      //         }
      //       });

      //       self.linesLayer.addLayer(layer);
      //       console.log(serviceResult.result, PAGE_SIZE, '1---1')
      //       if (serviceResult.result.featureCount === PAGE_SIZE) {
      //         // 如果本页满了，说明可能还有下一页，递归加载下一页
      //         loadByPage(datasetName, bounds, pageIndex + 1, collectedFeatures, color);
      //       }
      //     }
      //   });
      // };


      // datasets.forEach((datasetName, index) => {
      //   // 分页递归加载
      //   loadByPage(datasetName, smBounds, 0, [], colors[index % 2]);
      // });

      this.loadLineByPage(datasets,smBounds,0,colors)
    },
    // 加载线路图
    loadLines() {
      this.clearLinesLayerFeatures()

      const map = this.map
      const self = this

      // 获取当前地图视图范围
      const bounds = map.getBounds();
      const smBounds = new SuperMap.Bounds(
        bounds.getWest(),
        bounds.getSouth(),
        bounds.getEast(),
        bounds.getNorth()
      );

      // linesLayer.clearLayers(); // 清空旧图层

      const colors = ['#0078FF', '#FF5733', '#2ECC71'];

      const datasets = [
        'DataSourceGIS2:gz_L21_52_G',
        'DataSourceGIS2:gz_L21_52_S',

        'DataSourceGIS2:L21_34_G',
        'DataSourceGIS2:L21_34_S',

        'DataSourceGIS2:sc_L21_51_G',
        'DataSourceGIS2:sc_L21_51_S',
      ]

      const loadByPage = (datasetName, bounds, pageIndex, collectedFeatures, color) => {
        const fromIndex = pageIndex * PAGE_SIZE;
        const toIndex = fromIndex + PAGE_SIZE;

        const params = new SuperMap.GetFeaturesByBoundsParameters({
          datasetNames: [datasetName],
          bounds: bounds,
          returnContent: true,
          fromIndex,
          toIndex
        });

        const service = new SuperMap.GetFeaturesByBoundsService(disasterDataset);

        service.processAsync(params, (serviceResult) => {
          if (serviceResult.result && serviceResult.result.features) {
             // 所有分页加载完成，统一添加到地图
             const layer = L.geoJSON(serviceResult.result.features, {
              style: {
                color: color,
                weight: 5
              },
              onEachFeature: (feature, layer) => {
                // 点击事件
                layer.on('click', () => {
                  console.log(feature, '1-----1')
                  const props = feature.properties;
                  const name = props.name || props.名称 || '未命名线路';
                  const info = Object.entries(props)
                    .map(([key, val]) => `<b>${key}:</b> ${val}`)
                    .join('<br>');

                  layer.bindPopup(`<h4>${name}</h4>${info}`).openPopup();
                });
              }
            });

            self.linesLayer.addLayer(layer);
            console.log(serviceResult.result, PAGE_SIZE, '1---1')
            if (serviceResult.result.featureCount === PAGE_SIZE) {
              // 如果本页满了，说明可能还有下一页，递归加载下一页
              loadByPage(datasetName, bounds, pageIndex + 1, collectedFeatures, color);
            }
          }
          // if (result.result && result.result.features) {
          //   // const features = result.result.features.map(f => f.toGeoJSON());
          //   // collectedFeatures.push(...features);

          //   const serviceResult.result.features

          //   if (features.length === PAGE_SIZE) {
          //     // 如果本页满了，说明可能还有下一页，递归加载下一页
          //     loadByPage(datasetName, bounds, pageIndex + 1, collectedFeatures, color);
          //   } else {
          //     // 所有分页加载完成，统一添加到地图
          //     const geojson = {
          //       type: 'FeatureCollection',
          //       features: collectedFeatures
          //     };

          //     const layer = L.geoJSON(geojson, {
          //       style: {
          //         color: color,
          //         weight: 3
          //       }
          //     });

          //     lineGroup.addLayer(layer);
          //     console.log(`✅ 加载图层 ${datasetName} 共 ${collectedFeatures.length} 条`);
          //   }
          // } else {
          //   console.warn(`❌ 图层 ${datasetName} 第 ${pageIndex + 1} 页无数据`);
          // }
        });



    
      // datasets.forEach((datasetName, index) => {
      //   const params = new SuperMap.GetFeaturesByBoundsParameters({
      //     datasetNames: [datasetName],
      //     bounds: smBounds,
      //     returnContent: true,
      //     fromIndex: 200,
      //     toIndex: 0
      //   });

      //   const service = new SuperMap.GetFeaturesByBoundsService(disasterDataset);

      //   service.processAsync(params, (serviceResult) => {
      //     // console.log(serviceResult, '1--s--1')
      //     if (serviceResult.result && serviceResult.result.features) {
      //       // const geojson = {
      //       //   type: 'FeatureCollection',
      //       //   features: serviceResult.result.features.features.map(f => f.toGeoJSON())
      //       // };

      //       const layer = L.geoJSON(serviceResult.result.features, {
      //         style: {
      //           color: colors[index % colors.length],
      //           weight: 5
      //         }
      //       });

      //       self.linesLayer.addLayer(layer);
      //     }
      //   });
      };


      datasets.forEach((datasetName, index) => {
        // 分页递归加载
        loadByPage(datasetName, smBounds, 0, [], colors[index % 3]);
      });
    },

    // 加载地图边界数据
    loadLinesByBounds(bounds) {
      this.clearBoundsFeatures();

      const self = this

      const map = this.map

      // widgets.loader.showLoader();

      self.loading = true
      
      const geo = this.polygonToGeoJSON(this.boundsToGeometry(map.getBounds()))
      var geometry = L.supermap.Util.transform(geo, L.CRS.EPSG4326, L.CRS.EPSG3857);
      let queryParams = new L.supermap.QueryByGeometryParameters({
        // queryParams: [
        //   new L.supermap.FilterParameter({
        //     name: "gz_L21_52_G@DataSourceGIS2",  // 数据集名@数据源名
        //   }),
        //   // new SuperMap.FilterParameter({
        //   //   name: "gz_L21_52_G@DataSourceGIS2"  // 数据集名@数据源名
        //   // })
        // ],
        queryParams: {
          name: "China_Province_pl@China"
        },
        featureCount: 1000000,
        geometry, // 转换可视区为geometry
        spatialQueryMode: SuperMap.SpatialQueryMode.INTERSECT,
      });

      
      // let queryParam = {
      //   queryMode: "SpatialQuery",
      //   spatialQueryMode: "INTERSECT",
      //   geometry: {
      //     type: "REGION",
      //     parts: [4],
      //     points: [
      //       { x: params.left, y: params.bottom },
      //       { x: params.right, y: params.bottom },
      //       { x: params.right, y: params.top },
      //       { x: params.left, y: params.top }
      //     ]
      //   },
      //   returnContent: true
      // };

      let service = new L.supermap.QueryService('http://10.23.17.229:8090/iserver/services/map-china400/rest/maps/China');
      service.queryByGeometry(queryParams, function (serviceResult) {
        self.loading = false
        var result = L.supermap.Util.transform(serviceResult.result.recordsets[0].features, L.CRS.EPSG3857, L.CRS.EPSG4326);
        self.resultBoundsLayer = L.geoJSON(result).addTo(map);
        //    L.geoJSON(serviceResult.recordsets.features, {color: 'red'}).addTo(map);
        // L.geoJSON(serviceResult.result.features).addTo(map);
        // renderLines(serviceResult.result.recordsets);
      });
    },

    

    // 加载可视区点位数据
    // renderVisiblePoints() {
    //   const map = this.map
    //   const pointLayer = this.pointLayer
    //   const bounds = map.getBounds();
    //   const sw = bounds.getSouthWest();
    //   const ne = bounds.getNorthEast();
    //   const self = this

    //   // 1. 清空旧点
    //   this.clearPointLayerFeatures();

    //   const myIcon = L.icon.pulse({
    //     iconSize: [14, 14],
    //     color: '#f00'
    //   });

    //   // 2. 查询可视区域内的点
    //   const sqlParam = new SuperMap.GetFeaturesByBoundsParameters({
    //     queryParams: {
    //       name: 'address_disaster@DataSourceDisasterGIS',
    //       attributeFilter: "disaster_grade = '一级'"
    //     },
    //     datasetNames: ["DataSourceDisasterGIS:address_disaster"],
    //     bounds: new SuperMap.Bounds(
    //       sw.lng,
    //       sw.lat,
    //       ne.lng,
    //       ne.lat
    //     ),
    //     fromIndex: 0,         // 起始索引（默认是 0）
    //     toIndex: 10,         // 截止索引（最大返回数 = toIndex - fromIndex）
    //     spatialQueryMode: SuperMap.SpatialQueryMode.CONTAIN
    //   });


    //   // // 创建一个点图层来显示数据
    //   // this.pointLayer = new L.LayerGroup();

    //   L.supermap
    //     .featureService(disasterDataset)
    //     .getFeaturesByBounds(sqlParam, function (serviceResult) {
    //       var features = serviceResult.result.features.features;
           
    //         // 遍历查询结果，添加到地图上
    //         features.forEach(function (feature) {
    //             var [lat, lon] = feature.geometry.coordinates;
    //             // 创建标记
    //             // const myIcon = L.icon({
    //             //     iconUrl: 'https://cdn-icons-png.flaticon.com/512/1673/1673221.png', // 可换成你自己的图标
    //             //     iconSize: [32, 32],       // 图标大小
    //             //     iconAnchor: [16, 32],     // 图标锚点（指向经纬度的位置）
    //             //     popupAnchor: [0, -30]     // 弹窗位置偏移
    //             //   });

    //             var marker = L.marker([lon, lat],  { icon: myIcon }).addTo(pointLayer);

    //             // 添加点击事件，显示弹出框
    //             marker.on('click', function () {
    //               // console.log(feature, '1----1')
    //               const data = feature.properties || {}
    //               const title = `${data.END_STATION_NUMBER || ''}灾害点-${data.DS_TYPE}`
    //               // const data
    //               // console.log(title, '111')
    //               self.dialogVisibleModel = {
    //                 title,
    //                 ...data
    //               }

    //               setTimeout(() => {
    //                 self.dialogVisible = true
    //               }, 300)
    //             });
    //             // if (geometry.type === 'Point') {
    //             //     var lat = geometry.y;
    //             //     var lon = geometry.x;
    //             // }
    //         });

    //         map.addLayer(self.pointLayer);
    //     })


    //   // const queryService = new SuperMap.QueryfeatureServiceService(disasterDataset);

    //   // queryService.queryByBounds(queryParam, function (serviceResult) {
    //   //   console.log(serviceResult, '1----1')
    //   //   // const features = serviceResult.result?.recordsets?.[0]?.features || [];

    //   //   // // 3. 渲染点到图层组
    //   //   // features.forEach(feature => {
    //   //   //   const coords = feature.geometry.points?.[0];
    //   //   //   if (coords) {
    //   //   //     const marker = L.circleMarker([coords.y, coords.x], {
    //   //   //       radius: 6,
    //   //   //       color: '#3b9cff',
    //   //   //       fillColor: '#3b9cff',
    //   //   //       fillOpacity: 0.7
    //   //   //     }).bindPopup(feature.attributes?.name || '点位');
    //   //   //     pointLayer.addLayer(marker);
    //   //   //   }
    //   //   // });
    //   // });
    // },

    // 刷新数据视图
    refreshDataView() {
      this.getDistrictDisaster()

      this.getDisasterType()

      this.getRectificationProgress()
    },

    // 查询地质灾害分类
    async getDistrictDisaster() {
      // const datasetName = 'address_disaster@DataSourceDisasterGIS'
      // // sql
      // const getSql = (attributeFilter) => {
      //   var sqlParam = new L.supermap.GetFeaturesBySQLParameters({
      //     queryParameter: {
      //       name: datasetName,
      //       attributeFilter
      //     },
      //     // featureCount: 10,
      //     datasetNames: ["DataSourceDisasterGIS:anhui_DizhiBengTa"]
      //   });

      //   return sqlParam
      // }

      // {
      //   const sql = "技术等级 = '一级公路'"
      //   const res = await this.queryDisasterDataset(disasterDataset, getSql(sql))
      //   console.log(res, '1--111')
      //   this.districtDisasterModel.southern = Number(res.result.totalCount || 0)
      // }

      // {
      //   const sql = "技术等级 = '二级公路'"
      //   const res = await this.queryDisasterDataset(disasterDataset, getSql(sql))
      //   this.districtDisasterModel.central = Number(res.result.totalCount || 0)
      // }

      // {
      //   const sql = "技术等级 = '一级公路'"
      //   const res = await this.queryDisasterDataset(disasterDataset, getSql(sql))
      //   this.districtDisasterModel.northern = Number(res.result.totalCount || 0)
      // }
    },

    // 查询地质灾害类型
    async getDisasterType() {
      // sql
      const getSql = (datasetName, attributeFilter) => {
        var sqlParam = new L.supermap.GetFeaturesBySQLParameters({
          queryParameter: {
            name: datasetName,
            attributeFilter
          },
          // featureCount: 10,
          datasetNames: ["allpoint-2:all_User"],
        });

        return sqlParam
      }

      {
        const sql = "灾害类型 = '崩塌'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        this.disasterTypeModel.bt = res.result.totalCount || 0
      }

      {
        const sql = "灾害类型 = '沉陷塌陷'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        this.disasterTypeModel.tx = res.result.totalCount || 0
      }

      {
        const sql = "灾害类型 = '滑坡'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        this.disasterTypeModel.hp = res.result.totalCount || 0
      }

      {
        const sql = "灾害类型 = '泥石流'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        this.disasterTypeModel.nsl = res.result.totalCount || 0
      }

      {
        const sql = "灾害类型 = '水毁'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        this.disasterTypeModel.sh = res.result.totalCount || 0
      }
    },

    // 整改进展
    async getRectificationProgress() {
      // sql
      const getSql = (datasetName, attributeFilter) => {
        var sqlParam = new L.supermap.GetFeaturesBySQLParameters({
          queryParameter: {
            name: datasetName,
            attributeFilter
          },
          // featureCount: 10,
          datasetNames: ["allpoint-2:all_User"],
        });

        return sqlParam
      }

      {
        const sql = "treatment_situation = '已处治修复' or treatment_situation = '未处治修复' or treatment_situation = '正在处治修复'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        if(res.result){
          this.rectificationProgressModel.total = res.result.totalCount || 0
        }
      }

      {
        const sql = "treatment_situation = '已处治修复'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        if(res.result){
          this.rectificationProgressModel.already = res.result.totalCount || 0
        }
      }

      {
        const sql = "treatment_situation = '正在处治修复' or treatment_situation = '未处治修复'"
        const res = await this.queryDisasterDataset(disasterDataset, getSql(disasterDatasetName, sql))
        if(res.result){
          this.rectificationProgressModel.deal = res.result.totalCount || 0
        }
      }
    },

    // 查询数据集-灾害
    queryDisasterDataset(url, sqlParam) {
      return new Promise((resolve, reject) => {
        new L.supermap
            .FeatureService(url)
            .getFeaturesBySQL(sqlParam)
            .then(function (serviceResult) {
              resolve(serviceResult)
              debubgger
                // resultLayer = L.geoJSON(serviceResult.result.features).addTo(map);
            })
            .catch(error => {
              reject(error)
            });
      })
    }
  }
}