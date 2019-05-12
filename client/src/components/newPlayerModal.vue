<template lang="html">
  <div class="background">
    <div class="modal" role="dialog" aria-labelledby="popup">
      <slot name="header">
        New player added!
      </slot>
      <br>
      <slot name="body">
        You can now start playing or add more new players!
      </slot>
      
      <slot name="footer">
        <button type="button" name="button" v-on:click="close">OK</button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  
  methods: {
    close() {
      this.$emit('close');
    },
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
  
  button {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
