<template lang="html">
<div class="">
<board/>
<player-turn/>
</div>
</template>

<script>
import Board from "@/components/board.vue";
import PlayerTurn from '@/components/playerTurn.vue';
export default {
  name: 'game-view',
  
  components:{
    "board": Board,
    "player-turn": PlayerTurn
  }
}
</script>

<style lang="css" scoped>
</style>
