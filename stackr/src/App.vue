<template>
  <div>
    <app-header></app-header>
    <div class="container" id="app">
      <router-view/>
    </div>
  </div>

</template>

<script>
import Header from '@/components/header/Header'
export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
body {
  background: #f8f9fa;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}
</style>
