import React from 'react'
import Card from './Card'
import CardSection from './CardSection'

class TopCreatorsOfWeekSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar5.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <h2>@iamjohnoliver</h2>
              </div>
              <div className="row">
                <p className="font-color-light-grey">124 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <h2>@barackobama</h2>
              </div>
              <div className="row">
                <p className="font-color-light-grey">121 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar2.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <h2>@hasanminhaj</h2>
              </div>
              <div className="row">
                <p className="font-color-light-grey">114 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar3.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <h2>@trevornoah</h2>
              </div>
              <div className="row">
                <p className="font-color-light-grey">102 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar4.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <h2>@stephencolbert</h2>
              </div>
              <div className="row">
                <p className="font-color-light-grey">84 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
      </Card>
    )
  }
}

export default TopCreatorsOfWeekSection
