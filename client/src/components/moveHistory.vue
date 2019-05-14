<template lang="html">
  <div class="history">
    <!-- <p v-for="move in moveHistory"
    :class="checkClass()">
    {{move}}</p> -->
    <ul>
      <li v-for="(move, index) in moveHistory" :class="playerColours[index]">{{move}}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'move-history',
  
  data(){
    return{
      diceRoll: null,
      moveHistory: [],
      ladder: false,
      snake: false,
      players: [],
      colours: ['n2d72e2', 'e2291f', 'n1dd61d', 'f2920c', 'b613db', 'n2cd6c5'],
      playerColours: []
    }
  },
  
  methods:{
    noteMove: function(player){
      this.checkArray(player)
      const lastMove = `${player.nickname} rolled a ${this.diceRoll}`
      if (this.ladder){
        lastMove = lastMove + "and climbed a ladder!"
        this.ladder = false
      }
      else if (this.snake){
        lastMove = lastMove + "and fell down a snake"
        this.snake = false
      }
      this.moveHistory.push(lastMove)
    },
    
    checkArray: function(player){
      if (!this.players.includes(player)){
        const colour = this.colours[Math.floor(Math.random()*this.colours.length)]
        const index = this.colours.indexOf(colour)
        player.colour = colour
        this.players.push(player)
        this.colours.splice(index, 1)
      }
      this.playerColours.push(player.colour)
    }
  },
  
  
  // FIX THE NAMES OF THE EVENT BUSES AND DATA PASSED DOWN!
  mounted(){
    eventBus.$on('player-turn-completed', (player) => {
      this.noteMove(player)
      console.log(player.nickname);
    });
    
    
    // const box = document.querySelector(".history")
    // box.scrollBy(0,box.scrollHeight);
    //
    
    
    
    
    
    eventBus.$on('dice-rolled', (randomNum) => this.diceRoll = randomNum);
    
    // eventBus.$on(MOVE NAME HERE!!!!!!, this.ladder = true);
    //
    // eventBus.$on(MOVE NAME HERE!!!!!!, this.snake = true);
  }
}
</script>

<style lang="css" scoped>

.history {
  background-color: #fffbd3;
  text-align: left;
  max-height: 250px;
  width: 200px;
  border: 1px solid silver;
  overflow: auto;
  position: absolute;
  top: 325px;
  font-size: 20px;
  right: 0;
  margin-right: 10px;
  padding-left: 5px;
}
ul {
  list-style: none;
  padding-left: 0;
}
li {
  padding-bottom: 7px;
}
.n2d72e2 {
  color: #2d72e2;
}
.e2291f {
  color: #e2291f;
}
.n1dd61d {
  color: #1dd61d;
}
.f2920c {
  color: #f2920c;
}
.b613db {
  color: #b613db;
}
.n2cd6c5 {
  color: #2cd6c5;
}
p { color: green; }
p:nth-child(odd) { color: red; }
p:nth-child(even) { color: blue; }

</style>
