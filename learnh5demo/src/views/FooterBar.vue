<template>
  <div class="item-bar">
    <div class="itemBtn" v-for="value in itemArr">
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemArray'],
  data () {
    return {
      itemArr: []
    }
  },
  methods: {

  },
  mounted: function () {
    console.log('ddssds')
    this.itemArr = this.itemArrays
  }
}
</script>

<style scoped>
.item-bar {
  position: absolute;
  /*z-index: 100;*/
  display:flex;
  background-color: rgb(235, 235, 235);
  width: 100%;
  height: 60px;
  bottom: 0px;
  border:0px solid black;
}
.itemBtn {
  background-color: red;
  flex: 1;
}
</style>
