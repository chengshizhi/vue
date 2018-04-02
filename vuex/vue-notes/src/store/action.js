export default {
  initStore ({ commit, state }, initData) {
    commit('INIT_STORE', initData)
  },
  updateActiveNote ({ commit }, node) {
    commit('SET_ACTIVE_NOTE', node)
  },
  newNote ({ commit }) {
    commit('NEW_NOTE')
  },
  deleteNote ({ commit }) {
    commit('DELETE_NOTE')
  },
  toggleFavorite ({ commit }) {
    commit('TOGGLE_FAVORITE')
  },
  editNote ({ commit }, node) {
    commit('EDIT_NOTE', node)
  },
  updateShow ({ commit }, show) {
    commit('SET_SHOW_ALL', show)
  }
}
