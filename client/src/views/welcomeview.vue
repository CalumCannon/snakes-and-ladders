<template lang="html">
  <div>
    <create-new-player/>
    <game-setup-form/>
  </div>
</template>

<script>
import createNewPlayer from '@/components/createNewPlayer.vue';
import GameSetupForm from '@/components/gameSetupForm.vue';

export default {
  name: 'welcome',
  
  components:{
    'create-new-player': createNewPlayer,
    'game-setup-form': GameSetupForm
  }
}
</script>

<style lang="css" scoped>
</style>
