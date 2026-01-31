import trendingDown from './assets/trending-down.svg'

export default {
  data() {
    return {
      // 公路影响
      highwayInfluence: [
          {
          value: '1200',
          unit: 'km',
          name: '高速受影响里程'
        },
        {
          value: '24',
          unit: '处',
          name: '严重拥堵路段'
        }
      ],

      // 水运影响
      waterInfluence: [
        {
          value: '16',
          unit: '个',
          name: '停航港口/码头'
        },
        {
          value: '13',
          unit: '处',
          name: '管制航道段'
        }
      ],

      // 健康指数
      healthIndex: [
        {
          value: '67',
          unit: '',
          name: '健康度'
        },
        {
          value: '30%',
          icon: trendingDown,
          name: '昨日同比'
        }
      ]
    }
  }
}
