import React from 'react'
import Card from './Card'
import CardSection from './CardSection'

class TopConceptsOfWeekSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <CardSection>
          <div className="row">
            <h2>Derivative</h2>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <h2>Limit</h2>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <h2>Integral</h2>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <h2>Differential Equation</h2>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <h2>Logarithm</h2>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
      </Card>
    )
  }
}

export default TopConceptsOfWeekSection
