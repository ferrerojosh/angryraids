<template>
  <aside>
    <ul class="kr-heroes">
      <kr-hero-avatar @click.native="select(hero)"
                      v-for="hero in heroesByClass"
                      :key="hero.id"
                      :src="heroImage(hero.name)"
                      :selected="hero.id == selectedId">
      </kr-hero-avatar>
    </ul>
  </aside>
</template>

<script>
  import KrHeroAvatar from './HeroAvatar.vue'
  import { actionTypes } from '../store/actions'
  import { mapGetters } from 'vuex'

  export default {
    components: { KrHeroAvatar },
    name: 'kr-hero-list',
    computed: {
      ...mapGetters([
        'heroesByClass',
        'selectedId',
      ])
    },
    methods: {
      heroImage(name) {
        return `/static/img/heroes/${name}.png`
      },
      select(hero) {
        this.$store.dispatch(actionTypes.selectHero, hero)
      }
    }
  }
</script>

<style lang="sass">
  aside
    overflow-x: scroll
    padding-right: 1rem

  .kr-heroes
    margin: 0
    padding-left: 1rem
    padding-right: 1rem
    white-space: nowrap
</style>
