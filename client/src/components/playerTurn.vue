<template lang="html">
  <div>
    <modal style="z-index: 3;" :currentPlayer="this.playerTurn" v-show="visibleModal" v-on:close="hideModal"/>
    <h2>{{this.playerTurn}}'s turn</h2>
    <!-- <img :src="this.playerTurn.avatar" alt=""> -->
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
h2 {
  position: absolute;
  right: 0;
  top: 100px;
  margin-right: 70px;
  font-size: 25px;
  color: blue;
}
</style>
