<template>
    <!-- HERE BEGINS THE HTML FOR THE create_card_form.vue COMPONENT -->
    <!-- THIS IS THE BACKGROUND CONTAINER WHICH CONTAINS THE create_card_form.vue COMPONENT -->
    <div id="dashboard-background">
        <!-- HERE BEGINS THE DASHBOARD FOR THE APP -->
        <div id="dashboard">
            <!-- HERE THE DASHBOARD FOR THE create_card_form.vue IS SPLIT INTO THREE SECTIONS, HEADER, BODY AND FOOTER -->
            <!-- HERE IS THE HEADER FOR THE create_card_form.vue COMPONENT -->
            <div id="header">
                <h1 id="title">Create A Card</h1>
            </div>
            <!-- HERE IS THE BODY FOR THE create_card_form.vue COMPONENT-->
            <div id="body">
                <!-- INSIDE THE BODY IS THE FORM WHICH THE USER INTERACTS WITH WHERE THEY INPUT THE INFORMATION -->
                <form>
                    <!-- IN THIS FORM GROUP THE USER INPUTS THEIR FIRST NAME -->
                    <div class="form-group" id="group-1">
                        <label class="form-label">First Name:</label>
                        <input id="first_name" class="form-input" ref="f_name">
                    </div>
                    <!-- IN THIS FORM GROUP THE USER INPUTS THEIR LAST NAME -->
                    <div class="form-group" id="group-2">
                        <label class="form-label">Last Name:</label>
                        <input id="last_name" class="form-input" ref="l_name">
                    </div>
                    <!-- IN THIS FORM GROUP THE USER INPUTS THEIR PROJECT NAME -->
                    <div class="form-group" id="group-3">
                        <label class="form-label">Project Name:</label>
                        <input id="project_name" class="form-input" ref="proj_name">
                    </div>
                    <!-- IN THIS FORM GROUP THE USER INPUTS THEIR PROJECT BRIEF -->
                    <div class="form-group" id="group-4">
                        <label class="form-label">Project Brief:</label>
                        <textarea id="project_brief" class="form-input" ref="proj_brief"></textarea>
                    </div>
                </form>
            </div>
            <!-- HERE IS THE FOOTER FOR THE create_card_form.vue COMPONENT -->
            <div id="footer">
                <!-- HERE THESE BUTTONS ARE USED TO EITHER, UPDATE THE DATABASE, OR CLOSE THE FORM POPUP -->
                <button class="footer-buttons submit" @click="submitFormData()">SUBMIT</button>
                <button class="footer-buttons cancel" @click="closeCreateCardForm()">CANCEL</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getLatestProjectID, getLatestStudentID, sendDataToFirestore } from '../firebase.js'

export default {
    name: 'create_card_form',
    props: [],
    data() {
        return {
            projectID: null,
            studentID: null
        }
    },
    methods: {
        // HERE THIS FUNCTION GETS THE DATA FROM THE FORM, CONVERTS IT INTO TWO SEPERATE OBJECTS
        // AND SENDS BOTH OBJECTS TO CREATE A NEW CARD IN THEIR RESPECTIVE DATABASES (E.G, THE "studentObj" TO THE "students" COLLECTION)
        submitFormData() {
            let first_name = this.$refs.f_name.value
            let last_name = this.$refs.l_name.value
            let project_name = this.$refs.proj_name.value
            let project_brief = this.$refs.proj_brief.value
            let project_ID = this.projectID
            let student_ID = this.studentID
            
            if (first_name == "" || last_name == "" || project_name == "" || project_brief == "") {    
                console.log('Please fill in all the fields!')
            } else {
                let studentObj = {
                    'f_name': first_name,
                    'l_name': last_name,
                    'student_ID': student_ID,
                    'project_ID': project_ID
                }
                let projectObj = {
                    'project_ID': project_ID,
                    'project_brief': project_brief,
                    'project_name': project_name
                }

                sendDataToFirestore(studentObj, 'students')
                sendDataToFirestore(projectObj, 'projects')
            }
        },
        // THIS FUNCTION CLOSES THE CREATE CARD FORM
        closeCreateCardForm() {
            this.$emit('close-create-card-form')
        }
    },
    mounted() {
        // HERE BEFORE THE PAGE IS LOADED, WE ARE ASSIGNING THE LATEST STUDENT/PROJECT IDS TO TWO DISTINCT VARIABLES
        getLatestStudentID().then((doc) => this.studentID = doc + 1)
        getLatestProjectID().then((doc) => this.projectID = doc + 1)
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

* {
    font-family: Arial, Helvetica, sans-serif;
}

/* STYLE THE CONTAINER OF THE MAIN DASHBOARD THAT ALL THE CONTAINERS ARE IN */
#dashboard-background {
    width: 100vw;
    height: 100vh;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.2)
}

