import Header from './Header'
import AppContainer from './AppContainer'

const Loading = props => {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <AppContainer>
      </AppContainer>
    </div>
  )
}

export default Loading
