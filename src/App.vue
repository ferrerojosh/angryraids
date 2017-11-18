<template>
  <div id="app">
    <main class="container">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <div class="text-center">
        <a href="https://github.com/ferrerojoshy/" target="_blank">
          <i class="fa fa-4x fa-github"></i>
          <p>Made by Gavenda</p>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="stylus" src="./stylus/main.styl"></style>
