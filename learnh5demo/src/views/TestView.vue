<template>
  <mt-header>
     <router-link to="/search" slot="left">
       <mt-button>{{searchTitle}}</mt-button>
     </router-link>
     <mt-button to="/ask" slot="right">提问</mt-button>
   </mt-header>
</template>

<script>
export default {
  data () {
    return {
      searchLeft: 'searchLeft',
      searchTitle: '搜索'
    }
  },
  methods: {
    handleClose: function () {
      this.$indicator.open('加载中...')
    }
  }
}
</script>

<style scoped>

</style>
