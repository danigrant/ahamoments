import React from 'react'
import Header from '../../components/Header'
import AppContainer from '../../components/AppContainer'
import Card from '../../components/Card'
import CardSection from '../../components/CardSection'

class ConceptPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <AppContainer>
          <div className="concept-title-bar">
            <h1 className="font-lrg font-bold-med inline-block">Derivatives</h1>
            <p className="font-color-light-grey inline-block margin-left">originally asked by @bofirstdog</p>
          </div>
          <Card>
            <CardSection>
              <div className="columns-parent-div">
                <div className="column-80-p">
                  <p className="font-color-light-grey">Add your own explanation and give someone an aha moment.</p>
                </div>
                <div className="column-20-p">
                  <div className="action-button button background-purple rounded-border font-med font-bold-extra float-right">Contribute</div>
                </div>
              </div>
            </CardSection>
          </Card>
        </AppContainer>
      </div>
    )
  }
}

export default ConceptPage
