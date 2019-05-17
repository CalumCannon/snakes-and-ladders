<template lang="html">
  <div class="background">
    <div style="z-index: 200;" class="modal" role="dialog" aria-labelledby="popup">
      <span class="header">
        <h3>LEADERBOARD</h3>
      </span>
      <br>
      <span class="body">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Player</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in databasePlayers">
              <td><img :src="player.avatar" alt="Player avatar"></td>
              <td>{{player.name}}</td>
              <td>{{player.wins}}</td>
              <td>{{player.losses}}</td>
            </tr>
          </tbody>
        </table>
      </span>

      <span class="footer">
        <button type="button" name="button" v-on:click="close">OK</button>
      </span>
    </div>
  </div>

</template>

<script>
import GameService from '@/services/gameService.js';

export default {
  name: 'leader-modal',

  data(){
    return{
      databasePlayers: []
    }
  },

  methods: {
    close() {
      this.$emit('close');
    },

    fetchPlayers(){
      GameService.getPlayers()
      .then((players) => this.databasePlayers = players)
    }
  },

  mounted(){
    this.fetchPlayers();
  }
}
</script>


<style lang="css" scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.modal {
  background: #2EFEF7;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 5px;
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
}

button {
  min-width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

h3 {
  text-align: center;
}

table {
  min-width: 50vw;
  text-align: center;
}
</style>
