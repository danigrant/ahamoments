import React from 'react'
import SwipableCard from './SwipableCard'
import Card from './Card'
import ExplanationCard from './ExplanationCard'
import { getConceptExplanations } from '../utils/firebase'
import { withRouter } from 'next/router'

class SwipableCardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      explanationCardDeck: this.props.conceptExplanationsArray,
      displayCardIndex: 0
    }
  }
  componentDidMount() {

  }
  handleSwipe = () => {
    this.setState({
      displayCardIndex: this.state.displayCardIndex + 1
    })
  }
  handleReplay = () => {
    this.setState({
      displayCardIndex: 0
    })
  }
  render() {
    let currentExplanation = this.state.explanationCardDeck[this.state.displayCardIndex]
    if (this.state.displayCardIndex == this.state.explanationCardDeck.length ) {
      // no more cards to display
      return (
        <Card>
          <p>No more cards to display.</p>
          <div onClick={this.handleReplay} className="button">Replay</div>
        </Card>
      )
    } else {
      return (
        <div>
          <ExplanationCard key={currentExplanation.explanationID} explanation={currentExplanation} loggedInUser={this.props.loggedInUser} />
          <div onClick={this.handleSwipe} className="button">Next Card</div>
        </div>
      )
    }
  }
}

export default SwipableCardContainer
