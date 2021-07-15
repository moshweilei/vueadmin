<template>
  <div class="big">
    <el-container>
      <!-- 左边导航 -->
      <el-aside style="width:auto">
        <div class="left">
          <el-menu :default-active="menuAcctive"
                   style="height:100%"
                   background-color="#343667"
                   text-color="white"
                   :router="true"
                   class="el-menu-vertical-demo demo"
                   @open="handleOpen"
                   @close="handleClose"
                   :collapse="isCollapse">
            <div class="introduce">
              {{isCollapse==false?'预付费云平台':'mosh'}}
            </div>
            <left-menu :menuItems="menuItems">
            </left-menu>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <el-menu class="el-menu-demo"
                   mode="horizontal"
                   background-color="white"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <i class="el-icon-s-fold"
               style="font-size:25px;border:none"
               @click="playisCollapse"></i>
          </el-menu>
          <ToolBar></ToolBar>
        </el-header>
        <!-- 中间内容 -->
        <el-main>
          <keep-alive :include="cachedViews">
            <router-view></router-view>
          </keep-alive>
        </el-main>
        <!-- 底部内容 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import store from '../../store/index.js'
import ToolBar from '../../components/ToolBar'
import LeftMenu from '../../components/leftMenu'
export default {
  watch: {
    $route () {
      this.menuAcctive = this.$route.name
      // 路由组件名称（自定义）
      const componentName = this.$route.matched[1].components.default.name;
      const detail = this.$route.path;
      // 当前路由匹配到name
      const name = this.$route.meta[0];
      console.log(this.$store.state.toolBarData, this.$store.state.cacheView, "???")
      console.log(componentName, this.$route.matched[1].components.default.name, "啥????")
      if (name != "首页") {
        this.$store.dispatch("commitToolBar", { name, detail, componentName });
      }
    }
  },
  activated () {
    console.log("asdasdasdas")
  },
  data () {
    return {
      isCollapse: false,
      activeIndex2: '1',
      menuItems: store.state.menuItems,
      menuAcctive: "",
      cachedViews: store.state.cacheView
    }
  },
  components: {
    ToolBar,
    LeftMenu
  },
  created () {
    //拿到路由的值 给左侧路由添加默认选中
    this.menuAcctive = this.$route.name
    console.log(this.cachedViews, "0000")
  },
  computed: {
    menuItem: function () {

    }
  },
  methods: {
    playisCollapse () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped lang="less">
.big {
  display: flex;
  height: 100vh;
}
.top-link {
  width: 100%;
}
.introduce {
  text-align: center;
  line-height: 40px;
  height: 5%;
  background-color: #343667;

  color: white;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.left {
  height: 100%;
}
</style>
