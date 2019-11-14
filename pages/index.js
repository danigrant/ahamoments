import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <AppContainer>
        </AppContainer>
      </div>
    )
  }
}

export default Index;
