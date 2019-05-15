<template lang="html">
  <div class="history">
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
      lastMove: "",
      diceRoll: 1,
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
      this.lastMove = `${player.nickname} rolled a ${this.diceRoll}`
      if (this.snake){
        this.lastMove = `${this.lastMove} and fell down a snake`
        this.snake = false
      }
      if (this.ladder){
        this.lastMove = `${this.lastMove} and climbed a ladder!`
        this.ladder = false
      }
      this.moveHistory.push(this.lastMove)
      this.diceRoll = 1
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
  
  
  mounted(){
    eventBus.$on('player-turn-completed', (player) => {
      this.noteMove(player)
    });
    
    eventBus.$on('dice-rolled', (randomNum) => {
      this.diceRoll = randomNum}
    );
    
    eventBus.$on('player-on-ladder', (player) => {
      this.ladder = true
    });
    
    eventBus.$on('player-on-snake', (player) => {
      this.snake = true
    });
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
