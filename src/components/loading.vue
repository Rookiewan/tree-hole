<template>
  <div class="app-loading">
    <cloud :size="800" :pos="{x: 200, y: 400}"></cloud>
    <cloud :size="100" :pos="{x: 100, y: 50}"></cloud>
    <cloud :size="400" :pos="{x: '80%', y: 200}"></cloud>
  </div>
</template>

<script>
import Cloud from './cloud'

export default {
  name: 'AppLoading',
  components: {
    Cloud
  }
}
</script>

<style lang="scss">
.app-loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .cloud-1 {
    // width: 400px;
  }
}
</style>