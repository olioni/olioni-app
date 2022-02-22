<template>
  <div class="main">
    <div id="searchBar">
      <textarea id="searchBarText" placeholder="Search here..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
  }

  .main {
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #searchBar {
    width: 80vw;
    height: 5vh;
    background-color: #f7f7f7;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #searchBarText {
    height: 4vh;
    width: 75vw;
    border: none;
    outline: none;
    resize: none;
    background-color: inherit;
    font-size: 20px;

    display: flex;
    align-content: center;

    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;
  }

</style>
