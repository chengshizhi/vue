import * as types from './mutations_types'

export default {
  [types.ADD] (state) {
    state.count++
  },
  [types.REDUCE] (state) {
    state.count--
  },
  [types.ADD_PARAM] (state, n) {
    state.count += n
  }
}
