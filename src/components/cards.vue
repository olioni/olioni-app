<template>
  <div class="main">
      <div id="cardContainer">
        <div id="cardWrap" v-for="objs in cardsArr" :key="objs">
          <div class="card" :id=objs.id @click="goToDashboard(objs)">
            <h1 id="projectName">{{ objs.name }}</h1>
            <h3 id="taiohiName">{{ objs.taiohi.charAt(0).toUpperCase() + objs.taiohi.slice(1) }}</h3>
            <p class="cardBrief">{{ objs.brief }}</p>
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
      backgroundColor: '',
      cardsArr: [
        {
          name: "Passion Project Website",
          projectImg: "https://static9.depositphotos.com/1594308/1131/i/600/depositphotos_11311945-stock-photo-new-project.jpg",
          taiohi: "olioni",
          brief: "A website dedicated to displaying the various Passion Projects in Tu Toa",
          desc: "My passion project is a website dedicated to display the various Passion Projects in Tai Wananga Tu Toa. Each project is done by a taiohi varying from the years of 9-13.",
          id: "1"
        },
        {
          name: "project2",
          projectImg: "",
          taiohi: "",
          brief: "",
          id: "2"
        },
        {
          name: "project3",
          projectImg: "",
          taiohi: "",
          brief: "",
          id:"3"
        }
      ],
      test: 'this is a string'
    }
  },
  methods: {
    goToDashboard(objs) {
      // console.log(objs)
      this.$emit("taiohiObject", objs)
      // this.$emit('testString', this.test)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
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
    background-color: rgb(200, 200, 200);
    width: 18vw;
    height: 35vh;
    margin: 10px;
    border-radius: 15px;
    font-size: 15px;
  
    transition: 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  #taiohiName {
    font-style: italic;
  }

  .card:hover {
    width: 20vw;
    height: 38vh;
    font-size: 16px;

    cursor: pointer;
  }

  #cardBrief {
    overflow: hidden;
  }

</style>
