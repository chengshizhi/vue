<template>
  <div>
    <p>{{msg}}</p>
    <p>{{$store.state.count}}</p>
    <!--
      一、通过computed的计算属性直接赋值
      二、通过mapState的对象来赋值
      三、通过mapState的数组来赋值
    -->
    <p>{{ count }}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'state',
  data () {
    return {
      msg: 'Welcome to 组件'
    }
  },
  /*
  computed: {
    count () {
      return this.$store.state.count
    }
  }

  computed: mapState({
    // 理解为传入state对象，修改state.count属性
    count: state => state.count
  }) */

  // 当映射的计算属性的名称与 state 的子节点名称相同时
  // 映射 this.count 为 store.state.count
  computed: mapState(['count'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
