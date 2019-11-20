import React from 'react'
import ExplanationCard from './ExplanationCard'

class SwipableCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ExplanationCard key={e.explanationID} explanation={e} loggedInUser={this.props.loggedInUser} />
      </div>
    )
  }
}

export default SwipableCard
