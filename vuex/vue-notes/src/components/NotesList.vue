<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | heavenru.com</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- all -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="toggleShow('all')"
                  >All Notes</button>
        </div>

        <!-- favorites -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="toggleShow('favorite')"
                  >Favorites</button>
        </div>
      </div>
    </div>

    <!-- 渲染笔记列表 -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
           v-bind:key="note.id"
           class="list-group-item" href="#"
           :class="{active: activeNote === note}"
           @click="updateNote(note)">
          <h4 class="list-group-item-heading">
            {{note.title.trim().substring(0,30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    filteredNotes () {
      return this.$store.getters.filteredNotes
    },
    show () {
      return this.$store.getters.show
    },
    activeNote () {
      return this.$store.getters.activeNote
    }
  },
  methods: {
    ...mapActions([
      'updateActiveNote', 'updateShow', 'initStore'
    ]),

    toggleShow (show) {
      this.updateShow(show)
    },
    updateNote (note) {
      this.updateActiveNote(note)
    }
  },
  created () {
    const initNote = {
      id: +new Date(),
      title: '我的笔记',
      content: '第一篇笔记内容',
      favorite: false
    }

    // 模拟初始化数据
    const initData = {
      show: 'all',
      notes: [initNote],
      activeNote: '123'
    }
    this.initStore(initData)
  }
}
</script>
<style>
  #notes-list {
    margin-left:80px;
  }
</style>
