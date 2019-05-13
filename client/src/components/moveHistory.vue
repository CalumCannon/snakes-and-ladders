<template lang="html">
  <div class="">
    <p v-for="move in moveHistory">{{move}}</p>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'move-history',
  
  data(){
    return{
      currentPlayer: "",
      diceRoll: "",
      move: "",
      moveHistory: [],
      ladder: false,
      snake: false
    }
  },
  
  methods:{
    noteMove: function(){
      this.move = `${this.currentPlayer} rolled a ${diceRoll}`
      if (this.ladder){
        this.move = this.move + "and climbed a ladder!"
        this.ladder = false
      }
      else if (this.snake){
        this.move = this.move + "and fell down a snake"
        this.snake = false
      }
      this.moveHistory << this.move
    }
  },
  
  
  // FIX THE NAMES OF THE EVENT BUSES AND DATA PASSED DOWN!
  mounted(){
    eventBus.$on('current-player', (playerTurn) => this.currentPlayer = playerTurn.name)
        
    eventBus.$on('dice-rolled', (randomNum) => this.diceRoll = randomNum);
    
    // eventBus.$on(MOVE NAME HERE!!!!!!, this.ladder = true);
    //
    // eventBus.$on(MOVE NAME HERE!!!!!!, this.snake = true);
  }
}
</script>

<style lang="css" scoped>
</style>
