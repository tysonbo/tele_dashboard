<template>
  <div id="app">    
    <div class="container">     
    <main>
      <router-view/>
    </main>
    </div>
  </div>    
</template>

<script>
import HomePage from './home/HomePage.vue'

export default {
  name: 'app',
  components: {
    HomePage
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
