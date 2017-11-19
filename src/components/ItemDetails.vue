<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label>Tier</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="tier" disabled>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label>Stars</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="star" disabled>
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
    </div>
    <div class="column">
      <div v-for="i in numOfOptions" class="field">
        <label>Item Option {{ i }}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select disabled>
              <option>Select option</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'kr-item-details',
    props: {
      numOfOptions: Number,
      item: Object
    },
    data: () => ({
      tier: 7,
      star: 0
    }),
    computed: {
      value() {
        return 0
      }
    }
  }
</script>
