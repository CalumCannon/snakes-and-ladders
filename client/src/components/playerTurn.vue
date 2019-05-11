<template lang="html">
  <div>
    <h3 v-if="playerTurn === playerOne">{{playerOne}}'s turn</h3>
    <h3 v-if="playerTurn === playerTwo">{{playerTwo}}'s turn</h3>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'player-turn',
  
  props: ['playerOne', 'playerTwo'],
  
  data(){
    return {
      playerTurn: this.playerOne
    }
  },
  
  methods: {
    changePlayer(){
      if (this.playerTurn === this.playerOne){
        playerTurn = playerTwo
      }
      else { this.playerTurn = this.playerOne }
    }
  },
  
  mounted(){
    eventBus.$on('change-player', changePlayer());
  }
  
  
}
</script>

<style lang="css" scoped>
</style>
