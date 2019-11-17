/*
  This file contains firebase config and instantiation
  contains functions that interact with the db

  This file also holds all of the auth functions
  logUserIn
  getLoggedInUser <-- returns false if no user logged in
*/

import * as firebase from 'firebase';
import 'firebase/storage'
import { generateFilePathAndName } from './utils'

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

const storage = firebase.app().storage();
const storageRef = firebase.app().storage().ref();


// auth

async function saveUserToDB(displayName, email, photoURL, uid) {
  // first check if this a new user?
  let snapshot = await usersRef.where('email', '==', email).get()
  // only add user to db if the user is new
  if (snapshot.empty) {
    let newUser = {
      "avatarUrl": photoURL,
      "displayName": displayName,
      "email": email,
      "userID": uid
    }

    usersRef.add(newUser)
  }
}

async function getLoggedInUser() {
  let user = firebase.auth().currentUser

  if (!user) {
  // No user is signed in.
    return false;
  }

  return {
    "displayName": "Barack Obama",
		"userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
		"avatarUrl": "/images/temp-avatar.jpg",
		"ahaMomentCount": 4,
		"explanationCount": 5,
		"reactionsCount": {
			"gotIt": 1,
			"laughing": 2,
			"shocked": 3
		}
  }

  // maybe pull some stuff about the user into an obj and return that?
  // user.photoURL, user.displayName
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

    // user.photoURL, user.displayName, user.email, user.uid does not return twitter handle
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

// various utils

// returns everything plus explanations
async function getUserByID(userID) {
  // first get metadata
  let snapshot = await usersRef.where('userID', '==', userID).get()
  let data = {}
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data = {
      "displayName": docData.displayName,
  		"userID": docData.userID,
  		"avatarUrl": docData.avatarUrl,
  		"ahaMomentCount": docData.ahaMomentCount,
  		"explanationCount": docData.explanationCount,
  		"reactionsCount": {
  			"gotIt": docData.reactionGotItCount,
  			"laughing": docData.reactionLaughingCount,
  			"shocked": docData.reactionShockedCount
  		},
      explanations: []
    }
  })
  // then get explanations
  let explanationSnapshot = await explanationsRef.where('authorUserID', '==', userID).orderBy('ahaMomentCount', 'desc').get()
  await explanationSnapshot.forEach(doc => {
    let explanationDocData = doc.data()
    data.explanations.push({
      "explanationID": doc.id,
      "concept": explanationDocData.concept,
  		"authorUserID": explanationDocData.authorUserID,
      "authorAvatarUrl": explanationDocData.authorAvatarUrl,
      "authorDisplayName": explanationDocData.authorDisplayName,
  		"explanation": {
  			"type": explanationDocData.explanation.type,
  			"introText": explanationDocData.explanation.introText,
  			"mediaLink": explanationDocData.explanation.mediaLink,
  			"mediaConsumptionGuidance": explanationDocData.explanation.mediaConsumptionGuidance
  		}
  	})
  })
  return data
}

async function getUserProfileInfoByUserID(userID) {
  let snapshot = await usersRef.where('userID', '==', userID).get()
  let data = {}
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data = {
      "displayName": docData.displayName,
  		"userID": docData.userID,
  		"avatarUrl": docData.avatarUrl,
  		"ahaMomentCount": docData.ahaMomentCount,
  		"explanationCount": docData.explanationCount,
  		"reactionsCount": {
  			"gotIt": docData.reactionGotItCount,
  			"laughing": docData.reactionLaughingCount,
  			"shocked": docData.reactionShockedCount
  		}
    }
  })
  return data
}

async function getDocIDByUserID(userID) {
  let snapshot = await usersRef.where('userID', '==', userID).get()
  let userDocID = ""
  await snapshot.forEach(doc => {
    userDocID = doc.id
  })
  return userDocID
}

async function incrementUserExplanationCount(userID) {
  let docID = await getDocIDByUserID(userID)
  let userRef = usersRef.doc(docID)

  userRef.update({ explanationCount: increment })
}

async function getFileURLFromFirebaseStorage(url) {
  let downloadUrl = await storageRef.child(url).getDownloadURL()
  return downloadUrl
}

// get and return various data

