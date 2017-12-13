// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueClazyLoad from 'vue-clazy-load'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

sync(store, router)

Vue.config.productionTip = false

Vue.use(VueClazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
