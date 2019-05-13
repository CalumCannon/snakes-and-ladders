<template lang="html">
<<<<<<< HEAD
  <div id="turn">
    <modal :currentPlayer="this.playerTurn.name" v-show="visibleModal" v-on:close="hideModal"/>
    <h3>{{this.playerTurn.name}}'s turn</h3>
=======
  <div>
    <modal :currentPlayer="this.playerTurn" v-show="visibleModal" v-on:close="hideModal"/>
    <h3>{{this.playerTurn}}'s turn</h3>
>>>>>>> 6678b4621898213287e246d88b426debcb3ba9b2
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import Modal from '@/components/playerTurnModal.vue';

export default {
  name: 'player-turn',
<<<<<<< HEAD

  props: ['chosenPlayers'],

=======
  
  props: ['playerOne'],
  
>>>>>>> 6678b4621898213287e246d88b426debcb3ba9b2
  data(){
    return {
      playerTurn: this.playerOne.name,
      visibleModal: false
    }
  },

  components: {
    'modal': Modal
  },

  methods: {
    changePlayer: function(nextPlayer){
      this.playerTurn = nextPlayer
      this.showModal()
    },

    showModal: function(){
      this.visibleModal = true
    },

    hideModal: function(){
      this.visibleModal = false
    }
  },

  mounted(){
    eventBus.$on('next-player', (nextPlayer) => {
      this.changePlayer(nextPlayer.nickname)
    })
  }


}
</script>

<style lang="css" scoped>
#turn{
  position: absolute;
  left: 0;
  top: 250px;
  font-size: 25px;
  color:#FF5733  ;
}
</style>
