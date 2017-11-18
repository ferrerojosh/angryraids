<template>
  <section class="kr-equipment">
    <kr-item label="Weapon"></kr-item>
    <kr-item label="Armor"></kr-item>
    <kr-item label="Secondary Armor"></kr-item>
    <kr-item label="Accessory"></kr-item>
    <kr-item label="Orb"></kr-item>
    <kr-item label="Artifact"></kr-item>
  </section>
</template>

<script>
  import KrItem from './Item.vue'

  export default {
    components: { KrItem },
    name: 'kr-equipment'
  }
</script>

<style lang="stylus">
  .kr-equipment
    overflow-y: scroll
    overflow-x: hidden
</style>
