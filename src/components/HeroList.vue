<template>
  <aside>
    <ul class="kr-heroes">
      <kr-hero-avatar @click.native="selectHero(hero)"
                      v-for="hero in heroesByClass"
                      :key="hero.id"
                      :ref="hero.name"
                      :name="hero.name"
                      :src="heroImage(hero.name, hero.classId)"
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
        'imgFolderByClassId'
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
    mounted() {
      let heroName = this.$store.state.route.params.heroName
      this.$refs[heroName][0].$el.scrollIntoView()
      this.selectedHero = this.heroesByClass.find(h => h.name === heroName)
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
