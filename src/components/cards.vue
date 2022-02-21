<template>
  <div class="main">
      <div id="cardContainer">
          <h1>msg</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
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
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>
