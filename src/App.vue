<template>
  <div id="app" class="app sky">
    <app-loading></app-loading>
    <div class="grassland">
      <div class="land land-2"></div>
      <div class="land land-1"></div>
    </div>
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
  position: relative;
  height: 100vh;
  overflow: hidden;
  &.sky {
    background-color: #31CCFF;
  }
  .grassland {
    position: absolute;
    top: 60%;
    left: -50%;
    width: 300%;
    height: 100%;
    transform: translateX(-50%);
  }
  .land {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #A4CE67;
    border: 2px dashed #3A8200;
    &.land-1 {
      border-radius: 80% 70% 0 0;
    }
    &.land-2 {
      left: initial;
      right: -28%;
      width: 50%;
      border-radius: 100% 50% 0 0;
    }
  }
}
</style>
