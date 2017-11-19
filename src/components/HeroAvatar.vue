<template>
  <li class="is-inline-block">
    <figure :class="classes">
      <img :src="src">
    </figure>
  </li>
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

<style lang="sass">
  .kr-hero-avatar
    width: 124px
    height: 124px
    margin: 1rem 1rem 1rem 0
    padding: 5px
    box-shadow: 0 0 0 2px rgba(10, 10, 10, 0.1) inset
    border-radius: 5px
    display: inline-block

  .kr-hero-selected
    box-shadow: 0 0 0 5px #FFEF75 inset
</style>
