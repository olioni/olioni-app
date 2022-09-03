import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";

// CONFIG FILE TO LINK THE CORRECT FIREBASE DATABASE TO THIS WEBSITE
const firebaseConfig = {
  apiKey: "AIzaSyB8zNsVkakqqPZDKhmRtHk7uXmla-qG7f4",
  authDomain: "olioni-app.firebaseapp.com",
  projectId: "olioni-app",
  storageBucket: "olioni-app.appspot.com",
  messagingSenderId: "605472208752",
  appId: "1:605472208752:web:9a8a920f63bc26aedcc1b5",
  measurementId: "G-554NC6RSFQ"
};

// INITIALISE THE FIREBASE APP AND GET THE FIRESTORE DATABASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// THIS FUNCTION GETS THE DATA FROM THE TWO DATABASES AND MERGES THEM TOGETHER IN ONE FILE
export async function returnCardObj() {
  let cardList = []
  let cardObj = null

  let studentArr = []
  let projectArr = []
  
  const studentQuerySnap = await getDocs(collection(db, "students"))
  const projectQuerySnap = await getDocs(collection(db, "projects"))
  
  console.log('STUDENT DATA:')
  studentQuerySnap.forEach((doc) => {
    let obj = doc.data()
    console.log(obj)
    obj['doc_id'] = doc.id
    studentArr.push(obj)
  })
  
  console.log('PROJECT DATA:')
  projectQuerySnap.forEach((doc) => {
    let obj = doc.data()
    console.log(obj)
    obj['doc_id'] = doc.id
    projectArr.push(obj)
  })
  
  let student, project;

  for (let a = 0; a < studentArr.length; a++) {
    student = studentArr[a]
    for (let b = 0; b < projectArr.length; b++) {
      project = projectArr[b]
      if (student.project_ID == project.project_ID) {
        cardObj = {
          'first_name': student.f_name,
          'last_name': student.l_name,
          'student_ID': student.student_ID,
          'project_ID': project.project_ID,
          'project_name': project.project_name,
          'project_brief': project.project_brief,
          'student_doc_ID': student.doc_id,
          'project_doc_ID': project.doc_id,
        }
        cardList.push(cardObj)
      }
    }
  }

  return cardList
}

// THIS FUNCTION RETURNS THE LATEST STUDENT ID NUMBER
export async function getLatestStudentID() {
  let list = []
  const snapshot = await getDocs(collection(db, "students"))
  snapshot.forEach((doc) => {
    list.push(doc.data().student_ID)
  })

  if (list.length == 0) {
    return 0
  } else {
    return Math.max(...list)
  }
}

// THIS FUNCTION RETURNS THE LATEST PROJECT ID NUMBER
export async function getLatestProjectID() {
  let list = []
  const snapshot = await getDocs(collection(db, "projects"))
  snapshot.forEach((doc) => {
    list.push(doc.data().project_ID)
  })

  if (list.length == 0) {
    return 0
  } else {
    return Math.max(...list)
  }
}

// THIS FUNCTION CREATES A NEW DOCUMENT IN ITS RESPECTIVE COLLECTION (E.G. THE "STUDENTS" COLLECTION, AND THE "PROJECTS" COLLECTION)
export async function sendDataToFirestore(data, col) {
  await addDoc(collection(db, col), data)
  document.location.reload(true)
}

// THIS FUNCTION REMOVES THE MATCHING DATA FROM BOTH "PROJECT" AND "STUDENT" DATABASES
export async function removeDocsFromFirestore(student_doc_ID, project_doc_ID) {
  await deleteDoc(doc(db, "students", student_doc_ID))
  await deleteDoc(doc(db, "projects", project_doc_ID))
  document.location.reload(true)
}

// THIS FUNCTION UPDATES A STUDENT DOCUMENT IN THE FIRESTORE DATABASE
export async function updateStudentDocInFirestore(col, doc_ID, data) {
  const ref = doc(db, col, doc_ID)
  console.log(data)
  await setDoc(ref, {
    f_name: data.first_name,
    l_name: data.last_name,
    project_ID: data.project_ID,
    student_ID: data.student_ID
  })
  document.location.reload(true)
}

// THIS FUNCTION UPDATES A PROJECT DOCUMENT IN THE FIRESTORE DATABASE
export async function updateProjectDocInFirestore(col, doc_ID, data) {
  const ref = doc(db, col, doc_ID)
  console.log(data)
  await setDoc(ref, {
    project_name: data.last_name,
    project_brief: data.project_brief,
    project_ID: data.project_ID,
  })
  document.location.reload(true)
}