import CardSection from './CardSection'
import Link from 'next/link'

const TopCreatorCardSection = props => {
  console.log(props)
  return (
    <div>
      <CardSection>
        <div className="columns-parent-div">
          <div className="column-20-p flex-horizontal-center">
            <img className="avatar avatar-sml-size-no-positioning" src={props.creator.avatarUrl} />
          </div>
          <div className="column-80-p">
            <div className="row">
              <Link href={`/explainer/${props.creator.userID}`}>
                <h2 className="link-no-color-change">{props.creator.displayName}</h2>
              </Link>
            </div>
            <div className="row">
              <p className="font-color-light-grey">{props.creator.explanationCount} explanations</p>
            </div>
          </div>
        </div>
      </CardSection>
    </div>
  )
}

export default TopCreatorCardSection
