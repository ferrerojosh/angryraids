<template>
  <section class="kr-item">
    <label class="label">{{ type }}</label>
    <div class="field has-addons">
      <div class="control is-expanded">
        <span class="select is-fullwidth">
          <select v-model="selectedItem" @change="onItemChange()">
            <option v-for="item in items" :key="item.name" :value="item">{{ item.name }}</option>
          </select>
        </span>
      </div>
      <div class="control">
        <span class="select">
          <select v-model="selectedTier" @change="onTierChange()">
            <option v-for="tier in numOfTiers" :value="tier">Tier {{ tier }}</option>
          </select>
        </span>
      </div>
    </div>
    <kr-item-details :item="selectedItem" :numOfOptions="numOfOptions"></kr-item-details>
  </section>
</template>

<script>
  import KrItemDetails from './ItemDetails.vue'
  import { types } from '../store/mutations'
  import { actionTypes } from '../store/actions'

  export default {
    components: { KrItemDetails },
    name: 'kr-item',
    props: {
      type: String,
    },
    data: () => ({
      selectedItem: {},
      selectedTier: 7
    }),
    computed: {
      itemsByTier() {
        return this.itemsByClass.filter(item => item.tier === this.selectedTier)
      },
      itemsByClass() {
        // generate unique weapon
        let uniqueWeapon = {
          name: this.selectedHero.uniqueWeapon,
          stats: {
            atk: 100
          },
          tier: 10,
          enhance: 0,
          stars: 0,
          rarity: "Unique",
          type: "Weapon",
          classes: [this.selectedHero.classId]
        }
        let items = this.$store.getters.items.filter(item => item.classes.includes(this.selectedHero.classId))
        items.push(uniqueWeapon)
        return items
      },
      selectedHero() {
        return this.$store.getters.selectedHero
      },
      items() {
        return this.itemsByTier.filter(item => item.type === this.type)
      },
      numOfOptions() {
        switch(this.selectedItem.rarity) {
          case 'Legendary':
            return 4
          case 'Ancient':
          case 'Heroic':
            return 3
          case 'Rare':
            return 2
          case 'Unique':
            return 0
        }
      },
      numOfTiers() {
        let tiers = new Set() // unique set

        this.itemsByClass.filter(item => item.type === this.type).forEach(item => {
          tiers.add(item.tier)
        })

        return Array.from(tiers)
      }
    },
    mounted() {
      this.onTierChange()
      // listen to hero change
      this.$store.subscribe(mutation => {
        if(mutation.type === types.CHANGE_HERO) {
          this.onTierChange()
        }
      })
    },
    methods: {
      onTierChange() {
        this.selectedItem = this.items[0]
        this.onItemChange()
      },
      onItemChange() {
        this.$store.dispatch(actionTypes.selectItem, this.selectedItem)
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
