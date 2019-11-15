import CardSection from './CardSection'
import Link from 'next/link'
import { conceptToDisplayName } from '../utils/utils'

const TopConceptCardSection = props => {
  return (
    <div>
      <CardSection>
        <div className="row">
          <Link href="/concept/derivative">
            <h2 className="link-no-color-change">{conceptToDisplayName(props.concept.conceptName)}</h2>
          </Link>
        </div>
        <div className="row">
          <p className="font-color-light-grey">{props.concept.explanationCount} explanations • {props.concept.ahaMomentCount} aha moments</p>
        </div>
      </CardSection>
    </div>
  )
}

export default TopConceptCardSection
