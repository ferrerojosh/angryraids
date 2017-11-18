<template>
  <figure :class="classes">
    <img :src="src">
  </figure>
</template>

<script>
  export default {
    name: 'kr-hero-avatar',
    props: {
      src: String,
      selected: Boolean
    },
    computed: {
      classes() {
        return {
          'kr-hero-avatar': true,
          'kr-hero-selected': this.selected
        }
      }
    }
  }
</script>

<style lang="stylus">
  .kr-hero-avatar
    width: 129px
    height: 129px
    margin: 0 auto
    margin-top: 2em
    padding-left: 5px
    padding-top: 5px
    box-shadow: 0 0 0 5px #888 inset
    border-radius 5px

  .kr-hero-selected
    box-shadow: 0 0 0 8px #FFEF75 inset
</style>
