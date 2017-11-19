<template>
  <section>
    <div class="kr-hero-stats">
      <section class="section kr-hero-info">
        <h1 class="title">{{ selectedHero.name }}</h1>
        <h2 class="subtitle">{{ selectedHero.title }}</h2>
        <a :href="`https://maskofgoblin.com/?item=${selectedHero.name}`" target="_blank">
          Full Hero Information
        </a>
      </section>
      <section class="kr-hero-basic section">
        <kr-hero-stat v-for="basicStat in stats.basicStats"
                      :key="basicStat.label"
                      :label="basicStat.label"
                      :value="basicStat.value"
                      :base="basicStat.base">
        </kr-hero-stat>
      </section>
      <section class="kr-hero-options section">
        <kr-hero-stat v-for="additionalOption in stats.additionalOptions"
                      :key="additionalOption.label"
                      :label="additionalOption.label"
                      :isOption="true"
                      :value="additionalOption.value"
                      :base="additionalOption.base">
        </kr-hero-stat>
      </section>
    </div>
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
        'stats',
        'selectedHero'
      ]),
    }
  }
</script>

<style lang="sass">
  .kr-hero-stats
    padding: 1rem
</style>
