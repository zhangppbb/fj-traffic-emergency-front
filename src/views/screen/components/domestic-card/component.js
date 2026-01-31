import icon from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'
import img1 from './assets/images/img1.jpg'

export default {
  props: {
    // 名称
    name: {
      type: String,
      default: () => '福州市'
    },
    // 数据
    infoData: {
      type: Array,
      default: () => [
        {
          icon: icon,
          name: '桥梁总量',
          value: '3443',
          unit: '座'
        },
         {
          icon: icon2,
          name: '检测桥梁',
          value: '443',
          unit: '座'
        }
        //  {
        //   icon: icon2,
        //   name: '桥梁总延米数',
        //   value: '146',
        //   unit: '万延米'
        // }
      ]
    },

    // 表头
    tableHeader: {
      type: Array,
      default: () => [
         { label: '桥梁名称', prop: 'bridgeName', width: '20%' },
        { label: '桥型', prop: 'bridgeType', width: '15%' },
        { label: '跨径', prop: 'length', width: '15%' },
        { label: '建成年份', prop: 'buildYear', width: '10%' },
        { label: '技术等级', prop: 'techLevel', width: '15%' },
        { label: '所在路线（高速/国道/省道）', prop: 'routeType', width: '25%' }
      ]
    },

    // 表格数据
    tableData: {
      type: Array,
      default: () => [
      {
        "bridgeName": "平潭海峡公铁大桥（公路桥）",
        "bridgeType": "公铁两用斜拉桥",
        "length": "全长约16.34公里",
        "buildYear": 2020,
        "techLevel": "一级公路",
        "routeType": "高速公路（G3京台高速）"
      },
      {
        "bridgeName": "琅岐闽江大桥",
        "bridgeType": "双塔斜拉桥",
        "length": "全长约2.68公里",
        "buildYear": 2019,
        "techLevel": "一级公路",
        "routeType": "国道（G228丹东线）"
      },
      {
        "bridgeName": "道庆洲过江通道（公路层）",
        "bridgeType": "公轨合建斜拉桥",
        "length": "全长约6.82公里",
        "buildYear": 2022,
        "techLevel": "一级公路 / 城市快速路",
        "routeType": "国道（G316长乐段）"
      },
      {
        "bridgeName": "乌龙江特大桥（新）",
        "bridgeType": "连续刚构桥",
        "length": "全长约1.5公里",
        "buildYear": 2010,
        "techLevel": "一级公路",
        "routeType": "高速公路（G1505福州绕城高速）"
      },
      {
        "bridgeName": "鼓山大桥",
        "bridgeType": "独塔自锚式悬索桥",
        "length": "全长约1.5公里",
        "buildYear": 2010,
        "techLevel": "一级公路 / 城市快速路",
        "routeType": "省道（S203鼓山大桥连接线）"
      },
      {
        "bridgeName": "洪塘大桥（新）",
        "bridgeType": "多塔斜拉桥",
        "length": "全长约2.2公里",
        "buildYear": 2021,
        "techLevel": "一级公路",
        "routeType": "国道（G316福州西向通道）"
      },
      {
        "bridgeName": "螺洲大桥",
        "bridgeType": "多塔斜拉桥",
        "length": "全长约4.95公里",
        "buildYear": 2013,
        "techLevel": "一级公路",
        "routeType": "省道（S207福州市南向通道）"
      },
      {
        "bridgeName": "琅岐桥（及接线工程）",
        "bridgeType": "预应力混凝土连续梁桥",
        "length": "全长约2.4公里",
        "buildYear": 2019,
        "techLevel": "二级公路",
        "routeType": "省道（连接琅岐岛）"
      },
      {
        "bridgeName": "贵新隧道（连接段桥梁）",
        "bridgeType": "预应力混凝土T梁桥",
        "length": "全长约1.2公里（桥段）",
        "buildYear": 2010,
        "techLevel": "一级公路",
        "routeType": "高速公路（G1501福州绕城高速）"
      },
      {
        "bridgeName": "长门特大桥",
        "bridgeType": "双塔斜拉桥",
        "length": "全长约848米",
        "buildYear": 2018,
        "techLevel": "一级公路",
        "routeType": "高速公路（G1501福州绕城高速东南段）"
      }
    ]
    },

    // 图片素材
    pictures: {
      type: Array,
      default: () => [
        {
          name: '平潭海峡公铁大桥 (公路桥)',
          img: img1
        },
        {
          name: '琅岐闽江大桥',
          img: img1
        }
      ]
    }
  },
  data() {
    return {
      // Icons
      icons: [icon, icon2, icon2]
    }
  }
}
