'use strict';
// https://console.firebase.google.com/u/0/project/message-in-a-bottle-12bbb/database/message-in-a-bottle-12bbb/data/~2F

let nodeData; // object we will push to firebase
let fbData; // data we pull from firebase
let fbDataArray; // firebase data values converted to an array
let database; // reference to our firebase database
let folderName = 'messages'; // name of folder you create in db

function setup() {
  noCanvas();

  // Initialize firebase
  // support for Firebase Realtime Database 4 web here: https://firebase.google.com/docs/database/web/start
  // Copy and paste your config here (replace object commented out)
  // ---> directions on finding config below

  // paste your config file here
  // let config = {
  //   apiKey: "AIzaSyCk2XQiRWwgHm9hLlPJRzlwElwdjRvk8T0",
  //   authDomain: "message-in-a-bottle-12bbb.firebaseapp.com",
  //   databaseURL: "https://message-in-a-bottle-12bbb.firebaseio.com",
  //   projectId: "message-in-a-bottle-12bbb",
  //   storageBucket: "message-in-a-bottle-12bbb.appspot.com",
  //   messagingSenderId: "385402809193",
  //   appId: "1:385402809193:web:4fc099d64b70b923b96bf8"
  };

  firebase.initializeApp(config);

  database = firebase.database();

  // this references the folder you want your data to appear in
  let ref = database.ref(folderName);
  // **** folderName must be consistant across all calls to this folder

  ref.on('value', gotData, errData);


  // ---> To find your config object:
  // They will provide it during Firebase setup
  // or (if your project already created)
  // 1. Go to main console page
  // 2. Click on project
  // 3. On project home page click on name of app under project name (in large font)
  // 4. Click the gear icon --> it's in there!


}

function draw() {

}
