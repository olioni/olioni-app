<template>
  <div class="main">
    <div id="insideWrap">
      <div id="projectTitleWrap">
        <h1 id="taiohiProjectTitle"> {{ taiohiObj.taiohi.toUpperCase() + "'S PASSION PROJECT" }}</h1>
      </div>
      <div id="rowWrap">
        <div class="rowWrapChild" id="projectImages">
        </div>
        <div class="rowWrapChild" id="projectInfoWrap">
          <h3 class="projectInfo">MY PASSION PROJECT IS:</h3>
          <p class="projectInfo" id="taiohiProjectBrief"> {{ taiohiObj.brief }} </p>
          <br>
          <p class="projectInfo" id="taiohiProjectDesc"> {{ taiohiObj.desc }}</p>
        </div>
      </div>
      <div id="backButtonWrap">
        <button @click="returnHome" id="backButton" :style="{boxShadow: shadow}">BACK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectDashboard',
  props: ['taiohiObj'],
  data() {
    return {
      shadow: '8px 8px 10px #888888'
    }
  },
  methods: {
    returnHome() {
      this.$emit('returnToCards')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  * {
    margin: 0;
  }

  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
  }

  #insideWrap {
    width: 80vw;
    height: 100vh;
  }

  #projectTitleWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 10vh;
  }

  #taiohiProjectTitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 60px;
  }

  #rowWrap {
    width: 100%;
    height: 78vh;

    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: row;

    font-family: 'Lato', sans-serif;
  }

  .rowWrapChild {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;

    width: 50%;
    height: 100%;

    /* padding-left: 10px;
    padding-right: 10px; */
  }

  #projectInfoWrap {
    text-align: left;
  }

  .projectImagesWrap {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .projectImagesRows {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* background-color: orange;
    border: solid 1px purple; */
  }

  #topPhotosColumnWrap, #bottomPhotosColumnWrap, #topBigPhotoWrap, #bottomBigPhotoWrap {
    display: flex;
    justify-content: center;
  }

  #topPhotosColumnWrap {
    align-items: flex-end;
  }

  #topBigPhotoWrap {
    align-items: flex-start;
  }

  #bottomPhotosColumnWrap {
    align-items: flex-start;
  }

  #bottomBigPhotoWrap {
    align-items: flex-end;
  }

  .photo1, .photo2, .photo3 {
    margin: 3px;
    border-radius: 15px;

    background-color: #ebebeb;
  }

  .photo1, .photo2 {
    width: 50%;
    height: 60%;
  }

  .photo3 {
    width: 90%;
    height: 100%;
  }

  #backButtonWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
  }

  #backButton {
    border: none;
    height: 65%;
    width: 80%;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    border-radius: 15px;
    transition: 0.3s;
  }

  #backButton:hover {
    cursor: pointer;
    font-size: 25px;
    width: 85%;
    height: 70%;
  }
</style>
