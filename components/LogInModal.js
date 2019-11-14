import React from 'react'
import Card from './Card'
import CardSection from './CardSection'

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
            <p>this is a modal?</p>
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default LogInModal
