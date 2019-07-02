import * as types from './mutation-types'
export default {
  [types.SET_NUMS] (state, nums) {
    // 必写state
    state.nums = nums
  },
  [types.SET_PRICE] (state, price) {
    state.price = price
  }
}
