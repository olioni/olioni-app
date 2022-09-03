<template>
  <!-- HERE BEGINS THE HTML FOR THE cards_dashboard.vue COMPONENT -->
  <div id="dashboard">
    <!-- HERE IS THE HEADER FOR THE cards_dashboard.vue COMPONENT -->
    <div id="header">
      <h1 id="title">PASSION PROJECTS</h1> 
    </div>
    <!-- HERE IS THE BODY FOR THE cards_dashboard.vue COMPONENT -->
    <div id="body">
      <!-- HERE IS THE CARDS CONTAINER FOR THE cards_dashboard.vue COMPONENT -->
      <!-- THIS CONTAINER HOLDS THE CARDS WHICH ARE SEPERATED INTO THREE DIFFERENT SECTIONS -->
      <div class="cards" v-for="(card, index) in cardObj" :key="index" @mouseenter="selectIndex(index)" @mouseleave="deSelectIndex()">
        <!-- HERE IS THE CARDS-TOP CONTAINER WHICH HOLDS THE INFORMATION ABOUT THE CARDS PROJECT -->
        <div class="cards-top">
          <div class="card-title-wrap" v-if="info_index != index">
            <h2> {{ card.project_name }} </h2>
            <p> Created by {{ card.first_name }} </p>
          </div>
          <div class="card-brief-wrap" v-if="info_index == index">
            <p class="card-brief">{{ card.project_brief }}</p>
          </div>
        </div>
        <!-- HERE IS THE CARDS-MIDDLE CONTAINER WHICH HOLDS THE EDIT BUTTON TO CHANGE THE CARD -->
        <div class="cards-middle" v-if="edit_index != index">
          <div class="pencil-icon" @click="switchEditMode(index)"></div>
        </div>
        <!-- HERE IS THE CARDS-BOTTOM CONTAINER WHICH HOLDS THE TWO BUTTONS TO EDIT/FINISH EDITING THE BUTTON -->
        <div class="cards-bottom" v-if="edit_index == index && edit_mode">
          <button class="card-buttons done" @click="finishEditing()">DONE</button>
          <button class="card-buttons edit" @click="emitToApp('show-edit-card-form', card)">EDIT</button>
        </div>
      </div>
      <!-- HERE IS AT THE END WHICH WHEN CLICKED DISPLAYS THE create_card_form.vue POPUP -->
      <div class="cards cards-add-card" @click="emitToApp('show-create-card-form')">
        <div class="cards-top plus-sign">+</div>
        <div class="cards-bottom add-a-card">ADD A CARD</div>
      </div>
    </div>
    <!-- HERE IS THE FOOTER FOR THE cards_dashboard.vue COMPONENT -->
    <div id="footer">
    </div>
  </div>
</template>

<script>
import { returnCardObj } from '../firebase.js'

export default {
  name: 'cards_dashboard',
  props: [],
  data() {
    return {
      cardObj: null,

      info_index: null,
      edit_index: null,
      edit_mode: false
    }
  },
  methods: {
    // THIS FUNCTION DISPLAYS THE CARD BRIEF WHEN THE MOUSE HOVERS OVER THE CARD
    selectIndex(index) {
      if (this.edit_index != index) {
        this.info_index = index
      }
    },
    // THIS FUNCTION DISPLAYS THE CARD TITLE WHEN THE MOVES AWAY FROM THE CARD
    deSelectIndex() {
      this.info_index = null
    },
    // THIS FUNCTION SWITCHES ONE OF THE CARDS INTO EDIT MODE FOR THE USER TO ALTER/REMOVE THE CARD
    switchEditMode(index) {
      this.info_index = null
      if (!this.edit_mode) {
        this.edit_mode = true
        this.edit_index = index
      } else {
        if (this.edit_mode && this.edit_index != null) {
          this.edit_index = index
        } else {
          this.edit_mode = false
          this.edit_index = null
        }
      }
    },
    // THIS FUNCTION TURNS EDITING MODE OFF ON WHATEVER CARD THE USER HAS SELECTED
    finishEditing() {
      this.edit_mode = false
      this.edit_index = null
    },
    // THIS FUNCTION WILL PUSH UP THE DATA TO App.vue AND DEPENDING ON WHAT BUTTON IS PRESSED, WILL DISPLAY ONE OF THE TWO FORMS
    emitToApp(msg, item) {
      if (item) {
        this.$emit(msg, item)
      } else {
        this.$emit(msg)
      }
    }
  },
  mounted() {
    // THIS FUNCTION IS CALLED BEFORE THE PAGE IS LOADED TO ASSIGN A VARIABLE TO THE INCOMING DATA FROM FIREBASE
    returnCardObj().then((obj) => {
      this.cardObj = obj
    })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

/* STYLE THE MAIN DASHBOARD THAT ALL THE CONTAINERS ARE IN */
#dashboard {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}

/* STYLE THE HEADER, BODY AND FOOTER CONTAINERS TO HAVE THE SAME RULES */
#header, #body, #footer {
  display: flex;
  justify-content: center;
  align-items: center;
} 

/* HERE BEGINS THE STYLES FOR THE HEADER CONTAINER AND ITS CHILDREN */
#header {
  width: 100vw;
  height: 15vh;
}

