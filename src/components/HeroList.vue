<template>
  <aside>
    <kr-hero-avatar @click.native="select(hero)"
                    v-for="hero in heroesByClass"
                    :key="hero.id"
                    :src="heroImage(hero.name)"
                    :selected="hero.id == selectedId">
    </kr-hero-avatar>
  </aside>
</template>

<script>
  import KrHeroAvatar from './HeroAvatar.vue'
  import { actionTypes } from '../store/actions'

  export default {
    components: { KrHeroAvatar },
    name: 'kr-hero-list',
    computed: {
      heroesByClass() {
        return this.$store.getters.heroesByClass()
      },
      selectedId() {
        return this.$store.getters.selectedId()
      }
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
