import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
// import About from './views/about.vue'
import BrandColor from './views/brand-color'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: BrandColor,
    },
    {
      path: '/brandColor',
      name: 'brand-color',
      component: BrandColor,
    },
  ],
})
