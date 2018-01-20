<template>
    <div id="app">
        <h1>vue-loader+vue-router</h1>
        <div>
            <a v-link="{path:'/home'}">主页</a>
            <a v-link="{path:'/news'}">新闻</a>
        </div>
        <router-view></router-view>
    </div>
    <!--
    <h1>welcome vue</h1>
    <h2 @click="change">{{msg}}</h2>
    <my-menu></my-menu>
    -->
</template>
<script>
    /*
    import Menu from './components/Menu.vue';
    export default {
      data () {
        return {
          msg:'welcome Vue ^_^'
        }
      },
      methods:{
        change () {
          this.msg = 'wahaha'
        }
      },
      components:{
        'my-menu':Menu
      }
    }
    */
</script>
<style>
    body{
        background: #ffeedd;
    }
    .v-link-active{
        font-size: 20px;
        color: #f60;
    }
</style>