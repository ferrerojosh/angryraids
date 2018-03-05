<template>
  <section>
    <label v-if="numOfRunes > 0" class="label">Runes</label>
    <div v-for="i in numOfRunes" class="field has-addons">
      <div class="control is-tier-control">
        <span class="select">
          <select v-model="runeRarity[i - 1]" :title="`Rune Slot Rarity ${i}`">
            <option value="Heroic">Heroic</option>
            <option value="Ancient">Ancient</option>
          </select>
        </span>
      </div>
      <div class="control is-expanded">
        <span class="select is-fullwidth">
          <select v-model="item.runes[i - 1]" :title="`Rune Slot ${i}`">
            <option v-for="rune in runesByRarity(runeRarity[i - 1])" :value="rune">{{ rune.name }}</option>
          </select>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Stars</label>
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="star" title="Stars">
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
        <span>Enhancement</span>
        <small @click="maxEnhance" class="is-pulled-right kr-enhance-btn">Max</small>
      </label>
      <div class="is-clearfix"></div>
      <div class="control">
        <div class="is-fullwidth">
          <input title="Enhancement" class="input" type="number" v-model="enhancement" :min="0" :max="numOfEnhancement">
        </div>
      </div>
    </div>
    <label v-if="numOfOptions > 0" class="label">Item Options</label>
    <div v-for="i in numOfOptions" class="field has-addons">
      <div class="control">
        <div class="select is-fullwidth">
          <select :title="`Item Option ${i}`" v-model="item.options[i - 1]">
            <option v-for="option in options" :value="option">{{ option.name }}</option>
          </select>
        </div>
      </div>
      <div class="control is-expanded">
        <input title="Option Value" v-model="item.options[i - 1].value" :min="1" :max="item.options[i - 1].max"
               class="input" type="number">
      </div>
      <div class="control is-option-max">
        <a v-if="item.options[i - 1].type === 'modifier'" class="button is-static">{{ item.options[i - 1].max }} %</a>
        <a v-else class="button is-static">{{ item.options[i - 1].max }}</a>
      </div>
    </div>
    <template v-if="this.item.tier !== 10 && item.enchantOption">
      <label class="label">Enchant Option</label>
      <div class="field has-addons">
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="item.enchantOption">
              <option v-for="option in enchants" :value="option">{{ option.name }}</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input title="Enchant Option Value" v-model="item.enchantOption.value" :min="1" :max="item.enchantOption.max"
                 class="input" type="number">
        </div>
        <div class="control is-option-max">
          <a v-if="item.enchantOption.type === 'modifier'" class="button is-static">{{ item.enchantOption.max }} %</a>
          <a v-else class="button is-static">{{ item.enchantOption.max }}</a>
        </div>
      </div>
    </template>
    <label class="label">Stats</label>
    <div class="field">
      <table class="table is-fullwidth">
        <tbody>
        <tr v-for="(value, stat) in statWithEnhancement(item)">
          <td>{{ statToLabel(stat) }}</td>
          <td class="has-text-right">{{ value }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
  import { types } from '../store/mutations'

  export default {
    name: 'kr-item-details',
    props: {
      numOfOptions: Number,
      item: Object
    },
    data: () => ({
      runeRarity: new Array(4).fill('Heroic')
    }),
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
      enhancement: {
        get() {
          return this.item.enhancement
        },
        set(val) {
          if (val > this.numOfEnhancement) {
            this.item.enhancement = this.numOfEnhancement
          } else if (val < 0 || val === '') {
            this.item.enhancement = 0
          } else {
            this.item.enhancement = val
          }
        }
      },
      options() {
        return this.item.availableOptions
      },
      enchants() {
        return this.item.availableEnchants
      },
      availableRunes() {
        return this.$store.getters.runesByType(this.item.type)
      },
      numOfRunes() {
        if (this.item.type === 'Weapon') {
          if (this.item.rarity === 'Unique') {
            return 3
          } else return 1
        } else if (
          this.item.type === 'Armor' ||
          this.item.type === 'Secondary Armor') {
          return 1
        } else {
          return 0
        }
      },
      numOfEnhancement() {
        switch (this.item.rarity) {
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
        if (mutation.type === types.CHANGE_HERO) {
          this.enhancement = 0
          this.star = 0
        }
      })
    },
    methods: {
      maxEnhance() {
        this.enhancement = this.numOfEnhancement
      },
      runesByRarity(rarity) {
        return this.availableRunes.filter(r => r.rarity === rarity)
      },
      statWithEnhancement(item) {
        if (item.stats === undefined) return 0
        // clone stats to avoid modifying state, ugly I know
        let stats = JSON.parse(JSON.stringify(item.stats))
        return this.$store.getters.applyStarAndEnhancement(stats, this.star, this.enhancement, item.rarity)
      },
      statToLabel(stat) {
        switch (stat) {
          case 'maxHp':
            return 'MAX HP'
          case 'atk':
            return 'ATK'
          case 'pDef':
            return 'P.DEF'
          case 'mDef':
            return 'M.DEF'
          case 'critChance':
            return 'Crit'
          case 'critDamage':
            return 'Crit DMG'
          case 'penetration':
            return 'Penetration'
          case 'accuracy':
            return 'ACC'
          case 'pDodge':
            return 'P.Dodge'
          case 'mDodge':
            return 'M.Dodge'
          case 'pBlock':
            return 'P.Block'
          case 'mBlock':
            return 'M.Block'
          case 'pBlockDef':
            return 'P.Block DEF'
          case 'mBlockDef':
            return 'M.Block DEF'
          case 'pTough':
            return 'P.Tough'
          case 'mTough':
            return 'M.Tough'
          case 'pCritResist':
            return 'P.Crit Resist'
          case 'mCritResist':
            return 'M.Crit Resist'
          case 'ccResist':
            return 'CC Resist'
          case 'lifesteal':
            return 'Lifesteal'
          case 'atkSpd':
            return 'ATK Spd'
          case 'manaAtk':
            return 'MP Recovery/Attack'
          default:
            return '???'
        }
      }
    }
  }
</script>

<style lang="sass">
  .kr-enhance-btn
    cursor: pointer
</style>
