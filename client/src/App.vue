<template>
  <div id="app">
    <welcome/>
    <gameview/>
  </div>
</template>

<script>
import GameView from './views/gameview.vue';
import WelcomeView from './views/welcomeview.vue';

export default {
  name: 'app',
  components: {
   "gameview" :  GameView,
   "welcome" : WelcomeView
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
