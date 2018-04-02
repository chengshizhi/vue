import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/'
import routes from './router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router,
  store
}).$mount('#app')
