<template>
  <div class="disaster-warn-chart-container">
    <!-- 预警信息 -->
    <div class="mb-xs-vw warn-info-container ff-ys flex justify-center items-center text-white">
      <img class="icon mr-sm-vw" :src="require('./assets/warn-icon.png')" alt="">
      <div class="text text-lg-vw mr-sm-vw">今日预警总数</div>
      <div class="value">266</div>
    </div>

    <!-- Chart -->
    <div  class="chart-container">
      <Chart :options="options"></Chart>
    </div>

  </div>
</template>

<script>
import * as echarts from 'echarts'
import { px2 } from '../../../../../utils/viewport';

// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x + 2, shape.y];
    const c1 = [shape.x - 13, shape.y - 1];
    const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 3];
    const c3 = [xAxisPoint[0] + 2, xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x + 2, shape.y];
    const c2 = [xAxisPoint[0] + 2, xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 15, xAxisPoint[1] - 5];
    const c4 = [shape.x + 15, shape.y - 5];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x + 2, shape.y + 3];
    const c2 = [shape.x + 15, shape.y - 5]; //右点
    const c3 = [shape.x - 0, shape.y - 10];
    const c4 = [shape.x - 13, shape.y - 1];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
// 注册三个面图形
echarts.graphic.registerShape("CubeLeft", CubeLeft);
echarts.graphic.registerShape("CubeRight", CubeRight);
echarts.graphic.registerShape("CubeTop", CubeTop);
const VALUE = [20, 30, 35, 40, 12];


const axisLabel = {
  fontSize: px2(12),
  color: '#CBF0FF'
}

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params, ticket, callback) {
      const item = params[1];
      return item.name + " : " + item.value;
    },
  },
  grid: {
    left: "0%",
    right: "0%",
    top: "10%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "崩塌",
      "沉陷",
      "滑坡",
      "泥石流",
      "水毁"
    ],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false,
    },
    axisLabel,
  },
  yAxis: {
    type: "value",
    min: 0,
    axisLine: {
      show: false
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed', // 虚线（也可以是 dotted 点线）
        color: '#596372',  // 可选：线的颜色
        width: 1        // 可选：线的宽度
      }
    },

    axisTick: {
      show: false,
    },
    axisLabel
    // boundaryGap: ["20%", "20%"],
  },
  series: [
    {
      type: "custom",
      renderItem: (params, api) => {
        let cubeLeftStyle = "";
        let cubeRightStyle = "";
        let cubeTopStyle = "";
        // 颜色
        cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#BC7105",
          },
          {
            offset: 1,
            color: "#E4D085",
          },
        ]);
        cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#BC7105",
          },
          {
            offset: 1,
            color: "#E4D085",
          },
        ]);
        cubeTopStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#BC7105",
          },
          {
            offset: 1,
            color: "#E4D085",
          },
        ]);
        //颜色end
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: "group",
          children: [
            {
              type: "CubeLeft",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: cubeLeftStyle,
              },
            },
            {
              type: "CubeRight",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: cubeRightStyle,
              },
            },
            {
              type: "CubeTop",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: cubeTopStyle,
              },
            },
          ],
        };
      },
      data: VALUE,
    },
    {
      type: "bar",
      barMaxWidth: 10,
      label: {
        normal: {
          show: true,
          position: "top",
          ...axisLabel,
          // fontSize: 14,
          // color: "#2e95f3",
          offset: [2, -25],
        },
      },
      itemStyle: {
        color: "transparent",
      },
      tooltip: {},
      data: VALUE,
    },
  ],
};

export default {
  data() {
    return {
      options: option
    }
  }
}

</script>


<style lang="scss" scoped>
.disaster-warn-chart-container {
  // Info
  & > .warn-info-container {
    height: px2vw(26);
    background: rgba(23,2,2,0.25);
    .icon {
      width: px2vw(22);
      height: px2vw(22);
    }

    .value {
      font-size: px2vw(24);
      color: #FFC3C3;
    }
  }

  // Chart
  & > .chart-container {
    width: 100%;
    height: px2vw(180);
  }
}
</style>