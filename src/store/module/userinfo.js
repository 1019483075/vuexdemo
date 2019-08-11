import * as types from '../mutation-types'

export default {
  namespaced: true, // 命名空间
  state: {
    firstName: '--',
    lastName: '--'
  },

  getters: {
    fullName (state) {
      return state.firstName + state.lastName
    }
  },

  mutations: {
    [types.SET_FIRSTNAME] (state, payload) {
      state.firstName = payload
    },
    [types.SET_LASTNAME] (state, payload) {
      state.lastName = payload
    }
  },

  actions: {
    changeName ({ commit }) {
      // 注意： 想要访问跟级别的状态可以使用rootState
      setTimeout(() => {
        commit(types.SET_FIRSTNAME, 'ling')
        commit(types.SET_LASTNAME, 'xi')
      }, 1000)
    }
  }
}
