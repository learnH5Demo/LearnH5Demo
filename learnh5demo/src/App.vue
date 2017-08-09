<template>
  <div id="app">
  <!-- <mt-header>固定在顶部</mt-header> -->

 <div>
   <!-- :functions="fatherFuncs" -->
   <header-bar leftBtn="返回" rightBtn="消息" headerTitle="主页" @leftBtnClick="leftClick()"  @rightBtnClick="rightClick()"></header-bar>
  <!-- <router-view></router-view> -->
</div>
 <div class="box"></div>
 </div>
</template>

<script>
import TestView from './views/TestView.vue'
export default {
  name: 'app',
  data () {
    return {
      // 下面这句代码是相当于把block，把方法传给子组件
      fatherFuncs: [this.leftBtnClick, this.rightBtnClick]
    }
  },
  methods: {
    // 调用子组件的方法
    leftClick: function () {
      console.log('我在父类执行了左侧按钮点击')
      alert('我在父类执行了左侧按钮点击')
    },
    rightClick: function () {
      console.log('我在父类执行了右侧按钮点击')
      alert('我在父类执行了右侧按钮点击')
    }
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
