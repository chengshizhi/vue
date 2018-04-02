<template>
  <div>
    <p>{{msg}}</p>
    <p>{{ count }}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="addParam(10)">++</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'mapMutations',
  data () {
    return {
      msg: 'Welcome to 组件二'
    }
  },
  computed: mapState(['count']),
  methods: mapMutations([
    'add', 'reduce', 'addParam'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
