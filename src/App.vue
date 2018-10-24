<template>
  <div id="app">    
    <div>     
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
  margin: 0px;
  padding: 0px;
}
</style>
