<template>
  <section class="columns">
    <div class="column">
      <kr-item label="Weapon"></kr-item>
      <kr-item label="Armor"></kr-item>
      <kr-item label="Secondary Armor"></kr-item>
    </div>
    <div class="column">
      <kr-item label="Accessory"></kr-item>
      <kr-item label="Orb"></kr-item>
      <kr-item label="Artifact"></kr-item>
    </div>
  </section>
</template>

<script>
  import KrItem from './Item.vue'

  export default {
    components: { KrItem },
    name: 'kr-equipment'
  }
</script>

<style lang="sass">
  @import "../sass/variables"
</style>
