<template>
  <li class="is-inline-block">
    <clazy-load tag="figure" :src="src" :class="classes">
      <transition name="fade" slot="image">
        <img :src="src" class="kr-hero-img" :alt="name">
      </transition>
      <transition name="fade" slot="placeholder">
        <img src="/static/img/loading.gif">
      </transition>
    </clazy-load>
  </li>
</template>

<script>
  export default {
    name: 'kr-hero-avatar',
    props: {
      name: String,
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

  .kr-hero-img
    transition: opacity 500ms ease-in-out

  .kr-hero-selected
    box-shadow: 0 0 0 5px #FFEF75 inset

  .sk-circle-figure
    display: inline-block
    margin: 37px 40px

  .fade-enter, .fade-leave-to
    opacity: 0
    transform: scale(.8)
</style>
