import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
          {
            name: 'Main', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'el-icon-user-solid', // icon类型
            text: '单独的路由', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义,
            one:1
        },
          {
            text: '导航一',
            type: 'el-icon-user-solid',
            one:2,
            children: [
              {
                text: '选项1',
                name: "One"
              },
              {
                text: '选项2',
                name: "Two"
              },
            ]
          }
        ]
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store