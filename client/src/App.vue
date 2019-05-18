<template>
  <div id="app">
    <router-view></router-view>
    
    <button type="button" name="button" v-on:click="visibleModal = true">Show Leaderboard</button>
    
    <leader-modal style="z-index: 500;" v-show="visibleModal" v-on:close="hideModal"/>
  </div>
</template>

<script>
import LeaderModal from '@/components/leaderboardModal.vue';

export default {
  name: 'app',
  
  data(){
    return{
      visibleModal: false
    }
  },
  
  components: {
    'leader-modal': LeaderModal
  },
  
  methods: {
    hideModal: function(){
      this.visibleModal = false
    }
  }
}
</script>

<style>
body{
  background-image:  url("https://thumbs.dreamstime.com/z/ladder-snake-game-funny-frame-children-64850196.jpg");
  min-width: 100%;
  min-height: 100%;
}

button {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 20px;
  
}
</style>
