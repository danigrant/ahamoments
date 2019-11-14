import React from 'react'
import Header from '../../components/Header'
import AppContainer from '../../components/AppContainer'
import Card from '../../components/Card'
import CardSection from '../../components/CardSection'
import ExplanationCard from '../../components/ExplanationCard'
import { withRouter } from 'next/router'

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { router } = this.props
    return (
      <div>
        <Header loggedIn={this.props.loggedIn}/>
        <AppContainer>
          <h1 className="font-lrg font-bold-med inline-block">{router.query.id}</h1>
          <Card>
            <CardSection>
              <div className="columns-parent-div">
                <div className="column-50-p flex-center-contents-vertically flex-justify-flex-start">
                  <img className="avatar avatar-sml top-zero" src="/images/temp-avatar.jpg" />
                  <p className="font-bold-med font-med inline-block">{router.query.id}</p>
                </div>
                <div className="column-50-p flex-center-contents-vertically flex-justify-flex-end">
                  <p className="font-color-light-grey font-bold-med">15 explanations • 98 aha moments • ranked #115</p>
                </div>
              </div>
            </CardSection>
          </Card>
          <h1 className="margin-top-lrg font-lrg font-bold-med inline-block">Here are all the different ways {router.query.id} has explained things</h1>
          <p className="font-color-light-grey">There are 114 explanations here. Some will work for you, some won’t.  Keep going until you find one that gives you that aha! moment.</p>
          <div className="margin-top-sml">
            <ExplanationCard />
            <ExplanationCard />
            <ExplanationCard />
          </div>
        </AppContainer>
      </div>
    )
  }
}

export default withRouter(ProfilePage)
