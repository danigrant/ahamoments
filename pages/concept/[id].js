import React from 'react'
import Header from '../../components/Header'
import AppContainer from '../../components/AppContainer'
import Card from '../../components/Card'
import CardSection from '../../components/CardSection'
import ExplanationCard from '../../components/ExplanationCard'
import { withRouter } from 'next/router'

class ConceptPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { router } = this.props
    return (
      <div>
        <Header />
        <AppContainer>
          <div className="concept-title-bar">
            <h1 className="font-lrg font-bold-med inline-block capitalize">{router.query.id}</h1>
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
            <CardSection>
              <h2 className="font-med">
                <span className="link">@barackobama </span>
                explains
                <span className="link"> {router.query.id} </span>
                through
                <span className="link"> spoken word</span>
              </h2>
              <div className="media-type-selection-section margin-top-sml">
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Write Something</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Podcast Snippet</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">YouTube Clip</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Record Your Own Video</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Record Your Own Audio</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Tweet</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Upload A Video</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Upload A Photo</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Draw Something And Upload It</div>
                <div className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Link To Something On The Web</div>
              </div>
            </CardSection>
          </Card>
          <h1 className="margin-top-lrg font-lrg font-bold-med inline-block">All of the wacky and wonderful ways to explain a {router.query.id} </h1>
          <p className="font-color-light-grey">There are 114 explanations here. Some will work for you, some won’t.  Keep going until you find one that gives you that aha! moment.</p>
          <div className="margin-top-sml">
            <ExplanationCard />
            <ExplanationCard />
            <ExplanationCard />
          </div>
        </AppContainer>
      </div>
    )
  }
}

export default withRouter(ConceptPage)
