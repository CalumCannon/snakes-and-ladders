<template lang="html">
 <div class="rolldice">
   <div id="dice" class="dice"></div>
   <div id="button">
   <button id="roll" type="button" value="http://clipartmag.com/images/dice-images-1-6-11.jpg" v-on:click="diceRoll(1, 6)">
          <img src="http://clipartmag.com/images/dice-images-1-6-11.jpg "height="170" width="180"></button>
 </div>
  <!-- here the status holds the result of the roll random number -->
   <h2 id="status" style="clear:right;">{{diceNumber}}</h2>
  </div>


</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'roll-dice',
  data(){
    return{
      diceNumber: null
    }
  },

  methods: {
    diceRoll(start, range) {
      const  randomNum = Math.floor( Math.random() * range ) + start;
        console.log(randomNum);
         eventBus.$emit('dice-rolled', randomNum);
        return randomNum;
    },

  }
}











</script>

<style lang="css" scoped>
div.dice{
  float :inherit;
  width: 32px;
  background-color: balck;
  border:yellow 1px solid;
  padding: 10px;
  font-size: 24px;
  text-align: center;
  margin:5px;
  color: blue;
}
#button{
  /* float :center;
  width: 32px;
  border:yellow 1px solid;
  padding: 10px;
  font-size: 24px;
  text-align: center;
  margin:5px;  */
  /* background-color: green; */
  /* color: gold yellow; */
  /* align-content: center;
   /* background-image: url('https://www.shutterstock.com/image-vector/casino-dice-icon-on-black-background-1341070715?src=wDS4QVRCYgxUdv3tIc0Siw-1-0'); */

}
</style>
