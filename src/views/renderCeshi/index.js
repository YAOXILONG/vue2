
import Vue from 'vue'
import router from '../../router/renderCeshi'
import App from './App'

new Vue({
  router,
  render: h => h(App, { ref: 'app' })
}).$mount('#app')
