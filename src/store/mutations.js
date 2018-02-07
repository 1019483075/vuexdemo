import * as types from './mutation-types'
export default{
  [types.SETNUMS] (state, nums) { // 必写state
    state.nums = nums
  },
  [types.PRICE] (state, price) {
    state.price = price
  },
  [types.TOTAL] (state, total) {
    state.total = total
  }
}
