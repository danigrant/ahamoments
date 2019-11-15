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

async function saveUserToDB() {

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

async function getUserByID(userID) {
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
		},
    explanations: [{
      "explanationID": "6CpE8XLCBYuMVAFr3wKE",
      "concept": "integrals",
  		"authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
      "authorAvatarUrl": "/images/temp-avatar.jpg",
      "authorDisplayName": "Barack Obama",
  		"explanation": {
  			"type": "text", //audio, photo, video, youtube, tweet, text
  			"introText": "Here is my explanation. Williamsburg pop-up disrupt selvage street art knausgaard. Enamel pin bespoke bicycle rights, craft beer mustache chartreuse cronut cred actually. Jean shorts hexagon art party pop-up four loko scenester, retro four dollar toast meggings gluten-free.",
  			"mediaLink": "",
  			"mediaConsumptionGuidance": ""
  		}
  	},
    {
      "explanationID": "eK2dxVLq5je8dfLWJjZL",
      "concept": "integrals",
  		"authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
      "authorAvatarUrl": "/images/temp-avatar.jpg",
      "authorDisplayName": "Barack Obama",
  		"explanation": {
  			"type": "tweet", //audio, photo, video, youtube, tweet, text
  			"introText": "This explains this well",
  			"mediaLink": "https://twitter.com/fredwilson/status/1148358347428642817",
  			"mediaConsumptionGuidance": ""
  		}
  	}]
  }
}

// get and return various data

async function saveExplanationToDB() {

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
			"conceptName": "Limits",
			"numContributors": 4,
			"contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
		}]
  }
}

// returns top 5 creators in an array
async function getTopCreatorsAllTime() {
  return [{
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
  },
  {
		"displayName": "Hasan Minhaj",
		"userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
		"avatarUrl": "/images/temp-avatar2.jpg",
		"ahaMomentCount": 4,
		"explanationCount": 5,
		"reactionsCount": {
			"gotIt": 1,
			"laughing": 2,
			"shocked": 3
		}
  },
  {
		"displayName": "Stephen Colbert",
		"userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
		"avatarUrl": "/images/temp-avatar3.jpg",
		"ahaMomentCount": 4,
		"explanationCount": 5,
		"reactionsCount": {
			"gotIt": 1,
			"laughing": 2,
			"shocked": 3
		}
  },
  {
		"displayName": "John Oliver",
		"userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
		"avatarUrl": "/images/temp-avatar4.jpg",
		"ahaMomentCount": 4,
		"explanationCount": 5,
		"reactionsCount": {
			"gotIt": 1,
			"laughing": 2,
			"shocked": 3
		}
  },
  {
		"displayName": "Trevor Noah",
		"userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
		"avatarUrl": "/images/temp-avatar5.jpg",
		"ahaMomentCount": 4,
		"explanationCount": 5,
		"reactionsCount": {
			"gotIt": 1,
			"laughing": 2,
			"shocked": 3
		}
  }]
}

// returns array of top 5 explanations
async function getTopExplanationsAllTime() {
  let snapshot = await explanationsRef.get() //.orderBy('score', 'desc').get() <-- need to do this when i have more than one concept to order by
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
  let snapshot = await explanationsRef.where('concept', '==', formattedConcept).get() //.orderBy('score', 'desc').get()
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

module.exports = {
  firebase,
  logUserIn,
  saveUserToDB,
  getLoggedInUser,
  getUserByID,
  saveExplanationToDB,
  getTopConceptsAllTime,
  getTopCreatorsAllTime,
  getTopExplanationsAllTime,
  getConceptsThatNeedLove,
  getConceptExplanations,
}
