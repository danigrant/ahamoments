import React from 'react'
import Header from '../../components/Header'
import AppContainer from '../../components/AppContainer'
import Card from '../../components/Card'
import CardSection from '../../components/CardSection'
import AddExplanationCard from '../../components/AddExplanationCard'
import ExplanationCard from '../../components/ExplanationCard'
import Loading from '../../components/Loading'
import SwipableCardContainer from '../../components/SwipableCardContainer'
import { getConceptExplanations } from '../../utils/firebase'
import { withRouter } from 'next/router'

class ConceptPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conceptExplanationsArray: []
    }
  }
  async componentDidMount() {
    const { router } = this.props
    this.setState({
      conceptExplanationsArray: await getConceptExplanations(router.query.id)
    })
  }
  render() {
    const { router } = this.props
    {
      if (!this.state.conceptExplanationsArray.length) {
        return (
          <Loading loggedIn={this.props.loggedIn} loggedInUser={this.props.loggedInUser} />
        )
      } else {
        return (
          <div>
            <Header loggedIn={this.props.loggedIn} loggedInUser={this.props.loggedInUser}/>
            <AppContainer>
              <div className="concept-title-bar">
                <h1 className="font-lrg font-bold-med inline-block capitalize">{router.query.id}</h1>
                <p className="font-color-light-grey inline-block margin-left">originally asked by @bofirstdog</p>
              </div>
              <AddExplanationCard loggedInUser={this.props.loggedInUser} />
              <h1 className="margin-top-lrg font-lrg font-bold-med inline-block">All of the wacky and wonderful ways to explain a {router.query.id} </h1>
              <p className="font-color-light-grey">There are 114 explanations here. Some will work for you, some won’t.  Keep going until you find one that gives you that aha! moment.</p>
              <div className="margin-top-sml">
                <SwipableCardContainer conceptExplanationsArray={this.state.conceptExplanationsArray} loggedInUser={this.props.loggedInUser}/>
              </div>
            </AppContainer>
          </div>
        )
      }
    }
  }
}

export default withRouter(ConceptPage)
