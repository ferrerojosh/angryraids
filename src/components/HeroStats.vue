<template>
  <section class="kr-hero-stats">
    <section class="kr-hero-basic">
      <kr-hero-stat v-for="basicStat in basicStats"
                    :key="basicStat.label"
                    :label="basicStat.label"
                    :value="basicStat.value"
                    :base="basicStat.base">
      </kr-hero-stat>
    </section>
    <section class="kr-hero-options">
      <kr-hero-stat v-for="additionalOption in additionalOptions"
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

  export default {
    components: { KrHeroStat },
    name: 'kr-hero-stats',
    computed: {
      basicStats() {
        return this.$store.getters.stats().basicStats
      },
      additionalOptions() {
        return this.$store.getters.stats().additionalOptions
      }
    }
  }
</script>

<style lang="stylus">
  .kr-hero-basic, .kr-hero-options
    margin-bottom: 1rem
    padding: 1rem 1rem
</style>
