import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer'
import Card from '../components/Card'
import CardSection from '../components/CardSection'
import Link from 'next/link'
import MultiAvatarUnit from '../components/MultiAvatarUnit'

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
                <h1 className="font-lrg font-bold-med">Ideas looking for Aha Moments.</h1>
                <Card>
                  <CardSection>
                    <p className="font-color-light-grey">Contribute wacky and wonderful explanations to these ideas.</p>
                  </CardSection>
                  <CardSection>
                    <div className="columns-parent-div">
                      <div className="column-lrg">
                        <div className="row">
                          <h2>Integrals</h2>
                        </div>
                        <div className="row">
                          <p className="font-color-light-grey">no one has contributed an explanation yet</p>
                        </div>
                      </div>
                      <div className="column-sml">
                        <div className="action-button button background-purple rounded-border font-med font-bold-extra">Contribute</div>
                      </div>
                    </div>
                  </CardSection>
                  <CardSection>
                  <div className="columns-parent-div">
                    <div className="column-lrg">
                      <div className="row">
                        <h2>Integrals</h2>
                      </div>
                      <div className="row">
                        <MultiAvatarUnit />
                        <p className="font-color-light-grey inline-block">no one has contributed an explanation yet</p>
                      </div>
                    </div>
                    <div className="column-sml">
                      <div className="action-button float-right button background-purple rounded-border font-med font-bold-extra">Contribute</div>
                    </div>
                  </div>
                  </CardSection>
                  <CardSection>
                  <div className="columns-parent-div">
                    <div className="column-lrg">
                      <p className="font-color-light-grey">+ 23 other ideas</p>
                    </div>
                    <div className="column-sml">
                      <div className="action-button float-right button background-grey light-border rounded-border font-med font-bold-extra">Expand</div>
                    </div>
                  </div>
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
