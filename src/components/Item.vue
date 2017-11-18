<template>
  <section class="kr-item row">
    <div class="col col-sm-6 kr-item-col">
      <div class="form-group">
        <label>{{ label }}</label>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Tier</label>
        <select class="form-control" :id="label">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Stars</label>
        <select class="form-control" :id="label">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
    <div class="col col-sm-6 kr-item-col">
      <div class="form-group">
        <label>Enhancement Option 1</label>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Enhancement Option 2</label>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Enhancement Option 3</label>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Enhancement Option 4</label>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'kr-item',
    props: {
      label: String
    }
  }
</script>

<style lang="stylus">
  .kr-item
    padding: 1rem

  .kr-item-col
    flex-direction: column

  .form-group
    display: block
</style>
