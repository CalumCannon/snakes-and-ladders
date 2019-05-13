<template lang="html">
  <div class="history">
    <p v-for="move in moveHistory">{{move}}</p>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'move-history',

  data(){
    return{
      diceRoll: null,
      move: "",
      moveHistory: [],
      ladder: false,
      snake: false
    }
  },

  methods:{
    noteMove: function(player){
      this.move = `${player} rolled a ${this.diceRoll}`
      if (this.ladder){
        this.move = this.move + "and climbed a ladder!"
        this.ladder = false
      }
      else if (this.snake){
        this.move = this.move + "and fell down a snake"
        this.snake = false
      }
      this.moveHistory.push(this.move)
    }
  },

  computed: {
    scrollBox: function(){
      const box = document.querySelector(".history")
      box.scrollTop = 999
    }
  },


  // FIX THE NAMES OF THE EVENT BUSES AND DATA PASSED DOWN!
  mounted(){
    eventBus.$on('player-turn-completed', (player) => {
      this.noteMove(player.nickname)
      console.log(player.nickname);
    })

    eventBus.$on('dice-rolled', (randomNum) => this.diceRoll = randomNum);

    // eventBus.$on(MOVE NAME HERE!!!!!!, this.ladder = true);
    //
    // eventBus.$on(MOVE NAME HERE!!!!!!, this.snake = true);
  }
}
</script>

<style lang="css" scoped>
.move{
  position: absolute;
  left: 0;
  top: 320px;
  color: #3116B4;
  font-size: 20px;
}
</style>
