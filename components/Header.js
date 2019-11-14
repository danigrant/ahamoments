import React from 'react'
import SearchBox from './SearchBox'
import LogInButton from './LogInButton'
import LogInModalOverlay from './LogInModalOverlay'
import Link from 'next/link'
import { logUserIn } from '../utils/firebase'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
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
                <div onClick={logUserIn} className="menu-bar-login-button"><LogInButton /></div>
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

// {
//   !this.props.loggedIn &&
//   <LogInModalOverlay />
// }


// async handleLogUserIn() {
//   // first await logUserIn
//   // in parent function needs to be an auth changed watcher so we dont have to pass up anything
//   // actually if that is the case then i dont need this function
// }
