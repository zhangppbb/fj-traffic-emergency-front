<template>
	<div class="flex flex-col patrol-task-tracking-container">
    <GisScreenDialog
      title="高风险灾害点巡查任务详情"
      v-model="dialogVisible"
      width="740px"
      center
      custom-class="gis-screen-dialog"
    >
      <div class="patrol-task-tracking-dialog-container">
        <TaskList
          :disasterList="disasterList"
          @confirm="dialogVisible = false"
        />
      </div>
    </GisScreenDialog>

		<div
      class="point-item-container"
      v-for="(item, index) in trackingPoints"
      :key="index"
      @click="showPoint(item)"
    >
			<div class="title-container flex items-center">

				<div class="date">{{ item.date }}</div>
				<div class="title">{{ item.name }}</div>
			</div>

			<div class="item-container flex flex-wrap">
				<div class="item">
					<img class="icon" src="./assets/shengfenzuobiao_mianxing@2x.png" alt="">
					<span class="text">涉及省份</span>
					<span class="value">{{ item.province }}</span>
				</div>

				<div class="item">
					<img class="icon" src="./assets/dizhizaihaidian@2x.png" alt="">
					<span class="text">灾害点</span>
					<span class="value">{{ item.point }}</span>
				</div>

				<div class="item">
					<img class="icon" src="./assets/mti-yifankui@2x.png" alt="">
					<span class="text">已反馈</span>
					<span class="value">{{ item.feedback }}</span>
				</div>
				<div class="item">
					<img class="icon" src="./assets/weifankuichaxun@2x.png" alt="">
					<span class="text">未反馈</span>
					<span class="value">{{ item.received }}</span>
				</div>
			</div>
		</div>

    <div
        class="flex justify-between district-disaster-wrapper"
      >
      <div class="point-container flex flex-col items-center" v-for="(item, index) in pointList" :key="index">
        <div class="banner flex items-center justify-center">
            <img :src="item.iconSrc" alt="icon" class="w-full h-full object-contain" ></img>
        </div>
        <div class="text-sm text-name-container" :style="{
          backgroundImage: `url(${item.backgroundImageUrl})`,
          backgroundSize: '100% 100%'
        }">
          <span class="text-name">{{item.name}}</span>
        </div>
        <div class="text-xs-vw text-value">
            {{item.value}}
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import TaskList from '../task-list/index.vue'

export default {
  props: {
    // 总数
    total: {
      type: Number,
      default: () => 0
    },

    // 已完成
    completed: {
      type: Number,
      default: () => 0
    },

    // 处理中
    processing: {
      type: Number,
      default: () => 0
    },

    // 跟踪点位
    trackingPoints: {
      type: Array,
      default: () => []
    }
  },

  components: {
    TaskList
  },

  computed: {
    // 点位数量
    pointList() {
      return [
        {
          iconSrc: require('./assets/01@2x.png'),
          name: '任务总数',
          textColor:'#00D8FF',
          backgroundImageUrl: require('./assets/icon-1.png'),
          value: this.total
        },{
          iconSrc: require('./assets/02@2x.png'),
          name: '已完成',
          textColor:'#00FFD5',
          backgroundImageUrl: require('./assets/icon-2.png'),
          value: this.completed
        },{
          iconSrc: require('./assets/03@2x.png'),
          name: '处理中',
          textColor:'#B7DF2C',
          backgroundImageUrl: require('./assets/icon-3.png'),
          value: this.processing
        }
      ]
    }
  },

  data() {
    return {
      // 任务下达
      dialogVisible: false,

      // 灾害点
      disasterList: []
    }
  },

  methods: {
    showPoint(item) {
      this.disasterList = item.points

      this.$nextTick(() => {
        this.dialogVisible = true
      })
    }
  }
}

</script>

<style lang="scss" scoped>
// 任务下达弹窗
.patrol-task-tracking-dialog-container {
  padding: 0 px2vw(35);
  padding-top: px2vh(24);
  padding-bottom: px2vh(20);
}

.patrol-task-tracking-container {
  & > .point-item-container {
    margin-bottom: px2vh(20);
  }
  & > .point-item-container:last-of-type {
    margin-bottom: 0;
  }
}

.point-item-container {
  cursor: pointer;
  padding: px2vh(20) px2vw(14);
  padding-top: px2vh(10);
  border: 1px solid;
  border-image: radial-gradient(circle, #00C3FF, #4CB5C7, #041212, #4CB5C7, #00C3FF) 2 2;
  background-color: rgba($color: #00C3FF, $alpha: 0.1);
  // background: radial-gradient(circle, #00C3FF, #4CB5C7, #010404, #4CB5C7, #00C3FF) 2 2;
	& > .title-container {
    color: #fff;
    font-weight: bold;
    // margin-bottom: px2vh(14);
    line-height: px2vw(20);
    .date {
      margin-right: px2vw(10);
      font-size: px2vw(16);
      text-shadow: #00c0ff 1px 0 3px;
    }

    .title {
      font-size: px2vw(14);
    }
  }

  & > .item-container {
    & > .item {
      display: flex;
      align-items: center;
      font-weight: bold;
      width: 50%;
      margin-top: px2vh(14);

      .icon {
        width: px2vw(16);
        height: px2vw(16);
        margin-right: px2vw(10);
      }

      .text {
        color: #CBDEFF;
        font-size: px2vw(12);
        margin-right: px2vw(10);
      }

      .value {
        color: #00FAFD;
        font-size: px2vw(14);
      }
    }
  }
}

.point-container {
  .banner{
    width: px2vw(98);
    height: px2vw(103);
  }

  .text-name-container {
    width: px2vw(80);
    height: px2vw(24);
    line-height: px2vw(24);
    text-align: center;
    margin: px2vh(10) 0;
    .text-name {
      font-weight: bold;
      font-size: px2vw(14);
      color: #FFFFFF;
      font-style: italic;
    }
  }

  & > .text-value {
    font-size: px2vw(14);
    color: #fff;
  }
}
</style>
