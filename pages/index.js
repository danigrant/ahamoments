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
import { getTopExplanationsAllTime, getConceptsThatNeedLove, getTopCreatorsAllTime, getTopConceptsAllTime } from '../utils/firebase'
import Loading from '../components/Loading'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topExplanationsArray: [],
      conceptsNeedingLoveArray: [],
      topCreatorsArray: [],
      topConceptsArray: []
    }
  }
  async componentDidMount() {
    let tempConceptsNeedingLove = await getConceptsThatNeedLove()
    this.setState({
      topExplanationsArray: await getTopExplanationsAllTime(),
      conceptsNeedingLoveArray: tempConceptsNeedingLove.conceptsNeedingLoveToDisplay,
      totalConceptsNeedingLove: tempConceptsNeedingLove.totalAmountOfConceptsNeedingLove,
      topCreatorsArray: await getTopCreatorsAllTime(),
      topConceptsArray: await getTopConceptsAllTime()
    })
  }
  render() {
    {
      if (!this.state.topExplanationsArray.length || !this.state.conceptsNeedingLoveArray.length || !this.state.topCreatorsArray.length || !this.state.topConceptsArray.length) {
        return (
          <Loading loggedIn={this.props.loggedIn} />
        )
      } else {
        return (
          <div>
            <Header loggedIn={this.props.loggedIn} />
            <AppContainer>
              <div className="columns-parent-div">
                <div className="column-70-p">
                  <div className="column-section">
                    <h1 className="font-lrg font-bold-med">Ideas looking for Aha Moments</h1>
                    <NewConceptsNeedExplanationsCard concepts={this.state.conceptsNeedingLoveArray} totalConcepts={this.state.totalConceptsNeedingLove}/>
                  </div>
                  <div className="column-section">
                    <h1 className="font-lrg font-bold-med">The most 🔥 Aha Moment creations right now</h1>
                    {
                      this.state.topExplanationsArray.map(e => {
                        return <ExplanationCard key={e.explanationID} explanation={e} />
                      })
                    }
                  </div>
                </div>
                <div className="column-30-p">
                  <div className="column-section">
                    <h1 className="font-lrg font-bold-med">Top Creators This Week</h1>
                    <TopCreatorsOfWeekSection creators={this.state.topCreatorsArray}/>
                  </div>
                  <div className="column-section">
                    <h1 className="font-lrg font-bold-med">Top Concepts This Week</h1>
                    <TopConceptsOfWeekSection concepts={this.state.topConceptsArray} />
                  </div>
                </div>
              </div>
            </AppContainer>
          </div>
        )
      }
    }
  }
}

export default Index;
