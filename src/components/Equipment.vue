<template>
  <section class="columns">
    <div class="column">
      <kr-item type="Weapon"></kr-item>
      <kr-item type="Armor"></kr-item>
      <kr-item type="Secondary Armor"></kr-item>
    </div>
    <div class="column">
      <kr-item type="Accessory"></kr-item>
      <kr-item type="Orb"></kr-item>
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
