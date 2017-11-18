<template>
  <section class="kr-hero-stats">
    <section class="kr-hero-basic">
      <kr-hero-stat v-for="basicStat in stats.basicStats"
                    :key="basicStat.label"
                    :label="basicStat.label"
                    :value="basicStat.value"
                    :base="basicStat.base">
      </kr-hero-stat>
    </section>
    <section class="kr-hero-options">
      <kr-hero-stat v-for="additionalOption in stats.additionalOptions"
                    :key="additionalOption.label"
                    :label="additionalOption.label"
                    :isOption="true"
                    :value="additionalOption.value"
                    :base="additionalOption.base">
      </kr-hero-stat>
    </section>
  </section>
</template>

<script>
  import KrHeroStat from './HeroStat.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: { KrHeroStat },
    name: 'kr-hero-stats',
    computed: {
      ...mapGetters([
        'stats'
      ]),
    }
  }
</script>

<style lang="stylus">
  .kr-hero-basic, .kr-hero-options
    margin-bottom: 1rem
    padding: 1rem 1rem
</style>
