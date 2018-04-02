<template>
  <div>
    <p>{{msg}}</p>
    <p>{{ count }}</p>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <button @click="$store.commit('addParam',10)">++</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'mutations',
  data () {
    return {
      msg: 'Welcome to 组件一'
    }
  },
  computed: mapState(['count'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
