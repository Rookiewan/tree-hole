<template>
  <div class="cloud" :style="cloudStyle"></div>
</template>

<script>
export default {
  name: 'Cloud',
  props: {
    size: {
      type: Number,
      default: 300
    },
    pos: {
      type: Object,
      default: () => ({ x: 100, y: 100 })
    }
  },
  computed: {
    cloudStyle() {
      const width = this.size
      const height = Math.floor(width / 3)
      return {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        left: typeof this.pos.x === 'number' ? `${this.pos.x}px` : this.pos.x,
        top: typeof this.pos.y === 'number' ? `${this.pos.y}px` : this.pos.y
      }
    }
  }
}
</script>

<style lang="scss">
  .cloud {
    position: absolute;
    background-color: #fff;
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 50%;
      background-color: #fff;
    }
    &:before {
      left: 10%;
      top: -40%;
      width: 33%;
      height: 100%;
    }
    &:after {
      left: 35%;
      top: -66%;
      width: 50%;
      height: 150%;
    }
  }
</style>
