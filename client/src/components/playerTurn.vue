<template lang="html">
  <div>
    <h3 v-if="this.playerTurn === this.playerOne">{{playerOne}}'s turn</h3>
    <h3 v-if="this.playerTurn === this.playerTwo">{{playerTwo}}'s turn</h3>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'player-turn',
  
  props: ['playerOne', 'playerTwo'],
  
  data(){
    return {
      playerTurn: this.playerOne,
      startGame: true
    }
  },
  
  methods: {
    changePlayer(){
      if (this.playerTurn === this.playerOne){
        this.playerTurn = this.playerTwo
      }
      else { this.playerTurn = this.playerOne }
      eventBus.$emit('current-player', this.playerTurn)
    }
  },
  
  mounted(){
    // eventBus to be sent from board component after move completed?
    eventBus.$on('change-player', () => {
      if (!startGame){
        this.changePlayer()
      }
      this.startGame = false
    })
  }
  
  
}
</script>

<style lang="css" scoped>
</style>
