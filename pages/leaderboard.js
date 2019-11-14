import Header from '../components/Header'
import AppContainer from '../components/AppContainer'
import Leaderboard from '../components/Leaderboard'

const LeaderboardPage = props => {
  return (
    <div>
      <Header />
      <AppContainer>
        <h1 className="font-lrg font-bold-med">The most 🔥 Aha Moment creators</h1>
        <Leaderboard />
      </AppContainer>
    </div>
  )
}

export default LeaderboardPage
