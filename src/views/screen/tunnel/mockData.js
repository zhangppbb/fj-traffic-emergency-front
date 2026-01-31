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
              name: '隧道总量',
              value: '313',
              unit: '条'
            },
            {
              icon: icon2,
              name: '监测隧道总量',
              value: '213',
              unit: '条'
            }
          ],

            // 表头
            tableHeader: [
                { label: '隧道名称', prop: 'tunnelName', width: '22%' },
              { label: '隧道代码', prop: 'tunnelCode', width: '18%' },
              { label: '建成年份', prop: 'buildYear', width: '12%' },
              { label: '隧道长度（m）', prop: 'tunnelLength', width: '18%' },
              { label: '所在路线类型', prop: 'routeType', width: '30%' },
            ],

            // 表格数据
            tableData: [
               {
    "tunnelName": "鼓山隧道",
    "tunnelCode": "FZ-GS-2008",
    "buildYear": 2008,
    "tunnelLength": 3210,
    "routeType": "福州绕城高速公路"
  },
  {
    "tunnelName": "金鸡山隧道",
    "tunnelCode": "FZ-JJ-2012",
    "buildYear": 2012,
    "tunnelLength": 2850,
    "routeType": "福州机场高速公路"
  },
  {
    "tunnelName": "贵安隧道",
    "tunnelCode": "FZ-GA-2015",
    "buildYear": 2015,
    "tunnelLength": 4120,
    "routeType": "福州北二通道高速公路"
  },
  {
    "tunnelName": "长门隧道",
    "tunnelCode": "FZ-CM-2019",
    "buildYear": 2019,
    "tunnelLength": 5340,
    "routeType": "福州东部快速通道"
  },
  {
    "tunnelName": "五虎山隧道",
    "tunnelCode": "FZ-WH-2017",
    "buildYear": 2017,
    "tunnelLength": 3780,
    "routeType": "福州南绕城高速公路"
  },
  {
    "tunnelName": "大帽山隧道",
    "tunnelCode": "FZ-DM-2020",
    "buildYear": 2020,
    "tunnelLength": 2650,
    "routeType": "福州滨海新城高速公路"
  },
  {
    "tunnelName": "莲花山隧道",
    "tunnelCode": "FZ-LH-2016",
    "buildYear": 2016,
    "tunnelLength": 3420,
    "routeType": "福州长乐国际机场高速公路二期"
  },
  {
    "tunnelName": "北峰隧道",
    "tunnelCode": "FZ-BF-2014",
    "buildYear": 2014,
    "tunnelLength": 4560,
    "routeType": "福州北向第二通道"
  },
  {
    "tunnelName": "南阳山隧道",
    "tunnelCode": "FZ-NY-2021",
    "buildYear": 2021,
    "tunnelLength": 2980,
    "routeType": "福州至福清高速公路"
  },
  {
    "tunnelName": "青口隧道",
    "tunnelCode": "FZ-QK-2013",
    "buildYear": 2013,
    "tunnelLength": 3150,
    "routeType": "福州南连接线高速公路"
  }
            ],

            // 图片素材
            pictures: [
              {
                name: '福州象山隧道',
                img: 'https://q2.itc.cn/q_70/images03/20250901/3fc20fff44fd46119ab3d29452827b95.jpeg'
              },
              {
                name: '后坊隧道',
                img: 'https://n.sinaimg.cn/sinakd20220628s/199/w1080h719/20220628/bb3f-1532577157c2efce868062b6bc3fc779.jpg'
              }
            ]
      }
    }
  }
}
