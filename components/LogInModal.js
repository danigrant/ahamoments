import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import LogInWithTwitterButton from './LogInWithTwitterButton'

class LogInModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="login-modal-wrapper center">
        <Card>
          <i className="material-icons float-right margin-right-sml">close_rounded</i>
          <CardSection>
            <img className="logo-lrg" src="/images/logo.png"/>
            <h1 className="font-lrg font-bold-med">Login to Aha Moments</h1>
            <p className="font-color-light-grey margin-bottom-med">Aha Moments is a place where people create wonderful explanations of complicated things to give others in the world Aha Moments.</p>
            <LogInWithTwitterButton />
            <p className="font-tny font-color-lighter-grey margin-top-med">We'll never post to any of your accounts without your permission.</p>
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default LogInModal
