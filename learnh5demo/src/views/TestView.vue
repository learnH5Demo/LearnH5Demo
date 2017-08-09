<template>
  <div class="header-bar">
<div class="leftBtn" @click="handleClose">
  {{leftBtn}}
</div>
<div class="header-title">
  {{headerTitle}}
</div>
<div class="rightBtn" @click="handleCloseR">
  {{rightBtn}}
</div>
</div>
</template>

<script>
export default {
  props: ['leftBtn', 'headerTitle', 'rightBtn'],
  data () {
    return {

    }
  },
  methods: {
    handleClose: function () {
      // this.$indicator.open('加载中...')
      console.log('点击了消息')
    },
    handleCloseR: function () {
      console.log('点击了更多')
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
