<template>
  <div class="main">
    <div id="projectTitleWrap">
      <h1 id="taiohiProjectTitle"> {{ taiohiObj.taiohi.charAt(0).toUpperCase() + taiohiObj.taiohi.slice(1) + "'s " + taiohiObj.name }}</h1>
    </div>
    <div id="projectDescWrap">
      <p id="taiohiProjectDesc"> {{ taiohiObj.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectDashboard',
  props: ['taiohiObj'],
  data() {
    return {

    }
  },
  methods: {

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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
  }

  #projectTitleWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100vw;
    height: 7vh;
  }

  #projectDescWrap {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 20vh;
  }
</style>
