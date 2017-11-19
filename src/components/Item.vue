<template>
  <section class="kr-item">
    <div class="field">
      <label>{{ type }}</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="selectedItem" disabled>
            <option v-for="item in items" :key="item.id" :value="item">{{ item.name }}</option>
          </select>
        </div>
      </div>
    </div>
    <kr-item-details :item="selectedItem" :numOfOptions="4"></kr-item-details>
  </section>
</template>

<script>
  import KrItemDetails from './ItemDetails.vue'

  export default {
    components: { KrItemDetails },
    name: 'kr-item',
    props: {
      type: String,
    },
    data: () => ({
      selectedItem: {}
    }),
    computed: {
      items() {
        let hero = this.$store.getters.selectedHero
        let items = this.$store.getters.itemsByClass(hero.classId)
        return items.filter(item => item.type === this.type)
      }
    },
    mounted() {
      this.selectedItem = this.items[0]
    },
    methods: {
      itemChange() {
        this.$emit('change', this.item)
      }
    }
  }
</script>

<style lang="sass">
  .kr-item
    padding: 1rem
    box-shadow: 0 1px 1px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
    margin-bottom: 1.5rem
</style>
