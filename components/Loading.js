import Header from './Header'
import AppContainer from './AppContainer'

const Loading = props => {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <AppContainer>
        <div id="loading-bar-spinner" class="spinner">
          <div class="spinner-icon"></div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Loading
