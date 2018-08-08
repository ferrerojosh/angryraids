<template>
  <aside>
    <ul class="kr-heroes">
      <kr-hero-avatar @click.native="selectHero(hero)"
                      v-for="hero in heroesByClass"
                      v-if="hero.name.toUpperCase().includes(searchHeroName.toUpperCase())"
                      :key="hero.id"
                      :ref="hero.name"
                      :name="hero.name"
                      :src="heroImage(hero.name, hero.classId)"
                      :selected="hero.id === selectedId">
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
        'imgFolderByClassId',
        'classById',
        'allHeroes',
        'searchHeroName'
      ]),
      selectedHero: {
        get() {
          return this.$store.getters.selectedHero
        },
        set(hero) {
          this.$store.dispatch(actionTypes.selectHero, hero)
        }
      }
    },
    created() {
      let heroName = this.$store.state.route.params.heroName
      let hero = this.allHeroes.find(h => h.name === heroName)
      let heroClass = this.classById(hero.classId)
      this.$store.dispatch(actionTypes.selectClass, heroClass)
      this.selectedHero = hero
    },
    mounted() {
      this.$refs[this.selectedHero.name][0].$el.scrollIntoView()
    },
    methods: {
      heroImage(name, heroClassId) {
        let imgFolder = this.imgFolderByClassId(heroClassId);
        return `/static/img/heroes/${imgFolder}/${name}.png`
      },
      selectHero(hero) {
        this.selectedHero = hero
        this.$router.push({ name: 'Simulator', params: { heroName: hero.name }})
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
