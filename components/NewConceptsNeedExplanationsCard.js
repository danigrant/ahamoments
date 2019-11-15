import Card from './Card'
import CardSection from './CardSection'
import ConceptCardSectionForNewConceptsNeedingLove from './ConceptCardSectionForNewConceptsNeedingLove'

const NewConceptsNeedExplanationsCard = props => {
  return (
    <Card>
      <CardSection>
        <p className="font-color-light-grey">Contribute wacky and wonderful explanations to these ideas.</p>
      </CardSection>
      <ConceptCardSectionForNewConceptsNeedingLove concept={props.concepts[0]} />
      <ConceptCardSectionForNewConceptsNeedingLove concept={props.concepts[1]} />
      <CardSection>
      <div className="columns-parent-div">
        <div className="column-70-p">
          <p className="font-color-light-grey">{`+ ${props.totalConcepts} other ideas`}</p>
        </div>
        <div className="column-30-p">
          <div className="action-button float-right button background-grey light-border rounded-border font-med font-bold-extra">Expand</div>
        </div>
      </div>
      </CardSection>
    </Card>
  )
}

export default NewConceptsNeedExplanationsCard
