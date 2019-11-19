<template>
  <div id="app" class="app sky">
    <app-loading></app-loading>
  </div>
</template>

<script>
import AppLoading from './components/loading'

export default {
  name: 'app',
  components: {
    AppLoading
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.app {
  height: 100vh;
  &.sky {
    background-color: #31CCFF;
  }
}
</style>
