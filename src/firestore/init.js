import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsOqC9TGILAUOXexD852Dg1jpnKI6DqR4",
    authDomain: "fasp-fp.firebaseapp.com",
    databaseURL: "https://fasp-fp.firebaseio.com",
    projectId: "fasp-fp",
    storageBucket: "fasp-fp.appspot.com",
    messagingSenderId: "66245693594"
  };

  const firebaseApp = firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()