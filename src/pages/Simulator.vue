<template>
  <section class="card">
    <kr-hero-class-dropdown></kr-hero-class-dropdown>
    <kr-hero-list></kr-hero-list>
    <article class="message is-warning">
      <div class="message-body">
        Note: All stats are based on class, the reason you are selecting a hero instead of classes is because each hero has different hidden MP Recovery/Attack.
      </div>
    </article>
    <div class="columns is-gapless simulator-content">
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
  import KrHeroClassDropdown from "../components/HeroClassDropdown";

  export default {
    components: {
      KrHeroClassDropdown,
      KrEquipment,
      KrHeroStats,
      KrHeroList
    },
    name: 'kr-simulator-page'
  }
</script>
