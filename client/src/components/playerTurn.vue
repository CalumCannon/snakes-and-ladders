<template lang="html">
  <div>
    <modal :currentPlayer="this.playerTurn" v-show="visibleModal" v-on:close="hideModal"/>
    <h3>{{this.playerTurn}}'s turn</h3>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import Modal from '@/components/playerTurnModal.vue';

export default {
  name: 'player-turn',
  
  props: ['playerOne'],
  
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
      // if (this.currentIndex === this.chosenPlayers.length){
      //   this.currentIndex = 0
      // }
      // else {this.currentIndex += 1}
      // this.playerTurn = this.chosenPlayers[this.currentIndex]
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
      console.log(nextPlayer.nickname)
      this.changePlayer(nextPlayer.nickname)
    })
  }
  
  
}
</script>

<style lang="css" scoped>
</style>
