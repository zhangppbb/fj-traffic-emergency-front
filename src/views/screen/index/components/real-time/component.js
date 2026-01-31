import redIcon from './assets/images/red-icon.png'
import orangeIcon from './assets/images/orange-icon.png'
import yellowIcon from './assets/images/yellow-icon.png'
import blueIcon from './assets/images/blue-icon.png'

export default {
  props: {
    // 是否为应急模式
    isEmergencyCheck: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      scrollHeight: 0, // 半个内容区高度（用于判断何时重置滚动）
      translateY: 0, // 当前滚动的距离
      isScrolling: true, // 是否正在滚动（用于悬停暂停）
      animationFrame: null, // RAF 动画句柄

      // 预警数据
      warningData: [
        {
          name: '红色预警',
          value: 2,
          icon: redIcon
        },
         {
          name: '黄色预警',
          value: 3,
          icon: yellowIcon
        },
        {
          name: '橙色预警',
          value: 3,
          icon: orangeIcon
        },
        {
          name: '蓝色预警',
          value: 3,
          icon: blueIcon
        }
      ],

      // 警告数据列表
      warningList: [
        {
          datetime: '2026-01-15 01:00',
          type: '红色预警',
          upload: '系统推送',
          desc: 'G3京台高速闽浙界至建瓯弓鱼互通段山体滑坡',
          status: '待核验'
        },
        {
          datetime: '2026-01-14 23:00',
          type: '黄色预警',
          upload: '系统推送',
          desc: 'G15沈海高速闽浙界至福鼎邦福互通段大雾能见度<50m',
          status: '核验中'
        },
        {
          datetime: '2026-01-14 22:00',
          type: '橙色预警',
          upload: '系统推送',
          desc: 'G1523甬莞高速福鼎邦福互通至福安康厝互通段山体滑坡',
          status: '已关闭'
        },
        {
          datetime: '2026-01-14 21:00',
          type: '蓝色预警',
          upload: '人工上报',
          desc: 'G4012溧宁高速闽浙界至福安坂中互通段道路严重拥堵',
          status: '已响应'
        },
        {
          datetime: '2026-01-14 20:00',
          type: '红色预警',
          upload: '人工上报',
          desc: 'S40漳武高速闽赣界至武平三坊互通段道路严重拥堵',
          status: '已响应'
        }
      ],

      // 应急
      emergencyList: [
         {
          datetime: '2026-01-15 01:00',
          type: '红色预警',
          upload: '系统推送',
          desc: 'G3京台高速闽浙界至建瓯弓鱼',
          status: '待核验'
        },
        {
          datetime: '2026-01-14 23:00',
          type: '黄色预警',
          upload: '系统推送',
          desc: 'G15沈海高速闽浙界至福鼎邦福互通段大雾能见度<50m',
          status: '核验中'
        },
        {
          datetime: '2026-01-14 22:00',
          type: '橙色预警',
          upload: '系统推送',
          desc: 'G1523甬莞高速福鼎邦福互通至福安康厝互通段山体滑坡',
          status: '已关闭'
        },
      ]
    }
  },

  computed: {
    tableData() {
      return this.isEmergencyCheck ? this.emergencyList : this.warningList
    }
  },

  watch: {
    // 监听 disasterList 数据变化（新增/删除/替换等）
    // warningList: {
    //   handler() {
    //     this.$nextTick(() => {
    //       this.resetScroll(); // 数据变化后重新计算滚动
    //     });
    //   },
    //   deep: true,
    // },
  },

  methods: {
      // 初始化滚动：计算内容高度 + 启动动画
    initScroll() {
      const content = this.$refs.content;
      this.scrollHeight = content.scrollHeight / 2; // 只需要滚动原始内容高度

      // 重置 transform 和位置
      this.translateY = 0;
      content.style.transform = `translateY(0)`;

      // 内容超出容器才滚动
      if (this.scrollHeight > this.height) {
        this.startScroll();
      }
    },

    // 重设滚动（用于 disasterList 更新时）
    resetScroll() {
      this.cancelScroll(); // 清除旧动画
      this.initScroll(); // 重新初始化
    },

    // 开始滚动（requestAnimationFrame 实现更平滑）
    startScroll() {
      const content = this.$refs.content;

      const step = () => {
        if (this.isScrolling) {
          this.translateY += this.speed;

          // 如果滚完一轮内容，重置到起始位置
          if (this.translateY >= this.scrollHeight) {
            this.translateY = 0;
          }

          // 高性能方式：直接操作 DOM，不触发 Vue 响应式系统
          content.style.transform = `translateY(-${this.translateY}px)`;
        }

        // 下一帧继续滚动
        this.animationFrame = requestAnimationFrame(step);
      };

      // 启动动画
      this.animationFrame = requestAnimationFrame(step);
    },

    // 清除动画帧
    cancelScroll() {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    },

    // 鼠标悬停 → 暂停滚动
    pauseScroll() {
      this.isScrolling = false;
    },

    // 鼠标移出 → 继续滚动
    resumeScroll() {
      this.isScrolling = true;
    },
  }
}
