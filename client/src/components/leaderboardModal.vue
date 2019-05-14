<template lang="html">
  <div class="background">
    <div class="modal" role="dialog" aria-labelledby="popup">
      <slot name="header">
        <h3>LEADERBOARD</h3>
      </slot>
      <br>
      <slot name="body">
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
      </slot>

      <slot name="footer">

        <p>
        <button type="button" name="button" v-on:click="close">OK</button>
      </p>

      </slot>
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header, .modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

h3 {
  text-align: center;
}

button {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;

}

table {
  min-width: 50vw;
  text-align: center;
}

p{

  text-align: center;

}
</style>
