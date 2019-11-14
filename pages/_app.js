import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../utils/firebase' // this instantiates firebase

class AhaMoments extends App {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
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
