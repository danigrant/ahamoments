import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../utils/firebase' // this instantiates firebase
import { firebase, pollForAuthChanges } from '../utils/firebase'

class AhaMoments extends App {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  componentDidMount() {
    let thisRef = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        })
        // update state to add current user
        thisRef.setState({
          loggedIn: true
        })
      } else {
        // user logged out
        thisRef.setState({
          loggedIn: false
        })
      }
    })
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
        <Component loggedIn={this.state.loggedIn} {...pageProps} />
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
