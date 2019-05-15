<template lang="html">
  <div class="rolldice">
    <div id="button">
      <button id="roll" type="button" v-on:click="diceRoll(1, 6)" :disabled="this.disabled"   v-bind:class="{'disable' : this.disabled}">
        <img id="diceimage" :src="checkImage(diceNumber)" alt="">
        <!-- here the status holds the result of the roll random number -->
        <h2 id="status" style="clear:right;">Player rolled:{{diceNumber}}</h2>
        </button>

      </div>

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
        playerTwo: ""
      }
    },

    methods: {
      diceRoll(start, range) {
        console.log('diceRoll called');
        const  randomNum = Math.floor( Math.random() * range ) + start;
        this.disabled = true;
        eventBus.$emit('dice-rolled', randomNum);
        this.diceNumber = randomNum;
        console.log('diceRoll generated diceNumber');
      },

      checkImage(number){
        switch(number){
          case 1:
          return reqiure("@/assets/dice1.jpg")

          console.log('rolled 1');
          break
          case 2:
          return require("@/assets/dice2.jpg")

          console.log('rolled 2');
          break
          case 3:
          return require("@/assets/dice3.jpg")

          console.log('rolled 3');
          break
          case 4:
          console.log('rolled 4');
          return require("@/assets/dice4.jpg")

          break
          case 5:
          return require("@/assets/dice5.jpg")

          console.log('rolled 5');
          break
          case 6:
          return require("@/assets/dice6.jpg")

          console.log('rolled 6');
          break
          default:
          return require("@/assets/dice.jpg")



          break
      }
      console.log('switch finished');
    }
  },
    mounted() {

      eventBus.$on('player-turn-completed', (currentPlayer) =>  {
        this.disabled = false;
        console.log(this.disabled)
      });

      this.checkImage(this.diceNumber)
      // console.log('img src', this.image.src);
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

    }

    #button{
      position: absolute;
      left: 0;
      top: 150px;
      width: 300px;
    }

    #status{
      position: relative;
      color:#A93226;
      font-size: 35px;
    }

    .disable {
      opacity: 0.5;
      animation: shake 2s;
    }

    img:click {
      animation: shake 3s;
    }

    #diceimage{
      position: absolute;
      top : 100px;
      margin: 0 auto;
      width: 150px;
      left: 0px;
    }

  </style>
