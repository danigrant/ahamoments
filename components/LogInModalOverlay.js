import React from 'react'
import LogInModal from './LogInModal'

class LogInModalOverlay extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="login-modal-overlay-wrapper">
        </div>
        <LogInModal />
      </div>
    )
  }
}

export default LogInModalOverlay
