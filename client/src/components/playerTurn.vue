<template lang="html">
  <div>
    <modal :currentPlayer="this.playerTurn" v-show="visibleModal" v-on:close="hideModal"/>
    <h3>{{this.playerTurn}}'s turn</h3>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
import Modal from '@/components/playerTurnModal.vue';
import Player from '@/services/player.js';

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
      console.log(nextPlayer);
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
  color:#DD3CE7  ;
}
</style>
