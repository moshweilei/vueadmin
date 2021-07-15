<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
[v-cloak] {
  display: none !important;
}
</style>
