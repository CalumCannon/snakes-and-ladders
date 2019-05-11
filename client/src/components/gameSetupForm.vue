<template lang="html">
  <div>
    
    <form action="index.html" method="post">
      <label for="player-select">Select Player One</label>
      <select class="" name="">
        <option v-for="(player, index) in players" value="player.name" v-model="playerOne">{{player.name}}  {{player.avatar}}</option>
      </select>
      <label for="playerTwo-select">Select Player Two</label>
      <select class="" name="">
        <option v-for="(player, index) in players" value="player.name" v-model="playerTwo">{{player.name}}  {{player.avatar}}</option>
      </select>
    </form>
    
    <router-link :to="{ name: 'game-view', params: {playerOne, playerTwo} }">START GAME</router-link>
    
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import GameService from '@/services/gameService.js';
import GameView from '@/views/gameview.vue';

export default {
  name: 'game-setup-form',
  
  data(){
    return{
      players: [],
      playerOne: "",
      playerTwo: ""
    }
  },
  
  components: {
    'game-service': GameService,
    'game-view': GameView
  },
  
  methods: {
    fetchPlayers(){
      gameService.getPlayers()
      .then((players) => this.players = players)
    }
  },
  
  mounted(){
    this.fetchPlayers();
    
    eventBus.$on('add-player', this.fetchPlayers());
  }
}
</script>

<style lang="css" scoped>
</style>
