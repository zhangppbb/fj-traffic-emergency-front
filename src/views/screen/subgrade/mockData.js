import icon1 from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'

export default {
  data() {
    return {
      // 卡片数据
      cardData: {
        // 名称
        name: '福州市',
        // 数据
        infoData: [
          // {
          //   name: '区域面积',
          //   value: '1.225',
          //   unit: '万km²'
          // },
            {
              icon: icon1,
            name: '路基监测点总量',
            value: '1.8',
            unit: '万处'
          },
            {
              icon: icon2,
            name: '路基总延米数',
            value: '12450',
            unit: '公里'
          }
        ],

            // 表头
            tableHeader: [
               { label: '路线名称', prop: 'routeName', width: '22%' },
              { label: '路线编码', prop: 'routeCode', width: '18%' },
              { label: '路基位置', prop: 'slopeLocation', width: '12%' },
              { label: '路基类型', prop: 'slopeType', width: '18%' },
              { label: '填挖类型', prop: 'cutFillType', width: '30%' },
            ],

            // 表格数据
            tableData: [
  {
    "routeName": "福州绕城高速公路",
    "routeCode": "FZRC-2009",
    "slopeLocation": "鼓山段 K11+200",
    "slopeType": "高路基",
    "cutFillType": "土石混填"
  },
  {
    "routeName": "福州机场高速公路",
    "routeCode": "FZJC-2012",
    "slopeLocation": "长乐段 K15+600",
    "slopeType": "一般路基",
    "cutFillType": "粉质粘土填筑"
  },
  {
    "routeName": "福州北二通道高速公路",
    "routeCode": "FZBE-2015",
    "slopeLocation": "贵安段 K23+400",
    "slopeType": "陡坡路基",
    "cutFillType": "块石填筑"
  },
  {
    "routeName": "福州东部快速通道",
    "routeCode": "FZDB-2019",
    "slopeLocation": "马尾段 K30+100",
    "slopeType": "软土地基路基",
    "cutFillType": "真空预压处理"
  },
  {
    "routeName": "福州南绕城高速公路",
    "routeCode": "FZNC-2017",
    "slopeLocation": "闽侯段 K18+900",
    "slopeType": "高路基",
    "cutFillType": "砂砾石填筑"
  },
  {
    "routeName": "福州滨海新城高速公路",
    "routeCode": "FZBX-2020",
    "slopeLocation": "漳港段 K8+700",
    "slopeType": "一般路基",
    "cutFillType": "粘土填筑"
  },
  {
    "routeName": "福州长乐机场高速二期",
    "routeCode": "FZCE-2016",
    "slopeLocation": "古槐段 K22+300",
    "slopeType": "软基路基",
    "cutFillType": "水泥搅拌桩处理"
  },
  {
    "routeName": "福州北向第二通道",
    "routeCode": "FZBX-2014",
    "slopeLocation": "北峰段 K16+500",
    "slopeType": "山区路基",
    "cutFillType": "片石填筑"
  },
  {
    "routeName": "福州至福清高速公路",
    "routeCode": "FZFQ-2021",
    "slopeLocation": "祥谦段 K29+800",
    "slopeType": "一般路基",
    "cutFillType": "粉质土填筑"
  },
  {
    "routeName": "福州南连接线高速公路",
    "routeCode": "FZNL-2013",
    "slopeLocation": "青口段 K6+200",
    "slopeType": "高填方路基",
    "cutFillType": "土石混填"
  }
]
,

            // 图片素材
            pictures: [
              {
                name: '路基1',
                img: 'https://img1.baidu.com/it/u=3668336325,4226994480&fm=253&app=138&f=JPEG?w=800&h=1067'
              },
              {
                name: '路基2',
                img: 'https://img2.baidu.com/it/u=3300866187,2897532244&fm=253&app=138&f=JPEG?w=1067&h=800'
              }
            ]
      }
    }
  }
}
