import React from 'react'
import ExplanationCard from './ExplanationCard'

class SwipableCard extends React.Component {
  constructor(props) {
    super(props)
  }
  handleGoToNextCard = () => {
    this.props.advanceCard()
  }
  render() {
    return (
      <div>
        <ExplanationCard key={this.props.explanationID} explanation={this.props.explanation} loggedInUser={this.props.loggedInUser} handleGoToNextCard={this.handleGoToNextCard} />
      </div>
    )
  }
}

export default SwipableCard
