<template lang="html">
  <div>

    <h1>Snakes And Ladders</h1>
    <h3>Add A New Player</h3>
    <form method="post">
      <label for="name">Player name: </label>
      <input type="text" v-model:name="name"></input>

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

      <button type="button" name="button" v-on:click="addNewPlayer()">Add Player</button>

    </form>

    <modal v-show="visibleModal" v-on:close="hideModal"/>

</div>
</template>

<script>
import GameService from '@/services/gameService';
import { eventBus } from '@/main.js';
import Modal from '@/components/newPlayerModal.vue';

export default {
  name: 'create-new-player',

  data(){
    return {
      name: "",
      avatar: "",
      visibleModal: false
    }
  },

  components:{
    GameService,
    'modal': Modal
  },

  methods: {
    addNewPlayer: function(){
      event.preventDefault()
      this.showModal()
      const player = {
        name: this.name,
        wins: 0,
        losses: 0,
        avatar: this.avatar
      }
      GameService.postPlayers(player)
      .then((res) => {
        eventBus.$emit('add-player', res)
      })
    },

    showModal: function(){
      this.visibleModal = true
    },

    hideModal: function(){
      this.visibleModal = false
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  color: green;

  font-family: cursive;
  font-weight: 200;
  font-size: 60px;
  text-align: center;

}



</style>
