import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'

import './plugins/base'
import vuetify from './plugins/vuetify'

import {mdiAccount} from '@mdi/js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  mdiAccount,
  render: h => h(App)
}).$mount('#app')
