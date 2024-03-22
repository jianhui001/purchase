import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import router from './router'
import api from './api'
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
