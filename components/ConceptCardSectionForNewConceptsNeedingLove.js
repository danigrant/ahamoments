import CardSection from './CardSection'
import MultiAvatarUnit from './MultiAvatarUnit'
import Link from 'next/link'
import { conceptToDisplayName } from '../utils/utils'

const ConceptCardSectionForNewConceptsNeedingLove = props => {
  return (
    <div>
      <CardSection>
        <div className="columns-parent-div">
          <div className="column-70-p">
            <div className="row">
              <Link href={`/concept/${props.concept.conceptName}`}>
                <h2 className="link-no-color-change">{conceptToDisplayName(props.concept.conceptName)}</h2>
              </Link>
            </div>
            <div className="row">
            {
              props.concept.numContributors > 0 &&
              <MultiAvatarUnit avatars={props.concept.contributorAvatars}/>
            }
            {
              props.concept.numContributors == 0 &&
              <p className="font-color-light-grey">no one has contributed an explanation yet</p>
            }
            {
              props.concept.numContributors > 0 &&
              <p className="follows-multi-avatar-unit font-color-light-grey inline-block">{props.concept.numContributors > 4 ? `+ ${props.concept.numContributors} others have added explanations` : 'have added explanations'}</p>
            }
            </div>
          </div>
          <div className="column-30-p">
            <div className="action-button button background-purple rounded-border font-med font-bold-extra">Contribute</div>
          </div>
        </div>
      </CardSection>
    </div>
  )
}

export default ConceptCardSectionForNewConceptsNeedingLove
