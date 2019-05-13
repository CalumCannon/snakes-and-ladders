<template lang="html">
  <div class="welcome">
    <create-new-player/>
    <modal class="popup" v-show="visibleModal" v-on:close="hideModal"/>
    <game-setup-form/>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import createNewPlayer from '@/components/createNewPlayer.vue';
import GameSetupForm from '@/components/gameSetupForm.vue';
import Modal from '@/components/newPlayerModal.vue';

export default {
  name: 'welcome',
  
  data(){
    return{
      visibleModal: false
    }
  },
  
  components:{
    'create-new-player': createNewPlayer,
    'game-setup-form': GameSetupForm,
    'modal': Modal
  },
  
  methods: {
    showModal: function(){
      this.visibleModal = true
    },
    
    hideModal: function(){
      this.visibleModal = false
    }
  },
  
  mounted(){
    eventBus.$on('player-added', this.showModal);
  }
}
</script>

<style lang="css" scoped>
.welcome {
  display: inline-block;
}
.popup {
  z-index: 1;
}
</style>
