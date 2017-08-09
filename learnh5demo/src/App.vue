<template>
  <div id="app">
  <!-- <mt-header>固定在顶部</mt-header> -->

 <div>
   <header-bar leftBtn="返回" rightBtn="高兴就好" headerTitle="headerTitle"></header-bar>
  <!-- <router-view></router-view> -->
</div>
 <div class="box"></div>
 </div>
</template>

<script>
import TestView from './views/TestView.vue'
export default {
  name: 'app',
  methods: {

  },
  components: {
    'header-bar': TestView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*background-color: red;*/
}
</style>
