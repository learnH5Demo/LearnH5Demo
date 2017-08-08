<template>
  <div id="app">
  <!-- <mt-header>固定在顶部</mt-header> -->
 <router-link to="/home">主页</router-link>
 <router-link to="/news">新闻</router-link>
 <mt-button @click.native="handleClick">按钮</mt-button>
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
    handleClick: function () {
      this.$indicator.open('加载中...')
    }
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
}
</style>
