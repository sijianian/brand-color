import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home.vue'
// import About from './views/about.vue'
import BrandColor from './views/brand-color'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: BrandColor,
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
