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
  props: ['selectedPlayers'],
  data(){
    return{
      currentPlayerIndex: -1,
      currentPlayer : "",
      players : []
    }
  },
  mounted(){
    //Create Player Objects
    this.initPlayerObjects();

    //Delayed render : so that players display before rolling dice
    setTimeout(() => {
      this.renderPlayers();
    }, 500);

    //Dice rolled event
    eventBus.$on('dice-rolled', (randomNum) => {
      console.log("THIS: ", this);
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
        //ERROR: this is firing twice
        eventBus.$emit('player-turn-completed', this.currentPlayer);
        //Check this
        eventBus.$emit('next-player', this.returnNextPlayer());

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

      console.log("PLAYER: " , this.currentPlayer , " ROLLED: " , randomNum);

      this.renderCanvas();
    },

    returnCurrentPlayer(){
      this.currentPlayerIndex++;

      if(this.currentPlayerIndex >= this.players.length){
        this.currentPlayerIndex = 0;
      }
      console.log("RETURNING: ", this.players[this.currentPlayerIndex]);
      let current = this.players[this.currentPlayerIndex];



      return current;
    },

    returnNextPlayer(){
      let nextIndex = this.currentPlayerIndex += 1;
      if(nextIndex >= this.players.length){
        this.currentPlayerIndex = 0;
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
