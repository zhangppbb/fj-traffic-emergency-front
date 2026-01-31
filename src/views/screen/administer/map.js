
// 地图数据源_灾害
const disasterDataset = 'http://10.23.56.29:8090/iserver/services/data-gis-2/rest/data'
const disasterDatasetName = 'address_disaster@DataSourceDisasterGIS';
import { calcRatioNP } from '@/utils/number'

// 每页条数
const PAGE_SIZE = 200;

export default {
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

      // 是否为预警
      isBianPo: false,

      // 地图边界数据
      resultBoundsLayer: null,

      // 表单
      form: {
        city: ''
      },

      // 区划灾害数量
      districtDisasterModel: {
        // 南部
        southern: 0,
        // 中部
        central: 0,
        // 北部
        northern: 0
      },

      // 灾害类型
      disasterTypeModel: {
        // 崩塌
        bt: 0,
        // 塌陷
        tx: 0,
        // 滑坡
        hp: 0,
        // 泥石流
        nsl: 0,
        // 水毁
        sh: 0
      },

      // 灾害整改 
      rectificationProgressModel: {
        total: 0,
        already: 0,
        deal: 0
      }
    }
  },

  computed: {

    // 总数
    disasterTypeCount() {
      const { bt, tx, hp, nsl, sh } = this.disasterTypeModel
      const count = bt + tx + hp + nsl + sh
      return count
    },

    // 灾害类型图表配置
    disasterTypeOption() {
      const { bt, tx, hp, nsl, sh } = this.disasterTypeModel
      const count = this.disasterTypeCount

      return  [
        { name: '崩塌', value: bt, percent: calcRatioNP(bt, count), color: '#A780FF' },
        { name: '塌陷', value: tx, percent: calcRatioNP(tx, count), color: '#3C9EFF' },
        { name: '滑坡', value: hp, percent: calcRatioNP(hp, count), color: '#47E2DF' },
        { name: '泥石流', value: nsl, percent: calcRatioNP(nsl, count), color: '#3EFF99' },
        { name: '水毁', value: sh, percent: calcRatioNP(sh, count), color: '#FFD84A' }
      ]
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initMap()

      // this.refreshDataView()
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


      // if (zoomLevel >= 10) {
      //   self.loadLines()
      //   // self.renderVisiblePoints()
      // } else {
      //   // 1. 清空旧点
      //   self.clearLinesLayerFeatures();
      // }
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
        center: [35.8617, 104.1954],
        zoom: 3.5,
        zoomSnap: 0.25,
        crs: L.supermap.CRS.TianDiTu_WGS84,
        zoomControl: false // 禁用放大缩小按钮
      });

      
      // 创建一个线图层来显示数据
      this.linesLayer = new L.LayerGroup().addTo(map);

      // 创建一个点图层来显示数据
      this.pointLayer = new L.LayerGroup().addTo(map);


      const KEY = '1d109683f4d84198e37a38c442d68311'


      new L.supermap
        .TiandituTileLayer({
          layerType: 'img',
          // isLabel: true,
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
    // var overlayLayer = new L.supermap.TiledMapLayer("http://10.23.56.29:8090/iserver/services/map-gis-2/rest/maps/DataSourceGIS", {
    //       transparent: true,
    //       noWrap: true
    //       //opacity: 0.6
    //     }).addTo(map);

         
    new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/DataSource%40disaster-provincial-highway", {
      transparent: true,
      noWrap: true
      //opacity: 0.6
    }).addTo(map);

    new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/DataSource%40disaster-national-highway", {
      transparent: true,
      noWrap: true
      //opacity: 0.6
    }).addTo(map);

    new L.supermap.TiledMapLayer("http://10.23.17.229:8090/iserver/services/map-gis-disaster--3--2/rest/maps/pointMap", {
      transparent: true,
      noWrap: true
      //opacity: 0.6
    }).addTo(map);

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
      // var points = [
      //     [39.9, 116.4],
      //     [39.92, 116.42],
      //     [39.94, 116.44]
      // ];

      // // { "lat": 26.735482, "lng": 106.721134 }
     
      // 创建标记 - 灾害点
      // const myIcon = L.icon.pulse({
      //   iconSize: [16, 16],
      //   color: '#f00'
      // });

      // // // 添加 GIF 标记点
      // const marker = L.marker([31.561596, 103.524355], { icon: myIcon }).addTo(map);

      // // // marker.isCustom = true;  // 自定义标记

      // marker.on('click', function() {
      //   // self.isBianPo = true

      //   // setTimeout(() => {
      //   //   self.dialogVisible = true
      //   // }, 400)
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
        // map.removeLayer(resultLayer);
        resultLayer.clearLayers()
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

    // 加载可视区点位数据
    renderVisiblePoints() {
      const self = this
      const map = this.map
      const pointLayer = this.pointLayer
      const bounds = map.getBounds();
      const sw = bounds.getSouthWest();
      const ne = bounds.getNorthEast();

      // 创建标记
      const myIcon = L.icon.pulse({
          iconSize: [12, 12],
          color: '#f00'
      });

      // 1. 清空旧点
      this.clearPointLayerFeatures();

      // 2. 查询可视区域内的点
      const sqlParam = new SuperMap.GetFeaturesByBoundsParameters({
        queryParams: {
          name: 'address_disaster@DataSourceDisasterGIS',
          attributeFilter: "disaster_grade = '一级'"
        },
        datasetNames: ["DataSourceDisasterGIS:address_disaster"],
        bounds: new SuperMap.Bounds(
          sw.lng,
          sw.lat,
          ne.lng,
          ne.lat
        ),
        fromIndex: 0,         // 起始索引（默认是 0）
        toIndex: 50,         // 截止索引（最大返回数 = toIndex - fromIndex）
        spatialQueryMode: SuperMap.SpatialQueryMode.CONTAIN
      });

      L.supermap
        .featureService(disasterDataset)
        .getFeaturesByBounds(sqlParam, function (serviceResult) {
          var features = serviceResult.result.features.features;
           
            // 遍历查询结果，添加到地图上
            features.forEach(function (feature) {
                var [lat, lon] = feature.geometry.coordinates;
               
                var marker = L.marker([lon, lat],  { icon: myIcon }).addTo(pointLayer);

                // 添加点击事件，显示弹出框
                marker.on('click', function () {
                  console.log(feature, '1----1')
                    // var content = "点位名称: " + feature.attributes.MANAGEMENT_UNIT;
                    // marker.bindPopup(content).openPopup();
                });
                // if (geometry.type === 'Point') {
                //     var lat = geometry.y;
                //     var lon = geometry.x;
                // }

                self.pointLayer.addLayer(layer);
            });
        })


      // const queryService = new SuperMap.QueryfeatureServiceService(disasterDataset);

      // queryService.queryByBounds(queryParam, function (serviceResult) {
      //   console.log(serviceResult, '1----1')
      //   // const features = serviceResult.result?.recordsets?.[0]?.features || [];

      //   // // 3. 渲染点到图层组
      //   // features.forEach(feature => {
      //   //   const coords = feature.geometry.points?.[0];
      //   //   if (coords) {
      //   //     const marker = L.circleMarker([coords.y, coords.x], {
      //   //       radius: 6,
      //   //       color: '#3b9cff',
      //   //       fillColor: '#3b9cff',
      //   //       fillOpacity: 0.7
      //   //     }).bindPopup(feature.attributes?.name || '点位');
      //   //     pointLayer.addLayer(marker);
      //   //   }
      //   // });
      // });
    },

    // 刷新数据视图
    refreshDataView() {
    },


    // 查询数据集-灾害
    queryDisasterDataset(url, sqlParam) {
      return new Promise((resolve, reject) => {
        new L.supermap
            .FeatureService(url)
            .getFeaturesBySQL(sqlParam)
            .then(function (serviceResult) {
              resolve(serviceResult)
                // resultLayer = L.geoJSON(serviceResult.result.features).addTo(map);
            })
            .catch(error => {
              reject(error)
            });
      })
    }
  }
}