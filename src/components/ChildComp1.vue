<template>
  <h3>ChildComp1 [classic]</h3>
  <button @click="ChildMethod">test btn</button>
</template>

<script>
export default {
  name: 'ChildComp1',
  methods: {
    ChildMethod () {
      console.log('run ChildMethod')
    }
  }
}
</script>

<style scoped>
</style>
