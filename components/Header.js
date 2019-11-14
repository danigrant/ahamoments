import React from 'react'
import SearchBox from './SearchBox'
import LogInButton from './LogInButton'
import LogInModalOverlay from './LogInModalOverlay'
import Link from 'next/link'

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
            <Link href="/">
              <img className="logo logo-sml link-no-color-change" src="/images/logo.png" />
            </Link>
            <SearchBox />
            <div className="leaderboard-menu-link inline-block font-md">
              <Link href="/leaderboard">
                <p className="font-color-light-grey link-no-color-change inline-block">Leaderboard</p>
              </Link>
            </div>
            <div className="float-right inline-block">
              {
                !this.props.loggedIn &&
                <div className="menu-bar-login-button"><LogInButton /></div>
              }
              {
                this.props.loggedIn &&
                <Link href="/explainer/@barackobama">
                  <img className="avatar avatar-med link-no-color-change" src="/images/temp-avatar.jpg" />
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
