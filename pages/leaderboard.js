import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer'
import Leaderboard from '../components/Leaderboard'
import Loading from '../components/Loading'
import { getTopCreatorsAllTime } from '../utils/firebase'

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topCreatorArray: []
    }
  }
  async componentDidMount() {
    this.setState({
      topCreatorArray: await getTopCreatorsAllTime()
    })
  }
  render() {
    {
      if (!this.state.topCreatorArray.length) {
        return (
          <Loading loggedIn={this.props.loggedIn} loggedInUser={this.props.loggedInUser} />
        )
      } else {
        return (
          <div>
            <Header loggedIn={this.props.loggedIn} loggedInUser={this.props.loggedInUser}/>
            <AppContainer>
              <h1 className="font-lrg font-bold-med">The most 🔥 Aha Moment creators</h1>
              <Leaderboard topCreators={this.state.topCreatorArray} />
            </AppContainer>
          </div>
        )
      }
    }
  }
}

export default LeaderboardPage
