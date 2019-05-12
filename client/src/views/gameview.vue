<template lang="html">
<div class="">
<board/>
<rollDice/>
<player-turn :playerOne="playerOne" :playerTwo="playerTwo"/>
<moveHistory :playerOne="playerOne" :playerTwo="playerTwo"/>
</div>
</template>

<script>
import Board from "@/components/board.vue";
import RollDice from "@/components/rollDice.vue";
import MoveHistory from '@/components/moveHistory.vue';
import PlayerTurn from '@/components/playerTurn.vue';

export default {
  name: 'game-view',
  
  props: ['playerOne', 'playerTwo'],
  
  components:{
    "board": Board,
    "rollDice" : RollDice,
    "moveHistory": MoveHistory,
    "player-turn": PlayerTurn
  }
}
</script>

<style lang="css" scoped>
</style>
