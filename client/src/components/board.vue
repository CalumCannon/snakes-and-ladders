<template lang="html">
  <div class="">
    <canvas id="myCanvas" width="600" height="600"></canvas>
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
import Player from '@/services/player.js'
export default {
  name: 'board',
  data(){
    return{
      positionP1 : 1,
      positionP2 : 1,
      playerOneImg : new Image(),
      playerTwoImg : new Image(),
      players : [],
      currentPlayerIndex: 0,
      playerOne : new Player(),
      playerTwo : new Player(),
      currentPlayer : "",
    }
  },
  mounted(){
    this.players[0] = (this.playerOne);
    this.players[1] = (this.playerTwo);

    this.playerOne.currentPosition = 1;
    this.playerTwo.currentPosition = 1;

    //this.playerOnePosition = this.positionP1;

    //Get players avitars here
    this.playerOneImg.src = "https://img.icons8.com/color/48/000000/guest-male.png";
    this.playerOne.img = this.playerOneImg;
    this.playerTwoImg.src = "https://img.icons8.com/color/48/000000/guest-male.png";
    this.playerTwo.img = this.playerTwoImg;

    //this.renderCanvas();

    eventBus.$on('dice-rolled', (randomNum) => {
     this.diceRolled(randomNum);
    })

    //Event for player turn end
    //player-turn-completed

  },
  methods:{
    renderCanvas(){
      const canvas = document.querySelector('#myCanvas');
      const ctx =  canvas.getContext("2d");
      const renderer = createRenderer(canvas,ctx);
      //Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //if(this.currentPlayer){
        if(!this.currentPlayer.reachedTarget()){
          setTimeout(() => {
            this.currentPlayer.moveForward();
            this.renderCanvas();
          }, 1000);
        }else{
          console.log("PLAYER REACHED TARGET ", this.currentPlayer);

          eventBus.$emit('player-turn-completed', this.currentPlayer);
        }
      //}

      renderer.renderPlayer(this.playerOne);
      renderer.renderPlayer(this.playerTwo, 10);

    },

    diceRolled(randomNum){
      //Do end game checks here
      this.currentPlayer = this.returnCurrentPlayer();

      this.currentPlayer.diceRolled(randomNum);

      console.log("PLAYER: " , this.currentPlayer , " ROLLED: " , randomNum);

      this.renderCanvas();
    },

    returnCurrentPlayer(){
      this.currentPlayerIndex++;

      if(this.currentPlayerIndex > this.players.length){
        this.currentPlayerIndex = 0;
      }

      return this.players[this.currentPlayerIndex];
    }

  }
}
</script>

<style lang="css" scoped>

#bg-table{
  margin: 0 auto;
  background-color: green;
}

.table-container{

}

#myCanvas{
  padding: 0;
  margin: auto;
  display: block;
  position: absolute;
  top: 0;
  bottom: 70px;
  left: 0;
  right: 0;
  /**border: 1px solid pink;**/
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
  border: 5px solid #cacaca;
}

</style>
