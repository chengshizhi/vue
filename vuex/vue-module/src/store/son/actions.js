import * as types from './mutations_types'

export default {
  addAction (context) {
    context.commit(types.ADD, 10)
  },
  reduceAction (context) {
    setTimeout(() => {
      context.commit(types.REDUCE)
    }, 3000)
  }
}
