<template>
  <section class="card kr-simulator-area">
    <kr-hero-list></kr-hero-list>
    <div class="columns is-gapless">
      <!-- Stats View -->
      <kr-hero-stats class="column is-one-third"></kr-hero-stats>
      <!-- Equipment View -->
      <kr-equipment class="column"></kr-equipment>
    </div>
  </section>
</template>

<script>
  import KrHeroList from '../components/HeroList.vue'
  import KrHeroStats from '../components/HeroStats.vue'
  import KrEquipment from '../components/Equipment.vue'

  export default {
    components: {
      KrEquipment,
      KrHeroStats,
      KrHeroList },
    name: 'kr-simulator-page'
  }
</script>

<style lang="sass">
  .kr-simulator-area
    margin-top: 2rem
</style>
