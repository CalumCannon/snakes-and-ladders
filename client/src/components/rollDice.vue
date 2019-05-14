<template lang="html">
 <div class="rolldice">
   <div id="dice" class="dice"></div>
   <div id="button">

   <button id="roll" type="button" value="http://clipartmag.com/images/dice-images-1-6-11.jpg" v-on:click="diceRoll(1, 6)" :disabled="this.disabled"   v-bind:class="{'disable' : this.disabled}">
          <img src="http://clipartmag.com/images/dice-images-1-6-11.jpg" height="170" width="180"></button>

 </div>

  <!-- here the status holds the result of the roll random number -->
   <h2 id="status" style="clear:right;">Roll Dice:{{diceNumber}}</h2>
  </div>


</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'roll-dice',
  data(){
    return{
      diceNumber: null,
      roll: null,
      disabled: false,
      playerOne: "",
      playerTwo: "",

    }
  },

  methods: {
    diceRoll(start, range) {
      const  randomNum = Math.floor( Math.random() * range ) + start;
         this.disabled = true;
         eventBus.$emit('dice-rolled', randomNum);
         this.diceNumber = randomNum;

      }
    },
      mounted() {

         eventBus.$on('player-turn-completed', (currentPlayer) =>  {
           this.disabled = false;
           console.log(this.disabled)
          })

       }
     }

























</script>

<style lang="css" scoped>
div.dice{
  float :inherit;
  width: 32px;

  border:yellow 1px solid;
  padding: 10px;
  font-size: 24px;
  text-align: center;
  margin:5px;
  color: blue;
  background-color: #FFFF00;
}

#button{
  position: absolute;
  left: 0;
  top: 10px;
  background-color: #F5DA81;


}

 #status{
  position: absolute;
  left: 0;
  top: 190px;
  color:#A93226;
  font-size: 35px;
 }

.disable {
  opacity: 0.5;

}

</style>
