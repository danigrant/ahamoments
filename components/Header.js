import React from 'react'
import SearchBox from './SearchBox'
import LogInButton from './LogInButton'
import LogInModalOverlay from './LogInModalOverlay'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {
          !this.props.loggedIn &&
          <LogInModalOverlay />
        }
        <div className="header-wrapper light-border-bottom drop-shadow">
          <div className="constrained-width">
            <img className="logo logo-sml" src="/images/logo.png" />
            <SearchBox />
            <div className="leaderboard-menu-link inline-block font-md">
              <p className="font-color-light-grey inline-block">Leaderboard</p>
            </div>
            <div className="float-right inline-block">
              {
                !this.props.loggedIn &&
                <div className="menu-bar-login-button"><LogInButton /></div>
              }
              {
                this.props.loggedIn &&
                <img className="avatar avatar-med" src="/images/temp-avatar.jpg" />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
