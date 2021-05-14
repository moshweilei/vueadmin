import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('../pages/login/Login.vue')
const Index = () => import('../pages/index/index.vue')
const Main=()=>import('../pages/main/main.vue')
const One= () => import('../pages/one/one.vue')
const Two =() => import('../pages/two/two.vue')
const routes = [
  { path: '/login', component: Login },
  { path: '/Index', component: Index },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('../pages/404/index.vue'),
},
  { path: '/', redirect: '/Index' },
]
export  const asyncRoutes = {
  'Index': {
    path: 'Index',
    name: 'Index',
    component: Index
},
'Main': {
  path: 'Main',
  name: 'Main',
  component: Main
},
  'One': {
      path: 'One',
      name: 'One',
      component: One
  },
  'Two': {
      path: 'Two',
      name: 'Two',
      component: Two
  },

}

Vue.use(Router)
const router = new Router({
  routes
})
export default router