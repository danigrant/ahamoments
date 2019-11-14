/*
  This file contains firebase config and instantiation
  contains functions that interact with the db

  This file also holds all of the auth functions
  logUserIn
  getLoggedInUser <-- returns false if no user logged in
*/

import * as firebase from 'firebase';

// initialize

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "explain-this.firebaseapp.com",
  databaseURL: "https://explain-this.firebaseio.com",
  projectId: "explain-this",
  storageBucket: "explain-this.appspot.com",
  messagingSenderId: "145315125752",
  appId: "1:145315125752:web:4e7c3fe717a051b0471e0d",
  measurementId: "G-2HP7D44T1F"
}

console.log(firebaseConfig.apiKey);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const conceptsRef = db.collection('concepts');
const explanationsRef = db.collection('explanations')
const usersRef = db.collection('users')

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

const provider = new firebase.auth.TwitterAuthProvider();

// auth

async function getLoggedInUser() {
  let user = firebase.auth().currentUser

  if (!user) {
  // No user is signed in.
    return false;
  }

  // maybe pull some stuff about the user into an obj and return that?
  // user.photoURL, user.displayName

  return user
}

async function logUserIn() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    let token = result.credential.accessToken;
    let secret = result.credential.secret;
    // The signed-in user info.
    let user = result.user;
    // can use the getLoggedInUser function to return a good user obj

    // user.photoURL, user.displayName does not return twitter handle
    console.log(user);
    return user
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    console.log(error);
  });
}

module.exports = { logUserIn, getLoggedInUser }
