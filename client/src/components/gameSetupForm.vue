<template lang="html">
  <div>
    
    <form action="index.html" method="post">
      
      <label for="player-select">Select Player One</label>
      <select v-model="playerOne">
        <option selected disabled>Player One</option>
        <option v-for="(player, index) in players">
          {{player.name}}
        </option>
        
      </select>
      <label for="playerTwo-select">Select Player Two</label>
      <select v-model="playerTwo">
        <option selected disabled>Player Two</option>
        <option v-for="(player, index) in players">
          {{player.name}}
        </option>
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
    'game-view': GameView
  },
  
  methods: {
    fetchPlayers(){
      GameService.getPlayers()
      .then((players) => this.players = players)
    }
  },
  
  mounted(){
    this.fetchPlayers();
    
    eventBus.$on('add-player', this.fetchPlayers())
  }
}
</script>

<style lang="css" scoped>
</style>
