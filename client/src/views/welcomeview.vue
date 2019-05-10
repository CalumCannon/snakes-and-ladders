<template lang="html">
  <div>
    <create-new-player/>
  </div>
</template>

<script>
import createNewPlayer from '@/components/createNewPlayer';

export default {
  name: 'welcome',
  
  components:{
    'create-new-player': createNewPlayer
  }
}
</script>

<style lang="css" scoped>
</style>
