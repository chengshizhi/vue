<template>
  <div>
    <p>{{msg}}</p>
    <p>{{ count }}</p>
    <p>{{ count2 }}</p>

    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'state',
  data () {
    return {
      msg: 'Welcome to 组件五'
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count2'])
  },
  methods: {
    ...mapMutations([
      'add', 'reduce', 'addParam'
    ]),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
