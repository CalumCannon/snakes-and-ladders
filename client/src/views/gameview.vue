<template lang="html">
<div class="">
<board/>
<rollDice/>
<player-turn :playerOne="playerOne" :playerTwo="playerTwo"/>
</div>
</template>

<script>
import Board from "@/components/board.vue";
import RollDice from "@/components/rollDice.vue";
export default {
  name: 'game-view',
  
  props: ['playerOne', 'playerTwo'],
  
  components:{
    "board": Board,
    "rollDice" : RollDice
  }
}
</script>

<style lang="css" scoped>
</style>
