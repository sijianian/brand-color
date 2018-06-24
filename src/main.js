import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Page from '@/components/page'

import ElementUI from 'element-ui'
import '@/assets/styles/element-variables.scss'
import '@/assets/styles/theme.scss'

Vue.config.productionTip = false
Vue.component('page', Page)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
