<template>
  <div id="app">
    <main class="container">
      <img class="is-pulled-left" alt="" src="/static/img/icons/android-chrome-192x192.png">
      <header class="section">
        <h1 class="title">AngryRaids</h1>
        <h2 class="subtitle">King's Raid Equipment Simulator</h2>
        <small>Release 0.1.8</small>

      </header>
      <div class="is-clearfix"></div>
      <div class="changes">
        <p>What's new?</p>
        <ul>
          <li>Recently fixed a wrong calculation on applying stat modifiers.</li>
        </ul>
      </div>

      <router-view></router-view>
    </main>
    <footer class="github-footer">
      <a href="https://github.com/ferrerojosh/angryraids" rel="noopener" target="_blank">
        <i class="fa fa-3x fa-github"></i>
        <p>Freshly <img width="24" height="24" src="/static/img/icons/bread.svg" alt="baked"> by Gavenda</p>
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
