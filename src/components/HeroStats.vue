<template>
  <section>
    <div class="kr-hero-stats">
      <section class="section kr-hero-info">
        <h1 class="title">{{ selectedHero.name }}</h1>
        <h2 class="subtitle">{{ selectedHero.title }}</h2>
        <a :href="`https://maskofgoblin.com/hero/${selectedHero.id}`" rel="noopener" target="_blank">
          Full Hero Information
        </a>
      </section>
      <section class="kr-hero-stats">
        Level 90
      </section>
      <section class="kr-hero-basic section">
        <kr-hero-stat v-for="basicStat in stats.basicStats"
                      :key="basicStat.type"
                      :label="basicStat.type"
                      :value="basicStat.value"
                      :base="basicStat.base">
        </kr-hero-stat>
      </section>
      <section class="kr-hero-options section">
        <kr-hero-stat v-for="additionalOption in stats.additionalOptions"
                      :key="additionalOption.type"
                      :label="additionalOption.type"
                      :isOption="true"
                      :value="additionalOption.value"
                      :base="additionalOption.base">
        </kr-hero-stat>
      </section>
      <section class="kr-hero-stats">
        <small>
          Note: Crit DMG and P/M.Block DEF have hidden base values for all heroes,
          those base values are not shown. For overview for each hero, please refer to
          <a href="https://maskofgoblin.com/" rel="noopener" target="_blank">Mask of Goblin</a>
        </small>
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
    padding-left: 1rem
</style>
