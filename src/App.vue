<template>
  <searchBar/>
  <cards/>
</template>

<script>
import searchBar from './components/searchBar.vue'
import cards from './components/cards.vue'

export default {
  name: 'App',
  components: {
    searchBar,
    cards
  }
}
</script>

<style>
  * {
    margin: 0;
    }

    .main {
      display: flex;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
</style>
