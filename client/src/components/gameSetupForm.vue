<template lang="html">
  <div>
    
    <!-- <form action="index.html" method="post">
    
    <label for="player-select">Select Player One</label>
    <select v-model="playerOne">
    <option selected disabled>Player One</option>
    <option v-for="(player, index) in players" :value="player">
    {{player.name}}
  </option>
  
</select>
<label for="playerTwo-select">Select Player Two</label>
<select v-model="playerTwo">
<option selected disabled>Player Two</option>
<option v-for="(player, index) in players" :value="player">
{{player.name}}
</option>
</select>

</form> -->

  <label for="">Choose Players</label>
    <multiselect
    v-model="chosenPlayers"
    :options="databasePlayers"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    label="name"
    :hide-selected="true"
    track-by="_id"
    :max="6">
    <template slot="option" slot-scope="props">
      <img :src="props.option.avatar">{{props.option.name}}</template>
    </multiselect>

<router-link :to="{ name: 'game-view', params: {chosenPlayers} }">START GAME</router-link>

</div>
</template>

// <script>
import { eventBus } from '@/main.js';
import GameService from '@/services/gameService.js';
import GameView from '@/views/gameview.vue';
import Multiselect from '@/main.js';

export default {
  name: 'game-setup-form',
  
  data(){
    return{
      databasePlayers: [],
      chosenPlayers: []
    }
  },
  
  components: {
    'game-view': GameView
  },
  
  methods: {
    fetchPlayers(){
      GameService.getPlayers()
      .then((players) => this.databasePlayers = players)
    },
    
    remove(option){
      const index = this.chosenPlayers.indexOf(option)
      this.chosenPlayers.splice(index, 1)
    }
  },
  
  mounted(){
    this.fetchPlayers();
    
    eventBus.$on('add-player', this.fetchPlayers);
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="css" scoped>
</style>
