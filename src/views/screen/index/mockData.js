export default {
  data() {
    return {
      // 监测点位
      // 省级
      distributionProvinceData: [
      {
        name: '桥梁',
        unit: '万座',
        value: '3.1',
        data: [
          { value: 15, name: '类型一', itemStyle: { color: '#8C81FE' } },
          { value: 25, name: '类型二', itemStyle: { color: '#5183F4' } },
          { value: 25, name: '类型三', itemStyle: { color: '#6AD6EE' } },
          { value: 35, name: '类型四', itemStyle: { color: '#FBB93B' } }
        ]
      },
      {
        name: '隧道',
        unit: '条',
        value: '2820',
        data: [
           {
            value: 15,
            name: '类型一',
            itemStyle: { color: '#8C81FE' }
          },
          {
            value: 25,
            name: '类型二',
            itemStyle: { color: '#5183F4' }
          },
          {
            value: 25,
            name: '类型三',
            itemStyle: { color: '#6AD6EE' }
          },
          {
            value: 35,
            name: '类型四',
            itemStyle: { color: '#FBB93B' }
          }
        ]
      },
      {
        name: '边坡',
        unit: '万公里',
        value: '10',
        data: [
          {
            value: 15,
            name: '类型一',
            itemStyle: { color: '#8C81FE' }
          },
          {
            value: 25,
            name: '类型二',
            itemStyle: { color: '#5183F4' }
          },
          {
            value: 25,
            name: '类型三',
            itemStyle: { color: '#6AD6EE' }
          },
          {
            value: 35,
            name: '类型四',
            itemStyle: { color: '#FBB93B' }
          }
        ]
      },
      {
        name: '路基',
        unit: '万公里',
        value: '11.15',
        data: [
          {
            value: 15,
            name: '类型一',
            itemStyle: { color: '#8C81FE' }
          },
          {
            value: 25,
            name: '类型二',
            itemStyle: { color: '#5183F4' }
          },
          {
            value: 25,
            name: '类型三',
            itemStyle: { color: '#6AD6EE' }
          },
          {
            value: 35,
            name: '类型四',
            itemStyle: { color: '#FBB93B' }
          }
        ]
      }
    ],
      //  市
      distributionCityData:  [
      {
        name: '桥梁',
        unit: '座',
        value: '3443',
        data: [
          { value: 15, name: '类型一', itemStyle: { color: '#8C81FE' } },
          { value: 25, name: '类型二', itemStyle: { color: '#5183F4' } },
          { value: 25, name: '类型三', itemStyle: { color: '#6AD6EE' } },
          { value: 35, name: '类型四', itemStyle: { color: '#FBB93B' } }
        ]
      },
      {
        name: '隧道',
        unit: '条',
        value: '313',
        data: [
           {
            value: 15,
            name: '类型一',
            itemStyle: { color: '#8C81FE' }
          },
          {
            value: 25,
            name: '类型二',
            itemStyle: { color: '#5183F4' }
          },
          {
            value: 25,
            name: '类型三',
            itemStyle: { color: '#6AD6EE' }
          },
          {
            value: 35,
            name: '类型四',
            itemStyle: { color: '#FBB93B' }
          }
        ]
      },
      {
        name: '边坡',
        unit: '万公里',
        value: '1.1',
        data: [
          {
            value: 15,
            name: '类型一',
            itemStyle: { color: '#8C81FE' }
          },
          {
            value: 25,
            name: '类型二',
            itemStyle: { color: '#5183F4' }
          },
          {
            value: 25,
            name: '类型三',
            itemStyle: { color: '#6AD6EE' }
          },
          {
            value: 35,
            name: '类型四',
            itemStyle: { color: '#FBB93B' }
          }
        ]
      },
      {
        name: '路基',
        unit: '万公里',
        value: '1.3',
        data: [
          {
            value: 15,
            name: '类型一',
            itemStyle: { color: '#8C81FE' }
          },
          {
            value: 25,
            name: '类型二',
            itemStyle: { color: '#5183F4' }
          },
          {
            value: 25,
            name: '类型三',
            itemStyle: { color: '#6AD6EE' }
          },
          {
            value: 35,
            name: '类型四',
            itemStyle: { color: '#FBB93B' }
          }
        ]
      }
    ],

      // 监测点位
      // 省级
      monitorPointProvinceData: [
        {
          name: '位移监测点',
          value: '34,322'
        },
         {
          name: '应力监测点',
          value: '65,476'
        },
        {
          name: '振动监测点',
          value: '23,319'
        },
        {
          name: '视频监测点',
          value: '92,934'
        }
      ],
      // 市级
       monitorPointCityData: [
        {
          name: '位移监测点',
          value: '3,813'
        },
         {
          name: '应力监测点',
          value: '7,276'
        },
        {
          name: '振动监测点',
          value: '2,519'
        },
        {
          name: '视频监测点',
          value: '6,326'
        }
      ],
      // 设备运行状态
      // 省级
      equipmentProvinceData: {
        value: '92',
        devices: [
            {
              name: '设备总数',
              value: '72123',
            },
            {
              name: '设备在线数',
              value: '32531',
            },
            {
              name: '设备离线数',
              value: '13325',
            }
        ],
      },
      // 市级
      equipmentCityData: {
        value: '94',
        devices: [
            {
              name: '设备总数',
              value: '19934',
            },
            {
              name: '设备在线数',
              value: '18737',
            },
            {
              name: '设备离线数',
              value: '1196',
            }
        ],
      }
    }
  },

  computed: {
    // 基础设施类型分布分析数据
    distributionData() {
      return this.isProvinceView ? this.distributionProvinceData : this.distributionCityData
    },

    // 监测点位数据
    monitorPointData() {
      return this.isProvinceView ? this.monitorPointProvinceData : this.monitorPointCityData
    },

    // 设备运行状态监控数据
    equipmentData() {
      return this.isProvinceView ? this.equipmentProvinceData : this.equipmentCityData
    }
  }
}
