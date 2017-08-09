<template>
  <div id="app">
  <!-- <mt-header>固定在顶部</mt-header> -->

 <div>
  <router-view></router-view>
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
    TestView
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
