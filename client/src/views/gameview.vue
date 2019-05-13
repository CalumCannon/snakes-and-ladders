<template lang="html">
<div class="">
<board :selectedPlayers="this.chosenPlayers"/>
<rollDice/>
<player-turn :playerOne="this.chosenPlayers[0]"/>
<move-history/>
</div>
</template>

<script>
import Board from "@/components/board.vue";
import RollDice from "@/components/rollDice.vue";
import MoveHistory from '@/components/moveHistory.vue';
import PlayerTurn from '@/components/playerTurn.vue';

export default {
  name: 'game-view',

  props: ['chosenPlayers'],

  components:{
    "board": Board,
    "rollDice" : RollDice,
    "move-history": MoveHistory,
    "player-turn": PlayerTurn
  }
}
</script>

<style lang="css" scoped>
</style>
