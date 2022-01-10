<template>
  <h3>ChildComp2 [setup]</h3>
  <button @click="ChildMethodSetup">test btn</button>
</template>

<script>
export default {
  name: 'ChildComp2',

  setup () {
    const ChildMethodSetup = () => {
      console.log('run ChildMethodSetup')
    }

    return {
      ChildMethodSetup
    }
  }
}
</script>

<style scoped>
</style>
