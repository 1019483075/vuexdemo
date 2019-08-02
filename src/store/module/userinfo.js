import * as types from '../mutation-types'

export default {
  namespaced: true,

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
    getName ({commit}) {
      setTimeout(() => {
        commit(types.SET_FIRSTNAME, 'luo')
        commit(types.SET_LASTNAME, 'ling')
      }, 1000)
    }
  }
}
