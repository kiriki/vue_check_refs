<template>
  <h3>ChildComp3 [script setup]</h3>
  <button @click="ChildMethodSetupScript">test btn</button>
</template>

<script setup>
const ChildMethodSetupScript = () => {
  console.log('run ChildMethodSetupScript')
}
</script>

<script>
export default {
  name: 'ChildComp3'
}
</script>

<style scoped>
</style>
