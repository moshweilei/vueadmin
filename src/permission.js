
import router from './router'
import store from './store'
import createRoutes from '@/utils/createRoutes'
// 是否有菜单数据
let hasMenus = false
router.beforeEach(async (to, from, next) => {
 let token= localStorage.getItem('token')
    if (token) {
        if (to.path === '/login') {
          console.log("1")
            next({ path: '/' })
        } else if (hasMenus) {
          console.log("2")
            next()
        } else {
          console.log("3")
            try {
                // 这里可以用 await 配合请求后台数据来生成路由
                // const data = await axios.get('xxx')
                // const routes = createRoutes(data)
                const routes = createRoutes(store.state.menuItems)
                console.log(routes,"routes")
                // 动态添加路由
                router.addRoutes(routes)
                console.log(router)
                hasMenus = true
                next({ path: to.path || '/' })
            } catch (error) {
                next(`/login?redirect=${to.path}`)
            }
        }
    } else {
    console.log('4')
        hasMenus = false
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})
