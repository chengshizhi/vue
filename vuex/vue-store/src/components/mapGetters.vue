<template>
  <div>
    <p>{{msg}}</p>
    <p>{{ count }}</p>
    <p>{{ count2 }}</p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
