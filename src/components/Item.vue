<template>
  <section class="kr-item">
    <article v-if="message" :class="messageClass">
      <div class="message-header">
        <p>{{ messageTitle }}</p>
      </div>
      <div class="message-body">
        {{ message }}
      </div>
    </article>
    <div class="field has-addons">
      <div class="control is-tier-control">
        <span class="select">
          <select v-model="selectedTier" @change="onTierChange()">
            <option v-for="tier in numOfTiers" :value="tier">Tier {{ tier }}</option>
          </select>
        </span>
      </div>
      <div class="control is-expanded">
        <span class="select is-fullwidth">
          <select v-model="selectedItem">
            <option v-for="item in items" :key="item.name" :value="item">{{ item.name }}</option>
          </select>
        </span>
      </div>
    </div>
    <div v-if="selectedItem">
      <kr-item-details :item="selectedItem" :numOfOptions="numOfOptions"/>
    </div>
  </section>
</template>

<script>
  import KrItemDetails from './ItemDetails.vue'
  import { types } from '../store/mutations'
  import { actionTypes } from '../store/actions'

  export default {
    components: {
      KrItemDetails
    },
    name: 'kr-item',
    props: {
      type: String,
      message: String,
      messageTitle: {
        default: 'Info',
        type: String
      },
      messageType: {
        default: 'info',
        type: String
      }
    },
    data: () => ({
      selectedTier: 7
    }),
    watch: {
      selectedTier() {
        this.onTierChange()
      }
    },
    methods: {
      onTierChange() {
        this.selectedItem = this.items[ 0 ]
      },
    },
    mounted() {
      this.onTierChange()
      this.$store.subscribe(mutation => {
        if(mutation.type === types.CHANGE_HERO) {
          this.onTierChange()
        }
      })
    },
    computed: {
      selectedItem: {
        get() {
          return this.$store.getters.selectedItemByType(this.type)
        },
        set(val) {
          this.$store.dispatch(actionTypes.selectItem, val)
        }
      },
      messageClass() {
        return `message is-${this.messageType}`
      },
      itemsByTier() {
        return this.itemsByClass.filter(item => item.tier === this.selectedTier)
      },
      itemsByClass() {
        // generate unique weapon
        let uniqueWeapon = {
          name: this.selectedHero.uniqueWeapon,
          stats: {
            atk: this.selectedHero.uniqueBaseAtk
          },
          tier: 10,
          enhancement: 0,
          stars: 0,
          rarity: 'Unique',
          type: 'Weapon',
          classes: [this.selectedHero.classId],
          enchantOption: {},
          options: [],
          runes: []
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
    }
  }
</script>
