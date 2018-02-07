import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters, // es6语法  键值对相同的可以只需要写一个
  mutations,
  actions
})
export default store
