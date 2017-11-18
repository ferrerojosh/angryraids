<template>
  <div class="container">
    <!-- Hero List View -->
    <kr-hero-list class="col col-sm-2 col-no-gutters"></kr-hero-list>
    <!-- Equipment View -->
    <kr-equipment class="col col-sm-6 col-no-gutters"></kr-equipment>
    <!-- Stats View -->
    <kr-hero-stats class="col col-sm-4 col-no-gutters"></kr-hero-stats>
  </div>
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
