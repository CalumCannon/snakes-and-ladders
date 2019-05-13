<template lang="html">
  <div>
    <modal v-show="visibleModal" v-on:close="hideModal"/>
    <h3>{{this.playerTurn.name}}'s turn</h3>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import Modal from '@/components/playerTurnModal.vue';

export default {
  name: 'player-turn',
  
  props: ['chosenPlayers'],
  
  data(){
    return {
      currentIndex: 0,
      startGame: true,
      playerTurn: this.chosenPlayers[0],
      visibleModal: false
    }
  },
  
  components: {
    'modal': Modal
  },
  
  methods: {
    changePlayer: function(){
      if (this.currentIndex = this.chosenPlayers.length){
        this.currentIndex = 0
      }
      else {this.currentIndex += 1}
      this.playerTurn = this.chosenPlayers[this.currentIndex]
    },
    
    showModal: function(){
      this.visibleModal = true
    },
    
    hideModal: function(){
      this.visibleModal = false
    }
  },
  
  mounted(){
    // eventBus to be sent from board component after move completed?
    eventBus.$on('change-player', () => {
      if (!startGame){
        this.changePlayer()
      }
      this.showModal()
      this.startGame = false
    })
  }
  
  
}
</script>

<style lang="css" scoped>
</style>
