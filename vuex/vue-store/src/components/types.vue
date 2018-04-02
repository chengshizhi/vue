<template>
  <div>
    <p>{{msg}}</p>
    <p>{{ count }}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="add_param(10)">++</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as types from '../store/mutation-types.js'
export default {
  name: 'mapMutations',
  data () {
    return {
      msg: 'Welcome to 组件三'
    }
  },
  computed: mapState(['count']),
  methods: mapMutations({
    add: types.ADD,
    reduce: types.REDUCE,
    add_param: types.ADD_PARAM
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
