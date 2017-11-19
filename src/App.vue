<template>
  <div id="app">
    <main class="container">
      <router-view></router-view>
    </main>
    <footer class="github-footer">
      <a href="https://github.com/ferrerojosh/angryraids" target="_blank">
        <i class="fa fa-4x fa-github"></i>
        <p>Freshly baked by Gavenda</p>
      </a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="sass" src="./sass/main.sass"></style>
<style lang="sass">
  .github-footer
    text-align: center
    margin: 2rem
    > a
      color: #000000
      > p
        color: #666
        font-size: 0.8rem
</style>
