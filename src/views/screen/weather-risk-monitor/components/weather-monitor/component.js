import redIcon from './assets/images/red-icon.png'
import yellowIcon from './assets/images/yellow-icon.png'

export default {
  data() {
    return {
      redIcon,
      yellowIcon
    }
  },
  data() {
    return {
      tableData: [
        {
          type: '大雾红色预警',
          region: '福建省',
          icon: redIcon
        },
         {
          type: '暴雨橙色预警',
          region: '福州市',
          icon: yellowIcon
        }
      ]
    }
  }
}
