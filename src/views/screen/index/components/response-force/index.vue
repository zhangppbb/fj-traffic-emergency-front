<template>
  <div class="response-force-component">
    <!-- 图表数据 -->
    <div class="row-container">
      <div class="row">
      <div class="card">
        <div class="title">救援队伍</div>
        <div class="chart-container flex items-center">
          <div class="chart">
            <Chart
              :options="option"
              ref="chartRef"
              class="w-full h-full"
              height="100%"
            ></Chart>

            <div class="chart-tip">
              28支
            </div>
          </div>

          <div class="chart-legend ml-sm-vw">
            <div class="legend-item flex items-center mb-xs-vw">
              <div class="legend-text mr-xs-vw">在线</div>
              <div class="legend-color online mr-xs-vw"></div>
            </div>
            <div class="legend-item flex items-center">
              <div class="legend-text mr-xs-vw">离线</div>
              <div class="legend-color offline mr-xs-vw"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="title">应急车辆</div>

      <div class="chart-container flex items-center">
          <div class="chart">
            <Chart
              :options="option"
              ref="chartRef"
              class="w-full h-full"
              height="100%"
            ></Chart>

            <div class="chart-tip">
              142辆
            </div>
          </div>

          <div class="chart-legend ml-sm-vw">
            <div class="legend-item flex items-center mb-xs-vw">
              <div class="legend-text mr-xs-vw">可用</div>
              <div class="legend-color online mr-xs-vw"></div>
            </div>
            <div class="legend-item flex items-center">
              <div class="legend-text mr-xs-vw">不可用</div>
              <div class="legend-color offline mr-xs-vw"></div>
            </div>
          </div>
        </div>
        </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="title">物资储备</div>
       <div class="chart-container flex items-center">
         <div class="chart">
            <img class="chart-img" src="./assets/images/water-polo-icon.png" alt="">
            <div class="chart-tip chart-x-tip">
              <div class="value">85</div>
              <div class="unit">%</div>
            </div>
          </div>

          <div class="chart-legend ml-sm-vw">
            <div class="legend-item flex items-center">
              <div class="legend-text mr-xs-vw">待命</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="title">医疗资源</div>
        <div class="chart-container flex items-center">
          <div class="chart">
            <img class="chart-img" src="./assets/images/place-icon.png" alt="">

            <div class="chart-tip">
              <div class="value">23</div>
              <div class="unit">处</div>
            </div>
          </div>

          <div class="chart-legend ml-sm-vw">
            <div class="legend-item flex items-center">
              <div class="legend-text mr-xs-vw">待命</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    <!-- 今日调度 -->
    <div class="today-dispatch-card card">
      <ChartTitle>今日调度</ChartTitle>
      <div class="dispatch-item-container flex items-center justify-between">
        <div class="dispatch-item flex items-center">
          <div class="dispatch-type">已派出</div>
          <div class="dispatch-text">8支队伍，12辆车</div>
        </div>

        <img class="arrow-icon" src="@/assets/images/arrow-right.png" alt="">
      </div>

      <div class="dispatch-item-container flex items-center justify-between">
        <div class="dispatch-item flex items-center">
          <div class="dispatch-type">任务中</div>
          <div class="dispatch-text">3项事件</div>
        </div>

        <img class="arrow-icon" src="@/assets/images/arrow-right.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { px2 } from "@/utils/viewport";

export default {
  name: 'EmergencyDashboard',


  data() {

    //职称结构取数
var getname = ["在线", "离线"];
var getvalue = [300, 200, 100, 50];
var data = [];
for (var i = 0; i < getname.length; i++) {
  data.push({
    name: getname[i],
    value: getvalue[i],
  });
}
var colorList = ["#6486E5", "#80B9C3"];

    return {
       option: {
            series: [
        {
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['70%', '100%'], // 占满容器

          label: {
            show: false // 隐藏文字
          },
          labelLine: {
            show: false // 隐藏连接线
          },

          itemStyle: {
            borderColor: 'rgba(0,121,255,0.1)',
            borderWidth: 5,
            borderRadius: 10,
            color: function (params) {
              return colorList[params.dataIndex]
            }
          },

          data: data
        }
      ]
      },

      option1: {
  title: {
    text: "",
    textStyle: {
      fontWeight: "normal",
      fontSize: 25,
      color: "rgb(97, 142, 205)",
    },
  },
  series: [
    {
      type: "liquidFill",
      radius: "45%",
      center: ["50%", "50%"],
      data: [0.5, 0.5, 0.5], // data个数代表波浪数
      backgroundStyle: {
        borderWidth: 1,
        color: "rgb(255,0,255,0.1)",
      },
      // 修改波浪颜色
      // color:['yellow'], 所有波浪一个颜色
      // color:['yellow','red','pink'], 每个波浪不同颜色，颜色数组长度为对应的波浪个数
      label: {
        normal: {
          formatter: (0.5 * 100).toFixed(2) + "%",
          textStyle: {
            fontSize: 50,
          },
        },
      },
      outline: {
        show: false,
      },
    },
    {
      type: "pie",
        center: ['50%', '50%'],
          radius: ['70%', '100%'], // 占满容器
      hoverAnimation: false,
      data: [
        {
          name: "",
          value: 500,
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: "#5886f0",
          },
          emphasis: {
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: "#5886f0",
            },
          },
        },
        {
          //画中间的图标
          name: "",
          value: 4,
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: "#ffffff",
            normal: {
              color: "#5886f0",
              borderColor: "#5886f0",
              borderWidth: 20,
              // borderRadius: '100%'
            },
          },
          label: {
            borderRadius: "100%",
          },
          emphasis: {
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: "#5886f0",
            },
          },
        },
        {
          // 解决圆点过大后续部分显示明显的问题
          name: "",
          value: 4,
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: "#5886f0",
          },
          emphasis: {
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: "#5886f0",
            },
          },
        },
        {
          //画剩余的刻度圆环
          name: "",
          value: 88,
          itemStyle: {
            color: "#050038",
          },
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: "rgba(255,255,255,0)",
            },
          },
        },
      ],
    },
  ],
}
    }
  },
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
