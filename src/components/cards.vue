<template>
  <div class="main">
      <div id="cardContainer">
        <div id="cardWrap" v-for="objs in cardsArr" :key="objs">
          <div class="card" :id=objs.id>
            <h1>{{ objs.name }}</h1>
            <h3>{{ objs.taiohi }}</h3>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  props: [],
  data() {
    return {
      cardsArr: [
        {
          name: "project1",
          taiohi: "",
          id: "1"
        },
        {
          name: "project2",
          taiohi: "",
          id: "2"
        },
        {
          name: "project3",
          taiohi: "",
          id:"3"
        }
      ]
    }
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

  #cardContainer {
    width: 100vw;
    height: 100vw;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card {
    background-color: red;
    width: 18vw;
    height: 35vh;
    margin: 10px;
    border-radius: 15px;
  
    transition: 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card:hover {
    width: 20vw;
    height: 38vh;
    font-size: 20px;

    cursor: pointer;
  }

</style>
