import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer'
import Card from '../components/Card'
import CardSection from '../components/CardSection'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <AppContainer>
          <div className="columns-parent-div">
            <div className="column-lrg">
              <div className="column-section">
                <h1 className="font-lg font-bold-md">Ideas looking for Aha Moments.</h1>
                <Card>
                  <CardSection>
                    <p className="font-color-light-grey">Contribute wacky and wonderful explanations to these ideas.</p>
                  </CardSection>
                </Card>
              </div>
            </div>
            <div className="column-sml">small column</div>
          </div>
        </AppContainer>
      </div>
    )
  }
}

export default Index;
