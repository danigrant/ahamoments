import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import Link from 'next/link'

class TopConceptsOfWeekSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <CardSection>
          <div className="row">
            <Link href="/concept/derivative">
              <h2 className="link-no-color-change">Derivative</h2>
            </Link>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <Link href="/concept/limit">
              <h2 className="link-no-color-change">Limit</h2>
            </Link>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <Link href="/concept/integral">
              <h2 className="link-no-color-change">Integral</h2>
            </Link>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <Link href="/concept/differential-equation">
              <h2 className="link-no-color-change">Differential Equation</h2>
            </Link>
          </div>
          <div className="row">
            <p className="font-color-light-grey">200 explanations • 100 aha moments</p>
          </div>
        </CardSection>
        <CardSection>
          <div className="row">
            <Link href="/concept/logarithm">
              <h2 className="link-no-color-change">Logarithm</h2>
            </Link>
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
