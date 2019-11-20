import React from 'react'
import SwipableCard from './SwipableCard'
import Card from './Card'
import CardSection from './CardSection'
import ExplanationCard from './ExplanationCard'
import { getConceptExplanations } from '../utils/firebase'
import { withRouter } from 'next/router'
import update from 'immutability-helper';

class SwipableCardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      explanationCardDeck: this.props.conceptExplanationsArray,
      displayCardIndex: 0
    }
  }
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyPress);
  }
  componentDidUnount() {
    window.removeEventListener("keyup", this.handleKeyPress);
  }
  advanceCard = () => {
    this.setState({
      displayCardIndex: this.state.displayCardIndex + 1
    })
  }
  handleReplay = () => {
    this.setState({
      displayCardIndex: 0
    })
  }
  handleKeyPress = (e) => {
    // right 39, left 37, up 38, down 40
    if (e.keyCode == 39 || e.keyCode == 38) {
      this.setState({
        displayCardIndex: this.state.displayCardIndex + 1
      })
    } else if (e.keyCode == 37 || e.keyCode == 40) {
      this.setState({
        displayCardIndex: this.state.displayCardIndex - 1
      })
    }
  }
  render() {
    let currentExplanation = this.state.explanationCardDeck[this.state.displayCardIndex]
    if (this.state.displayCardIndex == this.state.explanationCardDeck.length ) {
      // no more cards to display
      return (
        <Card>
          <CardSection>
            <div onClick={this.handleReplay} className="button"><i className="material-icons">replay_rounded</i>Replay</div>
          </CardSection>
        </Card>
      )
    } else {
      return (
        <div onKeyDown={this.handleKeyPress}>
          <SwipableCard key={currentExplanation.explanationID} explanation={currentExplanation} advanceCard={this.advanceCard} loggedInUser={this.props.loggedInUser} />
        </div>
      )
    }
  }
}

export default SwipableCardContainer
