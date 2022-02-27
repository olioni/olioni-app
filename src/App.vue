<template>
  <div id="headerWrap" v-if="header">
    <h1 id="header">PASSION PROJECTS</h1>
  </div>
  <searchBar v-if="showSearchBar"/>
  <cards v-if="showCards" @taiohiObject="displayDashboard"/>
  <projectDashboard v-if="showDashboard" :taiohiObj="this.taiohiObj" @returnToCards="returnToCards"/>
</template>

<script>
import searchBar from './components/searchBar.vue'
import cards from './components/cards.vue'
import projectDashboard from './components/projectDashboard.vue'

export default {
  name: 'App',
  components: {
    searchBar,
    cards,
    projectDashboard
  },
  data() {
    return {
      showDashboard: false,
      showSearchBar: true,
      showCards: true,
      header: true,

      taiohiObj: null
    }
  },
  methods: {
    displayDashboard(taiohiObject) {
      this.taiohiObj = taiohiObject
      
      this.showDashboard = true
      this.header = false
      this.showSearchBar = false
      this.showCards = false
    },
    returnToCards() {
      this.showDashboard = false
      this.header = true
      this.showSearchBar = true
      this.showCards = true
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

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

    #headerWrap {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
  
      height: 10vh;
      width: 100vw;
    }

    #header {
      font-family: 'Montserrat', sans-serif;
      font-size: 50px;
    }
</style>
