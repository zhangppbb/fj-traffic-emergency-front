import userIcon from './assets/images/avatar.png'

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
      // 指挥员数据
      userList: [
        {
          icon: userIcon,
          name: '李四',
          role: '现场指挥',
          type: 'offline',
          typeName: '离线',
        },  {
          icon: userIcon,
          name: '李四',
          role: '资源调度',
          type: 'busy',
          typeName: '忙碌'
        },  {
          icon: userIcon,
          name: '赵六',
          role: '现场指挥',
          type: 'busy',
          typeName: '忙碌'
        }
      ],
      emergencyUserList: [
         {
          icon: userIcon,
          name: '张三',
          role: '指挥长',
          type: 'online',
          typeName: '离线',
        },
         {
          icon: userIcon,
          name: '李四',
          role: '现场指挥',
          type: 'offline',
          typeName: '离线',
        },  {
          icon: userIcon,
          name: '李四',
          role: '资源调度',
          type: 'busy',
          typeName: '忙碌'
        },  {
          icon: userIcon,
          name: '赵六',
          role: '现场指挥',
          type: 'busy',
          typeName: '忙碌'
        }
      ],


      // 警告数据列表
      warningList: [
        {
          datetime: '2026-01-15 01:00',
          type: '张三 总指挥',
          upload: '加快清障进度',
          status: '待核验'
        },
{
          datetime: '2026-01-15 15:02',
          type: '李四 医疗组长',
          upload: '2小时内转运伤员',
          status: '已下达'
        },
      ],
      emergencyList: [
        {
          datetime: '2026-01-15 01:00',
          type: '张三 总指挥',
          upload: '加快清障进度',
          status: '已下达'
        },
{
          datetime: '2026-01-15 15:02',
          type: '李四 医疗组长',
          upload: '2小时内转运伤员',
          status: '已下达'
        },
      ],
    }
  },

  computed: {
    tableData() {
      return this.isEmergencyCheck ? this.emergencyList : this.warningList
    },

    userListData() {
      return this.isEmergencyCheck ? this.emergencyUserList : this.userList
    }
  }

}
