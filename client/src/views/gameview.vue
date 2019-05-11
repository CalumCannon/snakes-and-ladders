<template lang="html">
  <div class="">
    <board/>
    <player-turn :playerOne="playerOne" :playerTwo="playerTwo"/>
  </div>
</template>

<script>
import Board from "@/components/board.vue";
import PlayerTurn from '@/components/playerTurn.vue';
export default {
  name: 'game-view',
  
  props: ['playerOne', 'playerTwo'],
  
  components:{
    "board": Board,
    "player-turn": PlayerTurn
  }
}
</script>

<style lang="css" scoped>
</style>
