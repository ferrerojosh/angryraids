<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label">Stars</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="star">
              <option value="0">None</option>
              <option value="1">&#9733;</option>
              <option value="2">&#9733;&#9733;</option>
              <option value="3">&#9733;&#9733;&#9733;</option>
              <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
              <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">
          <span class="is-pulled-left">Enhancement</span>
          <small @click="maxEnhance" class="is-pulled-right kr-enhance-btn">Max</small>
        </label>
        <div class="is-clearfix"></div>
        <div class="control">
          <div class="is-fullwidth">
            <input class="input" type="number" v-model="enhancement" :min="0" :max="numOfEnhancement">
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Stats</label>
        <table class="table is-fullwidth">
          <tbody>
            <tr v-for="(value, stat) in statWithEnhancement(item)">
              <td>{{ statToLabel(stat) }}</td>
              <td class="has-text-right">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="column">
      <div v-for="i in numOfOptions" class="field">
        <label class="label">Item Option {{ i }}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="item.options[i - 1]">
              <option v-for="option in options" :value="option">{{ option.name }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { actionTypes } from '../store/actions'
  import { types } from '../store/mutations'

  export default {
    name: 'kr-item-details',
    props: {
      numOfOptions: Number,
      item: Object
    },
    watch: {
      item() {
        this.star = 0
        this.enhancement = 0
      }
    },
    computed: {
      star: {
        get() {
          return this.item.stars
        },
        set(val) {
          this.item.stars = val
        }
      },
      options: {
        get() {
          return this.$store.getters.options
        }
      },
      enhancement: {
        get() {
          return this.item.enhancement
        },
        set(val) {
          if(val > this.numOfEnhancement) {
            this.item.enhancement = this.numOfEnhancement
          } else if (val < 0 || val === '') {
            this.item.enhancement = 0
          } else {
            this.item.enhancement = val
          }
        }
      },
      numOfEnhancement() {
        switch(this.item.rarity) {
          case 'Legendary':
            return 20
          case 'Ancient':
          case 'Heroic':
            return 15
          case 'Rare':
            return 10
          case 'Unique':
            return 80
        }
      }
    },
    mounted() {
      this.$store.subscribe(mutation => {
        if(mutation.type === types.CHANGE_HERO) {
          this.enhancement = 0
          this.star = 0
        }
      })
    },
    methods: {
      maxEnhance() {
        this.enhancement = this.numOfEnhancement
      },
      statWithEnhancement(item) {
        if(item.stats === undefined) return 0
        // clone stats to avoid modifying state, ugly I know
        let stats = JSON.parse(JSON.stringify(item.stats))
        return this.$store.getters.applyStarAndEnhancement(stats, this.star, this.enhancement, item.rarity)
      },
      statToLabel(stat) {
        switch(stat) {
          case 'maxHp': return 'MAX HP'
          case 'atk': return 'ATK'
          case 'pDef': return 'P.DEF'
          case 'mDef': return 'M.DEF'

          case 'critChance': return 'Crit'
          case 'critDamage': return 'Crit DMG'
          case 'penetration': return 'Penetration'
          case 'accuracy': return 'ACC'
          case 'pDodge': return 'P.Dodge'
          case 'mDodge': return 'M.Dodge'
          case 'pBlock': return 'P.Block'
          case 'mBlock': return 'M.Block'
          case 'pBlockDef': return 'P.Block DEF'
          case 'mBlockDef': return 'M.Block DEF'
          case 'pTough': return 'P.Tough'
          case 'mTough': return 'M.Tough'
          case 'pCritResist': return 'P.Crit Resist'
          case 'mCritResist': return 'M.Crit Resist'
          case 'ccResist': return 'CC Resist'
          case 'lifesteal': return 'Lifesteal'
          case 'atkSpd': return 'ATK Spd'
          case 'manaAtk': return 'MP Recovery/Attack'
          default: return '???'
        }
      }
    }
  }
</script>

<style lang="sass">
  .kr-enhance-btn
    cursor: pointer
</style>
