<template>
  <div class="hello">
    <p ref="hello" >
      <span v-for="i in tags" >
        {{i}}<br>
      </span>
    </p>
    <button @click="remove()">点击</button>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tags: [1, 2, 3, 4]
    }
  },
  created () {
  },
  mounted () {
    console.log(this.$refs.hello.clientHeight)
    if (this.$refs.hello.clientHeight > 18) {
      this.remove()
    }
  },
  updated () {
    console.log(this.$refs.hello.clientHeight)
    if (this.$refs.hello.clientHeight > 18) {
      this.remove()
    }
  },
  methods: {
    remove () {
      this.tags.splice(this.tags.length - 1, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
