import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/cartoonview/cartoonindex.vue'
// import Add from '../components/02-cartoon/add.vue'
// import update from '../components/02-cartoon/update.vue'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    component: () => import("../views/cartoonview/cartoonindex.vue"),
    children: [
      {
        path: '/',
        name: "",
        component: () => import( '../components/02-cartoon/cartoonindex.vue'),
      },
      {
        path: '/add',
        name: "Add",
       
        component: () => import( '../components/02-cartoon/add.vue'),
      },
      
      {
        path: '/update',
        name: "update",
        // props :true,
        component: () => import( '../components/02-cartoon/update.vue'),
      },
      {
        path: '/slot',
        name: "slot",
        // props :true,
        component: () => import( '../components/02-cartoon/slot.vue'),
      },
      {
        path: '/homeindex',
        name: "home",
        // props :true,
        component: () => import( '../components/03-cartoonaxios/cartoonindex.vue'),
      },
      {
        path: '/homeadd',
        name: "home",
        // props :true,
        component: () => import( '../components/03-cartoonaxios/add.vue'),
      },
      {
        path: '/homeupdate',
        name: "home",
        // props :true,
        component: () => import( '../components/03-cartoonaxios/update.vue'),
      },
    ],
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
  routes
})

export default router
