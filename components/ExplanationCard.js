import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import MultiAvatarUnit from './MultiAvatarUnit'
import AhaButton from './AhaButton'
import DontGetItButton from './DontGetItButton'
import ReactionButtonBar from './ReactionButtonBar'
import Link from 'next/link'
import { conceptToDisplayName, explanationTypeToDisplayType } from '../utils/utils'

class ExplanationCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="explanation-card-wrapper">
        <Card>
          <CardSection>
            <img className="avatar avatar-sml" src={this.props.explanation.authorAvatarUrl} />
            <p className="font-color-light-grey inline-block">
              <span className="link"><Link href={`/explainer/${this.props.explanation.authorUserID}`}><a>{this.props.explanation.authorDisplayName}</a></Link> </span>
              explains
              <span className="link"> <Link href={`/concept/${this.props.explanation.concept}`}><a>{conceptToDisplayName(this.props.explanation.concept)}</a></Link> </span>
              through
              <span className="link"> {explanationTypeToDisplayType(this.props.explanation.explanation.type)}</span>
            </p>
          </CardSection>
          <CardSection>
            <p>{this.props.explanation.explanation.introText}</p>
            <p>{this.props.explanation.explanation.mediaLink}</p>
            <p>{this.props.explanation.explanation.mediaConsumptionGuidance}</p>
          </CardSection>
          <CardSection>
            <AhaButton />
            <DontGetItButton />
            <ReactionButtonBar className="float-right" />
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default ExplanationCard
