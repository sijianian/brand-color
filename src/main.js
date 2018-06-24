import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Page from '@/components/page'

import '@/assets/styles/element-variables.scss'
import '@/assets/styles/theme.scss'

import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Button,
  ButtonGroup,
  Icon,
  Message,
  Tabs,
  TabPane,
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$message = Message

Vue.config.productionTip = false
Vue.component('page', Page)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
