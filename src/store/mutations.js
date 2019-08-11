import * as types from './mutation-types'
export default {
  // 1.改变state状态
  increments (state) {
    state.count = state.count + 1
  },
  // 2.提交载荷
  incrementsTwo (state, payload) {
    state.count += payload
  },
  // 3.对象方式提交载荷
  incrementsThree (state, payload) {
    state.count = state.count + payload.num1
  },
  // 4.对象风格的传参方式
  incrementsFour (state, payload) {
    state.count = state.count + payload.num1 + payload.num2
  },
  // 5. 以新对象替换老对象
  // { ...state.obj, ...payload } 是指以新对象替换老对象
  changeNum1 (state, payload) {
    state.obj = { ...state.obj, ...payload }
  },
  // 使用常量替代 Mutation 事件类型
  [types.SET_NUMS] (state, nums) {
    // 必写state
    state.nums = nums
  },
  // 使用常量替代 Mutation 事件类型
  [types.SET_PRICE] (state, price) {
    state.price = price
  },
  // 被action派发的状态
  incrementsFive (state, payload) {
    state.count = payload.num1 * payload.num2
  }
}
