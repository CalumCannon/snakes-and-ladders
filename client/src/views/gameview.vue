<template lang="html">
<div class="">
<board/>
<rollDice/>
</div>
</template>

<script>
import Board from "@/components/board.vue";
import RollDice from "@/components/rollDice.vue";
export default {
  name: 'game-view',

  components:{
    "board": Board,
    "rollDice" : RollDice
  }
}
</script>

<style lang="css" scoped>
</style>
