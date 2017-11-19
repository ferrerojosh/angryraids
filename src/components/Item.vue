<template>
  <section class="kr-item">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label>{{ label }}</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Tier</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Stars</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label>Enhancement Option 1</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Enhancement Option 2</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Enhancement Option 3</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Enhancement Option 4</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'kr-item',
    props: {
      label: String
    },
    data: () => ({
      item: {}
    })
  }
</script>

<style lang="sass">
  .kr-item
    padding: 1rem
    box-shadow: 0 1px 1px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
    margin-bottom: 1.5rem
</style>
