<template>
  <div class="field has-addons">
    <div class="control">
      <div class="select">
        <select v-model="selectedClass">
          <option v-for="heroClass in classes" :value="heroClass">{{heroClass.name}}</option>
        </select>
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
        selectedClass: {
          get() {
            return this.$store.getters.selectedClass
          },
          set(heroClass) {
            this.$store.dispatch(actionTypes.selectClass, heroClass)
            let selectedHero = this.$store.getters.heroesByClass[0]
            this.$store.dispatch(actionTypes.selectHero, selectedHero)
          }
        }
      },
    }
</script>

<style lang="sass" scoped>

</style>
