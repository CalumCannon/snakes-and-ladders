<template lang="html">
<div class="dice">
  <button @click="dice(1,6)">Roll</button>


</div>
</template>

<script>

export default {
  name: 'dice',
  methods: {
  dice(min, max){
    return Math.floor( Math.random()*(max - min) ) + min;
  }

  }





}

</script>

<style lang="css" scoped>
.dice{

  background-color: balck
  color: gold yellow;
}
</style>
