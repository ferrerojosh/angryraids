<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label">Stars</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="star" @change="changeItemAttribute">
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

          <span class="is-pulled-right" @click="changeItemAttribute">
            <!--<i class="fa fa-minus-circle kr-enhance-btn" @click="minusEnhance()"></i>-->
            <!--<i class="fa fa-plus-circle kr-enhance-btn" @click="plusEnhance()"></i>-->
            <small class="kr-enhance-btn" @click="maxEnhance()">Max</small>
          </span>
        </label>
        <div class="is-clearfix"></div>
        <div class="control">
          <div class="is-fullwidth">
            <input class="input" type="number" v-model="enhancement" min="0" :max="numOfEnhancement">
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
            <select>
              <option>Select option</option>
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
    data: () => ({
      star: 0,
      enhancement: 0
    }),
    watch: {
      item() {
        this.star = 0
        this.enhancement = 0
      }
    },
    computed: {
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
      this.changeItemAttribute()

      this.$store.subscribe(mutation => {
        if(mutation.type === types.CHANGE_HERO) {
          this.enhancement = 0
          this.star = 0
        }
      })
    },
    methods: {
      plusEnhance() {
        let result = this.enhancement + 1
        this.enhancement = result <= this.numOfEnhancement ? result : this.enhancement
      },
      maxEnhance() {
        this.enhancement = this.numOfEnhancement
      },
      minusEnhance() {
        let result = this.enhancement - 1
        this.enhancement = result >= 0 ? result : this.enhancement
      },
      changeItemAttribute() {
        let item = Object.assign({}, this.item, { stars: this.star, enhance: this.enhancement })
        this.$store.dispatch(actionTypes.selectItem, item)
      },
      statWithEnhancement(item) {
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
