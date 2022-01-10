<template>
  <div class="home">
    Parrent composition api (setup function)
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
import { ref } from 'vue'

export default {
  name: 'TestParrent2',
  components: {
    ChildComp1,
    ChildComp2,
    ChildComp3
  },

  setup () {
    const childCompRef1 = ref(null)
    const childCompRef2 = ref(null)
    const childCompRef3 = ref(null)

    const m1 = () => {
      console.log('run m1')
      childCompRef1.value.ChildMethod()
    }

    const m2 = () => {
      console.log('run m2')
      childCompRef2.value.ChildMethodSetup()
    }

    const m3 = () => {
      console.log('run m3')
      childCompRef3.value.ChildMethodSetupScript()
    }
    return { m1, m2, m3 }
  }
}
</script>
