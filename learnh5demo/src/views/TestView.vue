<template>
  <div class="header-bar">
  <!-- <mt-header class="header" title="固定在顶部">
   <router-link to="/" slot="left">
   <mt-button icon="back"></mt-button>
 </router-link>
  <mt-button icon="more" slot="right"></mt-button>
 </mt-header> -->

<!-- <div class="leftBtn"> -->
  <!-- <img class="leftBtnImg" src="../assets/logo.png" /> -->
  <!-- 返回
</div> -->
<p class="leftBtn" @click="handleClose"><span class="leftBtnColor">返回</span></p>

</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleClose: function () {
      // this.$indicator.open('加载中...')
      console.log('点击了leftBtn')
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
  background-color: rgb(233, 233, 233);
}
/*.default1 {
  width: 100%;
}
.primary1 {
  top: 10px;
  width: 50%;
}
.danger1 {
  top: 20px;
}*/
.leftBtn {
  /*background-color: yellow;*/
  width: 40px;
  height: 30px;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
}
.leftBtnColor {
  color: #1fb288;
}
</style>
