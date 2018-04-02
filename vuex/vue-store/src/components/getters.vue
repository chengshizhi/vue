<template>
  <div>
    <p>{{msg}}</p>
    <p>{{ count }}</p>
    <p>{{ count2 }}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'state',
  data () {
    return {
      msg: 'Welcome to 组件四'
    }
  },
  /*
  * 在vue 的构造器里边只能有一个computed属性，
  * 如果你写多个，只有最后一个computed属性可用
  * 使用ES6中的展开运算符”…
  * */
  computed: {
    ...mapState(['count']),
    count2 () {
      return this.$store.getters.count2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
