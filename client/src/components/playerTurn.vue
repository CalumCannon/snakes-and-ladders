<template lang="html">
  <div>
    <h3>{{this.playerTurn.name}}'s turn</h3>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'player-turn',
  
  props: ['chosenPlayers'],
  
  data(){
    return {
      currentIndex: 0,
      startGame: true,
      playerTurn: this.chosenPlayers[0]
    }
  },
  
  methods: {
    changePlayer(){
      if (this.currentIndex = this.chosenPlayers.length){
        this.currentIndex = 0
      }
      else {this.currentIndex += 1}
      this.playerTurn = this.chosenPlayers[this.currentIndex]
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
