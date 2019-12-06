<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{message}}</h3>
    <van-button type="default" @click="toIndexPage">去首页</van-button>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: '守夜'
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    toIndexPage(){
      console.info(process.env.VUE_APP_BASE_URL);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
