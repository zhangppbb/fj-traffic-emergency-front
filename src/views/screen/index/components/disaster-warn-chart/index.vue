<template>
  <div class="disaster-warn-chart-container">
    <!-- 预警信息 -->
    <div class="chart-container">
      <Chart :options="options"></Chart>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { px2 } from "../../../../../utils/viewport";

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
const data = {
  // 崩塌 沉陷 滑坡 泥石流 水毁
  grade1: [299, 192, 437, 44, 243],
  grade2: [5086, 2986, 3806, 807, 2177],
  grade3: [37568, 14375, 25450, 2680, 7647],
  grade4: [46412, 21443, 27576, 3271, 12999],
};
const VALUE = {
  all: data.grade1.map(
    (item, index) =>
      data.grade1[index] + data.grade2[index] + data.grade3[index]
  ),
  ...data,
};

const axisLabel = {
  fontSize: px2(12),
  color: "#CBF0FF",
};

const colors = [
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#8587E0" },
    { offset: 1, color: "#1032B8" },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#84BDE0" },
    { offset: 1, color: "#1297B8" },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#83DFD5" },
    { offset: 1, color: "#0FB786" },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#A7ECA8" },
    { offset: 1, color: "#50C43B" },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#E5D698" },
    { offset: 1, color: "#C28E37" },
  ]),
];

const option = (grade) => ({
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
    top: "30%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["崩塌", "沉陷", "滑坡", "泥石流", "水毁"],
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
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
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed", // 虚线（也可以是 dotted 点线）
        color: "#596372", // 可选：线的颜色
        width: 1, // 可选：线的宽度
      },
    },

    axisTick: {
      show: false,
    },
    axisLabel,
    // boundaryGap: ["20%", "20%"],
  },
  series: [
    {
      type: "custom",
      renderItem: (params, api) => {
        let index = params.dataIndex;
        let cubeLeftStyle = colors[index % colors.length];
        let cubeRightStyle = colors[index % colors.length];
        let cubeTopStyle = colors[index % colors.length];
        // let cubeLeftStyle = "";
        // let cubeRightStyle = "";
        // let cubeTopStyle = "";
        // 颜色
        // cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   {
        //     offset: 0,
        //     color: "#BC7105",
        //   },
        //   {
        //     offset: 1,
        //     color: "#E4D085",
        //   },
        // ]);
        // cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   {
        //     offset: 0,
        //     color: "#BC7105",
        //   },
        //   {
        //     offset: 1,
        //     color: "#E4D085",
        //   },
        // ]);
        // cubeTopStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   {
        //     offset: 0,
        //     color: "#BC7105",
        //   },
        //   {
        //     offset: 1,
        //     color: "#E4D085",
        //   },
        // ]);
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
      data: VALUE[grade],
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
      data: VALUE[grade],
    },
  ],
});

export default {
  props: {
    grade: {
      type: String,
      default: "all",
    },
  },
  data() {
    return {
      options: option(this.grade),
    };
  },
  watch: {
    grade(val) {
      this.options = option(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.disaster-warn-chart-container {
  // Info
  & > .warn-info-container {
    height: px2vw(26);
    background: rgba(23, 2, 2, 0.25);
    .icon {
      width: px2vw(22);
      height: px2vw(22);
    }

    .value {
      font-size: px2vw(24);
      color: #ffc3c3;
    }
  }

  // Chart
  & > .chart-container {
    width: 100%;
    height: 19vh;
  }
}
</style>
