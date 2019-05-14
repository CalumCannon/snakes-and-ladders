<template lang="html">
  <div class="">
    <canvas id="myCanvas" width="600" height="600"></canvas>
    <img id="boardOverlay" src="@/assets/snakesladders.png" alt="">
    <div class="table-container">
    <table id="bg-table">
  <tr>
    <th class="even">36</th>
    <th>35</th>
    <th class="even">34</th>
    <th>33</th>
    <th class="even">32</th>
    <th>31</th>
  </tr>
  <tr>
    <th>25</th>
    <th class="even">26</th>
    <th>27</th>
    <th class="even">28</th>
    <th>29</th>
    <th class="even">30</th>
  </tr>
  <tr>
    <th class="even">24</th>
    <th>23</th>
    <th class="even">22</th>
    <th>21</th>
    <th class="even">20</th>
    <th>19</th>
  </tr>
  <tr>
    <th>13</th>
    <th class="even">14</th>
    <th>15</th>
    <th class="even">16</th>
    <th>17</th>
    <th class="even">18</th>
  </tr>
  <tr>
    <th class="even">12</th>
    <th>11</th>
    <th class="even">10</th>
    <th>9</th>
    <th class="even">8</th>
    <th>7</th>
  </tr>
  <tr>
    <th>1</th>
    <th class="even">2</th>
    <th>3</th>
    <th class="even">4</th>
    <th>5</th>
    <th class="even">6</th>
  </tr>
</table>
    </div>
  </div>
</template>

<script>
import createRenderer from "../services/canvasRenderer.js";
import { eventBus } from '@/main.js';
import Player from '@/services/player.js';
import SnakesLadders from '@/services/snakesladders.js';

export default {
  name: 'board',
  props: ['selectedPlayers'],
  data(){
    return{
      currentPlayerIndex: -1,
      currentPlayer : "",
      players : [],
      snakesladders : new SnakesLadders(),
      visibleModal : false
    }
  },
  mounted(){
    //Create Player Objects
    this.initPlayerObjects();

    //Delayed render : so that players display before rolling dice
    setTimeout(() => {
      this.renderPlayers();
    }, 250);

    //Dice rolled event
    eventBus.$on('dice-rolled', (randomNum) => {

     this.diceRolled(randomNum);
    })

  },
  methods:{
    renderCanvas(){

      //Canvas init
      const canvas = document.querySelector('#myCanvas');
      const ctx =  canvas.getContext("2d");
      const renderer = createRenderer(canvas,ctx);

      //Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if(!this.currentPlayer.reachedTarget()){
        //Delayed player move
        setTimeout(() => {
          this.currentPlayer.moveForward();
          this.renderCanvas();
        }, 1000);

      }else{

        console.log("PLAYER REACHED TARGET ", this.currentPlayer);

        let newpos = this.snakesladders.checkSquare(this.currentPlayer.position);

        //Player landed on snake
        if(newpos < this.currentPlayer.position){
          eventBus.$emit('player-on-snake', this.currentPlayer);
        }
        if(newpos > this.currentPlayer.position){
          eventBus.$emit('player-on-ladder', this.currentPlayer);
        }
        if(this.currentPlayer.position === 36){
           showModal();
         }

        this.currentPlayer.targetPosition = newpos;
        this.currentPlayer.position = newpos;

        //Change player target

        //ERROR: this is not triggering when dice roll == 1
        eventBus.$emit('player-turn-completed', this.currentPlayer);
        //Check this
        let nextPlayer = this.returnNextPlayer();
        if(nextPlayer == null){
          console.log("ERROR NEXT PLAYER NULL");
        }else{
        eventBus.$emit('next-player',nextPlayer);
        }

      }

      this.renderPlayers();

    },

    initPlayerObjects(){
      this.selectedPlayers.forEach((player) => {
        this.players.push(new Player(player.name, player.avatar,player.wins, player.losses));
      })
    },

    diceRolled(randomNum){
      //Do end game checks here
      this.currentPlayer = this.returnCurrentPlayer();

      this.currentPlayer.setTargetPositon(randomNum);

      this.renderCanvas();
    },

    returnCurrentPlayer(){
      this.currentPlayerIndex++;

      if(this.currentPlayerIndex >= this.players.length){
        this.currentPlayerIndex = 0;
      }
      let current = this.players[this.currentPlayerIndex];

      return current;
    },

    returnNextPlayer(){
      let nextIndex = this.currentPlayerIndex + 1;
      if(nextIndex >= this.players.length){
        nextIndex = 0;
      }
      return this.players[nextIndex];
    },

    renderPlayers(){
      const canvas = document.querySelector('#myCanvas');
      const ctx =  canvas.getContext("2d");
      const renderer = createRenderer(canvas,ctx);
      var i=0;
      this.players.forEach((player) => {
        renderer.renderPlayer(player, i*10);
        i++;
      })

    }

  }
}
</script>

<style lang="css" scoped>
#bg-table{
  margin: 0 auto;
  background-color: green;
}

#boardOverlay{
  padding: 0;
  margin: auto;
  margin-top: 22px;
  display: block;
  position: absolute;
  top: 0px;
  bottom: 70px;
  left: 0;
  right: 0;
  border: 2px solid pink;
  width: 600px;
}

.table-container{

}

#myCanvas{
  padding: 0;
  margin: auto;
  margin-top: 22px;
  display: block;
  position: absolute;
  top: 0px;
  bottom: 70px;
  left: 0;
  right: 0;
  border: 2px solid pink;
}

table{
  border: 10px solid #945a05;
}

th{
  width: 100px;
  height: 100px;
  color: white;
  font-size: 2em;
  font-weight: bold;
  padding: 0px;

}


.even{
  background-color: white;
  color: green;
/**  border: 5px solid #cacaca; **/
}

</style>
