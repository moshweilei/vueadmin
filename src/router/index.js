import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('../pages/login/Login.vue')
const Index = () => import('../pages/index/index.vue')
const Home=()=> import('../pages/home/home.vue')
const Main=()=>import('../pages/main/main.vue')
const One= () => import('../pages/one/one.vue')
const Two =() => import('../pages/two/two.vue')
// 不需要权限的页面
const routes = [
  { path: '/login', component: Login},
  { path: '/Index', component: Index,
    children: [
       { path: '/Index/Home', component: Home,meta:['首页']}
    ] 
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('../pages/404/index.vue'),
  },
  { path: '/', redirect: '/Index/Home' },
  ]

  export  const asyncRoutes = {
    'Index': {
      path: 'Index',
      name: 'Index',
      component: Index,
    
  },
  'Main': {
    path: 'Main',
    name: 'Main',
    component: Main,
    meta:['单独的路由']
  },
    'One': {
        path: 'One',
        name: 'One',
        component: One,
        meta:['form表单']
    },
    'Two': {
        path: 'Two',
        name: 'Two',
        component: Two,
        meta:['选项2']
    },

}
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => err)
}
Vue.use(Router)
const router = new Router({
  routes
})
export default router