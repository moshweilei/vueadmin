import { asyncRoutes } from '@/router'
// 将菜单信息转成对应的路由信息 动态添加
export default function createRoutes(data) {
  console.log(data,"11")
    const result = []
    const children = []
    result.push({
        path: '/Index',
        component: () => import('../pages/index/index.vue'),
        children,
    })
    data.forEach(item => {
      console.log(item,"?1?")
        generateRoutes(children, item)
    })
    console.log(result,children,"result")
    // 最后添加404页面 否则会在登陆成功后跳到404页面
    result.push(
      { path: '*', redirect: '/404' },
  )
    return result
}
// 递归遍历数组
function generateRoutes(children, item) {
    if (item.name) {
      console.log(item.name,'单个')
      if (asyncRoutes[item.name]) children.push(asyncRoutes[item.name])
    } else if (item.children) {
      console.log(item.children,"多个")
        item.children.forEach(e => {
            generateRoutes(children, e)
        })
    }
}