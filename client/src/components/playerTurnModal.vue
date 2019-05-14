<template lang="html">
  <div class="background">
    <div class="modal" role="dialog" aria-labelledby="popup">
      <span class="body">
        It's now {{currentPlayer}}'s turn!
      </span>

      <span class="footer">
        <button type="button" name="button" v-on:click="close">OK</button>
      </span>
    </div>
  </div>

</template>

<script>

export default {
  name: 'modal',

  props: ['currentPlayer'],

  methods: {
    close() {
      this.$emit('close');
    }
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
  background: #FFFFFF;
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
</style>
