<template>
  <div class="toolbar">
    <el-tag @click="goHome">首页</el-tag>
    <el-tag class="toolItem"
            type="info"
            :disable-transitions="false"
            :closable="!!index"
            effect="plain"
            v-for="(item,index) in getToolData"
            :key="index"
            :class="{active:$route.path == item.detail}"
            @click="redirect(item)"
            @close="closeToolItem(item)">
      <span class="dot"
            v-if="$route.path == item.detail"></span>
      {{item.name}}
    </el-tag>
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    closeToolItem (item, index) {
      this.$store.dispatch("clearToolBar", item);
      this.$store.dispatch("clearCache", item.componentName);
    },
    redirect (item) {
      this.$router.push({ path: item.detail });
    },
    goHome () {
      this.$router.push('/Index/Home')
    }
  },
  created () {
    // 路由组件名称（自定义）
    // const componentName = this.$route.matched[0]["components"]["default"]["name"];
    const componentName = this.$route.matched[1].components.default.name
    const detail = this.$route.path;
    // 当前路由匹配到name
    const name = this.$route.meta[0];
    console.log(name, detail, componentName, "条件")
    // 如果这个名字不等于首页那么每次刷新都自动添加当前路由的标签
    if (name != "首页") {
      this.$store.dispatch("commitToolBar", { name, detail, componentName });
    }
    console.log(this.getToolData, "1312ajdasjd")
  },
  computed: {
    ...mapGetters(["getToolData", "getCacheView"])
  }
};
</script>
<style scoped lang="less">
.active {
  background-color: red;
}
</style>