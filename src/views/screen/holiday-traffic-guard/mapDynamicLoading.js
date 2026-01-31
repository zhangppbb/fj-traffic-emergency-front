
// 地图数据源_灾害
const disasterDataset = 'http://10.23.17.229:8090/iserver/services/data-gis-disaster--3--2/rest/data'
const disasterDatasetName = 'all_User@allpoint-2'

// 每页条数
const PAGE_SIZE = 200;

export default {
  data() {
    return {
       // 地图实例
      //  map: null,

       // 点图层
      //  pointLayer: null,
 
       // 线路图
      //  linesLayer: null,
 
       // 弹窗
      //  dialogVisible: false,
      //  dialogVisibleModel: {
      //     title: '',
      //  },
      //  dialogVisibleHightWay: false,
      //  dialogVisibleHightWayModel: {},
    }
  },

  methods: {
    loadLineByPage(){
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
      this.dataSourceRequest(datasets,smBounds,0, colors).then(() => {
          console.log('所有道路数据请求处理完成');
          self.renderVisiblePointsAll()
      })
    .catch(error => {
          console.error('请求过程中出现错误:', error);
      });
    },
    // 请求超图数据服务接口获取数据集本页数据
    requestDatasourceBydatasetName(datasetName, bounds,fromIndex, toIndex, colors) {
      return new Promise((resolve, reject) => {
          const params = new SuperMap.GetFeaturesByBoundsParameters({
            datasetNames: [datasetName],
            bounds: bounds,
            returnContent: true,
            fromIndex,
            toIndex
          });
          const service = new SuperMap.GetFeaturesByBoundsService(disasterDataset);
          service.processAsync(params).then(serviceResult => {
                  resolve(serviceResult);
          })
          .catch(error => {
              reject(error);
          });
      });
    },

    // 递归处理数据源中的数据集
    dataSourceRequest(datasets, bounds, pageIndex, colors, index = 0) {
      const self = this
      if (index >= datasets.length) {
          return Promise.resolve();
      }
      const datasetName = datasets[index];
      const fromIndex = pageIndex * PAGE_SIZE;
      const toIndex = fromIndex + PAGE_SIZE;
      return self.requestDatasourceBydatasetName(datasetName, bounds,fromIndex, toIndex, colors)
        .then(serviceResult => {
              // 处理请求得到的道路数据信息，并弹窗
              if (serviceResult.result && serviceResult.result.features) {
                // 所有分页加载完成，统一添加到地图
                const layer = L.geoJSON(serviceResult.result.features, {
                 style: {
                   color: colors[index %2],
                   weight: 5
                 },
                 onEachFeature: (feature, layer) => {
                    // 点击事件
                    layer.on('click', (feature) => {
                      // console.log(feature, '1----1')
                      const data = feature.target.feature.properties || {}
                      const title = `${data.F03 || ''}`
                      
                      self.dialogVisibleHightWayModel = {
                        title,
                        ...data
                      }
      
                      setTimeout(() => {
                        self.dialogVisibleHightWay = true
                      }, 300)
                    });
                  }
               });
   
               self.linesLayer.addLayer(layer);
               console.log(serviceResult.result, PAGE_SIZE, '1---1')
               if (serviceResult.result.featureCount === PAGE_SIZE) {
                 // 如果本页满了，说明可能还有下一页，递归加载下一页
                 const pageNext  =  (pageIndex + 1) * PAGE_SIZE;
                 const pagetoIndexNext  =  pageNext + PAGE_SIZE;
                 return self.requestDatasourceBydatasetName(datasetName, bounds,pageNext, pagetoIndexNext, colors);
               }else{
                //如果没有下一页 获取下一个数据集的公路信息
                  return self.dataSourceRequest(datasets,bounds,0, colors, index + 1).then(() => {
                      // return self.requestDatasourceBydatasetName(nextParam);
                  });
               }
              }
          })
        .catch(error => {
              console.error(`处理数组时出错:`, error);
              return Promise.reject(error);
        });
   
    },



    //加载可视区域内的风险点
    renderVisiblePointsAll() {
      const map = this.map
      const pointLayer = this.pointLayer
      const bounds = map.getBounds();
      const sw = bounds.getSouthWest();
      const ne = bounds.getNorthEast();
      const self = this

      // 1. 清空旧点
      this.clearPointLayerFeatures();

      const loadPoint = (pageIndex) => {
        const fromIndex = pageIndex * PAGE_SIZE;
        const toIndex = fromIndex + PAGE_SIZE;

        // 2. 查询可视区域内的点
        const sqlParam = new SuperMap.GetFeaturesByBoundsParameters({
          queryParams: {
            name: 'all_User@allpoint-2',
            // attributeFilter: "disaster_grade = '一级'"
          },
          datasetNames: ["allpoint-2:all_User"],
          bounds: new SuperMap.Bounds(
            sw.lng,
            sw.lat,
            ne.lng,
            ne.lat
          ),
          returnContent: true,
          fromIndex: fromIndex,         // 起始索引（默认是 0）
          toIndex: toIndex,         // 截止索引（最大返回数 = toIndex - fromIndex）
          spatialQueryMode: SuperMap.SpatialQueryMode.CONTAIN
          
        });

        const service = new SuperMap.GetFeaturesByBoundsService(disasterDataset);
        service.processAsync(sqlParam, (serviceResult) => {
          var features = serviceResult.result.features.features;
           
          // 遍历查询结果，添加到地图上
          features.forEach(function (feature) {
              var [lat, lon] = feature.geometry.coordinates;

              let levelColor = ""
              switch (feature.properties.灾害等级) {
                  case '一级':
                      levelColor= "red";
                      break;
                  case '二级':
                    levelColor= "orange";
                      break;
                  case '三级':
                    levelColor= "yellow";
                      break;
                  default:
                    levelColor= "blue";
              }

              var marker = L.circleMarker([lon, lat],  { radius:8,color:levelColor,fillOpacity:1,fillColor:levelColor,zIndexOffset:9999}).addTo(pointLayer);

              // 添加点击事件，显示弹出框
              marker.on('click', function () {
                const data = feature.properties || {}
                const title = `${data.END_STATION_NUMBER || ''}灾害点-${data.DS_TYPE}`

                self.dialogVisibleModel = {
                  title,
                  ...data
                }

                setTimeout(() => {
                  self.dialogVisible = true
                }, 300)
              });
          });

          map.addLayer(self.pointLayer);
          if (serviceResult.result.featureCount-1 === PAGE_SIZE) {
            // 如果本页满了，说明可能还有下一页，递归加载下一页
            loadPoint( pageIndex + 1);
          }
        });
      }
      loadPoint(0)
      


      // // 创建一个点图层来显示数据
      // this.pointLayer = new L.LayerGroup();

      // L.supermap
      //   .featureService(disasterDataset)
      //   .getFeaturesByBounds(sqlParam, function (serviceResult) {
          
      //   })
    },
  }
}