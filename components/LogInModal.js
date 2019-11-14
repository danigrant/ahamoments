import React from 'react'
import Card from './Card'
import CardSection from './CardSection'

class LogInModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="login-modal-wrapper">
        <Card>
          <CardSection>
            <p>this is a modal?</p>
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default LogInModal
