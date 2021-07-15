import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
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
                text: 'from表单',
                name: "One",
                one:1
              },
              {
                text: '选项2',
                name: "Two",
                one:1
              },
            
            ]
          },
        ],

        toolBarData:[],// 保存标签button的数组
        cacheView:[] // 保存需要缓存的数组
    },
    getters: {
      getToolData(state){
        return state.toolBarData;
      },
      getCacheView(state){
        return state.cacheView;
      }
    },

    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },

        setToolData(state, data) { // 添加标签按钮，如果当前路由已经打开，则不再重复添加
          const inToolbar = state.toolBarData.find(item => item.detail === data.detail)
          !inToolbar && state.toolBarData.push({
            ...data
          });
        },
        setCacheView(state,data){ // 与setToolData类似
          if(state.cacheView.includes(data.componentName)) 
            return;
          state.cacheView.push(data.componentName);
        },
        clearToolItem(state,detail){
          console.log(detail,"是啥",state.toolBarData)
          const index = state.toolBarData.findIndex(item => item.detail === detail);

          const isActive = router.app.$route.path == state.toolBarData[index]["detail"];
          const len = state.toolBarData.length - 1;
          state.toolBarData.splice(index,1);
          (index == len || isActive) && router.push({path:state.toolBarData[state.toolBarData.length - 1]["detail"]})
         
        },
        clearCacheView(state,viewName){
          const index = state.cacheView.findIndex(item => item == viewName);
          state.cacheView.splice(index,1);
        }

    },
    actions: {
      commitToolBar({commit},data) {
        commit("setToolData",data);
        commit("setCacheView",data);
      },
      clearToolBar({commit},data){
        commit("clearToolItem",data.detail);
      },
      clearCache({commit},data){
        commit("clearCacheView",data);
      }
    }

})

export default store