<template lang="html">
  <div>
    
    <form action="index.html" method="post">
      <label for="player-select">Select Player One</label>
      <select class="" name="">
        <option v-for="(player, index) in players" value="player.name">{{player.name}}  {{player.avatar}}</option>
      </select>
      <label for="playerTwo-select">Select Player Two</label>
      <select class="" name="">
        <option v-for="(player, index) in players" value="player.name">{{player.name}}  {{player.avatar}}</option>
      </select>
    </form>
    
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import GameService from '@/services/gameService.js';

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
    GameService
  },
  
  methods: {
    fetchPlayers(){
      gameService.getPlayers()
      .then((players) => this.players)
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
