<template lang="html">
  <div>
    <h3>Add A New Player</h3>
    <form action="index.html" method="post">
      <label for="name">Player name: </label>
      <input type="text" v-model:name="name"></input>
      
      <label for="avatar">Choose an Avatar: </label>
      
      <input type="radio" value="https://img.icons8.com/color/48/000000/jake.png" v-model="avatar">
      <img src="https://img.icons8.com/color/48/000000/jake.png">"</input>
      
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
    
    </form>
  </div>
</template>

<script>
import GamesService from '@/services/gameService';

export default {
  name: 'create-new-player',
  
  data(){
    return {
      name: "",
      avatar: ""
    }
  },
  
  components:{
    GamesService
  },
  
  methods: {
    addNewPlayer: function(){
      const player = {name: this.name, avatar: this.avatar}
      GamesService.FUNCTIONNAMEHERE(player)
      .then()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
