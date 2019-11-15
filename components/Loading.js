import Header from './Header'
import AppContainer from './AppContainer'

const Loading = props => {
  return (
    <div>
      <Header loggedIn={props.loggedIn} loggedInUser={props.loggedInUser}/>
      <AppContainer>
        <div id="loading-bar-spinner" className="spinner">
          <div className="spinner-icon"></div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Loading