async function saveExplanationToDB(explanationObj) {
  let newExplanation = {
    "concept": explanationObj.concept.toLowerCase(),
    "authorUserID": explanationObj.authorUserID,
    "authorDisplayName": explanationObj.authorDisplayName,
    "authorAvatarUrl": explanationObj.authorAvatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": explanationObj.explanation.introText ? explanationObj.explanation.introText : "",
      "mediaConsumptionGuidance": explanationObj.explanation.mediaConsumptionGuidance ? explanationObj.explanation.mediaConsumptionGuidance : "",
      "mediaLink": explanationObj.explanation.mediaLink ? explanationObj.explanation.mediaLink : "",
      "type": explanationObj.explanation.type
    },
    "ahaMomentCount": 1,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
  }
  explanationsRef.add(newExplanation)
  incrementUserExplanationCount(explanationObj.authorUserID)
}

async function saveExplanationWithFileToDB(introText, fileToUpload, fileType, userID, concept) { // will also want the user here
  // first upload file to db
  let fileName = generateFilePathAndName(fileType, userID, concept)
  let snapshot = await storageRef.child(fileName).put(fileToUpload)
  if (!snapshot.state == "success") {
    console.log("error");
  }

  // then need to save explanation to firestore

  // first to do that, need some user profile data
  let userObj = await getUserProfileInfoByUserID(userID)

  // then save to firebase
  await saveExplanationToDB({
    "concept": concept.toLowerCase(),
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": introText,
      "mediaLink": snapshot.metadata.fullPath,
      "type": fileType
    },
    "ahaMomentCount": 1,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
  })
}

async function saveWrittenExplanationToDB(text, userID, concept) {
  // first remove any html or scripts because xss
  let cleanText = text.replace('<script>','').replace('onclick', '').replace('onerror').replace('onResize', '').replace('onPropertyChange', '').replace('onMouseEnter', '').replace('onFocus', '') // https://gist.github.com/JohannesHoppe/5612274

  // then save explanation to firestore

  // first to do that, need some user profile data
  let userObj = await getUserProfileInfoByUserID(userID)

  // then save to firebase
  await saveExplanationToDB({
    "concept": concept.toLowerCase(),
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": text,
      "type": "text"
    },
    "ahaMomentCount": 1,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
  })
}

async function saveExternalLinkExplanationToDB(introText, mediaLink, mediaConsumptionGuidance, fileType, userID, concept) {
  // first need some user profile data
  let userObj = await getUserProfileInfoByUserID(userID)

  // then save to firebase
  await saveExplanationToDB({
    "concept": concept.toLowerCase(),
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": introText,
      "mediaLink": mediaLink,
      "mediaConsumptionGuidance": mediaConsumptionGuidance,
      "type": fileType
    },
    "ahaMomentCount": 0,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
  })
}

// returns 2 concepts for the front page that need love as an obj
async function getConceptsThatNeedLove() {
  return {
    "totalAmountOfConceptsNeedingLove": 43,
    "conceptsNeedingLoveToDisplay": [
		{
			"conceptName": "Derivative",
			"numContributors": 11,
			"contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
		},
    {
			"conceptName": "Infinity",
			"numContributors": 4,
			"contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
		}]
  }
}

// returns top 5 creators in an array
async function getTopCreatorsAllTime() {
  let snapshot = await usersRef.orderBy('ahaMomentCount', 'desc').get()
  let data = []
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data.push({
      "displayName": docData.displayName,
      "userID": docData.userID,
      "avatarUrl": docData.avatarUrl,
      "ahaMomentCount": docData.ahaMomentCount,
      "explanationCount": docData.explanationCount,
      "reactions": {
        "gotItCount": docData.reactionGotItCount,
        "laughingCount": docData.reactionLaughingCount,
        "shockedCount": docData.reactionShockedCount
      }
    })
  })
  return data
}

