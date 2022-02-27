<template>
  <div class="main">
      <div id="cardContainer">
        <div id="cardWrap" v-for="objs in cardsArr" :key="objs">
          <div class="card" :style="{boxShadow: shadow}" :id=objs.id @click="goToDashboard(objs)">
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
          desc: "My passion project is a website dedicated to display the various Passion Projects in Tai Wananga Tu Toa. Each project is done by a taiohi varying from the years of 9-13 and is a display of each persons individual passions that they would like to pursue.",
          id: "1"
        },
        {
          name: "project2",
          projectImg: "",
          taiohi: "",
          brief: "",
          desc: "",
          id: "2"
        },
        {
          name: "project3",
          projectImg: "",
          taiohi: "",
          brief: "",
          desc: "",
          id:"3"
        },
        {
          name: "project4",
          projectImg: "",
          taiohi: "",
          brief: "",
          desc: "",
          id:"4"
        },
        {
          name: "project5",
          projectImg: "",
          taiohi: "",
          brief: "",
          desc: "",
          id:"5"
        },
        {
          name: "project6",
          projectImg: "",
          taiohi: "",
          brief: "",
          desc: "",
          id:"6"
        },
        {
          name: "project7",
          projectImg: "",
          taiohi: "",
          brief: "",
          desc: "",
          id:"7"
        },
      ],
      colorArr: ['3454d1', '96cdff', 'a63d40', 'fdca40', '2afc98', 'faf2a1', 'ea9ab2', 'ffa69e', 'f18701', 'fdfcdc'],
      shadow: '8px 8px 10px #888888'
    }
  },
  methods: {
    goToDashboard(objs) {
      // console.log(objs)
      this.$emit("taiohiObject", objs)
      // this.$emit('testString', this.test)
    },
    generateRandomColor() {
      let rng = Math.floor(Math.random() * this.colorArr.length)
      let randomColor = this.colorArr[rng]
      // console.log(randomColor)
      return '#' + randomColor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

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
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card {
    background-color: #ebebeb;
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
    font-family: 'Lato', sans-serif;

  }

  #projectName {
    font-family: 'Roboto', sans-serif;
  }

  /* .cardBrief {
    
  } */

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
