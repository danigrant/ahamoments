import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer'
import Card from '../components/Card'
import CardSection from '../components/CardSection'
import Link from 'next/link'
import MultiAvatarUnit from '../components/MultiAvatarUnit'
import NewConceptsNeedExplanationsCard from '../components/NewConceptsNeedExplanationsCard'
import ExplanationCard from '../components/ExplanationCard'
import TopCreatorsOfWeekSection from '../components/TopCreatorsOfWeekSection'
import TopConceptsOfWeekSection from '../components/TopConceptsOfWeekSection'

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
            <div className="column-70-p">
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
            <div className="column-30-p">
              <div className="column-section">
                <h1 className="font-lrg font-bold-med">Top Creators This Week</h1>
                <TopCreatorsOfWeekSection />
              </div>
              <div className="column-section">
                <h1 className="font-lrg font-bold-med">Top Concepts This Week</h1>
                <TopConceptsOfWeekSection />
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
    )
  }
}

export default Index;
