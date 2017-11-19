<template>
  <div id="app">
    <main class="container">
      <img class="is-pulled-left" src="/static/img/icons/android-chrome-192x192.png">
      <header class="section">
        <h1 class="title">AngryRaids</h1>
        <h2 class="subtitle">King's Raid Equipment Simulator</h2>
        <small>Preview release. In need of data in order to pursue further development, please
          <a href="https://github.com/ferrerojosh/angryraids/issues" target="_blank">submit an issue on github</a>
          to help.
        </small>
      </header>
      <div class="is-clearfix"></div>
      <router-view></router-view>
    </main>
    <footer class="github-footer">
      <a href="https://github.com/ferrerojosh/angryraids" target="_blank">
        <i class="fa fa-4x fa-github"></i>
        <p>Freshly <img width="16" height="16" src="/static/img/icons/bread.svg"> baked by Gavenda</p>
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
