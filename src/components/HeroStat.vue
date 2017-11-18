<template>
  <div>
    <div class="col col-sm-4 kr-stat kr-stat-label">
      {{ label }}
    </div>
    <div class="col col-sm-6 kr-stat">
      <span>{{ base }}</span> + <span class="kr-stat-value">{{ value }}</span> (<span class="kr-stat-value">{{ base + value }}</span>)
    </div>
    <div v-if="isOption" class="col col-sm-2 kr-stat kr-stat-percent">
      {{ percentage }}%
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
    computed: {
      percentage() {
        return (this.value + this.base) / 10
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
