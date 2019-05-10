<template lang="html">
<div class="">
<board/>
<dice/>
</div>
</template>

<script>
import Board from "@/components/board.vue";
import Dice from "@/components/dice.vue";
export default {
  components:{
    "board": Board,
    "dice" : Dice
  }
}
</script>

<style lang="css" scoped>
</style>
