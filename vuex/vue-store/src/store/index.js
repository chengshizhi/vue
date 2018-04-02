import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  /*
  mutations: {
    add (state) {
      state.count++
    },
    reduce (state) {
      state.count--
    },
    addParam (state, n) {
      state.count += n
    }
  }, */

  mutations: {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [types.ADD] (state) {
      state.count++
    },
    [types.REDUCE] (state) {
      state.count--
    },
    [types.ADD_PARAM] (state, n) {
      state.count += n
    }
  },
  getters: {
    count2: function (state) {
      return state.count + 100
    }
  },
  // context：上下文对象，这里你可以理解称store本身。
  actions: {
    addAction (context) {
      context.commit(types.ADD, 10)
    },
    reduceAction (context) {
      setTimeout(() => {
        context.commit(types.REDUCE)
      }, 3000)
    }
  }
})
