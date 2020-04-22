'use strict';

function gotData(data) {

  // need to retrieve firebase data with val() method
  // this returns an object of all data
  fbData = data.val();

  if (fbData) { // check to see if there is something in your database to start
     console.log('received data:');
     console.log(fbData);

     // create an array of the post values (if you need to loop through it retaining order of entries)
     fbDataArray = Object.values(fbData);
   } else {
     console.log('nothing in this folder yet');
   }


}

function errData(err) {
  console.log("error! did not receive data");
  console.log(err);

}
// create a new node
// the node folder name, id, and object are all passed in as parameters

function createNode(_nodeFolder, _nodeId, _nodeObject) {
firebase.database().ref(_nodeFolder + '/' + _nodeId).set(_nodeObject);

// call this function to create and seed the folder!
// createNode(folderName, "seed", {text: "this is to seed folder"});
// (to test you can just paste it into the web console)

}

// createNode(folderName, "test", {text:"hello"});
