import React from 'react'
import SearchBox from './SearchBox'
import LogInButton from './LogInButton'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <div className="header-wrapper light-border-bottom drop-shadow">
        <div className="constrained-width">
          <img className="logo logo-sml" src="/images/logo.png" />
          <SearchBox />
          <div className="leaderboard-menu-link inline-block font-md">
            <p className="font-color-light-grey inline-block">Leaderboard</p>
          </div>
          <div className="float-right inline-block">
            {
              !this.state.loggedIn &&
              <div className="menu-bar-login-button"><LogInButton /></div>
            }
            {
              this.state.loggedIn &&
              <img className="avatar avatar-med" src="/images/temp-avatar.jpg" />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Header
