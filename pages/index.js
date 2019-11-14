import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer'
import Card from '../components/Card'
import CardSection from '../components/CardSection'
import Link from 'next/link'
import MultiAvatarUnit from '../components/MultiAvatarUnit'
import NewConceptsNeedExplanationsCard from '../components/NewConceptsNeedExplanationsCard'
import ExplanationCard from '../components/ExplanationCard'

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
                <h1 className="font-lrg font-bold-med">Ideas looking for Aha Moments</h1>
                <NewConceptsNeedExplanationsCard />
              </div>
              <div className="column-section">
                <h1 className="font-lrg font-bold-med">The most 🔥 Aha Moment creations right now</h1>
                <ExplanationCard />
                <ExplanationCard />
                <ExplanationCard />
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