// returns array of top 5 explanations
async function getTopExplanationsAllTime() {
  let snapshot = await explanationsRef.orderBy('ahaMomentCount', 'desc').get()
  let data = []
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data.push({
      "explanationID": doc.id,
      "concept": docData.concept,
      "authorUserID": docData.authorUserID,
      "authorAvatarUrl": docData.authorAvatarUrl,
      "authorDisplayName": docData.authorDisplayName,
      "explanation": {
        "type": docData.explanation.type,
        "introText": docData.explanation.introText,
        "mediaLink": docData.explanation.mediaLink,
        "mediaConsumptionGuidance": docData.explanation.mediaConsumptionGuidance
      },
      "ahaMomentCount": docData.ahaMomentCount,
      "totalScore": docData.totalScore,
      "reactions": {
        "gotItCount": docData.reactionGotItCount,
        "laughingCount": docData.reactionLaughingCount,
        "shockedCount": docData.reactionShockedCount
      }
    })
  })
  return data
}

  async function getTopConceptsAllTime() {
  return [
    {
    	"conceptName": "Integrals", // these need to be transformed into - instead of space
    	"explanationCount": 10,
      "ahaMomentCount": 20
    },
    {
    	"conceptName": "Derivatives", // these need to be transformed into - instead of space
    	"explanationCount": 10,
      "ahaMomentCount": 20
    },
    {
    	"conceptName": "Limits", // these need to be transformed into - instead of space
    	"explanationCount": 10,
      "ahaMomentCount": 20
    },
    {
    	"conceptName": "Infinity", // these need to be transformed into - instead of space
    	"explanationCount": 10,
      "ahaMomentCount": 20
    },
    {
    	"conceptName": "Logarithm", // these need to be transformed into - instead of space
    	"explanationCount": 10,
      "ahaMomentCount": 20
    }
  ]
  }

  // returns array of explanations for a concept sorted in rank order
  async function getConceptExplanations(concept) {
  let formattedConcept = concept.toLowerCase()
  let snapshot = await explanationsRef.where('concept', '==', formattedConcept).orderBy('ahaMomentCount', 'desc').get()
  let data = []
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data.push({
      "explanationID": doc.id,
      "concept": docData.concept,
      "authorUserID": docData.authorUserID,
      "authorAvatarUrl": docData.authorAvatarUrl,
      "authorDisplayName": docData.authorDisplayName,
      "explanation": {
        "type": docData.explanation.type,
        "introText": docData.explanation.introText,
        "mediaLink": docData.explanation.mediaLink,
        "mediaConsumptionGuidance": docData.explanation.mediaConsumptionGuidance
      },
      "ahaMomentCount": docData.ahaMomentCount,
      "totalScore": docData.totalScore,
      "reactions": {
        "gotItCount": docData.reactionGotItCount,
        "laughingCount": docData.reactionLaughingCount,
        "shockedCount": docData.reactionShockedCount
      }
    })
  })
  return data
}

// voting utils

async function addAhaToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID)

  // increment aha count for explanation
  explanationRef.update({ ahaMomentCount: increment })

  // increment aha count for author of explanation
  let docID = await getDocIDByUserID(loggedInUserID)
  let userRef = usersRef.doc(docID)
  userRef.update({ ahaMomentCount: increment })

  // add vote to explanation vote log
  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "ahaMoment"
  }

  explanationRef.update({
     voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
   })
}

async function addDontGetItToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID)

  // increment aha count for explanation
  explanationRef.update({ dontGetItCount: increment })

  // increment aha count for author of explanation
  let docID = await getDocIDByUserID(loggedInUserID)
  let userRef = usersRef.doc(docID)
  userRef.update({ dontGetItCount: increment })

  // add vote to explanation vote log
  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "dontGetIt"
  }

  explanationRef.update({
     voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
   })
}

async function addReactionGotItToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID)

  // increment aha count for explanation
  explanationRef.update({ reactionGotItCount: increment })

  // increment aha count for author of explanation
  let docID = await getDocIDByUserID(loggedInUserID)
  let userRef = usersRef.doc(docID)
  userRef.update({ reactionGotItCount: increment })

  // add vote to explanation vote log
  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "reactionGotIt"
  }

  explanationRef.update({
     voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
   })
}

async function addReactionLaughingToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID)

  // increment aha count for explanation
  explanationRef.update({ reactionLaughingCount: increment })

  // increment aha count for author of explanation
  let docID = await getDocIDByUserID(loggedInUserID)
  let userRef = usersRef.doc(docID)
  userRef.update({ reactionLaughingCount: increment })

  // add vote to explanation vote log
  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "reactionLaughing"
  }

  explanationRef.update({
     voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
   })
}

async function addReactionShockedToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID)

  // increment aha count for explanation
  explanationRef.update({ reactionShockedCount: increment })

  // increment aha count for author of explanation
  let docID = await getDocIDByUserID(loggedInUserID)
  let userRef = usersRef.doc(docID)
  userRef.update({ reactionShockedCount: increment })

  // add vote to explanation vote log
  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "reactionShocked"
  }

  explanationRef.update({
     voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
   })
}

module.exports = {
  firebase,
  logUserIn,
  saveUserToDB,
  getLoggedInUser,
  getUserByID,
  saveExplanationWithFileToDB,
  saveWrittenExplanationToDB,
  saveExternalLinkExplanationToDB,
  getFileURLFromFirebaseStorage,
  getTopConceptsAllTime,
  getTopCreatorsAllTime,
  getTopExplanationsAllTime,
  getConceptsThatNeedLove,
  getConceptExplanations,
  addAhaToDB,
  addDontGetItToDB,
  addReactionGotItToDB,
  addReactionLaughingToDB,
  addReactionShockedToDB
}
