<template>
  <div>
    <div class="col col-sm-4 kr-stat kr-stat-label">
      {{ label }}
    </div>
    <div class="col col-sm-6 kr-stat">
      <span>{{ base }}</span> + <span class="kr-stat-value">{{ value }}</span> (<span class="kr-stat-value">{{ base + value }}</span>)
    </div>
    <div v-if="isOption" class="col col-sm-2 kr-stat kr-stat-percent">
      {{ percentage * 100 }}%
    </div>
  </div>
</template>

<script>
  export default {
    name: 'kr-hero-stat',
    props: {
      label: String,
      value: Number,
      base: Number,
      isOption: Boolean
    },
    methods: {
      attenuate(x, k, a, b) {
        return Math.floor(k * 1000000 / (a * x * x + b * x + 1000000))
      },
      attenuateInv(x, k, a, b) {
        return k - Math.floor(k * 1000000 / (a * x * x + b * x + 1000000))
      },
      calculateStatWithCap(stat, maxK, x1, a1, b1, x2, a2, b2, minK, x3, a3, b3, x4, a4, b4) {
        return (
          (stat === 0) ? 0 :
          (stat > x1) ? attenuateInv(stat, maxK, a1, b1) :
          (stat > x2) ? Math.floor(a2 * stat / 1000) + b2 :
          (stat < x3) ? attenuateInv(stat, minK, a3, b3) :
          (stat < x4) ? attenuate(stat, minK, a4, b4) : stat
        ) / 1000
      }
    },
    mounted() {
      console.log(`Current Label ${this.label}`)
    },
    computed: {
      percentage() {
        let maxK, x1, a1, b1, x2, a2, b2, minK, x3, a3, b3, x4, a4, b4
        let totalStat = (this.value + this.base)

        switch(this.label) {
          case 'Crit':
          case 'ACC':
            maxK = 2000
            x1 = 2000
            a1 = 1
            b1 = 1500
            x2 = 1500
            a2 = 500
            b2 = 750
            minK = 0
            x3 = -500
            a3 = 0
            b3 = 0
            x4 = 0
            a4 = 0
            b4 = 0
            break
          case 'P.Dodge':
          case 'M.Dodge':
          case 'P.Block':
          case 'M.Block':
          case 'Lifesteal':
            maxK = 1000
            x1 = 1000
            a1 = 3
            b1 = 0
            x2 = 500
            a2 = 500
            b2 = 250
            minK = 0
            x3 = -500
            a3 = 0
            b3 = 0
            x4 = 0
            a4 = 0
            b4 = 0
            break
          case 'Penetration':
          case 'P.Tough':
          case 'M.Tough':
          case 'P.Block DEF':
          case 'M.Block DEF':
          case 'CC Resist':
            maxK = 900
            x1 = 1000
            a1 = 2
            b1 = 1000
            x2 = 450
            a2 = 409
            b2 = 266
            minK = 0
            x3 = -500
            a3 = 0
            b3 = 0
            x4 = 0
            a4 = 0
            b4 = 0
            break
          case 'ATK Spd':
            maxK = 2500
            x1 = 3000
            a1 = 1
            b1 = 843
            x2 = 1750
            a2 = 333
            b2 = 1166
            minK = 250
            x3 = -10000
            a3 = 0
            b3 = 0
            x4 = 500
            a4 = 1
            b4 = -1500
            break
          default:
            return totalStat / 1000
        }
        return this.calculateStatWithCap(totalStat, maxK, x1, a1, b1, x2, a2, b2, minK, x3, a3, b3, x4, a4, b4)
      }
    }
  }
</script>

<style lang="stylus">
  .kr-stat
    padding: 0.2rem !important
    display: inline

  .kr-stat-value
    color: #00cc00
</style>
