import * as types from './mutation-types';

export default {
  changeNumAndPrice ({ commit }) {
    // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    commit(types.SET_NUMS, 100)
    commit(types.SET_PRICE, 100)
  },
  // 注册一个简单的action
  increment ({ commit }, payload) {
    commit({
      type: 'incrementsFive',
      num1: payload.num1,
      num2: payload.num2
    })
  },
  actionB (context) {
    console.log('失败')
  },
  // 分组action
  actionA ({ dispatch }, payload) {
    return dispatch('increment', {
      num1: payload.num1,
      num2: payload.num2
    }).then(() => {
      return dispatch('actionB')
    })
  }
}