/* STYLE THE MAIN DASHBOARD THAT ALL THE CONTAINERS ARE IN */
#dashboard {
    width: 50vw;
    height: 80vh;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: rgb(226, 226, 226);
    box-shadow: -10px 10px 5px rgb(90, 90, 90);

    border-radius: 5px;
}

/* STYLE THE HEADER, BODY AND FOOTER CONTAINERS TO HAVE THE SAME RULES */
#header, #body, #footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* HERE BEGINS THE STYLES FOR THE HEADER CONTAINER AND ITS CHILDREN */
#header {
    width: 100%;
    height: 15%;
}

#title {
    font-family: 'Bebas Neue', cursive;
    font-size: 50px;
}
/* HERE ENDS THE STYLES FOR THE HEADER CONTAINER AND ITS CHILDREN */

/* HERE BEGINS THE STYLES FOR THE BODY CONTAINER AND ITS CHILDREN */
#body {
    width: 100%;
    height: 70%;
}

/* HERE IS THE STYLING FOR THE FORM INSIDE THE BODY CONTAINER */
form {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
}

/* HERE WE ARE STYLING THE INDIVIDUAL FORM GROUPS INSIDE THE FORM */
.form-group {
    width: 100%;
    height: 17.5%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* HERE WE ARE STYLING THE FOURTH FORM GROUP IN THE FORM */
#group-4 {
    height: 50%;
}

/* HERE WE ARE STYLING THE FORM LABELS OF THE FORMS */
.form-label {
    font-weight: 700;
    font-size: 20px;
}

/* HERE WE ARE STYLING THE INPUTS IN THE FORM */
.form-input {
    height: 40%;
    width: 80%;

    border: none;
    border-radius: 5px;
    outline: none;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    resize: none;

    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;

    padding: 5px;
}

/* HERE WE ARE STYLING THE PROJECT BRIEF */
#project_brief {
    height: 60%;
}
/* HERE ENDS THE STYLES FOR THE BODY CONTAINER AND ITS CHILDREN */

/* HERE BEGINS THE STYLES FOR THE FOOTER CONTAINER AND ITS CHILDREN */
#footer {
    width: 100%;
    height: 15%;
}

/* HERE WE ARE STYLING THE BUTTONS IN THE FOOTER */
.footer-buttons {
    width: 40%;
    height: 50%;

    margin-left: 2.5px;
    margin-right: 2.5px;

    border: none;
    border-radius: 5px;
    
    transition: 0.3s;
    cursor: pointer;

    font-weight: bolder;
    font-size: 15px;
}

/* HERE WE EDIT THE SUBMIT BUTTON */
.submit {
    color: white;
    background-color: rgb(36, 117, 36);
}

/* HERE WE ARE STYLING THE SUBMIT BUTTONS WHEN THE MOUSE IS HOVERED OVER */
.submit:hover {
    background-color: rgb(9, 156, 9);
}

/* HERE WE EDIT THE CANCEL BUTTON */
.cancel {
    color: white;
    background-color: rgb(179, 22, 22);
}

/* HERE WE ARE STYLING THE CANCEL BUTTONS WHEN THE MOUSE IS HOVERED OVER */
.cancel:hover {
    background-color: red;
}
/* HERE ENDS THE STYLES FOR THE FOOTER CONTAINER AND ITS CHILDREN */


</style>