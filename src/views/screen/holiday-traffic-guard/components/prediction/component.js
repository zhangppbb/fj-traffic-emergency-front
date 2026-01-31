export default {
  data() {
    return {
      // 图表
      option: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
            type: 'dashed'
          }
        },
        backgroundColor: 'rgba(15,35,55,0.95)',
        borderColor: 'rgba(255,99,71,0.6)',
        borderWidth: 1,
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        formatter(params) {
          const value = params[0].value
          return `
            <div style="line-height:20px">
              <div style="color:#ff4d4f;font-weight:600">🚨 拥堵风险预警</div>
              <div>预警事件：严重拥堵</div>
              <div>预计时间：10:20</div>
              <div>预计流量：900万辆</div>
              <div>处置建议：做好应急处置预案</div>
            </div>
          `
        }
      },

      grid: {
        left: 40,
        right: 40,
        top: 20,
        bottom: 20
      },

      xAxis: {
        type: 'category',
        data: ['0时', '2时', '4时', '6时', '8时', '10时', '12时'],
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          color: '#cfe8ff'
        }
      },

      yAxis: {
        type: 'value',
            axisTick: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
            },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          color: '#01CCFF'
        },
        splitLine: {
          show: false
        }
      },

      series: [
        {
          name: '高速出入口流量',
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: [600, 780, 650, 620, 700, 900, 450],
          lineStyle: {
            width: 2,
            color: '#6bdcff'
          },
          // areaStyle: {
          //   color: {
          //     type: 'linear',
          //     x: 0,
          //     y: 0,
          //     x2: 0,
          //     y2: 1,
          //     colorStops: [
          //       { offset: 0, color: 'rgba(107,220,255,0.45)' },
          //       { offset: 1, color: 'rgba(107,220,255,0.05)' }
          //     ]
          //   }
          // },

          // 关键风险点
          markPoint: {
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
              color: '#ff4d4f'
            },
            data: [
              {
                name: '拥堵风险',
                coord: ['10时', 900]
              }
            ]
          },

          // 垂直风险线
          markLine: {
            symbol: 'none',
            label: {
              show: false
            },
            lineStyle: {
              color: '#ff4d4f',
              width: 2
            },
            data: [
              {
                xAxis: '10时'
              }
            ]
          }
        }
      ]
    }

    }
  }
}
