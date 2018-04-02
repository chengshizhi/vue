// 初始化 state
const INIT_STORE = 'INIT_STORE'
// 新增笔记
const NEW_NOTE = 'NEW_NOTE'
// 修改笔记
const EDIT_NOTE = 'EDIT_NOTE'
// 删除笔记
const DELETE_NOTE = 'DELETE_NOTE'
// 切换笔记的收藏与取消收藏
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
// 切换显示数据列表类型：全部 or 收藏
const SET_SHOW_ALL = 'SET_SHOW_ALL'
// 设置当前激活的笔记
const SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE'

export default {
  [INIT_STORE] (state, data) {
    state.notes = data.notes
    state.show = data.show
    state.activeNote = data.activeNote
  },

  [NEW_NOTE] (state) {
    var newNote = {
      id: +new Date(),
      title: '标题',
      content: '',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  [EDIT_NOTE] (state, note) {
    state.activeNote = note
    // 修改原始数据
    for (var i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === note.id) {
        state.notes[i] = note
        break
      }
    };
  },

  [DELETE_NOTE] (state) {
    state.notes.splice(state.activeNote, 1)
    state.activeNote = state.notes[0] || {}
  },

  [TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  [SET_SHOW_ALL] (state, show) {
    state.show = show
    // 切换数据展示，需要同步更新 activeNote
    if (show === 'favorite') {
      state.activeNote = state.notes.filter(note => note.favorite)[0] || {}
    } else {
      state.activeNote = state.notes[0] || {}
    }
  },

  [SET_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  }
}
