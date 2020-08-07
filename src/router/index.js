import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import qingshuang from '../views/qingshuang.vue'
import qingshuang2 from '../views/qingshuang2.vue'
import toushujianyi from '../views/toushujianyi.vue'
import header1 from '../components/header1.vue'
import tab1 from '../components/tab1.vue'
import btn from '../components/btn.vue'
import jianyilan from '../components/jianyilan.vue'
import input from '../components/input.vue'
import fankui from '../components/fankui.vue'
import wode1 from '../views/wode1.vue'
import jiequ from '../views/jiequ.vue'
import wode_yonghuxingxi from '../components/wode_yonghuxingxi.vue'
import wode from '../components/wode.vue'
import content1 from '../components/content1.vue'
import wode_footer from '../components/wode_footer.vue'
import shiping from '../components/shiping.vue'
import jianjiguocheng from '../components/jianjiguocheng.vue'
import jiequ_footer from '../components/jiequ_footer.vue'
import qingshuang_header from '../components/qingshuang_header.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jiequ_footer',
    name: 'jiequ_footer',
    component: jiequ_footer
  },
  {
    path: '/jianjiguocheng',
    name: 'jianjiguocheng',
    component: jianjiguocheng
  },
  {
    path: '/shiping',
    name: 'shiping',
    component: shiping
  },
  {
    path: '/wode_footer',
    name: 'wode_footer',
    component: wode_footer
  },
  {
    path: '/jiequ',
    name: 'jiequ',
    component: jiequ
  },
  {
    path: '/wode_yonghuxingxi',
    name: 'wode_yonghuxingxi',
    component: wode_yonghuxingxi
  },
  {
    path: '/content1',
    name: 'content1',
    component: content1
  },
  {
    path: '/wode1',
    name: 'wode1',
    component: wode1
  },
  {
    path: '/wode',
    name: 'wode',
    component: wode
  },
  {
    path: '/qingshuang',
    name: 'qingshuang',
    component: qingshuang
  },
  {
    path: '/qingshuang2',
    name: 'qingshuang2',
    component: qingshuang2
  },
  {
    path: '/qingshuang_header',
    name: 'qingshuang_header',
    component: qingshuang_header
  },
  {
    path: '/fankui',
    name: 'fankui',
    component: fankui
  },
  {
    path: '/header1',
    name: 'header1',
    component: header1
  },
  {
    path: '/toushujianyi',
    name: 'toushujianyi',
    component: toushujianyi
  },
  {
    path: '/input',
    name: 'input',
    component: input
  },
  {
    path: '/jianyilan',
    name: 'jianyilan',
    component: jianyilan
  },
  {
    path: '/btn',
    name: 'btn',
    component: btn
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: tab1
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
