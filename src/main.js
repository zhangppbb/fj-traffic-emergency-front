import Vue from 'vue'
import SeamlessScroll from 'vue-seamless-scroll'

import Cookies from 'js-cookie'

import Element from 'element-ui'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import '@/assets/styles/element-variables.scss'
import App from './App'
import store from './store'
import router from './router'
// import directive from './directive' // directive
import plugins from './plugins' // plugins

import '@/assets/styles/tailwind.css'

import './assets/icons' // icon
import './permission' // permission control
// import { getDicts } from '@/api/admin/system/dict/data'
// import { getConfigKey } from '@/api/admin/system/config'
// import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from '@/utils/ruoyi'
// // 分页组件
// import Pagination from '@/components/Pagination'
// // 自定义表格工具组件
// import RightToolbar from '@/components/RightToolbar'
// // 富文本组件
// import Editor from '@/components/Editor'
// // 文件上传组件
// import FileUpload from '@/components/FileUpload'
// // 图片上传组件
// import ImageUpload from '@/components/ImageUpload'
// // 图片预览组件
// import ImagePreview from '@/components/ImagePreview'
// // 字典标签组件
// import DictTag from '@/components/DictTag'
// // 头部标签组件
// import VueMeta from 'vue-meta'
// // 字典数据组件
// import DictData from '@/components/DictData'
import Chart from '@/components/chart'
import ChartWrapper from '@/components/chart-wrapper'
import GisScreenDialog from '@/components/dialog/gis-screen-dialog.vue'
import GisScreenRiskDialog from '@/components/dialog/gis-screen-risk-dialog.vue'
import GisScreenVideoDialog from '@/components/dialog/gis-screen-video-dialog.vue'
import PictureScreenRiskDialog from '@/components/dialog/picture-screen-dialog.vue'
import ChartTitle from '@/components/chart-title/index.vue'

// 全局方法挂载
// Vue.prototype.getDicts = getDicts
// Vue.prototype.getConfigKey = getConfigKey
// Vue.prototype.parseTime = parseTime
// Vue.prototype.resetForm = resetForm
// Vue.prototype.addDateRange = addDateRange
// Vue.prototype.selectDictLabel = selectDictLabel
// Vue.prototype.selectDictLabels = selectDictLabels
// Vue.prototype.download = download
// Vue.prototype.handleTree = handleTree

// 全局组件挂载
// Vue.component('DictTag', DictTag)
// Vue.component('Pagination', Pagination)
// Vue.component('RightToolbar', RightToolbar)
// Vue.component('Editor', Editor)
// Vue.component('FileUpload', FileUpload)
// Vue.component('ImageUpload', ImageUpload)
// Vue.component('ImagePreview', ImagePreview)
Vue.component('ChartWrapper', ChartWrapper)
Vue.component('Chart', Chart)
Vue.component('GisScreenDialog', GisScreenDialog)
Vue.component('GisScreenRiskDialog', GisScreenRiskDialog)
Vue.component('PictureScreenRiskDialog', PictureScreenRiskDialog)
Vue.component('GisScreenVideoDialog', GisScreenVideoDialog)
Vue.component('ChartTitle', ChartTitle)

Vue.use(SeamlessScroll , { componentName: 'SeamlessScroll' })

// Vue.use(directive)
Vue.use(plugins)
// Vue.use(VueMeta)
// DictData.install()

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
