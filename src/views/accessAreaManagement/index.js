
import Vue from 'vue'
import router from '../../router/accessAreaManagement'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App, { ref: 'app' })
}).$mount('#app')
