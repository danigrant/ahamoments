/*

  contains various utils to handle saving various types of
  explanations to the db

*/
import firebase from './firebase'

const storage = firebase.storage();
const storageRef = firebase.storage().ref();

// Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg')

// type:photo
var file = ... // use the Blob or File API
ref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});

storage.ref(`images/${image.name}`).put(image)
