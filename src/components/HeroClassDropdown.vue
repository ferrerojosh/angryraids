<template>
  <div class="columns kr-hero-class">
    <div class="column is-four-fifths">
      <div class="control is-expanded">
        <div class="select">
          <select v-model="selectedClass">
            <option v-for="heroClass in classes" :value="heroClass">{{heroClass.name}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="control">
        <input title="Search" v-model="searchHeroName" placeholder="Search Hero Name"
               class="input" type="text">
      </div>
    </div>
  </div>
</template>

<script>
  import { actionTypes } from '../store/actions'
  import { mapGetters } from 'vuex'
    export default {
        name: "kr-hero-class-dropdown",
      computed: {
        ...mapGetters([
          'classes',
        ]),
        searchHeroName: {
          get() {
            return this.$store.getters.searchHeroName
          },
          set(searchText) {
            this.$store.dispatch(actionTypes.searchHero, searchText)
          }
        },
        selectedClass: {
          get() {
            return this.$store.getters.selectedClass
          },
          set(heroClass) {
            this.$store.dispatch(actionTypes.selectClass, heroClass)
            let selectedHero = this.$store.getters.heroesByClass[0]
            this.$store.dispatch(actionTypes.selectHero, selectedHero)
            this.$router.push({ name: 'Simulator', params: { heroName: selectedHero.name }})
          }
        }
      },
    }
</script>

<style lang="sass" scoped>
  .kr-hero-class
    padding: 0rem 1rem 0 1rem
    border-bottom: 1px
</style>
