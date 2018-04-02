<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <editor></editor>
    <notes-list></notes-list>
  </div>
</template>

<script>
import NotesList from './components/NotesList'
import Toolbar from './components/Toolbar'
import Editor from './components/Editor'

export default {
  components: {
    NotesList,
    Toolbar,
    Editor
  }
}
</script>

<style>
  html, #app {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
</style>
