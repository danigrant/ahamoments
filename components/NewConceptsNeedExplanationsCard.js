import Card from './Card'
import CardSection from './CardSection'
import MultiAvatarUnit from './MultiAvatarUnit'

const NewConceptsNeedExplanationsCard = props => {
  return (
    <Card>
      <CardSection>
        <p className="font-color-light-grey">Contribute wacky and wonderful explanations to these ideas.</p>
      </CardSection>
      <CardSection>
        <div className="columns-parent-div">
          <div className="column-70-p">
            <div className="row">
              <h2>Integrals</h2>
            </div>
            <div className="row">
              <p className="font-color-light-grey">no one has contributed an explanation yet</p>
            </div>
          </div>
          <div className="column-30-p">
            <div className="action-button button background-purple rounded-border font-med font-bold-extra">Contribute</div>
          </div>
        </div>
      </CardSection>
      <CardSection>
      <div className="columns-parent-div">
        <div className="column-70-p">
          <div className="row">
            <h2>Integrals</h2>
          </div>
          <div className="row">
            <MultiAvatarUnit />
            <p className="follows-multi-avatar-unit font-color-light-grey inline-block">+ 3 others have added explanations</p>
          </div>
        </div>
        <div className="column-30-p">
          <div className="action-button float-right button background-purple rounded-border font-med font-bold-extra">Contribute</div>
        </div>
      </div>
      </CardSection>
      <CardSection>
      <div className="columns-parent-div">
        <div className="column-70-p">
          <p className="font-color-light-grey">+ 23 other ideas</p>
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
