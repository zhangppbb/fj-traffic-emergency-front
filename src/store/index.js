import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import dict from './modules/dict'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    dict,
    user,
    tagsView,
    permission,
    settings
  },
  getters,
  state: {
    isProvinceView: true 
  },
  mutations: {
    SET_PROVINCE_VIEW(state, value) {
      state.isProvinceView = value
    },
  },
  actions: {
    setProvinceView({ commit }, value) {
      commit('SET_PROVINCE_VIEW', value)
    }
  },
  getters: {
    isProvinceView: state => state.isProvinceView
  }
})

export default store
