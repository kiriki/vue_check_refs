<template>
  <div class="home">
    Parrent classic (options api)
    <child-comp1 ref="childCompRef1" />
    <child-comp2 ref="childCompRef2" />
    <child-comp3 ref="childCompRef3" />
    <hr>

    <button @click="m1">main btn 1</button>
    <button @click="m2">main btn 2</button>
    <button @click="m3">main btn 3</button>

  </div>
</template>

<script>
import ChildComp1 from '@/components/ChildComp1'
import ChildComp2 from '@/components/ChildComp2'
import ChildComp3 from '@/components/ChildComp3'

export default {
  name: 'TestParrent1',
  components: {
    ChildComp1,
    ChildComp2,
    ChildComp3
  },

  methods: {
    m1 () {
      console.log('run m1')
      this.$refs.childCompRef1.ChildMethod()
    },

    m2 () {
      console.log('run m2')
      console.log(this.$refs.childCompRef2)
      this.$refs.childCompRef2.ChildMethodSetup()
    },

    m3 () {
      console.log('run m3')
      console.log(this.$refs.childCompRef3)
      // this.$refs.childCompRef3.ChildMethodSetupScript()
    }
  }
}
</script>
