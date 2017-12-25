<template>
  <div id="app">
    <main class="container">
      <img class="is-pulled-left" alt="" src="/static/img/icons/android-chrome-192x192.png">
      <header class="section">
        <h1 class="title">AngryRaids</h1>
        <h2 class="subtitle">King's Raid Equipment Simulator</h2>
        <small>Release 0.1.8</small>

      </header>
      <router-view></router-view>
    </main>
    <footer class="github-footer">
      <a href="https://github.com/ferrerojosh/angryraids" rel="noopener" target="_blank">
        <svg id="i-github" viewBox="0 0 64 64" width="48" height="48">
          <path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
        </svg>
        </a>
      <p>Freshly <img width="24" height="24" src="/static/img/icons/bread.svg" alt="baked"> by Gavenda</p>
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
    margin: 2.5rem
    > a
      color: #000000
    > p
      color: #666
      font-size: 0.8rem

  .changes
    margin-left: 2rem
    margin-bottom: 2rem

    > ul
      list-style-type: square
      margin-top: 1em
      > li
        font-size: 14px
        margin-left: 2em
</style>
