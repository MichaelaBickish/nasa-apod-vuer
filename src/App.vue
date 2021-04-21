<template>
  <h1>Nasa Astronomy Picture of the Day <img alt="Vue logo" class="img-logo" src="./assets/logo.png">ue-er</h1>
  <HomePage />
</template>

<script>
  import HomePage from './pages/HomePage.vue'

  export default {
    name: 'App',
    components: {
      HomePage
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .img-logo {
    height: .80em;
  }
</style>