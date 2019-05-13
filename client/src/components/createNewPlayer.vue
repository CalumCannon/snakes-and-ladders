<template lang="html">
  <div class="form">
    <h3>Add A New Player</h3>
    <form method="post">
      <div>
        <label for="name">Player name: </label>
        <input type="text" class="input" v-model:name="name"></input>
      </div>
      
      <div class="split-form">
        <label for="avatar">Choose an Avatar: </label>
        
        <input type="radio" value="https://img.icons8.com/color/48/000000/jake.png" v-model="avatar">
        <img src="https://img.icons8.com/color/48/000000/jake.png"></input>
        
        <input type="radio" value="https://img.icons8.com/color/48/000000/batman.png" v-model="avatar">
        <img src="https://img.icons8.com/color/48/000000/batman.png"></input>
        
        <input type="radio" value="https://img.icons8.com/color/48/000000/super-mario.png" v-model="avatar">
        <img src="https://img.icons8.com/color/48/000000/super-mario.png"></input>
        
        <input type="radio" value="https://img.icons8.com/color/48/000000/iron-man.png" v-model="avatar">
        <img src="https://img.icons8.com/color/48/000000/iron-man.png"></input>
        
        <input type="radio" value="https://img.icons8.com/color/48/000000/anonymous-mask.png" v-model="avatar">
        <img src="https://img.icons8.com/color/48/000000/anonymous-mask.png"></input>
        
        <input type="radio" value="https://img.icons8.com/color/48/000000/guest-male.png" v-model="avatar">
        <img src="https://img.icons8.com/color/48/000000/guest-male.png"></input>
      </div>
      
      <div>
        <button type="button" name="button" v-on:click="addNewPlayer()">Add Player</button>
      </div>
      
    </form>
    
  </div>
</template>

<script>
import GameService from '@/services/gameService';
import { eventBus } from '@/main.js';

export default {
  name: 'create-new-player',
  
  data(){
    return {
      name: "",
      avatar: "",
    }
  },
  
  components:{
    GameService,
  },
  
  methods: {
    addNewPlayer: function(){
      event.preventDefault()
      eventBus.$emit('player-added')
      const player = {
        name: this.name,
        wins: 0,
        losses: 0,
        avatar: this.avatar
      }
      event.target.reset
      GameService.postPlayers(player)
      .then((res) => {
        eventBus.$emit('add-player', res)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.form {
  display: block;
  min-width: 100vw;
  text-align: center;
}
.split-form {
  margin-top: 1em;
  margin-bottom: 1em;
}
button {
  margin-bottom: 2em;
}

</style>
