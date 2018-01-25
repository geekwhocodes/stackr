<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow header">
    <h5 class="my-0 mr-md-auto font-weight-normal">Stackr</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-dark" href="#">Your dashboard</a>
    </nav>
    <a class="btn btn-outline-primary" href="#">Log in</a>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
h5 {
  font-family: 'Sacramento', cursive;
  font-size: 42pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  padding: 25px 0;
}
</style>
