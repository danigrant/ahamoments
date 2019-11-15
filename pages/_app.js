import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../utils/firebase' // this instantiates firebase
import { firebase, getLoggedInUser, saveUserToDB } from '../utils/firebase'

class AhaMoments extends App {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      loggedInUser: {}
    }
    this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)
  }
  async componentDidMount() {
    if (this.state.loggedIn) {
      this.setState({
        loggedInUser: await getLoggedInUser()
      })
    }

    let thisRef = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // update state to add current user
        thisRef.setState({
          tempUser: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
          }
        })
        thisRef.handleUserLoggedIn()
      } else {
        // user logged out
        thisRef.setState({
          loggedIn: false,
          loggedInUser: {}
        })
      }
    })
  }
  async handleUserLoggedIn() {
    this.setState({
      loggedIn: true,
      loggedInUser: await getLoggedInUser()
    })
    saveUserToDB(this.state.tempUser.displayName, this.state.tempUser.email, this.state.tempUser.photoURL, this.state.tempUser.uid)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,700,800,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="/css/utils.css" />
          <link rel="stylesheet" href="/css/styles.css" />
        </Head>
        <Component loggedIn={this.state.loggedIn} loggedInUser={this.state.loggedInUser} {...pageProps} />
      </div>
    )
  }
}

AhaMoments.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default AhaMoments
