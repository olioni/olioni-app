<template>
  <searchBar/>
</template>

<script>
import searchBar from './components/searchBar.vue'

export default {
  name: 'App',
  components: {
    searchBar
  }
}
</script>

<style>
 * {
   width: 100vw;
   height: 100vh;
   margin: 0;
 }
</style>
