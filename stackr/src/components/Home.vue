<template>
  <div class="test">
    <p>Hello from home</p>
    <p>{{ newVar }}</p>
    <button v-on:click="clickMe">Click Me</button>
    <child></child>
  </div>
</template>

<script>
import Child from '@/components/Child';
export default {
  name: 'Home',
  components: {
    'child' : Child
  },
  data () {
    return {
      msg: 'Stackr Home',
      newVar: new Date().toString()
    }
  },
  methods: {
      clickMe: function () {
        this.newVar = (new Date()).toString()
      }
  }
}
</script>
