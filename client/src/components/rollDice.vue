<template lang="html">
  <div class="rolldice">
    <div id="dice" class="dice"></div>
    <div id="button">
      
      <button id="roll" type="button" v-on:click="diceRoll(1, 6)" :disabled="this.disabled"   v-bind:class="{'disable' : this.disabled}">
        <canvas style="z-index: 10;" id="canvas" width="180" height="170"></canvas>
        </button>
        
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
        // this.checkImage(this.diceNumber)
      },
      
      checkImage(number){
        const image = new Image(180, 170)
        const canvas = document.querySelector('#canvas')
        const ctx = canvas.getContext('2d')
        console.log('checkImag e started');
        console.log('canvas', canvas);
        console.log('ctx', ctx);
        // ctx.drawImage(image, 0,0)
        // ctx.fillStyle = 'black'
        // ctx.font = 'Arial'
        // ctx .fillText('hello!', 0, 0)
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        switch(number){
          case 1:
          image.src = "../assets/dice1.jpg"
          ctx.drawImage(image, 0,0)
          console.log('rolled 1');
          break
          case 2:
          image.src = "../assets/dice2.jpg"
          ctx.drawImage(image, 0,0)
          console.log('rolled 2');
          break
          case 3:
          image.src = "../assets/dice3.jpg"
          ctx.drawImage(image, 0,0)
          console.log('rolled 3');
          break
          case 4:
          console.log('rolled 4');
          image.src = "../assets/dice4.jpg"
          ctx.drawImage(image, 0,0)
          break
          case 5:
          image.src = "../assets/dice5.jpg"
          ctx.drawImage(image, 0,0)
          console.log('rolled 5');
          break
          case 6:
          image.src = "../assets/dice6.jpg"
          ctx.drawImage(image, 0,0)
          console.log('rolled 6');
          break
          default:
          image.src = "http://clipartmag.com/images/dice-images-1-6-11.jpg"
          ctx.drawImage(image, 0,0)
          console.log('hey the defeault img', image);
          // ctx.drawImage('../assets/dice6.jpg', 0,0)
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
      top: 10px;
      
      
      
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
      animation: shake 2s;
    }
    
    img:click {
      animation: shake 1s;
    }
    
  </style>