/* STYLE THE TITLE TEXT */
#title {
  font-family: 'Bebas Neue', cursive;
  font-size: 60px;
}
/* HERE ENDS THE STYLES FOR THE HEADER CONTAINER AND ITS CHILDREN */

/* HERE BEGINS THE STYLES FOR THE BODY CONTAINER AND ITS CHILDREN */
#body {
  width: 99vw;
  height: 80vh;

  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  padding: 5px;
}
/* HERE ENDS THE STYLES FOR THE BODY CONTAINER AND ITS CHILDREN */

/* HERE BEGINS THE STYLES FOR THE CARDS CONTAINER WHICH IS HELD IN THE BODY CONTAINER */
.cards {
  width: 14vw;
  height: 28vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  flex-direction: column;
  
  background-color: rgb(226, 226, 226);
  
  cursor: pointer;
  
  transition: 0.3s;
  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  
  margin: 2px;
  
  border-radius: 5px;
  
  padding: 10px;
}

/* HERE WE ARE STYLING THE CARDS BY SPLITTING THEM INTO THREE SECTIONS, TOP, MIDDLE AND BOTTOM */
/* HERE WE ARE STYLING THE CARDS SECTIONS TO HAVE THE SAME PROPERTIES */
.cards-top, .cards-middle, .cards-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* HERE WE ARE STYLING THE TOP OF THE CARDS */
.cards-top {
  height: 90%;
  width: 100%;
}

/* HERE WE ARE STYLING THE MIDDLE OF THE CARDS */
.cards-middle {
  height: 10%;
  width: 100%;

  justify-content: flex-end;
}

/* HERE WE ARE STYLING THE CARDS BRIEF TEXT */
.card-brief {
  font-size: 15px;
  text-align: left;
}

/* HERE WE ARE STYLING THE PENCIL ICON WHICH IS ON THE CARDS */
.pencil-icon {
  width: 20px;
  height: 20px;

  background-image: url('../assets/edit-icon-grey.svg');

  transition: 0.3s;
}

/* HERE WE ARE STYLING THE PENCIL ICON WHEN THE MOUSE IS HOVERING OVER IT */
.pencil-icon:hover {
  width: 22.5px;
  height: 22.5px;

  background-image: url('../assets/edit-icon-darker-grey.svg');
}

/* HERE WE ARE STYLING THE BOTTOM OF THE CARDS */
.cards-bottom {
  height: 20%;
  width: 100%;
}

/* HERE WE ARE STYLING THE CARD BUTTONS */
.card-buttons {
  height: 80%;
  width: 70%;

  margin-left: 2.5px;
  margin-right: 2.5px;

  border: none;
  border-radius: 5px;

  outline: none;

  cursor: pointer;
}

/* HERE WE ARE STYLING THE DONE BUTTON ON THE CARDS */
.done {
  color: white;
  background-color: rgb(36, 117, 36);
  transition: 0.3s;
  
  cursor: pointer;
  
  font-weight: bolder;
}

/* HERE WE ARE STYLING THE DONE BUTTON ON THE CARDS WHEN THE MOUSE IS HOVERING OVER IT */
.done:hover {
  background-color: rgb(9, 156, 9);
}

/* HERE WE ARE STYLING THE EDIT BUTTON ON THE CARDS */
.edit {
  color: white;
  background-color: rgb(179, 22, 22);
  transition: 0.3s;
  
  cursor: pointer;
  
  font-weight: bolder;
}

/* HERE WE ARE STYLING THE EDIT BUTTON ON THE CARDS WHEN THE MOUSE IS HOVERING OVER IT */
.edit:hover {
  background-color: red;
}

/* HERE WE ARE STYLING THE "CREATE A NEW CARD" CARD */
.cards-add-card {
  font-size: 100px;

  transition: 0.3s;
}

/* HERE WE ARE STYLING THE "CREATE A NEW CARD" CARD WHEN THE MOUSE IS HOVERING OVER IT */
.cards-add-card:hover {
  font-size: 120px;
}

/* HERE WE ARE STYLING THE PLUS SIGN ON THE "CREATE A NEW CARD" CARD */
.plus-sign {
  width: 100%;
  height: 95%;

  color: black;
}

/* HERE WE ARE STYLING THE "ADD A CARD" TEXT ON THE "CREATE A NEW CARD" CARD */
.add-a-card {
  width: 100%;
  height: 5%;

  color: rgb(209, 209, 209);
  
  align-items: flex-end;

  font-size: 10px;
}
/* HERE ENDS THE STYLES FOR THE BODY CONTAINER AND ITS CHILDREN */

/* HERE BEGINS THE STYLES FOR THE FOOTER CONTAINER AND ITS CHILDREN */
#footer {
  width: 100vw;
  height: 5vh;
}
/* HERE ENDS THE STYLES FOR THE FOOTER CONTAINER AND ITS CHILDREN */
</style>
