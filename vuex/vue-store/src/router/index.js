import Vue from 'vue'
import Router from 'vue-router'
import state from '@/components/state'
import mutations from '@/components/mutations'
import mapMutations from '@/components/mapMutations'
import types from '@/components/types'
import getters from '@/components/getters'
import mapGetters from '@/components/mapGetters'
import actions from '@/components/actions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'state',
      path: '/',
      component: state
    }, {
      name: 'mutations',
      path: '/first',
      component: mutations
    }, {
      name: 'mapMutations',
      path: '/second',
      component: mapMutations
    }, {
      name: 'types',
      path: '/third',
      component: types
    }, {
      name: 'getters',
      path: '/four',
      component: getters
    }, {
      name: 'mapGetters',
      path: '/five',
      component: mapGetters
    }, {
      name: 'actions',
      path: '/six',
      component: actions
    }
  ]
})
