import * as types from './mutation-types'

export default {
  changeNumAndPrice ({ commit }) {
    // let commit = content.commit
    commit(types.SET_NUMS, 100)
    commit(types.SET_PRICE, 100)
    // console.log(content)
  }
}
