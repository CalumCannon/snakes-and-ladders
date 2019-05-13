<template lang="html">
  <div class="form">
    
    <h2>Choose Players</h2>
    
    <multiselect
    v-model="chosenPlayers"
    :options="databasePlayers"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    label="name"
    :hide-selected="true"
    track-by="_id"
    :max="6"
    open-direction="below">
    <template slot="option" slot-scope="props">
      <img :src="props.option.avatar">{{props.option.name}}</template>
    </multiselect>
  
  <footer class="link">
    <router-link :to="{ name: 'game-view', params: {chosenPlayers} }">START GAME</router-link>
    </footer>
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
.form {
  display: block;
  margin-top: 1em;
  min-width: 100vw;
  text-align: center;
  min-height: 50vh;
}
.multiselect {
  display: inline-block;
  max-width: 50vw;
  text-align: center;
}
.link {
  position: relative;
  top: 120px;
  border: 3px solid black;
  margin-left: 25vw;
  margin-right: 25vw;
  text-align: center;
  background: grey;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
}
</style>
