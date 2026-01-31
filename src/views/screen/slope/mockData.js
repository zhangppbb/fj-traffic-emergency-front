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
            {
              icon: icon1,
              name: '边坡总量',
              value: '1.7',
              unit: '万处'
            },
              {
              icon: icon2,
              name: '边坡总公里数',
              value: '10032',
              unit: '公里'
            }
          ],

            // 表头
            tableHeader: [
               { label: '路线名称', prop: 'routeName', width: '22%' },
              { label: '路线编码', prop: 'routeCode', width: '18%' },
              { label: '边坡位置', prop: 'slopeLocation', width: '12%' },
              { label: '边坡类型', prop: 'slopeType', width: '18%' },
              { label: '填挖类型', prop: 'cutFillType', width: '30%' },
            ],

            // 表格数据
            tableData: [
  {
    "routeName": "福州绕城高速公路",
    "routeCode": "FZRC-2009",
    "slopeLocation": "鼓山段 K12+300",
    "slopeType": "岩质",
    "cutFillType": "高边坡"
  },
  {
    "routeName": "福州机场高速公路",
    "routeCode": "FZJC-2012",
    "slopeLocation": "金鸡山段 K8+500",
    "slopeType": "土质",
    "cutFillType": "边坡"
  },
  {
    "routeName": "福州北二通道高速公路",
    "routeCode": "FZBE-2015",
    "slopeLocation": "贵安段 K21+100",
    "slopeType": "岩质",
    "cutFillType": "边坡"
  },
  {
    "routeName": "福州东部快速通道",
    "routeCode": "FZDB-2019",
    "slopeLocation": "长门段 K34+200",
    "slopeType": "复合",
    "cutFillType": "边坡"
  },
  {
    "routeName": "福州南绕城高速公路",
    "routeCode": "FZNC-2017",
    "slopeLocation": "五虎山段 K17+800",
    "slopeType": "土质",
    "cutFillType": "高边坡"
  },
  {
    "routeName": "福州滨海新城高速公路",
    "routeCode": "FZBX-2020",
    "slopeLocation": "大帽山段 K9+600",
    "slopeType": "岩质",
    "cutFillType": "边坡"
  },
  {
    "routeName": "福州长乐机场高速二期",
    "routeCode": "FZCE-2016",
    "slopeLocation": "莲花山段 K25+400",
    "slopeType": "复合",
    "cutFillType": "边坡"
  },
  {
    "routeName": "福州北向第二通道",
    "routeCode": "FZBX-2014",
    "slopeLocation": "北峰段 K14+700",
    "slopeType": "岩质",
    "cutFillType": "高边坡"
  },
  {
    "routeName": "福州至福清高速公路",
    "routeCode": "FZFQ-2021",
    "slopeLocation": "南阳山段 K31+300",
    "slopeType": "土质",
    "cutFillType": "边坡"
  },
  {
    "routeName": "福州南连接线高速公路",
    "routeCode": "FZNL-2013",
    "slopeLocation": "青口段 K5+900",
    "slopeType": "复合",
    "cutFillType": "边坡"
  }
            ],

            // 图片素材
            pictures: [
              {
                name: '边坡1',
                img: 'https://gbres.dfcfw.com/Files/iimage/A202508301030026/1E70CF100E903D3D8C7480BDBE1B045D_w310h310.png'
              },
              {
                name: '边坡2',
                img: 'https://pic.rmb.bdstatic.com/bjh/events/617f8d88359c69001744968f95a54a6a1533.jpeg@h_1280'
              }
            ]
      }
    }
  }
}
