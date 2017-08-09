<template>
  <div class="header-bar">
<div class="leftBtn" @click="handleClose">
  {{leftBtn}}
</div>
<div class="header-title" @click="clickTitle">
  {{headerTitle}}
</div>
<div class="rightBtn" @click="handleCloseR">
  {{rightBtn}}
</div>
</div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  props: ['leftBtn', 'headerTitle', 'rightBtn', 'titleFunctions'],
  data () {
    return {
      flag: 0
    }
  },
  methods: {
    // vue1.0中 vm.$dispatch 和 vm.$broadcast 被弃用，改用$emit,$on
    // 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
    // vm.$emit( event, […args] )
    // 触发当前实例上的事件。附加参数都会传给监听器回调。
    handleClose: function () {
      Indicator.open('加载中...')
      document.getElementsByClassName('mint-indicator-mask')[0].addEventListener('click', function () {
        Indicator.close()
      })
      // console.log('点击了消息')
      this.$emit('leftBtnClick')
    },
    handleCloseR: function () {
      // console.log('点击了更多')
      this.$emit('rightBtnClick')
    },
    clickTitle: function () {
      this.titleFunctions[this.flag]()
      this.flag = this.flag === 0 ? 1 : 0
    }
  }
}
</script>

<style scoped>
.header-bar {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 64px;
  background-color: rgb(68, 143, 255);
}
.leftBtn {
  width: auto;
  height: 30px;
  margin-left: 15px;
  margin-top: 25px;
  font-size: 20px;
  text-align: left;
  color: white;
  float: left;
  display: inline-block;
}
.header-title {
  margin-top: 20px;
  margin-left: 25%;
  margin-right: 25%;
  display: inline-block;
  font-size: 24px;
  color: white;
  font-weight: bold;
}
.rightBtn {
  width: auto;
  height: 30px;
  margin-right: 15px;
  margin-top: 25px;
  font-size: 20px;
  text-align: right;
  float: right;
  color: white;
  display: inline-block;
}
</style>
